INSERT INTO product
    (name, description, price, category)
VALUES
    ($1, $2, $3, $4)
;

SELECT p.*, i.image_url
FROM product p
    LEFT JOIN image i ON p.image_id = i.image_id;