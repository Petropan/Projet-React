import "./Checkout.css"

// Affichage des ingrédients sélectionnés pour le Kebab
const Checkout = ({ checkout, validateCommand, deleteCommand }) => 
{
    if (!checkout.length) {
      return <></>
    }
  return (
    <div className="checkout">
      <b>Votre commande</b>
      <br />
      
      {checkout.map(({ kebab }) => (
        <p key={kebab.name}>
          {kebab.name}          
        </p>
      ))}
      <button  onClick={() => validateCommand(checkout)}>Valider la commande</button>
      <button onClick={() => deleteCommand(checkout)}>Supprimer la commande</button>
    </div>
  )
}

export default Checkout