CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    isAdmin BOOL NOT NULL,
    hash TEXT NOT NULL
);

CREATE TABLE product
(
    product_id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    price INT,
    img_url TEXT,
    category TEXT
);

/* product db migration */

ALTER TABLE product
DROP COLUMN img_url;

ALTER TABLE product
ADD COLUMN img_name TEXT,
ADD COLUMN img_type TEXT,
ADD COLUMN img_size INT;

ALTER TABLE product
DROP COLUMN img_name
,
DROP COLUMN img_type,
DROP COLUMN img_size;

CREATE TABLE image
(
    image_id SERIAL PRIMARY KEY,
    name TEXT,
    type TEXT,
    size INT
);

ALTER TABLE product
ADD COLUMN image_id INTEGER;

ALTER TABLE image
ADD COLUMN image_url INTEGER;

ALTER TABLE IMAGE
ALTER COLUMN image_url TYPE
TEXT;
