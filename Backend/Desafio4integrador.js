/*Desafío integrador:
●Registro de usuario:
-Nombre 
-Mail
-Contraseña 
-Mensaje (Ejemplo: "Se ha registrado exitosamente el usuario ....")

●Inicio de sesión:
-Mail 
-Contraseña 
-Mensaje (Ejemplo: ¡Hola ..., bienvenido a nuestro sitio!)

●Actualizar contraseña:
-Mail 
-Contraseña 
-Nueva contraseña 
-Mensaje ("Se ha actualizado la contraseña para el correo ....")//
*/
alert("Bienvenido a nuestro sitio");
alert("Ingrese los siguientes datos para registrarse");

let Nombre;
let Mail;
let Contraseña;
let contraseñaNueva

function RegistroUser() {
    Nombre = prompt("Ingrese su nombre");
    while (Nombre.trim() === "") {
        alert("Por favor, ingrese un nombre válido.");
        Nombre = prompt("Ingrese su nombre");
    }
    
    Mail = prompt("Ingrese su mail");
    while (Mail.trim() === "") {
        alert("Correo electrónico no válido.");
        Mail = prompt("Ingrese su mail");
    }
    Contraseña = prompt("Ingrese una contraseña");
    while (Contraseña.trim() === "") {
        alert("Por favor, llenar el campo con caracteres válidos.");
        Contraseña = prompt("Ingrese una contraseña");
    }
    alert("Se ha registrado exitosamente el usuario " + Nombre);
}
RegistroUser();
function cambiarContraseña () {
    Contraseña = prompt("Ingrese una contraseña nueva");
    while (Contraseña.trim() === "") {
        alert("Por favor, llenar el campo con caracteres válidos.");
        Contraseña= prompt("Ingrese una contraseña nueva");
        Contraseña=contraseñaNueva
    }
    alert("Se ha actualizado la contraseña para el correo " + Nombre) + ",ingrese sesión nuevamente.";
}

function Inicio() {
    let MailVer = prompt("Ingrese su mail");
    let ContraseñaVer = prompt("Ingrese su contraseña");
    
    while (MailVer !== Mail || ContraseñaVer !== Contraseña) {
        let opcion = prompt("Mail o contraseña incorrectos. Presione '1' si se olvidó su contraseña y desea cambiarla. Sino desea cambiarla presione '2'.");
        
        if (opcion === "1") {
            cambiarContraseña();
            MailVer = prompt("Ingrese su mail"); 
            ContraseñaVer = prompt("Ingrese su contraseña"); 
        } else if (opcion === "2") {
            alert("Intente nuevamente.");
            MailVer = prompt("Ingrese su mail"); 
            ContraseñaVer = prompt("Ingrese su contraseña"); 
        } else {
            alert("Opción no válida. Por favor, ingrese de nuevo.");
            MailVer = prompt("Ingrese su mail"); 
            ContraseñaVer = prompt("Ingrese su contraseña");
        }
    }
    
    alert("Hola " + Nombre + ", bienvenido de nuevo.");
}

Inicio();
