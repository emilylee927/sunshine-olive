CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    isAdmin BOOL NOT NULL,
    hash TEXT NOT NULL
);