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

create table invitations (
  id text default gen_random_uuid()::text PRIMARY KEY,
  inviter text not null REFERENCES users(id) ON DELETE CASCADE,
  invitee text not null,
  accepted boolean default false,
  project text not null REFERENCES project(id) ON DELETE CASCADE,
  permissions text not null
);

create table notification (
  id text default gen_random_uuid()::text PRIMARY KEY,
  type text not null,
  read boolean default false,
  invitation text REFERENCES invitations(id) ON DELETE CASCADE
);

create table shares (
  id text default gen_random_uuid()::text PRIMARY KEY,
  project text not null REFERENCES project(id) ON DELETE CASCADE,
  sharee text not null,
  sharer text not null,
  permissions text not null
);

create table invitation_links (
  id text default gen_random_uuid()::text PRIMARY KEY,
  link text not null,
  project text not null REFERENCES project(id),
  invitee text not null REFERENCES users(id),
  inviter text not null REFERENCES users(id),
  expired boolean default false
);
