import logo from '../../assets/logo.jpg';
import arroz from '../../assets/arroz tucapel 1k.jpg';
import azucar from '../../assets/azucar iansa 1kg.jpg';
import fideos from '../../assets/fideos carozzi 5.jpg';
import mayonesa from '../../assets/mayonesa hellmans 1 kg.jpg';
import sal from '../../assets/sal 1 kg.jpg';
import '../../App.css';
import Card from '../../components/Cardcomponent/Card.jsx';
import Footer from '../../components/footer/footer.jsx';

const products: Array<{ id: number; name: string; price: string; img: string }> = [
  { id: 1, name: 'Arroz Tucapel 1kg', price: '$1200', img: arroz },
  { id: 2, name: 'Azúcar Iansa 1kg', price: '$1000', img: azucar },
  { id: 3, name: 'Fideos Carozzi 500g', price: '$950', img: fideos },
  { id: 4, name: "Mayonesa Hellmann's 1kg", price: '$2800', img: mayonesa },
  { id: 5, name: 'Sal 1kg', price: '$900', img: sal },
];

const footerData: any = {
  footerId: 'footer',
  contactTitle: 'Información de contacto',
  email: 'SupermercadoElEconomico@gmail.com',
  hours: 'Lunes a Viernes, 9:00 AM - 6:00 PM',
  phone: '123-456-7890',
  address: 'Av Pepito 2026',
  socialLinks: [
    { id: 'social-linkedin', href: '#', label: 'LinkedIn' },
    { id: 'social-facebook', href: '#', label: 'Facebook' },
    { id: 'social-instagram', href: '#', label: 'Instagram' },
  ],
};

function Home() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={logo} className="base" width="170" height="179" alt="logo" />
        </div>
        <div>
          <h1>SUPERMERCADO EL ECONOMICO</h1>
          <p>TIENDA DE ALIMENTOS</p>
        </div>
      </section>

      <section id="pricing">
        <Card
          products={products as any}
          buttonText="Añadir al Carrito"
          buttonIdPrefix="boton"
          onBuy={(product: any) => console.log('Añadido al carrito', product.name)}
        />
      </section>

      <Footer {...footerData} />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default Home;