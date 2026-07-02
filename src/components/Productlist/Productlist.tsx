import { useEffect, useState } from 'react';
import '../../App.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail?: string;
  category?: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const formatCLP = (value: number) =>
    new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0,
    }).format(value);

  const translateText = (text: string) => {
    const translations: Array<{ from: string; to: string }> = [
      { from: 'Shampoo', to: 'Champú' },
      { from: 'Conditioner', to: 'Acondicionador' },
      { from: 'Face wash', to: 'Limpieza facial' },
      { from: 'Moisturizer', to: 'Humectante' },
      { from: 'Sunscreen', to: 'Protector solar' },
      { from: 'Body lotion', to: 'Loción corporal' },
      { from: 'Lip balm', to: 'Bálsamo labial' },
      { from: 'Perfume', to: 'Perfume' },
      { from: 'Makeup remover', to: 'Removedor de maquillaje' },
      { from: 'Serum', to: 'Suero' },
      { from: 'Toner', to: 'Tónico' },
      { from: 'Eye cream', to: 'Crema para ojos' },
      { from: 'for', to: 'para' },
      { from: 'healthy', to: 'saludable' },
      { from: 'shiny', to: 'brillante' },
      { from: 'hair', to: 'cabello' },
      { from: 'skin', to: 'piel' },
      { from: 'glow', to: 'brillo' },
      { from: 'gentle', to: 'suave' },
      { from: 'fresh', to: 'fresco' },
      { from: 'long-lasting', to: 'duradero' },
      { from: 'fragrance', to: 'fragancia' },
      { from: 'beauty', to: 'belleza' },
      { from: 'fragrances', to: 'fragancias' },
      { from: 'skincare', to: 'cuidado de la piel' },
      { from: 'groceries', to: 'alimentos' },
      { from: 'furniture', to: 'muebles' },
      { from: 'home-decoration', to: 'decoración del hogar' },
      { from: 'mobile-accessories', to: 'accesorios para móviles' },
      { from: 'smartphones', to: 'celulares' },
      { from: 'laptops', to: 'portátiles' },
    ];

    return translations.reduce((acc, { from, to }) => acc.replace(new RegExp(from, 'gi'), to), text);
  };

  const translateCategory = (category?: string) => {
    const categories: Record<string, string> = {
      beauty: 'Belleza',
      fragrances: 'Fragancias',
      skincare: 'Cuidado de la piel',
      groceries: 'Alimentos',
      furniture: 'Muebles',
      'home-decoration': 'Decoración del hogar',
      'mobile-accessories': 'Accesorios para móviles',
      smartphones: 'Celulares',
      laptops: 'Portátiles',
    };

    if (!category) {
      return 'General';
    }

    return categories[category.toLowerCase()] || category;
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        const allProducts = (data.products as Product[]).map((product) => ({
          ...product,
          price: product.price * 1000,
        }));
        setProducts(allProducts);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="products-status">Cargando productos...</p>;
  }

  if (error) {
    return <p className="products-status error">Error: {error}</p>;
  }

  return (
    <section className="products-page">
      <div className="products-page__header">
        <h2>Catálogo de productos</h2>
        <p>Todos los productos obtenidos desde DummyJSON con precios en pesos chilenos.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card-grid" key={product.id}>
            <img src={product.thumbnail} alt={product.title} className="product-card-grid__image" />
            <div className="product-card-grid__body">
              <span className="product-card-grid__category">{translateCategory(product.category)}</span>
              <h3>{translateText(product.title)}</h3>
              <p>{translateText(product.description)}</p>
              <div className="product-card-grid__footer">
                <strong>{formatCLP(product.price)}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
