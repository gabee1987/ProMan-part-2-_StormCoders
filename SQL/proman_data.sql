-- StormCoders ProMan v.2.0

DROP TABLE IF EXISTS boards;
CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    title text,
    state text
);


DROP TABLE IF EXISTS cards;
CREATE TABLE cards (
    id SERIAL PRIMARY KEY,
    title text,
    status text
);


DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar (30) UNIQUE NOT NULL,
    password varchar (30)
);