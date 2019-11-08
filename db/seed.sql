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

ALTER TABLE image
ALTER COLUMN image_url TYPE
TEXT;

/* Shopping cart migration */
CREATE TABLE cart_item
(
    cart_item_id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
);

ALTER TABLE cart_item
DROP COLUMN product_id;

ALTER TABLE cart_item
ADD COLUMN product_id INTEGER NOT NULL REFERENCES product
(product_id) ON
DELETE CASCADE;