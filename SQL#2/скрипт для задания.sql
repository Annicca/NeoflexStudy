 WITH AuthorPosts AS (
  SELECT
	a.id,
    a.first_name,
    a.last_name,
    COUNT(DISTINCT p.id) AS post_count
  FROM authors a
  JOIN posts p ON a.id = p.author_id
  JOIN post_tag pt ON p.id = pt.post_id
  GROUP BY a.id
), RankedAuthors AS (
  SELECT
    *,
    RANK() OVER (ORDER BY post_count DESC) AS author_rank
  FROM AuthorPosts
)
SELECT
  ra.first_name,
  ra.last_name,
  ra.post_count,
  p.title AS post_title
FROM RankedAuthors ra
JOIN posts p ON ra.id = p.author_id
WHERE ra.author_rank = 1;