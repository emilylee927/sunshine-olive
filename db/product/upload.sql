INSERT INTO image
    (name, type, size, image_url)
VALUES
    ($1, $2, $3, $4)
RETURNING *;