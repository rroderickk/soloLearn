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
  // this.aprobarCurso = function (nuevoCurso){
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

//! Herencia()=====>  === ;
class FreeStudent extends PlatziStudent {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    }
    else {
      console.warn(this.name, ' Este curso no esta permitido para subscription: ', newCourse.isFreeTag);
    }
  }
}

class BasicStudent extends PlatziStudent {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "English") {
      this.approvedCourses.push(newCourse);
    }
    else {
      console.warn(this.name, ' Este curso no esta permitido para subscription: ', newCourse.isBasicTag);
    }
  }
}

class ExpertStudent extends PlatziStudent {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
};


//! Encapsulacion()=====> limitar,guardar,proteger === esconder metodos y atributos;
class Course {
  constructor({
      courseName,
      classes = [],
      isFree = false,
      isBasic = false,
      lang = "Spanish",
      isFreeTag = "Free-Suscription",
      isBasicTag = "Basic-Suscription",
  }){
      this._courseName = courseName;
      this.classes = classes;
      this.isFree = isFree;
      this.isBasic = isBasic;
      this.lang = lang;
      this.isFreeTag = isFreeTag;
      this.isBasicTag = isBasicTag;
  };

  get courseName() {
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

function videoPlay(id) {
  const urlSecreta = "https://www.youtube.com/watch?v=mCdA4bJAGGk"+id;
  console.log("VideoPlaying: "+ urlSecreta);
}

function videoPause(id) {
  const urlSecreta = "https://www.youtube.com/watch?v=mCdA4bJAGGk"+id;
  console.log("VideoPausado: "+ urlSecreta);
}

class Classes {
  constructor({
      classeName,
      puntuacion, 
      videoId,
  }){
      this._classeName = classeName;
      this.puntuacion = puntuacion;
      this.videoId = videoId;
  };

  get courseName(){
    return this._classeName;
  };

  set classeName(newName) {
    if (newName === `Clase mala de ${newName}`){
      console.error("Dont' Change name");
    }
    else {
      this._classeName = newName;
    }
  };

  play() {
    videoPlay(this.videoId);
  };
  pause() {
    videoPause(this.videoId);
  };

};
const clasePoo1 = new Classes( { claseName: 'Curso Poo: C1',  puntuacion: 'Five$$$$$', videoId: '54khkj54243' } );
const clasePoo2 = new Classes( { claseName: 'Curso Poo: C2',  puntuacion: 'Five$$$$$', videoId: '2435l43hljk' } );
const clasePoo3 = new Classes( { claseName: 'Curso Poo: C3',  puntuacion: 'Five$$$$$', videoId: '5243kh5l564' } );
const clasePoo4 = new Classes( { claseName: 'Curso Poo: C4',  puntuacion: 'Four$$$$' , videoId: '542jklh8964' } );
const clasePoo5 = new Classes( { claseName: 'Curso Poo: C5',  puntuacion: 'Five$$$$$', videoId: '45h2kly3243' } );
const clasePoo6 = new Classes( { claseName: 'Curso Poo: C6',  puntuacion: 'Five$$$$$', videoId: '5hi4uy89rfv' } );
const clasePoo7 = new Classes( { claseName: 'Curso Poo: C7',  puntuacion: 'Five$$$$$', videoId: 'trhnwr78243' } );
const clasePoo8 = new Classes( { claseName: 'Curso Poo: C8',  puntuacion: 'Five$$$$$', videoId: 'thg98vhj243' } );
const clasePoo9 = new Classes( { claseName: 'Curso Poo: C9',  puntuacion: 'Five$$$$$', videoId: 'h589oi83243' } );
const clasePoo10 =new Classes( { claseName: 'Curso Poo: C10', puntuacion: 'FiveStars', videoId: '4oiugfuib43' } );
const clasePooECMAScript6 = new Classes( { claseName: 'Curso Poo: C11', puntuacion: 'FiveStars', videoId: '24352345243' } );

clasePooECMAScript6.classeName = 'Video Explicacion de que es ECMAScript6',
clasePoo1.classeName = 'JavaScript: orientado a objetos, basado en prototipos';
clasePoo2.classeName = 'Qué es programación orientada a objetos';
clasePoo3.classeName = 'Qué es un objeto en JavaScript';
clasePoo4.classeName = 'Objetos literales y prototipos en JavaScript';
clasePoo5.classeName = 'Clases en javascript';
clasePoo6.classeName = 'Objetos, clases y prototipos';
clasePoo7.classeName = 'Ventajas de la programacion orientada a objetos';
clasePoo8.classeName = 'Abstraccion en Javascript';
clasePoo9.classeName = 'Encapsulamiento en Javascript';
clasePoo10.classeName = 'Getters y Setters en Javascript';

const unity3d = new Course({
  courseName: 'Curso de Unity4d',
  classes: ["Profesional unity4d"],
  isBasic: true,
  lang: "English",
});
const basicoAlgoritmos = new Course({
  courseName: 'Basico de algoritmos',
  classes: ["clase1","clase2","clase3","clase4"],
  isFree: true,
});

const Poo = new Course({
  courseName: 'Programacion Orientada a objetoss con Javascript',
  classes: [
    clasePoo1,
    clasePoo2,
    clasePoo3,
    clasePoo4,
    clasePoo5,
    clasePoo6,
    clasePoo7,
    clasePoo9,
    clasePoo10,
    clasePooECMAScript6,
    clasePooECMAScript6.play(),
    clasePooECMAScript6.pause(),
  ],
  isFreeTag: 'Free-Trial',
  lang: 'English',
});

const desarrolloWeb = new LearningPaths({
  escuelaName: 'Escuela de desarrollo web',
  escuelaCursos: {
    curso1: 'introduccion Js',
    curso2: 'Introduccion Patrones de diseño'
  },
});

const dataScience = new LearningPaths({
  escuelaName: 'Escuela de data science',
  escuelaCursos: {curso1: 'introduccion dataScience', curso2: 'basico python'},
});

const videojuegos = new LearningPaths({
  escuelaName: 'Escuela de data videojuegos',
  escuelaCursos: [unity3d, basicoAlgoritmos],
});

const Juan = new ExpertStudent({
  name: "Jdc",
  username: "Jdc",
  email: "Jdc",
  twitter: "@Jdc",

  learningPaths: [
    videojuegos,
    Poo,
  ],
});
console.log(Juan);

const Juan1 = new BasicStudent({
  name: "Juan1Dc",
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

const Juan2 = new FreeStudent({
  name: "Juan2",
  username: "Juan222",
  email: "Juan@222.com",

  learningPaths: [
    videojuegos,
    Poo,
  ],
});
Juan2.approveCourse(Poo);
console.log(Juan1.approveCourse(Poo));

//!╔═╗┌┐┌┌─┐┌─┐┌─┐┌─┐┬ ┬╦  ┌─┐┌─┐┬┌─┐┌┐┌
//!║╣ ││││  ├─┤├─┘└─┐│ │║  ├─┤│  ││ ││││
//!╚═╝┘└┘└─┘┴ ┴┴  └─┘└─┘╩═╝┴ ┴└─┘┴└─┘┘└┘
// //! Encapsulacion()=====> limitar,guardar,proteger === esconder metodos y atributos;
// class Counter {
//   constructor(privateCounter) {
//     this._privateCounter = privateCounter;
//   };
//   changeBy(val) {
//     this._privateCounter += val;
//   };

//   get value(){
//     return this._privateCounter;
//   };
  
//   set increment(num) { this.changeBy(num) };
//   set decrement(num) { this.changeBy(-num) };

// }

// const c = new Counter(1);
// console.log("Intento modificar value = ", c.value=10, 'fallido c =', c.value );
// console.log("Si modifica incrementa: ", c.increment=3, "c = ", c.value);
// console.log("Si modifica decrementa: ", c.decrement=3, "c = ", c.value);

// //! Encapsulacion()=====> limitar,guardar,proteger === esconder metodos y atributos;
// const counter = (() => {
//   let privateCounter = 0;
//   function changeBy(val) {
//     return privateCounter += val;
//   }

//   return {
//     increment: () => changeBy(1),
//     decrement: () => changeBy(-1),
//     value: () => privateCounter,
//   }
// });

// console.log('counter = ', counter().value())  //0.
// console.log('counterIncrease = ', counter().increment(), 'counterDecrease = ',counter().decrement());

//!╦ ╦┌─┐┬─┐┌─┐┌┐┌╔═╗┬┌─┐
//!╠═╣├┤ ├┬┘├┤ │││║  │├─┤
//!╩ ╩└─┘┴└─└─┘┘└┘╚═╝┴┴ ┴
//! Herencia()=====> extends === hereda metodos y atributos de la claseMadre;
// class PlatziStudentPlatilla {
//   constructor({
//       name,
//       email,
//       twitter = undefined,
//       instagram = undefined,
//       facebook = undefined,
//       approvedCourses = [],
//       learningPaths = [],
//   }){
//       this.name = name;
//       this.email = email;
//       this.socialMedia = {
//         twitter,
//         instagram,
//         facebook,
//       };
//       this.approvedCourses = approvedCourses;
//       this.learningPaths = learningPaths;
//     };
// };
// class LearningPathsPlatilla {
//   constructor({
//       escuelaName,
//       escuelaCursos = [],
//   }){
//       this.escuelaName = escuelaName;
//       this.escuelaCursos = escuelaCursos;
//   };
// }

// class FreeStudent extends PlatziStudentPlatilla {
//   constructor(props) {
//     super(props);
//   }

//   approveCourse(newCourse) {
//     if (newCourse.isFree) {
//       this.approvedCourses.push(newCourse);
//     }
//     else {
//       console.warn(this.name, ' Este curso no esta permitido para subscription: ', newCourse.isFree);
//     }
//   }
// }

// class BasicStudent extends PlatziStudentPlatilla {
//   constructor(props) {
//     super(props);
//   }

//   approveCourse(newCourse) {
//     if (newCourse.lang !== "English") {
//       this.approvedCourses.push(newCourse);
//     }
//     else {
//       console.warn(this.name, ' Este curso no esta permitido para subscription: ', newCourse.isBasic);
//     }
//   }
// }

// class ExpertStudent extends PlatziStudentPlatilla {
//   constructor(props) {
//     super(props);
//   }
//   approveCourse(newCourse) {
//     this.approvedCourses.push(newCourse);
//   }
// };

// const PlatziX = new FreeStudent({
//   name: "PX",
//   username: "Px",
//   email: "px@px.com",
//   twitter: "@px",
//   instagram: undefined,
//   facebook: undefined,

//   learningPaths: [
//     basicoAlgoritmos,
//   ],
// });

// const PlatziY = new BasicStudent({
//   name: "PY",
//   username: "Py",
//   email: "Py@py.com",

//   learningPaths: [
//     unity3d,
//   ],
// });



















// } catch (error) {
// 	console.error(error.stack, "\n[*] " + error.name, "\n[*] " + error.message);
// }
