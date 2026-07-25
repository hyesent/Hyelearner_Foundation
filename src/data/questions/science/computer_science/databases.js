export default [
  // ============================================
  // EASY (20 questions) - IDs: cs_dtb_001 to 020
  // ============================================

  {
    id: "cs_dtb_001",
    type: "multiple_choice",
    question: "A database is an organized collection of:",
    options: [
      "Files and folders only",
      "Structured information or data, typically stored electronically",
      "Computer hardware",
      "Operating systems"
    ],
    answer: "Structured information or data, typically stored electronically",
    explanation: "Databases allow efficient storage, retrieval, modification, and deletion of data.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_002",
    type: "multiple_choice",
    question: "The 'DBMS' stands for:",
    options: [
      "Data Binary Management System",
      "Database Management System",
      "Digital Business Management Software",
      "Distributed Backup Management System"
    ],
    answer: "Database Management System",
    explanation: "A DBMS is software that interacts with users, applications, and the database itself to capture and analyze data.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_003",
    type: "multiple_choice",
    question: "Which of the following is an example of a relational database management system (RDBMS)?",
    options: ["MongoDB", "MySQL", "Redis", "Cassandra"],
    answer: "MySQL",
    explanation: "MySQL is a popular open-source RDBMS that uses SQL for querying data.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_004",
    type: "multiple_choice",
    question: "In a relational database, data is stored in:",
    options: ["Files", "Tables with rows and columns", "Graphs", "Text documents"],
    answer: "Tables with rows and columns",
    explanation: "Tables (relations) consist of rows (records/tuples) and columns (fields/attributes).",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_005",
    type: "multiple_choice",
    question: "A row in a database table is also called a:",
    options: ["Field", "Record (or tuple)", "Column", "Attribute"],
    answer: "Record (or tuple)",
    explanation: "Each row represents a single data item or entity instance.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_006",
    type: "multiple_choice",
    question: "A column in a database table is also called a:",
    options: ["Record", "Tuple", "Field (or attribute)", "Index"],
    answer: "Field (or attribute)",
    explanation: "Columns define the type of data stored (e.g., Name, Age).",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_007",
    type: "multiple_choice",
    question: "The 'primary key' in a table is used to:",
    options: [
      "Store large text",
      "Uniquely identify each record in the table",
      "Link to external websites",
      "Encrypt data"
    ],
    answer: "Uniquely identify each record in the table",
    explanation: "A primary key ensures no duplicate rows; it is a unique identifier.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_008",
    type: "multiple_choice",
    question: "The 'SQL' stands for:",
    options: [
      "Sequential Query Language",
      "Structured Query Language",
      "Simple Question Language",
      "Standard Question Logic"
    ],
    answer: "Structured Query Language",
    explanation: "SQL is the standard language for managing and manipulating relational databases.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_009",
    type: "multiple_choice",
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    answer: "SELECT",
    explanation: "The SELECT statement is used to query and fetch data from one or more tables.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_010",
    type: "multiple_choice",
    question: "Which SQL command is used to add new records to a table?",
    options: ["GET", "ADD", "INSERT", "CREATE"],
    answer: "INSERT",
    explanation: "The INSERT INTO statement adds one or more rows to a table.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_011",
    type: "multiple_choice",
    question: "The 'WHERE' clause in SQL is used to:",
    options: [
      "Sort the results",
      "Filter records based on a condition",
      "Group records",
      "Join tables"
    ],
    answer: "Filter records based on a condition",
    explanation: "WHERE extracts only those records that fulfill a specified condition.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_012",
    type: "multiple_choice",
    question: "The 'NULL' value in a database means:",
    options: [
      "Zero",
      "An empty string",
      "Missing or unknown data",
      "The end of a table"
    ],
    answer: "Missing or unknown data",
    explanation: "NULL indicates that a data value does not exist in the database.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_013",
    type: "multiple_choice",
    question: "The command to remove a table from a database permanently is:",
    options: ["REMOVE TABLE", "DELETE TABLE", "DROP TABLE", "ERASE TABLE"],
    answer: "DROP TABLE",
    explanation: "DROP TABLE deletes the entire table structure and its data.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_014",
    type: "multiple_choice",
    question: "The 'JOIN' clause in SQL is used to:",
    options: [
      "Filter records",
      "Combine rows from two or more tables based on a related column",
      "Sort records",
      "Add a new column"
    ],
    answer: "Combine rows from two or more tables based on a related column",
    explanation: "JOINs are fundamental to relational databases, enabling queries across multiple tables.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_015",
    type: "multiple_choice",
    question: "The 'database schema' refers to:",
    options: [
      "The actual data in the database",
      "The structure or design of the database (tables, fields, relationships)",
      "A backup of the database",
      "The user interface"
    ],
    answer: "The structure or design of the database (tables, fields, relationships)",
    explanation: "Schema defines the organization of data and constraints.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_016",
    type: "multiple_choice",
    question: "The command to modify existing records in a table is:",
    options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
    answer: "UPDATE",
    explanation: "UPDATE table_name SET column = value WHERE condition; modifies existing data.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_017",
    type: "multiple_choice",
    question: "The 'ORDER BY' clause in SQL is used to:",
    options: [
      "Filter records",
      "Sort the result set in ascending or descending order",
      "Group records",
      "Delete records"
    ],
    answer: "Sort the result set in ascending or descending order",
    explanation: "ORDER BY column ASC or DESC arranges the output.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_018",
    type: "multiple_choice",
    question: "The 'DELETE' command in SQL is used to:",
    options: [
      "Remove a table",
      "Remove rows from a table",
      "Remove a database",
      "Remove a column"
    ],
    answer: "Remove rows from a table",
    explanation: "DELETE FROM table_name WHERE condition; removes specific records.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_019",
    type: "multiple_choice",
    question: "The 'foreign key' in a table is used to:",
    options: [
      "Uniquely identify records",
      "Link two tables together by referencing the primary key of another table",
      "Store large objects",
      "Sort data"
    ],
    answer: "Link two tables together by referencing the primary key of another table",
    explanation: "Foreign keys enforce referential integrity between tables.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_020",
    type: "multiple_choice",
    question: "The 'NoSQL' databases are:",
    options: [
      "Databases that do not support SQL",
      "Non-relational databases designed for unstructured or semi-structured data",
      "Only graph databases",
      "An older version of SQL"
    ],
    answer: "Non-relational databases designed for unstructured or semi-structured data",
    explanation: "NoSQL databases like MongoDB store data in documents, key-value pairs, or graphs.",
    difficulty: "easy",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },

  // ============================================
  // MEDIUM (40 questions) - IDs: cs_dtb_021 to 060
  // ============================================

  {
    id: "cs_dtb_021",
    type: "multiple_choice",
    question: "The 'SELECT DISTINCT' statement is used to:",
    options: [
      "Select all columns",
      "Return only unique (different) values",
      "Delete duplicates",
      "Sort results"
    ],
    answer: "Return only unique (different) values",
    explanation: "DISTINCT eliminates duplicate rows from the result set.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_022",
    type: "multiple_choice",
    question: "Which SQL function returns the number of rows matching a query?",
    options: ["SUM()", "AVG()", "COUNT()", "MAX()"],
    answer: "COUNT()",
    explanation: "COUNT(*) or COUNT(column) returns the number of rows.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_023",
    type: "multiple_choice",
    question: "The 'GROUP BY' clause is used to:",
    options: [
      "Filter groups",
      "Group rows that have the same values in specified columns into summary rows",
      "Join tables",
      "Sort data"
    ],
    answer: "Group rows that have the same values in specified columns into summary rows",
    explanation: "Used with aggregate functions (COUNT, SUM, AVG) to group the result set.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_024",
    type: "multiple_choice",
    question: "The 'HAVING' clause in SQL is used to:",
    options: [
      "Filter rows before grouping",
      "Filter groups after the GROUP BY clause",
      "Sort data",
      "Join tables"
    ],
    answer: "Filter groups after the GROUP BY clause",
    explanation: "HAVING is like WHERE but for aggregated data.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_025",
    type: "multiple_choice",
    question: "The 'INNER JOIN' returns records that:",
    options: [
      "Have matching values in both tables",
      "Only in the left table",
      "Only in the right table",
      "All records from both tables"
    ],
    answer: "Have matching values in both tables",
    explanation: "INNER JOIN selects rows with matching keys in both joined tables.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_026",
    type: "multiple_choice",
    question: "The 'LEFT JOIN' returns:",
    options: [
      "Only matching rows",
      "All rows from the left table, and matched rows from the right table (NULL if no match)",
      "All rows from the right table",
      "A cross product"
    ],
    answer: "All rows from the left table, and matched rows from the right table (NULL if no match)",
    explanation: "LEFT JOIN preserves all records from the left table.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_027",
    type: "multiple_choice",
    question: "The 'FULL OUTER JOIN' returns:",
    options: [
      "Only matching rows",
      "All rows from both tables, with NULLs where there are no matches",
      "Only left table rows",
      "Only right table rows"
    ],
    answer: "All rows from both tables, with NULLs where there are no matches",
    explanation: "FULL JOIN combines the results of LEFT and RIGHT joins.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_028",
    type: "multiple_choice",
    question: "An 'index' in a database is used to:",
    options: [
      "Slow down queries",
      "Speed up data retrieval operations",
      "Encrypt data",
      "Back up data"
    ],
    answer: "Speed up data retrieval operations",
    explanation: "Indexes provide a fast lookup mechanism, similar to a book index.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_029",
    type: "multiple_choice",
    question: "The 'normalization' in databases is the process of:",
    options: [
      "Adding redundant data",
      "Organizing data to reduce redundancy and improve data integrity",
      "Deleting all records",
      "Backing up data"
    ],
    answer: "Organizing data to reduce redundancy and improve data integrity",
    explanation: "Normalization involves dividing tables and defining relationships according to normal forms.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_030",
    type: "multiple_choice",
    question: "The 'First Normal Form' (1NF) requires that:",
    options: [
      "There are no duplicate rows and each column contains atomic (indivisible) values",
      "All non-key attributes depend on the whole primary key",
      "There are no transitive dependencies",
      "Tables are joined"
    ],
    answer: "There are no duplicate rows and each column contains atomic (indivisible) values",
    explanation: "1NF eliminates repeating groups by ensuring each field contains only one value.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_031",
    type: "multiple_choice",
    question: "The 'Second Normal Form' (2NF) builds on 1NF by requiring:",
    options: [
      "Atomic values only",
      "All non-key attributes depend on the whole primary key (no partial dependency)",
      "No transitive dependencies",
      "All tables are linked"
    ],
    answer: "All non-key attributes depend on the whole primary key (no partial dependency)",
    explanation: "2NF applies when there is a composite primary key; every non-key column must depend on the entire key.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_032",
    type: "multiple_choice",
    question: "The 'Third Normal Form' (3NF) requires:",
    options: [
      "All tables are linked",
      "No transitive dependencies (non-key attributes do not depend on other non-key attributes)",
      "Only one table exists",
      "All data is encrypted"
    ],
    answer: "No transitive dependencies (non-key attributes do not depend on other non-key attributes)",
    explanation: "3NF removes columns that are not dependent on the primary key.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_033",
    type: "multiple_choice",
    question: "The 'ACID' properties in database transactions stand for:",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Clarity, Integrity, Data",
      "Access, Control, Input, Delete",
      "Asynchronous, Concurrent, Integrated, Distributed"
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation: "ACID properties ensure reliable processing of database transactions.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_034",
    type: "multiple_choice",
    question: "The 'Atomicity' in ACID means that a transaction:",
    options: [
      "Must complete partially",
      "Is treated as a single, indivisible unit; either all operations succeed or none do",
      "Can be undone by any user",
      "Depends on time"
    ],
    answer: "Is treated as a single, indivisible unit; either all operations succeed or none do",
    explanation: "Atomicity guarantees that a transaction is 'all or nothing'.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_035",
    type: "multiple_choice",
    question: "The 'Consistency' in ACID ensures that:",
    options: [
      "All data is deleted",
      "A transaction brings the database from one valid state to another",
      "Users are isolated",
      "Data is durable"
    ],
    answer: "A transaction brings the database from one valid state to another",
    explanation: "Consistency maintains all predefined rules and constraints.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_036",
    type: "multiple_choice",
    question: "The 'Isolation' property ensures that:",
    options: [
      "Transactions are executed one after another",
      "Concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially",
      "All users see the same data at all times",
      "Data is durable"
    ],
    answer: "Concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially",
    explanation: "Isolation prevents interference between concurrent transactions.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_037",
    type: "multiple_choice",
    question: "The 'Durability' property guarantees that:",
    options: [
      "Data is encrypted",
      "Once a transaction has been committed, it will remain so even in the event of a system failure",
      "Data can be rolled back",
      "Transactions are fast"
    ],
    answer: "Once a transaction has been committed, it will remain so even in the event of a system failure",
    explanation: "Durability is often ensured by write-ahead logging and backups.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_038",
    type: "multiple_choice",
    question: "The 'CREATE TABLE' statement is used to:",
    options: [
      "Add data to a table",
      "Create a new table in the database",
      "Delete a table",
      "Update a table structure"
    ],
    answer: "Create a new table in the database",
    explanation: "DDL (Data Definition Language) command to define a new table structure.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_039",
    type: "multiple_choice",
    question: "The 'ALTER TABLE' statement is used to:",
    options: [
      "Query data",
      "Modify the structure of an existing table (add, delete, or modify columns)",
      "Insert new rows",
      "Remove duplicate rows"
    ],
    answer: "Modify the structure of an existing table (add, delete, or modify columns)",
    explanation: "ALTER is a DDL command for schema changes.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_040",
    type: "multiple_choice",
    question: "The 'TRUNCATE TABLE' command:",
    options: [
      "Deletes the table structure",
      "Removes all rows from a table quickly and resets any auto-increment counters, without logging individual row deletions",
      "Deletes specific rows based on a condition",
      "Backs up the table"
    ],
    answer: "Removes all rows from a table quickly and resets any auto-increment counters, without logging individual row deletions",
    explanation: "TRUNCATE is a DDL command that is faster than DELETE for removing all rows.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_041",
    type: "multiple_choice",
    question: "The 'ER diagram' (Entity-Relationship diagram) is used to:",
    options: [
      "Write SQL queries",
      "Model the data and relationships in a database visually",
      "Execute transactions",
      "Measure performance"
    ],
    answer: "Model the data and relationships in a database visually",
    explanation: "ER diagrams show entities (tables) and the relationships between them.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_042",
    type: "multiple_choice",
    question: "The 'cardinality' in an ER diagram refers to:",
    options: [
      "The number of columns",
      "The numerical relationship between entities (e.g., one-to-one, one-to-many, many-to-many)",
      "The size of the database",
      "The data type"
    ],
    answer: "The numerical relationship between entities (e.g., one-to-one, one-to-many, many-to-many)",
    explanation: "Cardinality defines how many instances of an entity relate to instances of another entity.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_043",
    type: "multiple_choice",
    question: "The 'view' in a database is:",
    options: [
      "A physical table",
      "A virtual table based on the result set of a SQL query",
      "An index",
      "A stored procedure"
    ],
    answer: "A virtual table based on the result set of a SQL query",
    explanation: "Views simplify complex queries, enhance security, and present data in a specific format.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_044",
    type: "multiple_choice",
    question: "A 'stored procedure' is:",
    options: [
      "A backup of the database",
      "A set of SQL statements saved and executed on the database server",
      "A type of index",
      "A user permission"
    ],
    answer: "A set of SQL statements saved and executed on the database server",
    explanation: "Stored procedures encapsulate logic and can accept parameters.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_045",
    type: "multiple_choice",
    question: "The 'trigger' in a database is:",
    options: [
      "A type of backup",
      "Code that automatically executes in response to certain events on a table (INSERT, UPDATE, DELETE)",
      "A query optimization tool",
      "A user interface element"
    ],
    answer: "Code that automatically executes in response to certain events on a table (INSERT, UPDATE, DELETE)",
    explanation: "Triggers enforce business rules and maintain audit trails.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_046",
    type: "multiple_choice",
    question: "The 'data redundancy' refers to:",
    options: [
      "Secure data",
      "The duplication of data in a database",
      "A backup copy",
      "Encrypted data"
    ],
    answer: "The duplication of data in a database",
    explanation: "Redundancy wastes storage and can lead to inconsistencies.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_047",
    type: "multiple_choice",
    question: "The 'data integrity' ensures:",
    options: [
      "Data is stored in multiple places",
      "Accuracy and consistency of data over its lifecycle",
      "Data is encrypted",
      "Data is backed up"
    ],
    answer: "Accuracy and consistency of data over its lifecycle",
    explanation: "Integrity constraints (e.g., primary key, foreign key, check) maintain data quality.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_048",
    type: "multiple_choice",
    question: "The 'backup' of a database is:",
    options: [
      "A report",
      "A copy of the database that can be used to restore the original after a data loss event",
      "An index",
      "A log file"
    ],
    answer: "A copy of the database that can be used to restore the original after a data loss event",
    explanation: "Regular backups are critical for disaster recovery.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_049",
    type: "multiple_choice",
    question: "The 'replication' in databases involves:",
    options: [
      "Deleting data",
      "Copying and maintaining database objects in multiple locations to improve availability and reliability",
      "Normalizing tables",
      "Writing logs"
    ],
    answer: "Copying and maintaining database objects in multiple locations to improve availability and reliability",
    explanation: "Replication provides fault tolerance and load balancing.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_050",
    type: "multiple_choice",
    question: "The 'sharding' is a database architecture pattern that:",
    options: [
      "Combines all data into one server",
      "Splits a large database into smaller, faster, more easily managed parts called shards",
      "Encrypts all data",
      "Creates indexes"
    ],
    answer: "Splits a large database into smaller, faster, more easily managed parts called shards",
    explanation: "Sharding horizontally partitions data across multiple servers to improve scalability.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_051",
    type: "multiple_choice",
    question: "The 'wildcard' character in SQL used with LIKE is:",
    options: ["*", "%", "&", "#"],
    answer: "%",
    explanation: "% represents zero or more characters; _ represents a single character.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_052",
    type: "multiple_choice",
    question: "The 'BETWEEN' operator in SQL selects values:",
    options: [
      "Exactly equal to two values",
      "Within a given range (inclusive)",
      "Outside a range",
      "Greater than a value"
    ],
    answer: "Within a given range (inclusive)",
    explanation: "BETWEEN a AND b includes the endpoints a and b.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_053",
    type: "multiple_choice",
    question: "The 'IN' operator in SQL is used to:",
    options: [
      "Check if a value matches any value in a list or subquery",
      "Find NULL values",
      "Sort data",
      "Join tables"
    ],
    answer: "Check if a value matches any value in a list or subquery",
    explanation: "WHERE color IN ('red', 'blue') is equivalent to multiple OR conditions.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_054",
    type: "multiple_choice",
    question: "The 'UNION' operator in SQL combines the result sets of two or more SELECT statements and:",
    options: [
      "Keeps all duplicates",
      "Removes duplicate rows by default",
      "Only shows matching rows",
      "Sorts the data"
    ],
    answer: "Removes duplicate rows by default",
    explanation: "UNION combines results and eliminates duplicates; UNION ALL keeps duplicates.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_055",
    type: "multiple_choice",
    question: "The 'PRIMARY KEY' constraint:",
    options: [
      "Allows NULL values",
      "Uniquely identifies each record and cannot contain NULL values",
      "Links to another table",
      "Is not required in a table"
    ],
    answer: "Uniquely identifies each record and cannot contain NULL values",
    explanation: "A primary key must be unique and not null; a table can have only one primary key.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_056",
    type: "multiple_choice",
    question: "The 'FOREIGN KEY' constraint:",
    options: [
      "Enforces that a column cannot be empty",
      "Ensures referential integrity by linking a column to the primary key of another table",
      "Makes a column unique",
      "Defines a default value"
    ],
    answer: "Ensures referential integrity by linking a column to the primary key of another table",
    explanation: "Foreign keys prevent actions that would destroy links between tables.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_057",
    type: "multiple_choice",
    question: "The 'CHECK' constraint is used to:",
    options: [
      "Ensure that all values in a column satisfy a specific condition",
      "Create an index",
      "Link tables",
      "Add a primary key"
    ],
    answer: "Ensure that all values in a column satisfy a specific condition",
    explanation: "CHECK limits the value range that can be placed in a column (e.g., age >= 0).",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_058",
    type: "multiple_choice",
    question: "The 'DEFAULT' constraint provides:",
    options: [
      "A unique value for each row",
      "A default value for a column when no value is specified",
      "A reference to another table",
      "An index"
    ],
    answer: "A default value for a column when no value is specified",
    explanation: "DEFAULT helps maintain data consistency when explicit values are not provided.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_059",
    type: "multiple_choice",
    question: "The 'ROLLBACK' command is used to:",
    options: [
      "Save changes permanently",
      "Undo transactions that have not been committed",
      "Create a new table",
      "Add an index"
    ],
    answer: "Undo transactions that have not been committed",
    explanation: "ROLLBACK reverts the database to the state before the current transaction started.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_060",
    type: "multiple_choice",
    question: "The 'COMMIT' command makes:",
    options: [
      "A temporary save",
      "All changes in a transaction permanent",
      "A backup",
      "A log entry"
    ],
    answer: "All changes in a transaction permanent",
    explanation: "COMMIT ends the current transaction and makes all changes visible to other users.",
    difficulty: "medium",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },

  // ============================================
  // HARD (40 questions) - IDs: cs_dtb_061 to 100
  // ============================================

  {
    id: "cs_dtb_061",
    type: "multiple_choice",
    question: "The 'Boyce-Codd Normal Form' (BCNF) is a stricter version of:",
    options: ["1NF", "2NF", "3NF", "4NF"],
    answer: "3NF",
    explanation: "BCNF addresses anomalies not covered by 3NF, especially when there are multiple candidate keys.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_062",
    type: "multiple_choice",
    question: "The 'denormalization' in a database is intentionally:",
    options: [
      "Removing all redundancy",
      "Introducing redundancy to improve read performance at the cost of write performance and complexity",
      "Normalizing further",
      "Deleting data"
    ],
    answer: "Introducing redundancy to improve read performance at the cost of write performance and complexity",
    explanation: "Denormalization is used in data warehousing and OLAP systems to speed up queries.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_063",
    type: "multiple_choice",
    question: "The 'OLTP' (Online Transaction Processing) systems are optimized for:",
    options: [
      "Complex analytical queries",
      "Fast, high-volume transactional operations (INSERT, UPDATE, DELETE)",
      "Long-term data storage",
      "Backup and recovery"
    ],
    answer: "Fast, high-volume transactional operations (INSERT, UPDATE, DELETE)",
    explanation: "OLTP is used for day-to-day operations like order entry, banking transactions.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_064",
    type: "multiple_choice",
    question: "The 'OLAP' (Online Analytical Processing) is used for:",
    options: [
      "Managing transactions",
      "Complex data analysis and business intelligence queries",
      "Storing files",
      "Network management"
    ],
    answer: "Complex data analysis and business intelligence queries",
    explanation: "OLAP cubes and data warehouses facilitate multi-dimensional analysis.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_065",
    type: "multiple_choice",
    question: "The 'data warehouse' is a system used for:",
    options: [
      "Real-time transaction processing",
      "Reporting and data analysis, integrating data from multiple sources",
      "Storing only current data",
      "Managing user permissions"
    ],
    answer: "Reporting and data analysis, integrating data from multiple sources",
    explanation: "Data warehouses store historical data and are optimized for read-heavy queries.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_066",
    type: "multiple_choice",
    question: "The 'ETL' process stands for:",
    options: [
      "Edit, Test, Load",
      "Extract, Transform, Load",
      "Execute, Transfer, Log",
      "Encrypt, Transmit, Link"
    ],
    answer: "Extract, Transform, Load",
    explanation: "ETL is the process of extracting data from sources, transforming it, and loading it into a data warehouse.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_067",
    type: "multiple_choice",
    question: "The 'database transaction isolation level' that prevents dirty reads, non-repeatable reads, and phantom reads is:",
    options: [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable"
    ],
    answer: "Serializable",
    explanation: "Serializable is the highest isolation level, ensuring complete isolation.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_068",
    type: "multiple_choice",
    question: "The 'dirty read' occurs when:",
    options: [
      "Data is corrupted on disk",
      "A transaction reads data written by another concurrent uncommitted transaction",
      "Data is deleted",
      "A backup fails"
    ],
    answer: "A transaction reads data written by another concurrent uncommitted transaction",
    explanation: "Dirty reads can cause inconsistencies if the other transaction rolls back.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_069",
    type: "multiple_choice",
    question: "The 'deadlock' in a database occurs when:",
    options: [
      "A query runs too fast",
      "Two or more transactions are waiting for each other to release locks, blocking all progress",
      "The system shuts down",
      "Data is backed up"
    ],
    answer: "Two or more transactions are waiting for each other to release locks, blocking all progress",
    explanation: "Databases detect deadlocks and usually abort one of the transactions.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_070",
    type: "multiple_choice",
    question: "The 'two-phase locking' (2PL) protocol ensures:",
    options: [
      "Faster query execution",
      "Serializability of transactions by dividing locking into a growing phase and a shrinking phase",
      "Automatic backups",
      "Index optimization"
    ],
    answer: "Serializability of transactions by dividing locking into a growing phase and a shrinking phase",
    explanation: "Strict 2PL prevents transactions from acquiring new locks after releasing any lock.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_071",
    type: "multiple_choice",
    question: "The 'clustered index' in a database:",
    options: [
      "Stores data in a separate structure",
      "Determines the physical order of data in a table; a table can have only one clustered index",
      "Is only for primary keys",
      "Doesn't affect performance"
    ],
    answer: "Determines the physical order of data in a table; a table can have only one clustered index",
    explanation: "Clustered indexes reorder the way records are physically stored.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_072",
    type: "multiple_choice",
    question: "A 'non-clustered index':",
    options: [
      "Changes the physical order of the table",
      "Contains a pointer to the data row; a table can have multiple non-clustered indexes",
      "Is the same as a primary key",
      "Cannot be used on foreign keys"
    ],
    answer: "Contains a pointer to the data row; a table can have multiple non-clustered indexes",
    explanation: "Non-clustered indexes are separate structures from the data rows; they speed up queries without affecting physical order.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_073",
    type: "multiple_choice",
    question: "The 'B-tree' index is commonly used because it:",
    options: [
      "Is the simplest index",
      "Maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time",
      "Works only for primary keys",
      "Is stored in RAM only"
    ],
    answer: "Maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time",
    explanation: "B-trees are balanced tree data structures ideal for disk-based storage.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_074",
    type: "multiple_choice",
    question: "The 'hash index' is efficient for:",
    options: [
      "Range queries",
      "Equality comparisons (e.g., WHERE id = 123)",
      "LIKE queries",
      "Sorting"
    ],
    answer: "Equality comparisons (e.g., WHERE id = 123)",
    explanation: "Hash indexes use a hash function for exact matches but are not suitable for range scans.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_075",
    type: "multiple_choice",
    question: "The 'query execution plan' shows:",
    options: [
      "The SQL syntax",
      "How the database engine intends to execute a query, including index usage and join methods",
      "The table schema",
      "User permissions"
    ],
    answer: "How the database engine intends to execute a query, including index usage and join methods",
    explanation: "EXPLAIN PLAN helps developers optimize queries by understanding their execution path.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_076",
    type: "multiple_choice",
    question: "The 'full table scan' occurs when:",
    options: [
      "An index is used",
      "The database reads every row in a table to find matching rows, often due to missing indexes or poor query design",
      "Data is cached",
      "A backup is performed"
    ],
    answer: "The database reads every row in a table to find matching rows, often due to missing indexes or poor query design",
    explanation: "Full table scans are slow for large tables and should be avoided by proper indexing.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_077",
    type: "multiple_choice",
    question: "The 'materialized view' is:",
    options: [
      "A standard view",
      "A view whose query result is physically stored and refreshed periodically",
      "A type of index",
      "A temporary table"
    ],
    answer: "A view whose query result is physically stored and refreshed periodically",
    explanation: "Materialized views improve performance for complex, frequently accessed queries, at the cost of staleness.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_078",
    type: "multiple_choice",
    question: "The 'CAP theorem' (Brewer's theorem) states that a distributed database can only guarantee two of the following three properties simultaneously:",
    options: [
      "Capacity, Accuracy, Performance",
      "Consistency, Availability, Partition Tolerance",
      "Clarity, Access, Partitioning",
      "Confidentiality, Integrity, Availability"
    ],
    answer: "Consistency, Availability, Partition Tolerance",
    explanation: "In the event of a network partition, one must choose between consistency and availability.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_079",
    type: "multiple_choice",
    question: "The 'BASE' model is associated with:",
    options: [
      "Relational databases",
      "NoSQL databases, standing for Basically Available, Soft state, Eventually consistent",
      "ACID transactions",
      "Data warehousing"
    ],
    answer: "NoSQL databases, standing for Basically Available, Soft state, Eventually consistent",
    explanation: "BASE provides a flexible consistency model, contrasting with ACID in many NoSQL systems.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_080",
    type: "multiple_choice",
    question: "The 'document store' NoSQL database (e.g., MongoDB) stores data as:",
    options: ["Tables", "Key-value pairs", "JSON-like documents", "Graphs"],
    answer: "JSON-like documents",
    explanation: "Document databases store semi-structured data, allowing nested structures and flexible schemas.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_081",
    type: "multiple_choice",
    question: "The 'key-value store' (e.g., Redis) is optimized for:",
    options: [
      "Complex joins",
      "Simple, fast lookups by a unique key",
      "Full-text search",
      "Graph traversal"
    ],
    answer: "Simple, fast lookups by a unique key",
    explanation: "Key-value stores are the simplest NoSQL type, ideal for caching and session management.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_082",
    type: "multiple_choice",
    question: "The 'graph database' (e.g., Neo4j) is designed to handle:",
    options: [
      "Tabular data only",
      "Highly interconnected data with relationships as first-class entities",
      "Blob storage",
      "Key-value pairs"
    ],
    answer: "Highly interconnected data with relationships as first-class entities",
    explanation: "Graph databases are ideal for social networks, recommendation engines, and fraud detection.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_083",
    type: "multiple_choice",
    question: "The 'column-family store' (e.g., Cassandra) organizes data by:",
    options: [
      "Rows only",
      "Columns and rows, optimized for queries over large datasets",
      "Documents",
      "Graph nodes"
    ],
    answer: "Columns and rows, optimized for queries over large datasets",
    explanation: "Columnar databases are highly scalable and performant for analytical workloads.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_084",
    type: "multiple_choice",
    question: "The 'database sharding' helps to:",
    options: [
      "Encrypt data",
      "Distribute data across multiple machines to improve scalability and performance",
      "Normalize data",
      "Create backups"
    ],
    answer: "Distribute data across multiple machines to improve scalability and performance",
    explanation: "Sharding partitions data horizontally; each shard holds a subset of the data.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_085",
    type: "multiple_choice",
    question: "The 'master-slave replication' model involves:",
    options: [
      "All nodes being equal",
      "One master handling writes, and one or more slaves replicating data for reads",
      "No redundancy",
      "Only one server"
    ],
    answer: "One master handling writes, and one or more slaves replicating data for reads",
    explanation: "It improves read scalability and provides data redundancy.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_086",
    type: "multiple_choice",
    question: "The 'peer-to-peer replication' allows:",
    options: [
      "Only one node to accept writes",
      "All nodes to accept writes, with conflict detection and resolution",
      "No replication",
      "Only read operations"
    ],
    answer: "All nodes to accept writes, with conflict detection and resolution",
    explanation: "Multi-master replication provides high availability but requires conflict management.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_087",
    type: "multiple_choice",
    question: "The 'database connection pool' is a cache of:",
    options: [
      "Database tables",
      "Database connections maintained so they can be reused, reducing the overhead of establishing connections",
      "Query results",
      "User passwords"
    ],
    answer: "Database connections maintained so they can be reused, reducing the overhead of establishing connections",
    explanation: "Connection pooling improves application performance and resource utilization.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_088",
    type: "multiple_choice",
    question: "The 'stored procedure' advantages include:",
    options: [
      "Slower execution",
      "Reduced network traffic, encapsulated logic, and improved security",
      "Increased redundancy",
      "Simpler debugging"
    ],
    answer: "Reduced network traffic, encapsulated logic, and improved security",
    explanation: "Stored procedures execute on the server side, minimizing data sent over the network.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_089",
    type: "multiple_choice",
    question: "The 'prepared statement' (parameterized query) helps prevent:",
    options: [
      "Slow queries",
      "SQL injection attacks by separating SQL logic from data",
      "Deadlocks",
      "Data loss"
    ],
    answer: "SQL injection attacks by separating SQL logic from data",
    explanation: "Prepared statements precompile the SQL statement and bind parameters, treating user input as data only.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_090",
    type: "multiple_choice",
    question: "The 'database migration' refers to:",
    options: [
      "Backing up data",
      "Managing incremental, reversible changes to a database schema",
      "Querying data",
      "Indexing"
    ],
    answer: "Managing incremental, reversible changes to a database schema",
    explanation: "Migrations are version-controlled scripts that modify the database structure over time.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_091",
    type: "multiple_choice",
    question: "The 'database ORM' (Object-Relational Mapping) frameworks like Hibernate or SQLAlchemy:",
    options: [
      "Replace the database entirely",
      "Map objects in code to relational database tables, abstracting SQL",
      "Only work with NoSQL",
      "Are used for backups"
    ],
    answer: "Map objects in code to relational database tables, abstracting SQL",
    explanation: "ORMs allow developers to interact with databases using object-oriented paradigms.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_092",
    type: "multiple_choice",
    question: "The 'N+1 query problem' in ORMs occurs when:",
    options: [
      "Only one query is executed",
      "A query is executed for the main entity, and then additional queries are executed for each related entity, causing performance issues",
      "Data is cached",
      "The database is offline"
    ],
    answer: "A query is executed for the main entity, and then additional queries are executed for each related entity, causing performance issues",
    explanation: "Eager loading or batch fetching can mitigate the N+1 problem.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_093",
    type: "multiple_choice",
    question: "The 'database log' (transaction log) is used for:",
    options: [
      "Storing user passwords",
      "Recording all transactions and database modifications for recovery and rollback",
      "Caching queries",
      "Creating indexes"
    ],
    answer: "Recording all transactions and database modifications for recovery and rollback",
    explanation: "Write-ahead logging (WAL) ensures durability and atomicity by recording changes before they are applied.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_094",
    type: "multiple_choice",
    question: "The 'point-in-time recovery' (PITR) relies on:",
    options: [
      "Indexes",
      "Full backups combined with transaction logs to restore a database to a specific moment",
      "Query caching",
      "Sharding"
    ],
    answer: "Full backups combined with transaction logs to restore a database to a specific moment",
    explanation: "PITR enables restoring a database to a state just before a failure or error occurred.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_095",
    type: "multiple_choice",
    question: "The 'database partitioning' (as opposed to sharding) divides:",
    options: [
      "A large table into smaller, more manageable pieces within the same database instance",
      "Data across multiple servers",
      "Only indexes",
      "User permissions"
    ],
    answer: "A large table into smaller, more manageable pieces within the same database instance",
    explanation: "Partitioning improves performance and manageability by splitting tables by range, list, or hash.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_096",
    type: "multiple_choice",
    question: "The 'EXPLAIN' or 'EXPLAIN ANALYZE' command provides:",
    options: [
      "A backup",
      "Insight into how the database will execute a query, including estimated costs and actual execution times",
      "Data encryption",
      "User management"
    ],
    answer: "Insight into how the database will execute a query, including estimated costs and actual execution times",
    explanation: "It is a crucial tool for database performance tuning.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_097",
    type: "multiple_choice",
    question: "The 'slow query log' in databases captures:",
    options: [
      "All successful queries",
      "Queries that exceed a specified execution time threshold, helping identify performance bottlenecks",
      "Only failed queries",
      "Schema changes"
    ],
    answer: "Queries that exceed a specified execution time threshold, helping identify performance bottlenecks",
    explanation: "Analyzing slow queries is a standard practice for database optimization.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_098",
    type: "multiple_choice",
    question: "The 'database collation' determines:",
    options: [
      "Backup schedule",
      "How string data is sorted and compared, including case sensitivity and accent sensitivity",
      "Table relationships",
      "Index type"
    ],
    answer: "How string data is sorted and compared, including case sensitivity and accent sensitivity",
    explanation: "Collation settings affect queries and unique constraints involving text.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_099",
    type: "multiple_choice",
    question: "The 'time-series database' (e.g., InfluxDB) is optimized for:",
    options: [
      "Storing images",
      "Handling data points indexed by time, such as sensor readings and monitoring metrics",
      "Complex joins",
      "User profile data"
    ],
    answer: "Handling data points indexed by time, such as sensor readings and monitoring metrics",
    explanation: "Time-series DBs are designed for high write throughput and efficient time-range queries.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "cs_dtb_100",
    type: "multiple_choice",
    question: "The 'NewSQL' databases aim to combine:",
    options: [
      "NoSQL and file storage",
      "The ACID guarantees of traditional relational databases with the scalability and flexibility of NoSQL systems",
      "Graph and document models",
      "OLTP and OLAP only"
    ],
    answer: "The ACID guarantees of traditional relational databases with the scalability and flexibility of NoSQL systems",
    explanation: "NewSQL databases like CockroachDB and Google Spanner provide horizontal scalability without sacrificing SQL.",
    difficulty: "hard",
    topic: "Databases",
    subject: "Computer Science",
    platform: "hyelearner",
    year: 2026
  }
];

