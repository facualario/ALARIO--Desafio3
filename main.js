

// Pido el nombre al usuario para darle la bienvenida a la pagina web de insumos informaticos/


let name = prompt("Bienvenido/a a Insumos Informaticos, por favor identifiquese con su nombre:");

while ( name === "") {

    name= prompt ( "No ha ingresado nada, por favor ingrese su nombre para poder continuar")
}


// Se le soicita al usuario que seleccione una de las 3 acciones que puede realizar dentro de la pagina, que son la compra, alquiler o la devolucion de insumos informaticos.


alert ( "Hola " + name + " ingrese a continuación la acción que desea realizar")


let accion = prompt("Escriba la accion que desea realizar: compra, alquiler o devolucion")


// Se incorpora un switch para que dependiendo de la accion que el usuario ingrese, sea la informacion que tenga que brindar 

  
    
switch (accion) {

    case "compra": // en el caso de comprar se solicitara la cantidad y para el dia que lo necesita

    let amount = prompt(" Ingrese la cantidad de componentes que necesita");

    while ( amount === "") {

        amount= prompt ( "No ha ingresado nada, por favor ingrese la cantidad de componentes para poder continuar");
    }

    let datecompra = prompt ("Ingrese para el dia que lo necesita");

    while ( datecompra === "") {

        datecompra= prompt ( "No ha ingresado nada, por favor ingrese un dia de la semana para poder continuar");
    }

    alert ( "Informacion ingresada correctamente");

    console.log ( "Cantidad: "+ amount+ " para el dia " + datecompra)

    break;

    case "alquiler" : // en el caso de alquilar se solicitara la cantidad y para el dia que lo necesita y el dia de devolucion estimada

    let amountalquiler = prompt(" Ingrese la cantidad de componentes que necesita");

    while ( amountalquiler === "") {

        amountalquiler= prompt ( "No ha ingresado nada, por favor ingrese la cantidad de componentes para poder continuar");
    }

    let datealquiler = prompt ("Ingrese para el dia que necesita alquilarlos");

    while ( datealquiler === "") {

        datealquiler= prompt ( "No ha ingresado nada, por favor ingrese un dia de la semana para poder continuar");
    }

    let devolucionalquiler = prompt ("Ingrese el dia que estima devolverlos");

    while ( devolucionalquiler === "") {

        devolucionalquiler= prompt ( "No ha ingresado nada, por favor ingrese un dia de la semana para poder continuar");
    }

    console.log ( "Cantidad: "+ amountalquiler + " para el dia " + datealquiler + " con devolucion estimada para el dia " + devolucionalquiler )

        alert ( "Informacion ingresada correctamente");

    break;

    case "devolucion" : // en el caso de devolucion se solicitara el dia que quiera devolverlo

        let datedevolucion = prompt ("Ingrese el dia que estima devolverlos");

    while ( datedevolucion === "") {

        datedevolucion= prompt ( "No ha ingresado nada, por favor ingrese un dia de la semana para poder continuar");
    }

        alert ( "Informacion ingresada correctamente");

        console.log ( "Devolucion estimada para el dia " + datedevolucion )

    break;

   default : alert("Opcion no valida");

   

   break;
   }



// Se le agradece por la informacion y se le avisa que un vendedor se contactara con el para asesorarlo como asi tambien se le indica como ingresar a la informacion que ingreso


document.write ("Muchas gracias! Si la informacion ingresada no es valida por favor refresque la pagina e ingrese una opcion valida, de lo contrario un vendedor se pondrá en contacto con usted a la brevedad, mientras tanto puede revisar la informacion ingresada haciendo click derecho, inspeccionar e ingresando en la pestaña de console" )

