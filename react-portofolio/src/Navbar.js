/* eslint-disable jsx-a11y/anchor-is-valid */


 const NavBar=()=> {
    return (
        <div>
    
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand fw-bold ol" href="#">Omn</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#acceuil">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#propos">A propos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projets">Projets</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
        </div>
    )
}

export default NavBar
