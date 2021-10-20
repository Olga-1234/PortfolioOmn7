import { useState, useEffect } from "react";
import img from "./img/KDA.png";

const Project = () => {
  const [listeProjets, setListeProjets] = useState([]);

  const getProjects = async () => {
    try {
      const data = await fetch(
        "https://my-json-server.typicode.com/Olga-1234/PortfolioOmn7/projets"
      );

      const projects = await data.json();

      console.log("lien   ", projects);

      setListeProjets(projects);

      for (const iterator of listeProjets) {
        console.log(iterator.image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, [listeProjets]);

  const showProjetcs = () => {
    return listeProjets.map((listeProjet) => { 
      
      return (
        <div>
          <img key={listeProjet.id} className="" src={listeProjet.image} alt="projet" />
          <h1>{listeProjet.titre}</h1>
        </div>
      );
    });
  };

  return (
    <div>
      {/* {listeProjets.map((listeProjet) => (
        <div>
          <img
            key={listeProjet.id}
            className=""
            src={require("./img/KDA.png")}
            alt="projet"
          />
          <h1>{listeProjet.titre}</h1>
        </div>
      ))} */}
      {showProjetcs()}
    </div>
  );
};

export default Project;
