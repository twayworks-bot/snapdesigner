"""
Gunicorn Configuration for FastAPI ASGI Server (main:app)
Automatically sets UvicornWorker so `gunicorn ... main:app` works seamlessly with FastAPI.
"""

bind = "0.0.0.0:5000"
workers = 2
worker_class = "uvicorn.workers.UvicornWorker"
loglevel = "debug"
accesslog = "-"
errorlog = "-"
capture_output = True
timeout = 120
