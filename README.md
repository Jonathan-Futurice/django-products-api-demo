# Demo project

Try for yourself how quickly you can
create a new project with API Bakery.
## Quickstart

1. Set up a Python virtual environment and install the required Python dependencies:

        pipenv install

2. Create `.env` configuration file based on `env.sample`:

        cp env.sample .env
        vim .env

3. Set up the database

    You'll need to create the database and set `DATABASE_URL` in
    the configuration file before you can run migrations and use the code.

    To use SQLite (supported out of the box), set the `DATABASE_URL` to
    the location of database file (it will be created on the first run),
    either relative to the project directory:

        DATABASE_URL=sqlite:///sqlite.db

    Or absolutely positioned in the file system:

        DATABASE_URL=sqlite:////full/path/to/sqlite.db

    (Note the three or four dashes in the URL, respectively).

4. Run migrations:

        python manage.py migrate
        python manage.py makemigrations

5. Run the server:

        python manage.py runserver

6. Visit the browsable API at http://localhost:8000/api/v1/

7. Access the Django admin at http://localhost:8000/admin/

## Running tests

    pipenv run python manage.py test


## Code formatting using black

To format the code automatically using `black`,
just run it in the project directory:

    black .

## Docker support

Build the docker image with:

        docker build -t demo-project .

The default command is to start the web server (gunicorn). Run the image
with `-P` docker option to expose the internal port and check the exposed
port with `docker ps`:

        docker run --env-file .env --P demo-project
        docker ps

Make sure you provide the correct path to the env file (this example assumes
it's located in the local directory).

To run a custom command using the image (for example, db migrations):

        docker run --env-file .env demo-project python manage.py migrate

To run a Django shell inside the container:

        docker run --env-file .env -t demo-project

Note that any changes inside the container will be lost. For that reason,
running `collectstatic` or using a SQLite database within a container will
have no effect. If you want to use SQLite with docker, mount a docker
volume and place the SQLite database inside it.

For more information on the docker build process, see the included `Dockerfile`.

## Heroku support

Heroku automatically provides PostgreSQL database for Python projects and
will set `DATABASE_URL` environment variable automatically to point to the
provisioned database. To use this database, add `psycopg2` to the list of
requirements in `requirements.txt` before pushing to Heroku.

Initialize Git repository for the project, if you haven't already done so:

        git init
        git add .
        git commit -m 'initial commit'

In Heroku dashboard, create a new app named `demo-project`.
Initialize Heroku remote in the repository:

        heroku git:remote -a demo-project

Set up environment variables in Heroku dashboard. At least `SECRET_KEY` must
be specified. Heroku will provide `DATABASE_URL` automatically.
See `env.sample` for more information.

Deploy the project:

        git push heroku master

After first deploy, make sure you enable the `web` dyno in Heroku dashboard
if it is not already enabled.
