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
create table proveedores
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
	constraint pk_proveedores primary key (id) ,	
	constraint fk_proveedores_tiposDocumento foreign key (idTipoDocumento) references tipos_documento (id) ,
	constraint fk_proveedores_tiposContribullente foreign key (idTipoContribullente) references tipos_contribullente (id) ,
	constraint fk_proveedores_direcciones foreign key (idDireccion) references direcciones (id) ,
	constraint fk_proveedores_tiposPersona foreign key (idTipoPersona) references tipos_persona (id)
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
	idProveedor int not null ,
	idUsuario int not null ,
	idSucursal int not null ,
	total real not null,
	activo bit ,
	constraint pk_compras primary key (id) ,
	constraint fk_compras_proveedores foreign key (idProveedor) references proveedores (id) ,
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
	begin
		select  id as idUsuario ,
		nombre as nombreUsuario ,
		apellido as apellidoUsuario ,
		nombreUsuario as usuario ,
		pw
		from usuarios
		where nombreUsuario = @usuario
	end
go
create procedure pa_listaCategorias
as
select id as idCategoria , nombre as nombreCategoria , descripcion as descripcionCategoria
from categorias
where activo = 1
go
create procedure pa_insertCategoria
@nombreCategoria varchar(50) ,
@descripcionCategoria varchar(50)
as
insert into categorias ( nombre , descripcion , activo ) values ( @nombreCategoria , @descripcionCategoria , 1 )
go
create procedure pa_updateCategoria
@idCategoria int ,
@nombreCategoria varchar(50) ,
@descripcionCategoria varchar(50)
as
update categorias
set
nombre = @nombreCategoria ,
descripcion = @descripcionCategoria 
where id = @idCategoria
go
create procedure pa_deleteCategoria
@idCategoria int
as
update categorias
set
activo = 0
where id = @idCategoria
go
create procedure pa_listaUnidadesMedia
as
select id as idUnidadMedida , nombre as nombreUnidadMedida , descripcion as descripcionUnidadMedida
from unidades_medida
where activo = 1
go
create procedure pa_insertUnidadMedida
@nombreUnidadMedida varchar(50) ,
@descripcionUnidadMedida varchar(50)
as
insert into unidades_medida( nombre , descripcion , activo ) values ( @nombreUnidadMedida , @descripcionUnidadMedida , 1 )
go
create procedure pa_updateUnidadMedida
@idUnidadMedida int ,
@nombreUnidadMedida varchar(50) ,
@descripcionUnidadMedida varchar(50)
as
update unidades_medida
set
nombre = @nombreUnidadMedida ,
descripcion = @descripcionUnidadMedida 
where id = @idUnidadMedida
go
create procedure pa_deleteUnidadMedida
@idUnidadMedida int
as
update unidades_medida
set
activo = 0
where id = @idUnidadMedida
go
create procedure pa_listaDirecciones
as
select id as idDireccion , calle as calleDireccion , altura as alturaDireccion , cp as codigoPostalDireccion , barrio as barrioDireccion , otrosDatos as otrosDatosDireccion
from direcciones
where activo = 1
go
create procedure pa_insertDireccion
@calleDireccion varchar(50) ,
@alturaDireccion int ,
@codigoPostalDireccion int ,
@barrioDireccion varchar(50) ,
@otrosDatosDireccion varchar(200)
as
insert into direcciones (calle , altura , cp , barrio , otrosDatos , activo) values (@calleDireccion , @alturaDireccion , @codigoPostalDireccion , @barrioDireccion , @otrosDatosDireccion , 1 )
go
create procedure pa_updateDireccion
@idDireccion int ,
@calleDireccion varchar(50) ,
@alturaDireccion int ,
@codigoPostalDireccion int ,
@barrioDireccion varchar(50) ,
@otrosDatosDireccion varchar(200)
as
update direcciones
set
calle = @calleDireccion ,
altura = @alturaDireccion ,
cp = @codigoPostalDireccion ,
barrio = @barrioDireccion ,
otrosDatos = @otrosDatosDireccion
where id = @idDireccion
go
create procedure pa_deleteDireccion
@idDireccion int
as
update direcciones
set
activo = 0
where id = @idDireccion
go
create procedure pa_listaMarcas
as
select id as idMarca , nombre as nombreMarca
from marcas
where activo = 1
go
create procedure pa_insertMarca
@nombreMarca varchar(50)
as
insert into marcas( nombre , activo ) values ( @nombreMarca , 1 )
go
create procedure pa_updateMarca
@idMarca int ,
@nombreMarca varchar(50)
as
update marcas
set
nombre = @nombreMarca
where id = @idMarca
go
create procedure pa_deleteMarca
@idMarca int
as
update marcas
set
activo = 0
where id = @idMarca
go
create procedure pa_listaProductos
as
select id as idProducto , nombre as nombreProducto , descripcion as descripcionProducto , precioActual as precioActualProducto
from productos
where activo = 1
go
create procedure pa_insertProducto
@nombreProducto varchar(50) ,
@descripcionProducto varchar(200) ,
@precioActualProducto real
as
insert into productos( nombre , descripcion , precioActual , activo ) values ( @nombreProducto , @descripcionProducto , @precioActualProducto , 1 )
select @@identity as idProducto
go
create procedure pa_updateProducto
@idProducto int ,
@nombreProducto varchar(50) ,
@descripcionProducto varchar(200) ,
@precioActualProducto real
as
begin
	begin try
		begin transaction
			update productos
			set
			nombre = @nombreProducto ,
			descripcion = @descripcionProducto ,
			precioActual = @precioActualProducto
			where id = @idProducto
			delete detalles_producto where idProducto = @idProducto
		commit transaction
	end try
	begin catch
		rollback transaction
	end catch
end
go
create procedure pa_deleteProducto
@idProducto int
as
update productos
set
activo = 0
where id = @idProducto
update detalles_producto
set
activo = 0
where idProducto = @idProducto
go
create procedure pa_listaArticulos
as
select a.id as idArticulo, a.nombre as nombreArticulo , a.descripcion as descripcionArticulo , a.peso as pesoArticulo , a.codProvedor as codigoProvedorArticulo ,
a.codInterno as codigoInternoAticulo , u.id as idUnidadMedida , u.nombre as nombreUnidadMedida , c.id as idCategoria , c.nombre as nombreCategoria ,
m.id as idMarca , m.nombre as nombreMarca
from articulos a
join unidades_medida u on u.id = a.idUnidadMedida
join categorias c on c.id = a.idCategoria
join marcas m on m.id = a.idMarca
where a.activo = 1
go
create procedure pa_insertArticulo
@nombreArticulo varchar(50) ,
@descripcionArticulo varchar(200) ,
@pesoArticulo real ,
@codProvedorArticulo int ,
@codInternoArticulo int ,
@idUnidadMedida int ,
@idCategoria int ,
@idMarca int 
as
insert into articulos (nombre , descripcion , peso , codProvedor , codInterno , idUnidadMedida , idCategoria , idMarca , activo ) values
( @nombreArticulo , @descripcionArticulo , @pesoArticulo , @codProvedorArticulo , @codInternoArticulo , @idUnidadMedida , @idCategoria , @idMarca  , 1 )
go
create procedure pa_updateArticulo
@idArticulo int ,
@nombreArticulo varchar(50) ,
@descripcionArticulo varchar(200) ,
@pesoArticulo real ,
@codProvedorArticulo int ,
@codInternoArticulo int ,
@idUnidadMedida int ,
@idCategoria int ,
@idMarca int 
as
update articulos
set
nombre = @nombreArticulo ,
descripcion = @descripcionArticulo ,
peso = @pesoArticulo ,
codProvedor = @codProvedorArticulo ,
codInterno = @codInternoArticulo ,
idUnidadMedida = @idUnidadMedida ,
idCategoria = @idCategoria , 
idMarca = @idMarca
where id = @idArticulo
go
create procedure pa_deleteArticulo
@idArticulo int
as
update articulos
set
activo = 0
where id = @idArticulo
go
create procedure pa_listaTiposDocumento
as
select id as idTipoDocumento , nombre as nombreTipoDocumento
from tipos_documento
where activo = 1
go
create procedure pa_insertTipoDocumento
@nombreTipoDocumento varchar(50)
as
insert into tipos_documento( nombre , activo ) values ( @nombreTipoDocumento , 1 )
go
create procedure pa_updateTipoDocumento
@idTipoDocumento int ,
@nombreTipoDocumento varchar(50)
as
update tipos_documento
set
nombre = @nombreTipoDocumento
where id = @idTipoDocumento
go
create procedure pa_deleteTipoDocumento
@idTipoDocumento int
as
update tipos_documento
set
activo = 0
where id = @idTipoDocumento
go
create procedure pa_listaTiposPersona
as
select id as idTipoPersona , nombre as nombreTipoPersona
from tipos_persona
where activo = 1
go
create procedure pa_insertTipoPersona
@nombreTipoPersona varchar(50)
as
insert into tipos_persona( nombre , activo ) values ( @nombreTipoPersona , 1 )
go
create procedure pa_updateTipoPersona
@idTipoPersona int ,
@nombreTipoPersona varchar(50)
as
update tipos_persona
set
nombre = @nombreTipoPersona
where id = @idTipoPersona
go
create procedure pa_deleteTipoPersona
@idTipoPersona int
as
update tipos_persona
set
activo = 0
where id = @idTipoPersona
go
create procedure pa_listaTiposContribullente
as
select id as idTipoContribullente , nombre as nombreTipoContribullente , descripcion as descripcionTipoContribullente
from tipos_contribullente
where activo = 1
go
create procedure pa_insertTipoContribullente
@nombreTipoContribullente varchar(50) ,
@descripcionTipoContribullente varchar(50)
as
insert into tipos_contribullente( nombre , descripcion , activo ) values ( @nombreTipoContribullente , @descripcionTipoContribullente , 1 )
go
create procedure pa_updateTipoContribullente
@idTipoContribullente int ,
@nombreTipoContribullente varchar(50) ,
@descripcionTipoContribullente varchar(50)
as
update tipos_contribullente
set
nombre = @nombreTipoContribullente ,
descripcion = @descripcionTipoContribullente 
where id = @idTipoContribullente
go
create procedure pa_deleteTipoContribullente
@idTipoContribullente int
as
update tipos_contribullente
set
activo = 0
where id = @idTipoContribullente
go
create procedure pa_listaClientes
as
select c.id as idCliente , c.nombre as nombreCliente , c.apellido as apellidoCliente , td.id as idTipoDocumento , td.nombre as nombreTipoDocumento , c.nroDoc as nroDocCliente ,
tc.id as idTipoContribullente , tc.nombre as nombreTipoContribullente , c.nroCuitCuil as nrosCuitCuilCliente , d.id as idDireccion , d.calle as calleDireccion , d.altura as alturaDireccion ,
d.barrio as barrioDireccion , d.cp as cpDireccion , d.otrosDatos as otrosDatosDireccion , tp.id as idTipoPersona , tp.nombre as nombreTipoPersona
from clientes c
join tipos_documento td on td.id = c.idTipoDocumento
join tipos_contribullente tc on tc.id = c.idTipoContribullente
join direcciones d on d.id = c.idDireccion
join tipos_persona tp on tp.id = c.idTipoPersona
where c.activo = 1
go
create procedure pa_insertCliente
@nombreCliente varchar(50) ,
@apellidoCliente varchar(50) ,
@idTipoDocumento int ,
@nroDocCliente varchar(50) ,
@idTipoContribullente int ,
@nroCuitCuilCliente int ,
@idDireccion int ,
@idTipoPersona int
as
insert into clientes( nombre , apellido , idTipoDocumento , nroDoc , idTipoContribullente , nroCuitCuil , idDireccion , idTipoPersona , activo )
values ( @nombreCliente , @apellidoCliente , @idTipoDocumento ,@nroDocCliente , @idTipoContribullente , @nroCuitCuilCliente , @idDireccion , @idTipoPersona  , 1 )
go
create procedure pa_updateCliente
@idCliente int ,
@nombreCliente varchar(50) ,
@apellidoCliente varchar(50) ,
@idTipoDocumento int ,
@nroDocCliente varchar(50) ,
@idTipoContribullente int ,
@nroCuitCuilCliente int ,
@idDireccion int ,
@idTipoPersona int
as
update clientes
set
nombre = @nombreCliente ,
apellido = @apellidoCliente ,
idTipoDocumento = @idTipoDocumento ,
nroDoc = @nroDocCliente ,
idTipoContribullente = @idTipoContribullente ,
nroCuitCuil = @nroCuitCuilCliente ,
idDireccion = @idDireccion ,
idTipoPersona = @idTipoPersona
where id = @idCliente
go
create procedure pa_deleteCliente
@idCliente int
as
update clientes
set
activo = 0
where id = @idCliente
go
create procedure pa_listaSucursales
as
select s.id as idSucursal , s.nombre as nombreSucursal , d.id as idDireccion , d.calle as calleDireccion , d.altura as alturaDireccion ,
d.barrio as barrioDireccion , d.cp as cpDireccion , d.otrosDatos as otrosDatosDireccion
from sucursales s
join direcciones d on d.id = s.idDireccion
where s.activo = 1
go
create procedure pa_insertSucursal
@idDireccion int ,
@nombreSucursal varchar(50)
as
insert into sucursales( idDireccion , nombre , activo ) values ( @idDireccion , @nombreSucursal , 1 )
go
create procedure pa_updateSucursal
@idSucursal int ,
@idDireccion int ,
@nombreSucursal varchar(50)
as
update sucursales
set
nombre = @nombreSucursal ,
idDireccion = @idDireccion 
where id = @idSucursal
go
create procedure pa_deleteSucursal
@idSucursal int
as
update sucursales
set
activo = 0
where id = @idSucursal
go
create procedure pa_listaProveedores
as
select p.id as idProveedor , p.nombre as nombreProveedor , p.apellido as apellidoProveedor , td.id as idTipoDocumento , td.nombre as nombreTipoDocumento , p.nroDoc as nroDocProveedor ,
tc.id as idTipoContribullente , tc.nombre as nombreTipoContribullente , p.nroCuitCuil as nrosCuitCuilProveedor , d.id as idDireccion , d.calle as calleDireccion , d.altura as alturaDireccion ,
d.barrio as barrioDireccion , d.cp as cpDireccion , d.otrosDatos as otrosDatosDireccion , tp.id as idTipoPersona , tp.nombre as nombreTipoPersona
from proveedores p
join tipos_documento td on td.id = p.idTipoDocumento
join tipos_contribullente tc on tc.id = p.idTipoContribullente
join direcciones d on d.id = p.idDireccion
join tipos_persona tp on tp.id = p.idTipoPersona
where p.activo = 1
go
create procedure pa_insertProveedor
@nombreProveedor varchar(50) ,
@apellidoProveedor varchar(50) ,
@idTipoDocumento int ,
@nroDocProveedor varchar(50) ,
@idTipoContribullente int ,
@nroCuitCuilProveedor int ,
@idDireccion int ,
@idTipoPersona int
as
insert into proveedores( nombre , apellido , idTipoDocumento , nroDoc , idTipoContribullente , nroCuitCuil , idDireccion , idTipoPersona , activo )
values ( @nombreProveedor , @apellidoProveedor , @idTipoDocumento ,@nroDocProveedor , @idTipoContribullente , @nroCuitCuilProveedor , @idDireccion , @idTipoPersona  , 1 )
go
create procedure pa_updateProveedor
@idProveedor int ,
@nombreProveedor varchar(50) ,
@apellidoProveedor varchar(50) ,
@idTipoDocumento int ,
@nroDocProveedor varchar(50) ,
@idTipoContribullente int ,
@nroCuitCuilProveedor int ,
@idDireccion int ,
@idTipoPersona int
as
update proveedores
set
nombre = @nombreProveedor ,
apellido = @apellidoProveedor ,
idTipoDocumento = @idTipoDocumento ,
nroDoc = @nroDocProveedor ,
idTipoContribullente = @idTipoContribullente ,
nroCuitCuil = @nroCuitCuilProveedor ,
idDireccion = @idDireccion ,
idTipoPersona = @idTipoPersona
where id = @idProveedor
go
create procedure pa_deleteProveedor
@idProveedor int
as
update proveedores
set
activo = 0
where id = @idProveedor
go
create procedure pa_insertDetalleProducto
@idProducto int ,
@idArticulo int ,
@cantidadDetalleProducto real
as
insert into detalles_producto (idProducto ,idArticulo , cantidad , activo ) values ( @idProducto , @idArticulo , @cantidadDetalleProducto , 1 )
go
create procedure pa_deleteDetalleProductoXidProducto
@idProducto int
as
update detalles_producto
set
activo = 0
where idProducto = @idProducto
go
create procedure pa_deleteDetalleProductoXidProductoDEF
@idProducto int
as
delete detalles_producto where idProducto = @idProducto
go
select *from usuarios