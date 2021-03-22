drop table if exists npcs;
drop table if exists channels;
drop table if exists users;

drop type if exists channel_type;

create type channel_type as enum('category', 'text');

create table npcs (
  id uuid not null primary key,
  name text not null,
  avatar_url text not null
);

create table channels (
  id text not null primary key,
  name text not null,
  category_id text, 
  channel_type channel_type,
  has_webhook boolean not null default 'false'
);

create table users (
  id uuid primary key,
  username text not null,
  password text not null
);

insert into npcs (id, name, avatar_url)
values ('36eb7b39-cd25-4384-840d-4ac6748e1b3c', 'Fred the Fish', 'https://i.kym-cdn.com/entries/icons/original/000/015/660/Rev_Up_Those_Fryers!.png');