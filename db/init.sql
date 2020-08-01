DROP DATABASE IF EXISTS OWD;

CREATE DATABASE OWD;

DROP TABLE IF EXISTS PHOTO;

CREATE TABLE PHOTO (
    id INT NOT NULL AUTO_INCREMENT,
    file_id VARCHAR(20) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    created_date DATETIME NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS AUTHOR;

CREATE TABLE AUTHOR (
    id INT NOT NULL AUTO_INCREMENT,
    author VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS BLOG;

CREATE TABLE BLOG (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author_id int NOT NULL,
    published_date DATETIME,
    last_modified_date DATETIME NOT NULL,
    created_date DATETIME NOT NULL,
    introduction VARCHAR(MAX),
    banner_id INT,
    thubmnail_id INT,
    mid_size_thumbnail_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES AUTHOR(id),
    FOREIGN KEY (banner_id) REFERENCES PHOTO(id),
    FOREIGN KEY (thubmnail_id) REFERENCES PHOTO(id),
    FOREIGN KEY (mid_size_thumbnail_id) REFERENCES PHOTO(id),
    FOREIGN KEY
);
