

function Product ({product: {id, title, description, price}, onAddToCartClick  }) {
    function handleButtonOnClick() {
        onAddToCartClick(id)
    }
    return (
    <div>
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={handleButtonOnClick} className="bg-purple-600 text-white font-bold py-1 px-3 rounded">Add to cart</button>
    </div>
  )
}

export default Product
