import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import imgCrayon from "./images/crayons.png"
import imgChaise from "./images/chaise_bureau.png"
import imgPot from "./images/pot_a_crayon.jpg"
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="carte row">
        <Card unite="12" prix="15" produit="Crayons de couleur" img={imgCrayon} />
        <Card unite="2" prix="138" produit="Chaise de bureau" img={imgChaise} />
        <Card unite="7" prix="42" produit="Pot de rangement pour crayon" img={imgPot} />
      </div>

    </div>
  );
}

export default App;
