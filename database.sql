
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- USER TABLE
-- USER TABLE
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- LOG TABLE
CREATE TABLE "log" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"date" date,
	"entry" VARCHAR (2000),
	"title" VARCHAR(1000)
);

-- GAME TABLE
CREATE TABLE "game" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (1000)
);
