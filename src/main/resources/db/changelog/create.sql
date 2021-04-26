--liquibase formatted sql

--changeset viniciusaugusto:1
CREATE TABLE cliente(
	id serial not null,
	nome text,
	cpf text,
	data date default date(now()),
	CONSTRAINT cliente_pkey PRIMARY KEY (id)
);
--preconditions onFail:MARK_RAN onError:HALT
--precondition-sql-check expectedResult:0 select count(*) from information_schema.tables where table_schema = 'public' and table_name = 'cliente'

--changeset viniciusaugusto:2
CREATE TABLE servico(
	id serial not null,
	descricao text,
	valor real,
	cliente_id integer not null,
	primary key(id),
	FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);
--preconditions onFail:MARK_RAN onError:HALT
--precondition-sql-check expectedResult:0 select count(*) from information_schema.tables where table_schema = 'public' and table_name = 'servico'
