create table users (
    id text default gen_random_uuid()::text PRIMARY KEY,
    email text not null,
    password varchar(255) not null,
    username text not null,
    plan text not null
);

create table project (
    id text default gen_random_uuid()::text PRIMARY KEY,
    name text not null,
    owner text REFERENCES users(id)
);

create table entity (
    id text default gen_random_uuid()::text PRIMARY KEY,
    name text not null,
    project text REFERENCES project(id),
    schema JSONB[]
);

create table entry (
    id text default gen_random_uuid()::text PRIMARY KEY,
    entity text REFERENCES entity(id),
    value JSONB[]
);

create table api_key (
    id text default gen_random_uuid()::text PRIMARY KEY,
    key text not null,
    owner text REFERENCES users(id)
);

create table permission (
    id text default gen_random_uuid()::text PRIMARY KEY,
    type text not null,
    project text REFERENCES project(id),
    entities text[] not null
);