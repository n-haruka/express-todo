create table todo.todos (
  id serial not null,
  user_id integer not null,
  title varchar not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp,
  primary key (id),
  foreign key (user_id) references todo.users (id)
  on delete cascade
  on update cascade
);
