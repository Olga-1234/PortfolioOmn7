let listeProjet = document.querySelector("#liste-projet");
fetch("https://my-json-server.typicode.com/Olga-1234/PortfolioOmn7/projets")
.then(function(reponse) {
    return reponse.json();
}) 

.then(function(projets) 
{
    for (const projet of projets) {
        let blocProjet=document.createElement("div");
        let blocCard=document.createElement("div");
        let lienProjet=document.createElement("a");


        lienProjet.setAttribute("href",`${projet.link}`)
        blocProjet.classList.add("col");
        blocCard.classList.add("shadow-sm" ,"card")

        let imgProjet=document.createElement("img");
        imgProjet.classList.add("bd-placeholder-img" ,"card-img-top");
        imgProjet.setAttribute("src",`${projet.image}`);
        imgProjet.setAttribute("alt", `${projet.titre}`);
        
        let blocTextProjet=document.createElement("div");
        blocTextProjet.classList.add("card-body");
        
        let titreDescriptionProjet=document.createElement("p");
        titreDescriptionProjet.classList.add("card-text","fw-bold","h4","text-center","py-3")
        titreDescriptionProjet.textContent=`${projet.titre}`;
        let textDescriptionProjet=document.createElement("p");
        textDescriptionProjet.classList.add("card-text","px-2")
        textDescriptionProjet.textContent=`${projet.description}`;

        listeProjet.appendChild(blocProjet);
        blocProjet.appendChild(blocCard)
        blocCard.appendChild(lienProjet)
        lienProjet.appendChild(imgProjet);
        blocCard.appendChild(titreDescriptionProjet);
        blocCard.appendChild(textDescriptionProjet);


    }
});