create database gestlineDB
go
use gestlineDB
go
create table categorias
(
	id int identity ( 1,1 ) ,
	nombre varchar(50) not null ,
	descripcion varchar(200),
	activo bit ,
	constraint pk_categorias primary key (id)
)
go
create table unidades_medida
(
	id int identity ( 1,1 ) ,
	nombre varchar(50) not null ,
	descripcion varchar(200),
	activo bit ,
	constraint pk_unidadesMedida primary key (id)
)
go
create table direcciones
(
	id int identity ( 1,1 ) ,
	calle varchar (50) not null ,
	altura int not null , 
	cp int not null ,
	barrio varchar(50) not null,
	otrosDatos varchar (200),
	activo bit ,
	constraint pk_direcciones primary key (id)
)
go
create table sucursales
(
	id int identity ( 1,1 ) ,
	idDireccion int not null ,
	nombre varchar(50) not null,
	activo bit ,
	constraint pk_sucursales primary key (id) ,
	constraint fk_sucursales_direciones foreign key (idDireccion) references direcciones(id)
)
go
create table marcas 
(
	id int identity ( 1 , 1 ) ,
	nombre varchar (50) not null,
	activo bit ,
	constraint pk_marcas primary key (id)
)
go
create table articulos
(
	id int identity ( 1,1 ) ,
	nombre varchar(50) not null ,
	descripcion varchar(200) ,
	peso real not null ,
	codProvedor int not null,
	codInterno int not null , 
	idUnidadMedida int not null ,
	idCategoria int not null ,
	idMarca int not null,
	activo bit ,
	constraint pk_articulos primary key (id) ,
	constraint fk_articulos_unidadesMedida foreign key (idUnidadMedida) references unidades_medida (id),
	constraint fk_articulos_categorias foreign key (idCategoria) references categorias (id) ,
	constraint fk_articulos_mascas foreign key (idMarca) references marcas (id)
)
go
create table productos
(
	id int identity ( 1,1 ) ,
	nombre varchar(50) not null ,
	descripcion varchar(200) ,
	precioActual real not null,
	activo bit ,
	constraint pk_productos primary key (id)
)
go
create table detalles_producto
(
	id int identity ( 1,1 ) ,
	idProducto int not null ,
	idArticulo int not null ,
	cantidad real,
	activo bit ,
	constraint pk_detallesProducto primary key (id) ,
	constraint fk_detallesProducto_productos foreign key (idProducto) references productos (id) ,
	constraint fk_detallesProducto_articulos foreign key (idArticulo) references articulos (id)
)
go
-- RESPONSABLE INSCRIPTO , CONSUMIDOR FINAL , ETC
create table tipos_contribullente
(
	id int identity ( 1,1 ) ,
	nombre varchar(50) not null ,
	descripcion varchar(200),
	activo bit ,
	constraint pk_tiposContribullente primary key (id)
)
go
create table tipos_documento
(
	id int identity ( 1,1 ) ,
	nombre varchar(50) not null,
	activo bit ,
	constraint pk_tiposDocumento primary key (id)
)
go
--PERSONA FISICA O JURIDICA --
create table tipos_persona
(
	id int identity ( 1,1 ) ,
	nombre varchar(50) not null,
	activo bit ,
	constraint pk_tiposPersona primary key (id)
)
go
create table clientes
(
	id int identity ( 1,1 ) ,
	nombre varchar(50) not null ,
	apellido varchar(50) not null ,
	idTipoDocumento int not null ,
	nroDoc varchar (50) unique not null ,
	idTipoContribullente int not null ,
	nroCuitCuil int ,
	idDireccion int not null ,
	idTipoPersona int not null,
	activo bit ,
	constraint pk_clientes primary key (id) ,	
	constraint fk_clientes_tiposDocumento foreign key (idTipoDocumento) references tipos_documento (id) ,
	constraint fk_clientes_tiposContribullente foreign key (idTipoContribullente) references tipos_contribullente (id) ,
	constraint fk_clientes_direcciones foreign key (idDireccion) references direcciones (id) ,
	constraint fk_clientes_tiposPersona foreign key (idTipoPersona) references tipos_persona (id)
)
go
create table provedores
(
	id int identity ( 1,1 ) ,
	nombre varchar(50) not null ,
	apellido varchar(50) not null ,
	idTipoDocumento int not null ,
	nroDoc varchar (50) unique not null ,
	idTipoContribullente int not null ,
	nroCuitCuil int ,
	idDireccion int not null ,
	idTipoPersona int not null,
	activo bit ,
	constraint pk_provedores primary key (id) ,	
	constraint fk_provedores_tiposDocumento foreign key (idTipoDocumento) references tipos_documento (id) ,
	constraint fk_provedores_tiposContribullente foreign key (idTipoContribullente) references tipos_contribullente (id) ,
	constraint fk_provedores_direcciones foreign key (idDireccion) references direcciones (id) ,
	constraint fk_provedores_tiposPersona foreign key (idTipoPersona) references tipos_persona (id)
)
go
create table usuarios
(
	id int identity ( 1,1 ) ,
	nombre varchar(50)  not null ,
	apellido varchar(50)  not null ,
	nombreUsuario varchar(50) unique not null ,
	pw varchar(600) not null,
	activo bit ,
	constraint pk_usuarios primary key (id)
)
go
create table compras
(
	id int identity ( 1,1 ) ,
	nroComprobante int ,
	fechaCompra date not null,
	fechaCarga date not null,
	idProvedor int not null ,
	idUsuario int not null ,
	idSucursal int not null ,
	total real not null,
	activo bit ,
	constraint pk_compras primary key (id) ,
	constraint fk_compras_provedores foreign key (idProvedor) references provedores (id) ,
	constraint fk_compras_usuarios foreign key (idUsuario) references usuarios (id) ,
	constraint fk_compras_sucursales foreign key (idSucursal) references sucursales (id)
)
go
create table detalles_compra
(
	id int identity ( 1,1 ) ,
	nroComprobante int ,
	idCompra int not null ,
	idArticulo int not null ,
	cantidad int ,
	precioFinalCompra real not null,
	activo bit ,
	constraint pk_detallesCompra primary key (id) ,
	constraint fk_detallesCompra_compras foreign key (idCompra) references compras (id) ,
	constraint fk_detallesCompra_articulos foreign key (idArticulo) references articulos (id)
)
go
create table ventas
(
	id int identity ( 1,1 ) ,
	nroComprobante int ,
	fechaVenta date not null,
	fechaCarga date not null,
	idCliente int not null ,
	idUsuario int not null ,
	idSucursal int not null ,
	total real not null,
	activo bit ,
	constraint pk_ventas primary key (id) ,
	constraint fk_ventas_provedores foreign key (idCliente) references clientes (id) ,
	constraint fk_ventas_usuarios foreign key (idUsuario) references usuarios (id) ,
	constraint fk_ventas_sucursales foreign key (idSucursal) references sucursales (id)
)
go
create table detalles_venta
(
	id int identity ( 1,1 ) ,
	nroComprobante int ,
	idVenta int not null ,
	idProducto int not null ,
	cantidad int ,
	precioFinalVenta real not null,
	activo bit ,
	constraint pk_detallesVenta primary key (id) ,
	constraint fk_detallesVenta_ventas foreign key (idVenta) references ventas (id) ,
	constraint fk_detallesVenta_productos foreign key (idProducto) references productos (id)
)
go
create table movimientos_stock
(
	id int identity ( 1,1 ) ,
	fechaCarga date not null,
	idUsuario int not null ,
	idSucursal int not null ,
	idArticulo int not null ,
	cantidad real not null,
	activo bit ,
	constraint pk_movimientosStock primary key (id) ,
	constraint fk_movimientosStock_usuarios foreign key (idUsuario) references usuarios (id) ,
	constraint fk_movimientosStock_articulos foreign key (idArticulo) references articulos (id) ,
	constraint fk_movimientosStock_sucursales foreign key (idSucursal) references sucursales (id)
)
go
create trigger tr_insertVenta
	on detalles_venta for insert
	as
	set nocount on
	declare @idProducto int , @cantidad int , @idUsuario int , @idVenta int , @idSucursal int
	select @idProducto = idProducto , @cantidad = cantidad , @idVenta = idVenta from inserted
	select @idUsuario = idUsuario , @idSucursal = idSucursal from ventas where id = @idVenta
	insert into movimientos_stock (fechaCarga , idUsuario , idSucursal , idArticulo , cantidad , activo )
	( select GETDATE() , @idUsuario ,  @idSucursal , idArticulo , cantidad * @cantidad * -1 , 1  from detalles_producto where idProducto = @idProducto )
go
select * from clientes
go
insert into usuarios (nombre , apellido , nombreUsuario , pw , activo ) values ('javier' , 'Sosa' , 'javier_85' , 'belgrano455' , 1)
go
insert into direcciones (calle , altura , cp , barrio , otrosDatos , activo) values ('velez sarfiel' , 4100 , 5016 , 'Artigas' , 'Frente Canal 8' , 1)
go
insert into direcciones (calle , altura , cp , barrio , otrosDatos , activo) values ('juana Maria Begino' , 455 , 5016 , 'Ampliacion Artigas' , 'Frente Plaza' , 1 )
go
insert into sucursales (idDireccion , nombre , activo) values ( 1 , 'Local 1' , 1 )
go
insert into tipos_contribullente (nombre ,descripcion , activo) values ('Consumidor Final' , 'Factura A - IVA 21%' , 1)
go
insert into tipos_documento (nombre , activo) values ('DNI' , 1)
go
insert into tipos_persona (nombre , activo ) values ('persona fisica' , 1 )
go
insert into tipos_persona (nombre , activo ) values ('persona juridica' , 1)
go
select * from tipos_persona
go
select * from tipos_documento
go
select * from direcciones
go
select * from tipos_contribullente
go
select * from tipos_persona
go
select * from clientes
go
insert into clientes (nombre , apellido , idTipoDocumento , nroDoc , idTipoContribullente , nroCuitCuil , idDireccion , idTipoPersona , activo ) values 
('Javier' , 'Sosa' , 1 , '33809844' , 1 , 203380 , 2 , 1  , 1 )
go
select * from clientes
go
insert into ventas (nroComprobante , fechaVenta , fechaCarga , idCliente , idUsuario , idSucursal , total , activo) values
(546 , GETDATE() , GETDATE() , 1 , 1 , 1 , 800 , 1)
go
select * from ventas
go
insert into unidades_medida (nombre , descripcion , activo ) values
('UN' , 'unidad' , 1) ,
('L' , 'litros' , 1)
go
insert into categorias (nombre , descripcion , activo) values 
('Bebidas Gasificadas' , 'Gaseosas' , 1) ,
('Bebidas Alcogolicas' , 'Escavio' , 1) ,
('Golosinas' , 'Dulces' , 1)
go
insert into marcas (nombre , activo) values
('Coca cola' , 1) ,
('Branca' , 1 )
go
insert into articulos (nombre , descripcion , peso , codProvedor , codInterno , idUnidadMedida , idCategoria , idMarca , activo ) values
('Cocacola 2,5 LT Descartable' , 'embase descartabla' , 2.7 , 111111 , 0000 , 1 , 1 , 1 , 1) ,
('Fernet' , 'embase descartabla' , 2.7 , 111111 , 0000 , 1 , 1 , 2 , 1)
go
insert into productos (nombre , descripcion , precioActual , activo) values ('Combo Previa' , 'Fernet Branca + 2 Cocas 2.5 litros' , 400 , 1)
go
insert into detalles_producto (idProducto , idArticulo , cantidad , activo ) values
(1 , 1 , 2 , 1 ) ,
(1 , 2 , 1 , 1)
go
insert into detalles_venta (nroComprobante , idVenta , idProducto , cantidad , precioFinalVenta , activo ) values
(546 , 1 , 1 , 2 , 800 , 1 )
go
select * from movimientos_stock
go
select * from usuarios
go
create procedure pa_insertUsuario
@nombreUsuario varchar (50) ,
@apellidoUsuario varchar (50) ,
@usuario varchar (50) ,
@pw varchar (600)
as
insert into usuarios (nombre , apellido , nombreUsuario , pw , activo) values 
(@nombreUsuario , @apellidoUsuario , @usuario , @pw , 1 )
go
create procedure pa_login
	@usuario varchar(50)
	as
	select nombre as nombreUsuario ,
	apellido as apellidoUsuario ,
	nombreUsuario as usuario ,
	pw
	from usuarios
	where nombreUsuario = @usuario
go
