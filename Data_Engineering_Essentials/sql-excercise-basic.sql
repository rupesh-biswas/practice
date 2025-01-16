SELECT * FROM courses;

-- * Get all the details of the courses which are in `inactive` or `draft` state.
SELECT * FROM courses WHERE course_status IN ('inactive', 'draft');

-- * Get all the details of the courses which are related to `Python` or `Scala`.
SELECT * FROM courses 
WHERE LOWER(course_name) LIKE '%python%'
	OR LOWER(course_name) LIKE '%scala%';


-- * Get count of courses by `course_status`. The output should contain `course_status` and `course_count`.
SELECT
	course_status,
	COUNT(DISTINCT course_id) course_count
FROM courses
GROUP BY 1;

-- * Get count of `published` courses by `course_author`. The output should contain `course_author` and `course_count`.
SELECT 
	course_author,
	COUNT(DISTINCT course_id) course_count
FROM courses
WHERE LOWER(course_status) = 'published'
GROUP BY 1;

-- * Get all the details of `Python` or `Scala` related courses in `draft` status.
SELECT * FROM courses 
WHERE (LOWER(course_name) LIKE '%python%' OR LOWER(course_name) LIKE '%scala%')
AND LOWER(course_status) = 'draft';
	
-- * Get the author and count where the author have more than **one published** course. 
-- The output should contain `course_author` and `course_count`.
SELECT *
FROM (
SELECT 
	course_author,
	COUNT(DISTINCT course_id) course_count
FROM courses
WHERE LOWER(course_status) = 'published'
GROUP BY 1
) x
WHERE x.course_count > 1;


SELECT 
	course_author,
	COUNT(DISTINCT course_id) course_count
FROM courses
WHERE LOWER(course_status) = 'published'
GROUP BY 1
HAVING COUNT(DISTINCT course_id) > 1;

