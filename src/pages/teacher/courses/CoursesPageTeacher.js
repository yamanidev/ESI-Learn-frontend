import React, { useEffect } from "react";
import CoursesList from "../../../components/teacher/CoursesList/CoursesList";
import CoursesListItem from "../../../components/teacher/CoursesList/CoursesListItem";
import adminServices from "../../../services/admin/admin-services";

const courses = [
	{
		code: "ALG1",
		detailedName: "Algèbre 1",
		promo: "CP1",
		semester: 1,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "ANA1",
		detailedName: "Analyse mathématique1",
		promo: "CP1",
		semester: 1,
		coefficient: 5,
		credit: 6,
	},
	{
		code: "ARCHI1",
		detailedName: "Architecture des ordinateurs 1",
		promo: "CP1",
		semester: 1,
		coefficient: 4,
		credit: 5,
	},
	{
		code: "ISE1",
		detailedName: "Introduction au Système d’exploitation 1",
		promo: "CP1",
		semester: 1,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "ALSDS",
		detailedName: "Algorithmique et structures de données statiques",
		promo: "CP1",
		semester: 1,
		coefficient: 5,
		credit: 6,
	},
	{
		code: "ELEC1",
		detailedName: "Electricité",
		promo: "CP1",
		semester: 1,
		coefficient: 3,
		credit: 4,
	},
	{
		code: "TEE1",
		detailedName: "Technique d’expression  écrite",
		promo: "CP1",
		semester: 1,
		coefficient: 2,
		credit: 2,
	},
	{
		code: "BWEB1",
		detailedName: "Bureautique et Web",
		promo: "CP1",
		semester: 1,
		coefficient: 1,
		credit: 1,
	},
	{
		code: "ALSDD",
		detailedName: "Algorithmique et structures de données dynamiques",
		promo: "CP1",
		semester: 2,
		coefficient: 5,
		credit: 6,
	},
	{
		code: "ISE2",
		detailedName: "Introduction au système d’exploitation 2",
		promo: "CP1",
		semester: 2,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "ANA2",
		detailedName: "Analyse mathématique 2",
		promo: "CP1",
		semester: 2,
		coefficient: 5,
		credit: 6,
	},
	{
		code: "ALG2",
		detailedName: "Algèbre 2",
		promo: "CP1",
		semester: 2,
		coefficient: 3,
		credit: 4,
	},
	{
		code: "MECA",
		detailedName: "Mécanique du point",
		promo: "CP1",
		semester: 2,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "ELECF1",
		detailedName: "Electronique fondamentale 1",
		promo: "CP1",
		semester: 2,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "TEO1",
		detailedName: "Technique d’expression  orale",
		promo: "CP1",
		semester: 2,
		coefficient: 2,
		credit: 2,
	},
	{
		code: "LANGL1",
		detailedName: "Langue anglaise 1",
		promo: "CP1",
		semester: 2,
		coefficient: 2,
		credit: 2,
	},
	{
		code: "SFSD",
		detailedName: "Structure fichiers et structures de données",
		promo: "CP2",
		semester: 1,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "ARCHI2",
		detailedName: "Architecture des ordinateurs 2",
		promo: "CP2",
		semester: 1,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "ANA3",
		detailedName: "Analyse mathématique 3",
		promo: "CP2",
		semester: 1,
		coefficient: 5,
		credit: 6,
	},
	{
		code: "ALG3",
		detailedName: "Algèbre 3",
		promo: "CP2",
		semester: 1,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "ELECF2",
		detailedName: "Electronique fondamentale 2",
		promo: "CP2",
		semester: 1,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "PROBA1",
		detailedName: "Probabilités et statistiques 1",
		promo: "CP2",
		semester: 1,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "LANGL2",
		detailedName: "Langue anglaise 2",
		promo: "CP2",
		semester: 1,
		coefficient: 2,
		credit: 2,
	},
	{
		code: "ECO",
		detailedName: "Economie d’entreprise",
		promo: "CP2",
		semester: 1,
		coefficient: 2,
		credit: 3,
	},
	{
		code: "POO",
		detailedName: "Programmation orientée objet",
		promo: "CP2",
		semester: 2,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "ISI",
		detailedName: "Introduction aux systèmes d’information",
		promo: "CP2",
		semester: 2,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "ANA4",
		detailedName: "Analyse mathématique 4",
		promo: "CP2",
		semester: 2,
		coefficient: 5,
		credit: 6,
	},
	{
		code: "LOG",
		detailedName: "Logique mathématique",
		promo: "CP2",
		semester: 2,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "OOE",
		detailedName: "Optique et ondes électromagnétiques",
		promo: "CP2",
		semester: 2,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "PROJ1",
		detailedName: "Projet pluridisciplinaire",
		promo: "CP2",
		semester: 2,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "PROBA2",
		detailedName: "Probabilités et statistiques 2",
		promo: "CP2",
		semester: 2,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "LANGL3",
		detailedName: "Langue anglaise 3",
		promo: "CP2",
		semester: 2,
		coefficient: 2,
		credit: 2,
	},
	{
		code: "SE1",
		detailedName: "Système d’Exploitation 1",
		promo: "CS1",
		semester: 1,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "RES1",
		detailedName: "Réseaux 1",
		promo: "CS1",
		semester: 1,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "IGL",
		detailedName: "Introduction au Génie Logiciel",
		promo: "CS1",
		semester: 1,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "BDD",
		detailedName: "Bases de Données",
		promo: "CS1",
		semester: 1,
		coefficient: 5,
		credit: 5,
	},
	{
		code: "THL",
		detailedName: "Théorie des Langages",
		promo: "CS1",
		semester: 1,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "AN",
		detailedName: "Analyse Numérique",
		promo: "CS1",
		semester: 1,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "RO",
		detailedName: "Recherche Opérationnelle",
		promo: "CS1",
		semester: 1,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "LANGL4",
		detailedName: "Langue Anglaise 1",
		promo: "CS1",
		semester: 1,
		coefficient: 2,
		credit: 2,
	},
	{
		code: "SE2",
		detailedName: "Système d’Exploitation 2",
		promo: "CS1",
		semester: 2,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "RES2",
		detailedName: "Réseaux 2",
		promo: "CS1",
		semester: 2,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "ARCHIE",
		detailedName: "Architectures Évoluées des Ordinateurs",
		promo: "CS1",
		semester: 2,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "ACSI",
		detailedName: "Analyse et conception des Systèmes d’information",
		promo: "CS1",
		semester: 2,
		coefficient: 5,
		credit: 5,
	},
	{
		code: "LOW",
		detailedName: "Langages et Outils du Web",
		promo: "CS1",
		semester: 2,
		coefficient: 4,
		credit: 4,
	},
	{
		code: "ISECI",
		detailedName: "Introduction à la Sécurité Informatique",
		promo: "CS1",
		semester: 2,
		coefficient: 2,
		credit: 2,
	},
	{
		code: "CPROJ",
		detailedName: "Conduite de Projets",
		promo: "CS1",
		semester: 2,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "PROJ2",
		detailedName: "Projet",
		promo: "CS1",
		semester: 2,
		coefficient: 3,
		credit: 3,
	},
	{
		code: "LANGL5",
		detailedName: "Langue Anglaise 2",
		promo: "CS1",
		semester: 2,
		coefficient: 2,
		credit: 2,
	},
];

function CoursesPageTeacher() {
	useEffect(() => {}, []);

	return (
		<div className="container">
			<h1 className="mb-10 text-6xl font-semibold">Courses teacher</h1>
			<CoursesList courses={courses} />
		</div>
	);
}

export default CoursesPageTeacher;
