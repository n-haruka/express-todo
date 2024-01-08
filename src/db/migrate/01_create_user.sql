create table todo.users (
  id serial not null,
  name varchar not null,
  email varchar not null,
  password varchar not null,
  plan varchar not null,
  admin boolean not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp,
  primary key (id),
  unique (email)
);
