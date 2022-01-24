let count = 1; try {//**%"$#%"$#%"#$%"#%"#&%#"%$"!#"//

((_) => console.log(_)) ("Desafio "+count+++" Palabras de SoloLearnApp Javascript Course!");/*//!()==>@1
Estás haciendo un encriptador de texto. Debería tomar múltiples palabras y producir una versíon combinada,
Donde cada palabra está separada por un signo de dólar $. Por ejemplo, para las palabras "helo", "how", "are", "you"
La salida debe ser "$hello$how$are$you$". El codigo dado declara una clase llamada Add, con un constructor
que toma un parametro de descanso. Completa el codigo añadiendo un metodo print() a la clase, que deberia imprimir
la salida solicitada.
*/

class Add {
  constructor(...words) {
    this.words = words;
  }
  //?Escrite tu codigo aqui?  ||
  //?                         \/
  //! Resuelto !/
  print() {
    var str = "";
    for (var i = 0; i < this.words.length; i++) {
      str += "$" + this.words[i].join("$");
    }
    str += "$";
    console.log(str);
  }
  //! Resuelto !/
}
var x = new Add(["hehe", "hoho", "haha", "hihi"]);
var y = new Add(["this", "is", "awesome", "haha!"]);
var z = new Add([ "lorem", "ipsum", "dolor", "sit", "bla", "bla", "bla", "bla", ]);

x.print();
y.print();
z.print();

/* Output */
//     $hehe$hoho$haha$hihi$
//     $this$is$awesome$haha!$
//     $lorem$ipsum$dolor$shit$bla$bla$bla$a$bla$a$bla$a$bla$

((_) => console.log(_))("\nDesafio "+count+++" Planeador de viajes de SoloLearnApp Javascript Course!"); /*//!()==>@2 
Necesitas planear un viaje por carretera. Estás viajando a una velocidad media de 40 millas por hora.
Dada la una distancia en millas como entrada (el código para tomar la entrada ya está presente),
envía a la consola el tiempo que le tomará cubrir en minutos.
! Explicacíon:  se tomarán 150/40 = 3.75 horas para cubrir la distancia, que es equivalente a 
!               3.75*60 = 225 minutos.
*/

const readLine = (distanciaEnMillas) => {
  let tiempo = distanciaEnMillas / 40;
  return (tiempoEnMinutos = tiempo * 60);
};

function main(distanciaArecorrer) {
  var distancia = parseInt(readLine(distanciaArecorrer), 10);
  //? tu codigo va aquí
  console.log(`tiempo: ${distancia} minutos`);
}
const d1 = main(850);
const d2 = main(100);
const d3 = main(4128);

// function SolutionOnAndroid(dist) {
//   var distance = parseInt(readLine(), 10);             //The test on App its implicit 
//   const speed = 40
//   const time = dist/speed
//   const timeInMinutes = time * 60
//   console.log(timeInMinutes)
// }
// SolutionOnAndroid(850) // Example

// function Hack() {                                      //!it Works in SoloLearn
//   var distance = parseInt(readLine(), 10);
//   console.log((distance/40)*60)
// }
// Hack()

((_) => console.log(_))("\nDesafio "+count+++" el caracol en el pozo de SoloLearnApp Javascript Course!"); /*//!()==>@3
El caracol sube 7 pies cada día y retrocede 2 pies cada noche. ¿Cuantos días le tomará al caracol.
salir de un pozo con la profundidad dada?
//? Explicacion: desglosemos la distancia que el caracol cubre cada dia:
*              Día 1: 7-2 = 5
*              Día 2: 5+7-2 = 10
*              Día 3: 10+7-2 = 15
*              Día 4: 15+7-2 = 20
*              Día 5: 20+7-2 = 25
*              Día 6: 25+7-2 = 32
* Así que, en el día 6 el caracol alcanzará los 32 pies y saldrá del pozo durante el día,
* sin volver a resbalar esa noche.*/

//! Pista: puedes usar un bucle para calcular la distancia que el caracol cubre cada día, y romper el bucle
//!        cuando alcanza la distancia deseada.
class Caracol {
  constructor(depth,velocidadCaracol,name) {
    this.name = name;
    this.depth = depth;
    this.velocidadCaracol = velocidadCaracol;
  }
  dias() {
      var day = 0;
      var total = 0;
    while(total<this.depth){
        day = day + 1;
        total = total + this.velocidadCaracol;
      if(total >= this.depth){
        return day;
        break;
      }
    total = total - 2;
    }
  }
}
const caracol1 = new Caracol(42, 7, '"#$%"$#%"#$%$"#%"#$');
const caracol4 = new Caracol(122, 18, '879785069786508759');
console.log(`El caracol ${caracol1.name} tarda`,`${caracol1.dias()} dias en salir del pozo de profundidad ${caracol1.depth} pies`);
console.log(`El caracol ${caracol4.name} tarda`,`${caracol4.dias()} dias en salir del pozo de profundidad ${caracol4.depth} pies`);

// function dias(depth) {
//     var depth = parseInt(depth, 10);
//     var day = 0;
//     var total = 0;
//   while(total<depth){
//       day = day + 1;
//       total = total + 7;
//     if(total >= depth){
//       return day;
//       break;
//     }
//   total = total - 2;
//   }
// }
// const prueba1 = dias(42)
// const prueba2 = dias(142)
// console.log(`El caracol tardará ${prueba1} dias en salir del pozo `);
// console.log(`El caracol tardará ${prueba2} dias en salir del pozo `);

((_) => console.log(_))("\nDesafio "+count+++" Conversor de monedas SoloLearnApp Javascript Course!"); /*//!()==>@4
Estas haciendo una app de conversion de monodeas. Crea una funcion llamada convert, que toma dos parametros:
la cantidad a convertir, y la tasa, y devuelve la cantidad resultante. El codigo para tomar los parametros 
como entrada y llamar a la funcion ya esta presnete en el Playground. Crea la funcion para hacer que el codigo
funcione.*///! Pista: La conversion de 100 a una tasa de 1.1 es igual a 100*1.1 = 110
class Conversor {
  constructor(input,tasa) {
    this.input = input;
    this.tasa = tasa;
  }
  tasaResult() {
    return (this.input*this.tasa).toFixed(2);
  }
  pesos() {
    return (this.input*4000).toFixed(2);
  }
  jen() {
    return (this.input*113.87).toFixed(2);
  }
}

const pesos = new Conversor(100, 1.1)
const dollar = new Conversor(100, 1.1)
const yen = new Conversor(100)
console.log(`input ${pesos.input} dollar$`,`tasa ${pesos.tasa} === ${pesos.tasaResult()}`);
console.log(`input ${dollar.input} dollar$`,`tasa ${dollar.tasa} === ${dollar.tasaResult()} === ${dollar.pesos()} Pesos`);
console.log(`input ${yen.input} dollar$`,`=== ${yen.jen()} jpy`);

((_) => console.log(_))("\nDesafio "+count+++" Gestion de contacto SoloLearnApp Javascript Course!"); /*//!()==>@5
Estas trabajando en una app de gestion de contactos. Has creado el objeto constructor contact, que tiene dos
argumentos, name and number. Necesitas añadir un metodo print() al objeto, que emitira los datos de contacto
a la consola en el siguiente formato name:number el codigo dado declara dos objetos y llama a sus metodos print()
Completa el codigo definiendo el metodo print() para los objetos.
funcione.*///! Pista: observa el espacio despues de los puntos, al genera los datos del contacto.
class Contact {
  constructor(name,number,correo){
    this.name = name;
    this.number = number;
    this.correo = correo;
  }
  contact() {
    console.log(`${this.name}: ${this.number}`)
  }
  getCorreo(){
    console.log(this.correo)
  }
  getFull(){
    console.log("\n$$$$$$$$$$$$$$$$CONTACTSAPP$$$$$$$$$$$$$$\n"+"$\t"+"Name: "+this.name+"\t\t$\n"+
    "$\t"+"Number: "+this.number,"\t\t$\n"+
    "$\t"+"Mail: "+this.correo,"\t\t$\n"+
    "$$$$$$$$$$$$$$$$CONTACTSAPP$$$$$$$$$$$$$$")
  }
  getFlat(){
    console.log("\n\t",`Name: ${this.name}`,`Number: ${this.number} Mail: ${this.correo}`)
  }
}
const rodrigoMoreno = new Contact('Rodrigo Moreno', "+123falso456","mail@falso.com")
const nikolaTesla = new Contact('Nikola Tesla', "+3693369","3693@63636.999")

rodrigoMoreno.contact();
rodrigoMoreno.getCorreo();
nikolaTesla.contact();
nikolaTesla.getCorreo();
rodrigoMoreno.getFull();
rodrigoMoreno.getFlat();
nikolaTesla.getFull();


((_) => console.log(_))("\nDesafio "+count+++" Gestion de tienda SoloLearnApp Javascript Course!"); /*//!()==>@6
Estas trabajando en un programa de gestion de tiendas, que almacena los precios en un matriz,
Necesitas añadir una funcionalidad para aumentar los precios en la cantidad dada. La variable increase es tomada
de la entrada del usuario. Es necesario aumentar los precios de la matrix dada en esa cantidad y entregar a la
consola la matrix resultante.*/
//! Pista: usa un bucle para iterar a trave de la matriz y aumentar todos los elementos.
function tienda(increase){
  var prices = [98.99, 15.2, 20, 1026];
  var ofertaAlPublico = prices.map( (objetoPrices)=>objetoPrices+increase, [] )
  console.log(" !Aproveche! ");
  console.log("Precios de oferta: ",ofertaAlPublico);
}
tienda(10)

} catch (error) {
	console.error(error.stack, "\n[*] " + error.name, "\n[*] " + error.message);
}