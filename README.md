# Demo project

Try for yourself how quickly you can
create a new project with API Bakery.
## Quickstart

1. Set up a Python virtual environment and install the required Python dependencies:

        pip install -r requirements.txt

2. Create `.env` configuration file based on `env.sample`:

        cp env.sample .env

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

5. Seed the database:
   
       python manage.py createdata

6. Run the server:

        python manage.py runserver

7. Visit the browsable API at http://localhost:8000/api/v1/

8. Access the Django admin at http://localhost:8000/admin/

9. Run the frontend
        
       cd frontend
       npm install
       npm start


## Running tests

    python manage.py test


## Code formatting using black

To format the code automatically using `black`,
just run it in the project directory:

    black .

