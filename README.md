# SvelteKit Dashboard

## Setup

```bash
pnpm install
```

## Developing

1. Start a development database:

```bash
pnpm run db:dev:up
```

To stop the database:

```bash
pnpm run db:dev:down
```

2. Start a development server:

```bash
pnpm run dev
```

## Useful `psql` commands:


## 4. Just in case: `psql`

To connect to a PostgreSQL database using the `psql` command-line client, you'll need the following information:

1. Hostname or IP address: The address where the PostgreSQL server is running.
2. Port: The port on which PostgreSQL is listening. The default is usually 5432.
3. Database name: The name of the database you want to connect to.
4. Username: The username used to authenticate to the database.
5. Password: The password for the specified username.

```bash
psql -h hostname -p port -d database -U username
```

or you can use the connection string

```bash
psql postgresql://username:password@dbmaster:5433/mydb?sslmode=require
```

Connect to a Database: As mentioned earlier, you can connect to a database using:

1. List Databases: To list all databases, you can use:

```bash
\l
```

2. Connect to a Specific Database: You can connect to a specific database after starting psql using:

```bash
\c database_name
```

3. List Tables: To list all tables in the current database, use:

```bash
\dt
```

4. Describe Table Structure: To describe the structure of a specific table, use:

```bash
\d table_name
```

5. Execute SQL Queries: You can directly execute SQL queries within psql. For example:

```sql
SELECT * FROM table_name;
```

6. Quit psql: To exit the psql command-line client, you can use:

```bash
\q
```

7. Help: For a list of all available commands and their descriptions, you can use:

```bash
\?
```

8. Search Command History: You can search your command history using:

```bash
\s
```

9. Toggle Expanded Display: To toggle the expanded display, which shows rows vertically, use:

```bash
\x
```