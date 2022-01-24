((e) => console.log(e))("Empecemos!");
//**%"$#%"$#%"#$%"#%"#&%#"%$"!#"s*/

try {
	//! Instanciar()=====> Detalles personalizados === Hackear una clase;

	const Lorena = {
		name: "Angie Lorena",
		age: 18,
		approvedCourses: ["Curso Poo", "Html Css"],
		app: 18,
		addCouse(newCourse) {
			this.approvedCourses.push(newCourse);
		},
	};

} catch (error) {
	console.error(error.stack, "\n[*] " + error.name, "\n[*] " + error.message);
}
