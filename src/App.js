import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import imgCrayon from "./images/crayons.png";
import imgChaise from "./images/chaise_bureau.png";
import imgPot from "./images/pot_a_crayon.jpg";
import imgAgenda from "./images/agenda.jpg";
import imgClasseur from "./images/classeur.jpg";
import imgPoubelle from "./images/poubelle.jpg";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Panier from "./Components/Panier/Panier";


function App() {

  // Les useState
  // Mon argent
  const [argent, setArgent] = useState(178)

  // le panier
  const [panier, setPanier] = useState([])

  // les articles en tant qu'objet dans un tableau pour avoir facile à les récupérer
  const [articles, setArticles] = useState([
    { nom: "Crayons de couleur", prix: 15, unite: 12, img: imgCrayon },
    { nom: "Chaise de bureau", prix: 138, unite: 2, img: imgChaise },
    { nom: "Rangement crayons", prix: 42, unite: 7, img: imgPot },
    { nom: "Agenda", prix: 17, unite: 10, img: imgAgenda },
    { nom: "Classeur", prix: 9, unite: 26, img: imgClasseur }
  ])

  // Opération acheter

  let acheter = (i) => {
    // copie des useState
    let copieArgent = argent;
    let copieArticles = articles;

    // Action
    copieArgent -= articles[i].prix;
    copieArticles[i].unite--;
    panier.push(articles[i])

    // update les useState
    setArticles(copieArticles);
    setPanier(panier);
    setArgent(copieArgent)

  };

  // Opération revendre

  let revendre = (i) => {
    // copie des useState
    let copieArticles = [...articles];
    let copiePanier = panier;
    let copieArgent = argent;

    // action
    copieArticles[copieArticles.indexOf(panier[i])].unite++;
    copieArgent += copieArticles[copieArticles.indexOf(panier[i])].prix;
    panier.splice(i, 1);

    // update les useState
    setArticles(copieArticles);
    setPanier(copiePanier);
    setArgent(copieArgent);

  };

  return (
    <div className="App">
      <Header />
      <p className="display-6 ms-5 fw-bold">Mon argent : {argent}</p>
      <div className="carte row m-0">
        {articles.map((el, i) => {
          return (
            <Card key={i} article={el} money={argent} acheter={() => acheter(i)} />
          );
        })}
      </div>

      <div className="achat">
        {panier.map((el, i) => {
          return (
            <Panier key={i} article={el} revendre={() => revendre(i)} />
          );
        })}

      </div>

    </div>
  );
}

export default App;
