  
INSERT INTO users (first_name, last_name, email, hash, isAdmin)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;