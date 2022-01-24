```
// 52345423897206274360742352
//  ╦┌─┐┬  ┬┌─┐╔═╗┌─┐┬─┐┬┌─┐┌┬┐ 
//  ║├─┤└┐┌┘├─┤╚═╗│  ├┬┘│├─┘ │
// ╚╝┴ ┴ └┘ ┴ ┴╚═╝└─┘┴└─┴┴   ┴
// ╔═╗┌─┐┬  ┌─┐╦  ┌─┐┌─┐┬─┐┌┐┌
// ╚═╗│ ││  │ │║  ├┤ ├─┤├┬┘│││
// ╚═╝└─┘┴─┘└─┘╩═╝└─┘┴ ┴┴└─┘└┘
// 54725089475037608707085338
```
### Conceptos basicos
#### **Planeador de viajes** SoloLearnApp Javascript Course! //!(.js)==>@2 
Necesitas planear un viaje por carretera. Estás viajando a una velocidad media de 40 millas por hora.  Dada la una distancia en millas como entrada (el código para tomar la entrada ya está presente), envía a la consola el tiempo que le tomará cubrir en minutos.
```
! Explicacíon:  se tomarán 150/40 = 3.75 horas para cubrir la distancia, que es equivalente a 
!               3.75*60 = 225 minutos.
```

### Condicionales y blucles
#### **El caracol en el pozo**                     //!(.js)==>@3 
El caracol sube 7 pies cada día y retrocede 2 pies cada noche. ¿Cuantos días le tomará al caracol.  salir de un pozo con la profundidad dada?
```
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
```
### Funciones  
#### **Conversor de monedas**                       //!(.js)==>@4 
Estas haciendo una app de conversion de monedas. Crea una funcion llamada convert, que toma dos parametros: la cantidad a convertir, y la tasa, y devuelve la cantidad resultante. El codigo para tomar los parametros como entrada y llamar a la funcion ya esta presnete en el Playground. Crea la funcion para hacer que el codigo funcione.

```
//! Pista: La conversion de 100 a una tasa de 1.1 es igual a 100*1.1 = 110
```
### Objetos 
#### **Gestion de Contactos**                     //!(.js)==>@5 
Estas trabajando en una app de gestion de contactos. Has creado el objeto constructor contact, que tiene dos argumentos, name and number. Necesitas añadir un metodo print() al objeto, que emitira los datos de contacto a la consola en el siguiente formato name: number el codigo dado declara dos objetos y llama a sus metodos print() Completa el codigo definiendo el metodo print() para los objetos.  funcione.

```
//! Pista: observa el espacio despues de los puntos, al generar los datos del contacto.
```

### Objetos escenciales 
#### **Gestion de tienda**            //!(.js)==>@6 
Estas trabajando en un programa de gestion de tiendas, que almacena los precios en un matriz, Necesitas añadir una funcionalidad para aumentar los precios en la cantidad dada. La variable increase es tomada de la entrada del usuario. Es necesario aumentar los precios de la matrix dada en esa cantidad y entregar a la consola la matrix resultante.
```
//! Pista: usa un bucle para iterar a trave de la matriz y aumentar todos los elementos.
```
### ECMAScript 6
#### **Palabras**            //!(.js)==>@1 
Estás haciendo un encriptador de texto. Debería tomar múltiples palabras y producir una versíon combinada, Donde cada palabra está separada por un signo de dólar $. Por ejemplo, para las palabras "helo", "how", "are", "you" La salida debe ser "$hello$how$are$you$". El codigo dado declara una clase llamada Add, con un constructor que toma un parametro de descanso. Completa el codigo añadiendo un metodo print() a la clase, que deberia imprimir la salida solicitada.