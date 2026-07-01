function productCard({product}) {
     return (
        <>
          <img src= {product.thumbnail}></img>
          <h3>{product.title}</h3>
          <span>{product.category}</span>
          <span>{product.description}</span>
          
        
        </>
     )
}

export default productCard;