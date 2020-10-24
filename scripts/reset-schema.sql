drop table if exists npcs;

create table npcs (
  id uuid not null primary key,
  name text not null,
  avatar_url text not null
);

insert into npcs (id, name, avatar_url)
values ('36eb7b39-cd25-4384-840d-4ac6748e1b3c', 'Fred the Fish', 'https://i.kym-cdn.com/entries/icons/original/000/015/660/Rev_Up_Those_Fryers!.png');