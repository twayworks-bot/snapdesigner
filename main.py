"""
Main Entrypoint Module for Design & Layout Studio (v5.0)
- Supports both Uvicorn and Gunicorn container startup commands:
  1) uvicorn main:app --host 0.0.0.0 --port 5000
  2) gunicorn --bind 0.0.0.0:5000 --workers 2 --log-level debug --access-logfile - --error-logfile - --capture-output main:app
"""

import uvicorn
from app import DATA_DIR, DEFAULT_PREFIX, PREFIX, app

__all__ = ["app", "PREFIX", "DEFAULT_PREFIX", "DATA_DIR"]

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=5000, reload=False)
