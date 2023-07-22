create table users (
  id text default gen_random_uuid()::text PRIMARY KEY,
  email text not null,
  password varchar(255) not null,
  username text not null,
  profile_pic text not null default 'https://picsum.photos/300/300',
  plan text not null default 'BASIC',
  role text not null default 'USER'
);

create table project (
  id text default gen_random_uuid()::text PRIMARY KEY,
  name text not null,
  owner text REFERENCES users(id) ON DELETE CASCADE,
  created_at DATE not null default CURRENT_DATE,
  trashed boolean not null default false
);

create table entity (
  id text default gen_random_uuid()::text PRIMARY KEY,
  name text not null,
  project text REFERENCES project(id) ON DELETE CASCADE,
  schema JSONB,
  created_at DATE not null default CURRENT_DATE,
  trashed boolean not null default false
);

create table entry (
  id text default gen_random_uuid()::text PRIMARY KEY,
  entity text REFERENCES entity(id) ON DELETE CASCADE,
  value JSONB,
  created_at DATE not null default CURRENT_DATE
);

create table api_key (
  id text PRIMARY KEY,
  name text not null,
  key text not null,
  owner text REFERENCES users(id) ON DELETE CASCADE,
  project text REFERENCES project(id) ON DELETE CASCADE,
  permissions text not null,
  created_at DATE not null default CURRENT_DATE
);
