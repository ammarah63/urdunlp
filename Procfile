release: python manage.py migrate
release: python manage.py collectstatic --noinput
web: gunicorn NLPUrduProject.wsgi --log-file -
