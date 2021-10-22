// Composant qui permet d'afficher la commande
const Command = ({ command }) => 
{
  return (
    <div>
      <b>Votre commande</b>
      <br />
      {command.map(({ kebab }) => (
      <div key={kebab.name} className="card">
      <img src={kebab.image} alt={kebab.ingredient} />      
    </div>
      ))}
      
    </div>
  )
}

export default Command