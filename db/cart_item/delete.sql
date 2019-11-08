DELETE FROM cart_item
WHERE cart_item_id = $1;

SELECT c.cart_item_id, c.user_id, p.*, i.image_url
FROM cart_item c
    INNER JOIN product p ON c.product_id = p.product_id
    INNER JOIN image i ON p.image_id = i.image_id
WHERE c.user_id = $2;