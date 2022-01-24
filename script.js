((e) => console.log(e))("Empecemos!");
// try {//**%"$#%"$#%"#$%"#%"#&%#"%$"!#"s*/

//! Instanciar()=====> Detalles personalizados === Hackear una clase;

/* Objeto estudiante */
const Lorena = {
  name: "Angie Lorena",
  age: 18,
  approvedCourses: ["Curso Poo", "Html Css"],
  app: 18,
  addCouse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

Lorena.approvedCourses.push('Responsive Desing')
Lorena.addCouse('Introudccion a NodeJs')
console.log(Lorena);

function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;
  // /* Ejemplo1| */
  // this.aprovarCurso = function (nuevoCurso){
  //   this.cursosAprovados.push(nuevoCurso);
  // }
}

Student.prototype.approvedCourse = function (nuevoCurso){
  this.approvedCourses.push(nuevoCurso);
}

Student.prototype.removeLast = () => this.approvedCourses.pop();

Student.prototype.removeOneCourse = function(course) {
  let found = this.approvedCourses.find((e) => e === course);
  let foundInd = this.approvedCourses.indexOf(found);
  return this.approvedCourses.splice(foundInd, 1)
}

const Juanita = new Student('Juanita Alejandra', 18, [
  "Curso de Tailwind Css",
  "Curso Css Grid",
  "Hacking etico",
]);
console.log(Juanita);
Juanita.removeOneCourse('Curso Css Grid');
console.log(Juanita);

//! ╔═╗┬  ┌─┐┌─┐┌─┐  ┌─┐┬  ┌─┐┌┬┐┌─┐┬╔═╗┌┬┐┬ ┬┌┬┐┌─┐┌┐┌┌┬┐
//! ║  │  ├─┤└─┐└─┐  ├─┘│  ├─┤ │ ┌─┘│╚═╗ │ │ │ ││├┤ │││ │
//! ╚═╝┴─┘┴ ┴└─┘└─┘  ┴  ┴─┘┴ ┴ ┴ └─┘┴╚═╝ ┴ └─┘─┴┘└─┘┘└┘ ┴
class StudentPlatzi {
  constructor({
    name,
    age,
    email,
    approvedCourses,
    }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.approvedCourses = [];
  }
  courseApproved(nuevoCurso) {
    this.approvedCourses.push(nuevoCurso);
  };
}
StudentPlatzi.prototype.approvedCourse = function (nuevoCurso){
  this.approvedCourses.push(nuevoCurso);
}
const rodrigoMoreno = new StudentPlatzi({
  name: 'Rodrigo Moreno', 
  age: 10,
  email: 'wtf@Javascript.com',
  approvedCourses: [
    'Nodejs',
    'Hacking Etico',
    'Javascript Profesional',
  ],
});
rodrigoMoreno.approvedCourse('Aws')
rodrigoMoreno.courseApproved('Javascript profesional')
console.log(rodrigoMoreno);

const Batman = {
  name: 'JuanDc', 
  username: 'Batman',
  age: 12,
  points: 100,
  email: 'batman@Js.com',
  socialMedia: {
    twitter: '@Batman',
    instagram: '@BatmanInst',
    facebook: '@BatFace',
    twitch: undefined,
  },
  approvedCourses: [
    "Curso html, css",
    "Curso Practicohtml, css"
  ],
  learningPaths: [
    {
      name: "Escuela de desarrollo",
      courses: [
        "Curso Html",
        "Curso Css",
      ]
    },
    {
      name: "Escuela de videojuegos",
      courses: [
        "VideoJuegos",
        "VideoJuegos2",
      ],
    }
  ]
};
console.log(Batman);


//! Abstraccion()=====> class === plantillaObjeto;
class PlatziStudent {
  constructor({
      name,
      email,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
  }){
      this.name = name;
      this.email = email;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    };
};
class LearningPaths {
  constructor({
      escuelaName,
      escuelaCursos = [],
  }){
      this.escuelaName = escuelaName;
      this.escuelaCursos = escuelaCursos;
  };
};

//! Encapsulacion()=====> limitar,guardar,proteger === esconder metodos y atributos;
class Course {
  constructor({
      courseName,
      classes = [],
  }){
      this._courseName = courseName;
      this.classes = classes;
  };
  get courseName(){
    return this._courseName;
  };
  set courseName(newName) {
    if (newName === "Curso Malo"){
      console.error("Imposible cambiar el nombre");
    }
    else {
      this._courseName = newName;
    }
  };
};
const unity3d = new Course({courseName: 'Curso de Unity4d', classes: ["Profesional unity4d"]});
const basicoAlgoritmos = new Course({courseName: 'Basico de algoritmos', classes: ["clase1","clase2","clase3","clase4"]});

const desarrolloWeb = new LearningPaths({
  escuelaName: 'Escuela de desarrollo web',
  escuelaCursos: {curso1: 'introduccion Js', curso2: 'Introduccion Patrones de diseño'},
});

const dataScience = new LearningPaths({
  escuelaName: 'Escuela de data science',
  escuelaCursos: {curso1: 'introduccion dataScience', curso2: 'basico python'},
});

const videojuegos = new LearningPaths({
  escuelaName: 'Escuela de data videojuegos',
  escuelaCursos: [unity3d, basicoAlgoritmos],
});

const Juan = new PlatziStudent({
  name: "Jdc",
  username: "Jdc",
  email: "Jdc",
  twitter: "@Jdc",
});

const Juan1 = new PlatziStudent({
  name: "JuanDc",
  username: "Juan_Dc_Es_Batman",
  email: "fake@123.com",
  twitter: "@fdc",
  instagram: undefined,
  facebook: undefined,
  learningPaths: [
    desarrolloWeb,
    dataScience,
    videojuegos,
  ],
});

const Juan2 = new PlatziStudent({
  name: "Juan2",
  username: "Juan222",
  email: "Juan@222.com",
  approvedCourses: { name: "course1" },
  learningPaths: [
    videojuegos,
  ],
});

console.log(Juan1);
console.log(Juan2);


//! Encapsulacion()=====> limitar,guardar,proteger === esconder metodos y atributos;
class Counter {
  constructor(privateCounter) {
    this._privateCounter = privateCounter;
  };
  changeBy(val) {
    this._privateCounter += val;
  };

  get value(){
    return this._privateCounter;
  };
  
  set increment(num) { this.changeBy(num) };
  set decrement(num) { this.changeBy(-num) };

}

const c = new Counter(1);
console.log("Intento modificar value = ", c.value=10, 'fallido c =', c.value );
console.log("Si modifica incrementa: ", c.increment=3, "c = ", c.value);
console.log("Si modifica decrementa: ", c.decrement=3, "c = ", c.value);

//! Encapsulacion()=====> limitar,guardar,proteger === esconder metodos y atributos;
const counter = (() => {
  let privateCounter = 0;
  function changeBy(val) {
    return privateCounter += val;
  }

  return {
    increment: () => changeBy(1),
    decrement: () => changeBy(-1),
    value: () => privateCounter,
  }
});

console.log('counter = ', counter().value())  //0.
console.log('counterIncrease = ', counter().increment(), 'counterDecrease = ',counter().decrement());


// } catch (error) {
// 	console.error(error.stack, "\n[*] " + error.name, "\n[*] " + error.message);
// }
