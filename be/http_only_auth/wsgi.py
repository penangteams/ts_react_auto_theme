import os,sys
import runpy

runpy.run_path("/var/www/ts_react_auto_theme/be/venv/bin/activate_this.py")
sys.path.append('/var/www/ts_react_auto_theme/be')
sys.path.append('/var/www/ts_react_auto_theme/be/http_only_auth')

from django.core.wsgi import get_wsgi_application

os.environ['HTTPS'] = "on"

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'http_only_auth.settings')
application = get_wsgi_application()

