import "./Kebab.css"

// Composant qui permet d'afficher et choisir les éléments d'un Kebab
const Kebab = ({ kebab, addToCart }) => {
  const { name, image, ingredient } = kebab
  
  return (
    <div className="card">
      <img src={image} alt={ingredient} onClick={() => addToCart(kebab)}/>
      <p>{name}</p>
    </div>
  )
}
export default Kebab