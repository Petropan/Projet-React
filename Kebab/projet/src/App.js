import './App.css';
import Kebab from "./Kebab"
import Checkout from "./Checkout"
import Command from "./Command"
import React, { useEffect, useState } from "react"

// Fonction principale : App()

function App() {
  
  const [kebabs,setKebabs] = useState([]) // Sélection des ingrédients du Kebab 
  const [checkout, setCheckout] = useState([]) // Affichage de la commande
  const [command, setCommand] = useState([]) // Affichage de la commande finale
  
 
  // Chargement du fichier JSON des ingrédients retourné par un mock
  useEffect(() => {
      fetch("https://run.mocky.io/v3/a1fbf874-dd22-4d45-bbf7-b392df665334")
      .then(res => res.json())
      .then(res => setKebabs(res))
  } ,  [])

  // Vérification des ingrédients saisis 
  const addToCart = kebab => {
    //  Si le type d'ingrédient est deja dans le panier, aucun ajout additionnel
    if (checkout.find(el => el.kebab.ingredient === kebab.ingredient)) {      
      const updatedCheckout = checkout.map(el => el.kebab.ingredient === kebab.ingredient
        ? { ...el, quantity: el.quantity}
        : el
      )
      setCheckout(updatedCheckout)
    } else {
      // Sinon, on ajoute l'ingrédient
      const updatedCheckout = [...checkout, { kebab, quantity: 1 }]
      setCheckout(updatedCheckout)
    }
  }


// Affichage du contenu de la commande
const validateCommand = checkout => {
  setCommand(checkout)
}

// Suppression de la commande
const deleteCommand = checkout => {
  setCheckout([])
  setCommand([])
}

return (
    // Logo Magic Kebab
    <div className="App">
      <header className="App-header">
        <img src={"https://thumbs.gfycat.com/EarlyDefiniteFrenchbulldog-size_restricted.gif"} alt="logo" />
        <p>
          Magic Kebab Store : Le lieu où il faut être.
        </p>
      </header>
      <center>
        <div className="container"> 
              <div className="box"> 
                  <div className="box-row"> 
                  <div className="box-cell box1"> 
                      {kebabs.map(kebab => (
                        <Kebab key={kebab.name} kebab={kebab} addToCart={addToCart} />
                      ))}
                    </div> 
                        
                    <div className="box-cell box2"> 
                        <Command command={command} />
                    </div> 
                  </div> 
              </div> 
          </div> 
      </center>
      
      <Checkout checkout={checkout} validateCommand={validateCommand} deleteCommand={deleteCommand}/>
    </div>  
  );
}

export default App;
