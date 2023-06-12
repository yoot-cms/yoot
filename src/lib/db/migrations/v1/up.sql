create table users (
    id text default gen_random_uuid()::text PRIMARY KEY,
    email text not null,
    password varchar(255) not null
);

create table project (
    id text default gen_random_uuid()::text PRIMARY KEY,
    name text not null,
    owner text REFERENCES users(id)
);
