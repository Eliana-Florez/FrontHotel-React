(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(28),o=n.n(i),c=(n(69),n(11)),l={admin:"admin",regular:"regular"},r=n(0),d=Object(a.createContext)();function h(e){var t=e.children,n=Object(a.useState)(null),s=Object(c.a)(n,2),i=s[0],o=s[1],h={user:i,isLogged:function(){return!!i},hasRole:function(e){return(null===i||void 0===i?void 0:i.role)===e},login:function(e){return o({id:1,name:"Didio",email:"didio@gmail.com",role:l.regular})},logout:function(){return o(null)}};return Object(r.jsx)(d.Provider,{value:h,children:t})}var j=n(12),b=n(10),u=n(102),C=n(103),x=n(61),O=n(106);function g(){return Object(a.useContext)(d)}function p(){var e=g().user;return Object(r.jsx)(u.a,{children:Object(r.jsxs)(C.a,{className:"mt-4",children:[Object(r.jsx)(x.a,{xs:12,className:"text-center",children:Object(r.jsx)("img",{src:"/img/male_avatar.svg",alt:"Perfil",style:{width:"200px",height:"200px",borderRadius:"50%",objectFit:"cover"}})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Nombre: "})," ",e.name," "]})})})]})})}var m=n(19),v=n(20),f=n(27),y=n(26),k=n(29),S=n.n(k),I=n(63),N=n(9),L=n(33),F=function(e){Object(f.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).deleteClient=a.deleteClient.bind(Object(N.a)(a)),a}return Object(v.a)(n,[{key:"deleteClient",value:function(){S.a.delete("https://backendhotel-backup.herokuapp.com/api/reserva/delete/"+this.props.obj._id).then((function(e){console.log("Client successfully deleted!"),alert("Client successfully deleted!")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:this.props.obj.nombresClient}),Object(r.jsx)("td",{children:this.props.obj.apellidosClient}),Object(r.jsx)("td",{children:this.props.obj.cedulaClient}),Object(r.jsx)("td",{children:this.props.obj.ciudadOrigenClient}),Object(r.jsx)("td",{children:this.props.obj.telefonoClient}),Object(r.jsx)("td",{children:this.props.obj.emailClient}),Object(r.jsx)("td",{children:this.props.obj.numPersonas}),Object(r.jsx)("td",{children:this.props.obj.infoHabitacion}),Object(r.jsx)("td",{children:this.props.obj.fechaIngreso}),Object(r.jsx)("td",{children:this.props.obj.fechaSalida}),Object(r.jsxs)("td",{children:[Object(r.jsx)(j.b,{className:"edit-link",to:"/editBooking/"+this.props.obj._id,children:"Edit"}),Object(r.jsx)(L.a,{onClick:this.deleteClient,size:"sm",variant:"danger",children:"Delete"})]})]})}}]),n}(a.Component),G=function(e){Object(f.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={students:[]},a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://backendhotel-backup.herokuapp.com/api/reserva/").then((function(t){e.setState({students:t.data})})).catch((function(e){console.log(e)}))}},{key:"DataTable",value:function(){return this.state.students.map((function(e,t){return Object(r.jsx)(F,{obj:e},t)}))}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"table-wrapper",children:Object(r.jsxs)(I.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Nombres"}),Object(r.jsx)("th",{children:"Apellidos"}),Object(r.jsx)("th",{children:"Cedula"}),Object(r.jsx)("th",{children:"Ciudad"}),Object(r.jsx)("th",{children:"Tel\xe9fono"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Num personas"}),Object(r.jsx)("th",{children:"Habitaciones"}),Object(r.jsx)("th",{children:"Fecha ingreso"}),Object(r.jsx)("th",{children:"Fecha salida"})]})}),Object(r.jsx)("tbody",{children:this.DataTable()})]})})}}]),n}(a.Component),H=n(5),P=function(e){Object(f.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).onChangeNombresCliente=a.onChangeNombresCliente.bind(Object(N.a)(a)),a.onChangeApellidosCliente=a.onChangeApellidosCliente.bind(Object(N.a)(a)),a.onChangeCedulaCliente=a.onChangeCedulaCliente.bind(Object(N.a)(a)),a.onChangeCiudadOrigenCliente=a.onChangeCiudadOrigenCliente.bind(Object(N.a)(a)),a.onChangeTelefonoCliente=a.onChangeTelefonoCliente.bind(Object(N.a)(a)),a.onChangeEmailCliente=a.onChangeEmailCliente.bind(Object(N.a)(a)),a.onChangeNumPersonasCliente=a.onChangeNumPersonasCliente.bind(Object(N.a)(a)),a.onChangeInfoHabitacionCliente=a.onChangeInfoHabitacionCliente.bind(Object(N.a)(a)),a.onChangeFechaIngresoCliente=a.onChangeFechaIngresoCliente.bind(Object(N.a)(a)),a.onChangeFechaSalidaCliente=a.onChangeFechaSalidaCliente.bind(Object(N.a)(a)),a.onSubmit=a.onSubmit.bind(Object(N.a)(a)),a.state={nombresClient:"",apellidosClient:"",cedulaClient:"",ciudadOrigenClient:"",telefonoClient:"",emailClient:"",numPersonas:"",infoHabitacion:"",fechaIngreso:"",fechaSalida:""},a}return Object(v.a)(n,[{key:"onChangeNombresCliente",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeApellidosCliente",value:function(e){this.setState({lastName:e.target.value})}},{key:"onChangeCedulaCliente",value:function(e){this.setState({id:e.target.value})}},{key:"onChangeCiudadOrigenCliente",value:function(e){this.setState({city:e.target.value})}},{key:"onChangeTelefonoCliente",value:function(e){this.setState({phone:e.target.value})}},{key:"onChangeEmailCliente",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeNumPersonasCliente",value:function(e){this.setState({num:e.target.value})}},{key:"onChangeInfoHabitacionCliente",value:function(e){this.setState({room:e.target.value})}},{key:"onChangeFechaIngresoCliente",value:function(e){this.setState({dateIngreso:e.target.value})}},{key:"onChangeFechaSalidaCliente",value:function(e){this.setState({dateSalida:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={nombresClient:this.state.name,apellidosClient:this.state.lastName,cedulaClient:this.state.id,ciudadOrigenClient:this.state.city,telefonoClient:this.state.phone,emailClient:this.state.email,numPersonas:this.state.num,infoHabitacion:this.state.room,fechaIngreso:this.state.dateIngreso,fechaSalida:this.state.dateSalida};S.a.post("https://backendhotel-backup.herokuapp.com/api/reserva/add",t).then((function(e){return console.log(e.data)})),this.setState({nombresClient:"",apellidosClient:"",cedulaClient:"",ciudadOrigenClient:"",telefonoClient:"",emailClient:"",numPersonas:"",infoHabitacion:"",fechaIngreso:"",fechaSalida:""}),alert("La reserva se ha realizado correctamente!")}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"form-wrapper",children:Object(r.jsxs)(H.a,{onSubmit:this.onSubmit,children:[Object(r.jsx)("h1",{children:"Datos personales"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"nombresClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Nombres"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.name,onChange:this.onChangeNombresCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"apellidosClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Apellidos"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.lastName,onChange:this.onChangeApellidosCliente})]})]}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"cedulaClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Documento de identidad"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.id,onChange:this.onChangeCedulaCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"ciudadOrigenClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Ciudad de origen"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.city,onChange:this.onChangeCiudadOrigenCliente})]})]}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"telefonoClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Tel\xe9fono"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.phone,onChange:this.onChangeTelefonoCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"emailClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Email"}),Object(r.jsx)(H.a.Control,{type:"email",value:this.state.email,onChange:this.onChangeEmailCliente})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h1",{children:"Informaci\xf3n sobre la reserva"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"numPersonas",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"N\xfamero de personas"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.num,onChange:this.onChangeNumPersonasCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"infoHabitacion",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Habitaciones"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.room,onChange:this.onChangeInfoHabitacionCliente})]})]}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"fechaIngreso",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Fecha de ingreso"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.dateIngreso,onChange:this.onChangeFechaIngresoCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"fechaSalida",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"fechaSalida"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.dateSalida,onChange:this.onChangeFechaSalidaCliente})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("center",{children:Object(r.jsx)(L.a,{variant:"danger",size:"lg",block:"block",type:"submit",children:"Reservar"})})]})})}}]),n}(a.Component),A={home:"/",login:"/login",register:"/register",account:"/account",bookings:"/bookings",booking:"/booking",admin:{users:"/admin/users"}};function E(){return Object(r.jsx)(u.a,{children:Object(r.jsxs)(C.a,{className:"mt-5",children:[Object(r.jsxs)(x.a,{xs:{span:12},md:{span:6},className:"mb-5",children:[Object(r.jsx)("h1",{children:" Hotel Aroma cafetera"}),Object(r.jsx)("p",{children:"Aca ira el apartado d e inicio del aplicativo web Eliana"}),Object(r.jsxs)("diV",{children:[Object(r.jsx)(j.b,{to:A.login,children:"Ingresar"})," para realizar las reservas en el Hotel"]})]}),Object(r.jsx)(x.a,{children:Object(r.jsx)("img",{className:"img-fluid",src:"/img/Aroma.svg",alt:"Logo aroma"})})]})})}var T={};function w(){var e=g().login;return Object(r.jsxs)(u.a,{children:[Object(r.jsx)("h1",{className:"shadow-sm text-success mt-5 p-3 text-center rounded",children:"Iniciar Sesion"}),Object(r.jsxs)(C.a,{className:"mt-5",children:[Object(r.jsx)(x.a,{lg:5,md:6,sm:12,className:"p-5 m-auto shadow-sm rounded-lg",children:Object(r.jsxs)(H.a,{children:[Object(r.jsxs)(H.a.Group,{controlId:"formBasicEmail",children:[Object(r.jsx)(H.a.Label,{children:"Nombre de Usuario"}),Object(r.jsx)(H.a.Control,{type:"email",placeholder:"Nombre de Usuario"})]}),Object(r.jsxs)(H.a.Group,{controlId:"formBasicPassword",children:[Object(r.jsx)(H.a.Label,{children:"Contrase\xf1a"}),Object(r.jsx)(H.a.Control,{type:"password",placeholder:"Contrase\xf1a"})]}),Object(r.jsx)("br",{}),Object(r.jsx)(L.a,{variant:"success btn-block",type:"submit",onClick:function(){return e(T)},children:"Login"})]})}),Object(r.jsx)(x.a,{children:Object(r.jsx)("img",{className:"img-fluid",src:"/img/Aroma.svg",alt:"Logo aroma"})})]})]})}function D(){return Object(r.jsx)(u.a,{children:Object(r.jsx)(C.a,{className:"mt-5",children:Object(r.jsxs)(x.a,{md:{span:6,offset:3},className:"text-center",children:[Object(r.jsx)("img",{style:{width:"100%"},src:"/img/404-not-found.svg",alt:"Error-404"}),Object(r.jsx)("h2",{children:"La pagina que buscas no ha sido encontrada"}),Object(r.jsxs)("p",{children:["Vuelve al ",Object(r.jsx)(j.b,{to:A.home,children:" inicio"})]})]})})})}function R(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"RegisterPage"})})}function z(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"UsersPage"})})}var B=n(104),U=n(105);function M(){var e=g().logout;return Object(r.jsxs)(B.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",bg:"dark",children:[Object(r.jsx)(B.a.Brand,{as:j.c,to:A.home,children:Object(r.jsx)("img",{src:"/img/Aroma.svg",width:"120",height:"50",className:"d-inline-block align-top",alt:"logo aroma cafetera"})}),Object(r.jsx)(B.a.Toggle,{"arial-conrols":"responsive-navbar-nav"}),Object(r.jsxs)(B.a.Collapse,{id:"responsive-navbar-nav",children:[Object(r.jsxs)(U.a,{className:"me-auto",children:[Object(r.jsx)(U.a.Link,{as:j.c,to:A.bookings,children:"Reservas"}),Object(r.jsx)(U.a.Link,{as:j.c,to:A.booking,children:"Listado reservas"}),Object(r.jsx)(U.a.Link,{as:j.c,to:A.admin.users,children:"Usuarios"})]}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(U.a.Link,{as:j.c,to:A.login,children:"Login"}),Object(r.jsx)(U.a.Link,{as:j.c,to:A.register,children:"Registrar"}),Object(r.jsx)(U.a.Link,{as:j.c,to:A.account,children:"Cuenta"}),Object(r.jsx)(U.a.Link,{to:A.account,onClick:e,children:"Cerrar Sesion"})]})]})]})}function _(e){var t=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(M,{}),t,Object(r.jsx)("h1",{children:"Footer"})]})}var J=n(2),V=n(3);function q(e){var t=e.hasRole,n=Object(V.a)(e,["hasRole"]),a=g(),s=a.hasRole,i=a.isLogged;return t&&!s(t)?Object(r.jsx)(b.a,{to:"/"}):i()?Object(r.jsx)(b.b,Object(J.a)({},n)):Object(r.jsx)(b.a,{to:"/login"})}function K(e){return(0,g().isLogged)()?Object(r.jsx)(b.a,{to:"/bookings"}):Object(r.jsx)(b.b,Object(J.a)({},e))}var Q=function(e){Object(f.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).onChangeNombresCliente=a.onChangeNombresCliente.bind(Object(N.a)(a)),a.onChangeApellidosCliente=a.onChangeApellidosCliente.bind(Object(N.a)(a)),a.onChangeCedulaCliente=a.onChangeCedulaCliente.bind(Object(N.a)(a)),a.onChangeCiudadOrigenCliente=a.onChangeCiudadOrigenCliente.bind(Object(N.a)(a)),a.onChangeTelefonoCliente=a.onChangeTelefonoCliente.bind(Object(N.a)(a)),a.onChangeEmailCliente=a.onChangeEmailCliente.bind(Object(N.a)(a)),a.onChangeNumPersonasCliente=a.onChangeNumPersonasCliente.bind(Object(N.a)(a)),a.onChangeInfoHabitacionCliente=a.onChangeInfoHabitacionCliente.bind(Object(N.a)(a)),a.onChangeFechaIngresoCliente=a.onChangeFechaIngresoCliente.bind(Object(N.a)(a)),a.onChangeFechaSalidaCliente=a.onChangeFechaSalidaCliente.bind(Object(N.a)(a)),a.onSubmit=a.onSubmit.bind(Object(N.a)(a)),a.state={nombresClient:"",apellidosClient:"",cedulaClient:"",ciudadOrigenClient:"",telefonoClient:"",emailClient:"",numPersonas:"",infoHabitacion:"",fechaIngreso:"",fechaSalida:""},a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://backendhotel-backup.herokuapp.com/api/reserva/getID/"+this.props.match.params.id).then((function(t){e.setState({name:t.data.nombresClient,lastName:t.data.apellidosClient,id:t.data.cedulaClient,city:t.data.ciudadOrigenClient,phone:t.data.telefonoClient,email:t.data.emailClient,num:t.data.numPersonas,room:t.data.infoHabitacion,dateIngreso:t.data.fechaIngreso,dateSalida:t.data.fechaSalida})})).catch((function(e){console.log(e)}))}},{key:"onChangeNombresCliente",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeApellidosCliente",value:function(e){this.setState({lastName:e.target.value})}},{key:"onChangeCedulaCliente",value:function(e){this.setState({id:e.target.value})}},{key:"onChangeCiudadOrigenCliente",value:function(e){this.setState({city:e.target.value})}},{key:"onChangeTelefonoCliente",value:function(e){this.setState({phone:e.target.value})}},{key:"onChangeEmailCliente",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeNumPersonasCliente",value:function(e){this.setState({num:e.target.value})}},{key:"onChangeInfoHabitacionCliente",value:function(e){this.setState({room:e.target.value})}},{key:"onChangeFechaIngresoCliente",value:function(e){this.setState({dateIngreso:e.target.value})}},{key:"onChangeFechaSalidaCliente",value:function(e){this.setState({dateSalida:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={nombresClient:this.state.name,apellidosClient:this.state.lastName,cedulaClient:this.state.id,ciudadOrigenClient:this.state.city,telefonoClient:this.state.phone,emailClient:this.state.email,numPersonas:this.state.num,infoHabitacion:this.state.room,fechaIngreso:this.state.dateIngreso,fechaSalida:this.state.dateSalida};S.a.put("https://backendhotel-backup.herokuapp.com/api/reserva/update/"+this.props.match.params.id,t).then((function(e){console.log(e.data),console.log("Client successfully updated"),alert("Client successfully updated")})).catch((function(e){console.log(e)})),this.props.history.push("/booking")}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"form-wrapper",children:Object(r.jsxs)(H.a,{onSubmit:this.onSubmit,children:[Object(r.jsx)("h1",{children:"Datos personales"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"nombresClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Nombres"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.name,onChange:this.onChangeNombresCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"apellidosClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Apellidos"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.lastName,onChange:this.onChangeApellidosCliente})]})]}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"cedulaClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Documento de identidad"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.id,onChange:this.onChangeCedulaCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"ciudadOrigenClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Ciudad de origen"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.city,onChange:this.onChangeCiudadOrigenCliente})]})]}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"telefonoClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Tel\xe9fono"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.phone,onChange:this.onChangeTelefonoCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"emailClient",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Email"}),Object(r.jsx)(H.a.Control,{type:"email",value:this.state.email,onChange:this.onChangeEmailCliente})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h1",{children:"Informaci\xf3n sobre la reserva"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"numPersonas",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"N\xfamero de personas"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.num,onChange:this.onChangeNumPersonasCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"infoHabitacion",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Habitaciones"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.room,onChange:this.onChangeInfoHabitacionCliente})]})]}),Object(r.jsxs)("div",{class:"input-group",children:[Object(r.jsxs)(H.a.Group,{controlId:"fechaIngreso",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"Fecha de ingreso"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.dateIngreso,onChange:this.onChangeFechaIngresoCliente})]}),Object(r.jsxs)(H.a.Group,{controlId:"fechaSalida",class:"col-xs-6 col-sm-6 col-md-6 px-4 py-2",children:[Object(r.jsx)(H.a.Label,{children:"fechaSalida"}),Object(r.jsx)(H.a.Control,{type:"text",value:this.state.dateSalida,onChange:this.onChangeFechaSalidaCliente})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("center",{children:Object(r.jsx)(L.a,{variant:"danger",size:"lg",block:"block",type:"submit",children:"Actualizar"})})]})})}}]),n}(a.Component);function W(){return Object(r.jsx)(j.a,{children:Object(r.jsx)(_,{children:Object(r.jsxs)(b.d,{children:[Object(r.jsx)(K,{exact:!0,path:A.home,component:E}),Object(r.jsx)(K,{exact:!0,path:A.login,component:w}),Object(r.jsx)(q,{exact:!0,path:A.register,component:R}),Object(r.jsx)(q,{exact:!0,path:A.account,component:p}),Object(r.jsx)(q,{exact:!0,path:A.bookings,component:P}),Object(r.jsx)(q,{exact:!0,path:A.booking,component:G}),Object(r.jsx)(q,{exact:!0,path:"/editBooking/:id",component:Q}),Object(r.jsx)(q,{hasRole:l.admin,exact:!0,path:A.admin.users,component:z}),Object(r.jsx)(b.b,{path:"*",component:D})]})})})}n(98);var X=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(h,{children:Object(r.jsx)(W,{})})})};n(99);o.a.render(Object(r.jsxs)(s.a.StrictMode,{children:[Object(r.jsx)(X,{}),","]}),document.getElementById("root"))},69:function(e,t,n){},98:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.81f96ef2.chunk.js.map