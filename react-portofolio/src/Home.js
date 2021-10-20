import profil from "./img/ol3.png"
const Home=()=> {
    return (
        
             <div className=" bg-secondary text-white">
                 <div className="row col-12 flex-lg-row-reverse">
                    <div className="col-12 col-sm-8 col-lg-6">
                        <img src={profil}
                            className="  img-fluid" alt="Bootstrap Themes" width="600" height="200"
                            loading="lazy"/>
                    </div>
                   <div className="col-lg-6  py-5 mt-5">
                        <h1 className=" mt-5 p-5 fw-bold">
                            Bienvenue! <br/> Je suis <br/>Olga Mujinga
                        </h1>
                    </div>
                </div> 
            </div>
        
    )
}

export default Home
