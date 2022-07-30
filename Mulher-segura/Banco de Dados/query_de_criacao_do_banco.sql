create table endereco(
rua_id int primary key identity,
estado varchar(70),
cidade varchar(70),
bairro varchar(70),
cep char(8),
numero_da_casa int,
complemento varchar(200),
referencia varchar(100),
rua varchar (45)
)

create table vitima(
numero_do_cadastro int primary key identity,
username varchar(45),
email varchar(110),
senha varchar (15),
celular char(11),
celular2 char(11),
nome varchar(150),
datadenascimento date,
cpf char (11),
rg char (8),
filhos_s_n bit,
quantidadefilhos int,
estadocivil varchar(45),
mora_com_parceiro_s_n bit ,
nome_do_parceiro varchar (150),
rua_endereco int,
CONSTRAINT rua_endereco FOREIGN KEY (rua_endereco)
      REFERENCES endereco (rua_id)
      ON DELETE CASCADE
      ON UPDATE CASCADE
)

create table contatosemergenciais(
contato_emergencial_id int primary key identity,
nome varchar(150),
datadenascimento date,
email varchar(100),
celular char(11),
telefone char(10),
numero_do_cadastro_vitima int,
CONSTRAINT numero_do_cadastro_vitima FOREIGN KEY (numero_do_cadastro_vitima)
      REFERENCES vitima (numero_do_cadastro)
      ON DELETE CASCADE
      ON UPDATE CASCADE
)

create table psicologo(
numero_do_cadastro_psicologo int primary key identity,
username varchar(45),
email varchar(100),
senha varchar(15),
celular char(11),
nome varchar(150),
cpf varchar(11),
rg char(8),
datadenascimento date,
numero_do_crp char(8),
telefone1 char(11),
telefone2 char(11)
)