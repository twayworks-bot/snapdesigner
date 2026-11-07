# ==============================================================================
# Design & Layout Studio (v5.0 IA) — Production Dockerfile
# - Exposed Port: 5000
# - Base URL Prefix: DEFAULT_PREFIX (default: /templates)
# - Persistent Database Volume Path: DATABASE_PATH / DATA_DIR (default: /app/data)
# ==============================================================================
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Python runtime optimization & UTF-8 environment settings
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONIOENCODING=utf-8

# Install Python dependencies first for Docker layer caching
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r /app/requirements.txt

# Copy project source files
COPY app.py main.py gunicorn.conf.py README.md /app/
COPY static /app/static
COPY data /app/data

# Keep a clean copy of initial seed data so empty persistent volume mounts auto-initialize
RUN cp -r /app/data /app/seed_data

# Persistent Volume PATH environment variable for Database/JSON files
ENV DATABASE_PATH=/app/data \
    DATA_DIR=/app/data

# Default Base URL Prefix environment variable
ENV DEFAULT_PREFIX=/templates

# Declare persistent volume for database/JSON files
VOLUME ["/app/data"]

# Expose application port 5000
EXPOSE 5000

# 컨테이너 헬스체크 정의 (요청한 사양에 맞춘 Prefix 경로 연동)
HEALTHCHECK --interval=30s --timeout=10s --retries=3 --start-period=5s \
    CMD python -c "import os, requests; prefix = os.getenv('DEFAULT_PREFIX', ''); requests.get(f'http://localhost:5000{prefix}/api/status')"

# 시작 CMD 옵션 1) Gunicorn 운영서버로 기동 (gunicorn.conf.py를 통해 UvicornWorker 자동 연동)
# CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "2", "--log-level", "debug", "--access-logfile", "-", "--error-logfile", "-", "--capture-output", "main:app"]

# 시작 CMD 옵션 2) Run the FastAPI server using Uvicorn on port 5000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]
