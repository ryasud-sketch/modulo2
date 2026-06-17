import './Card.css';
import Button from '../buttoncomponent/buton.jsx';

export default function Card({ products = [], buttonText = 'Comprar', buttonIdPrefix = 'product-buy', onBuy }) {
  return (
    <div className="products-row">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.img} alt={product.name} />
          <div className="card-body">
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <Button
              id={`${buttonIdPrefix}-${product.id}`}
              text={buttonText}
              onClick={() => onBuy?.(product)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

