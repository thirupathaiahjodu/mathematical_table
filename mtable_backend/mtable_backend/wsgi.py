"""
WSGI config for mtable_backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os
import sys

# Add your project path
path = '/home/thirupathaiah/mathematical_table/mtable_backend'
if path not in sys.path:
    sys.path.append(path)

# Set the settings module
os.environ['DJANGO_SETTINGS_MODULE'] = 'mtable_backend.settings'

# Get WSGI application
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

