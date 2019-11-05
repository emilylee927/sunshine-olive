INSERT INTO image
    (name, type, size)
VALUES
    ($1, $2, $3)
RETURNING *;