import img from "./img/KDA.png";
import contact from "./img/frm.png";
import allocine from "./img/allocine.png";
import bienvenue from "./img/projetconficius.jpg";
import amiRobot from "./img/amiRobot.png";

const Project = () => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src={contact} className="card-img-top" alt="kda" />

              <div className="card-body">
                <h5>Formulaire Contact</h5>

                <p className="card-text">
                  Reproduire fidèlement la maquette d'un formulaire.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src={img} className="card-img-top" alt="kda" />

              <div className="card-body">
                <h5>Site Kinshasa Digital</h5>
                <p className="card-text">
                  Reproduction de la page d'accueil et la page Emploi du site
                  web de Kinshasa Digital..
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src={allocine} className="card-img-top" alt="kda" />
              <div className="card-body">
                <h5>Allô ciné</h5>
                <p className="card-text">
                  Créer un site pour la recherche des films et visualisation.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src={bienvenue} className="card-img-top" alt="kda" />
              <div className="card-body">
                <h5>Bienvenue dans KD</h5>
                <p className="card-text">
                  Structurer un document HTML à partir d'une maquette.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={amiRobot} className="card-img-top" alt="kda" />
              <div classNameName="card-body">
                <h5>Site Amis robots</h5>
                <p className="card-text">
                 A partir d'une base des données afficher chaque robots et le site est fait en react js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
