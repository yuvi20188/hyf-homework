/* 1. Find out how many tasks are in the task table */
SELECT COUNT(id) FROM task;

/* 2. Find out how many tasks in the task table do not have a valid due date */
SELECT COUNT(id) FROM task WHERE due_date IS NULL;
-- 3. Find all the tasks that are marked as doneSELECT *
FROM task
WHERE status_id = 3;

-- 4. Find all the tasks that are not marked as done
SELECT *
FROM tas
WHERE status_id != 3
ORDER BY status_id;
-- 5. Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;
-- 6. Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;
-- 7.Get the title and due date of all tasks where the title or description contains database
 SELECT title, due_date
 FROM task
 WHERE title LIKE '%database%' OR description LIKE '%database%';
