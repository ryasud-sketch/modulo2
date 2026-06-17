import './footer.css';

export default function Footer({
  footerId,
  contactTitle,
  email,
  hours,
  phone,
  address,
  socialLinks = [],
}) {
  return (
    <footer id={footerId} className="footer">
      <div className="footer__main">
        <div className="footer__contact">
          <h4 className="footer__copy">{contactTitle}</h4>
          <p className="footer__info" id={`${footerId}-email`}>Email: {email}</p>
          <p className="footer__info" id={`${footerId}-hours`}>Horario: {hours}</p>
          <p className="footer__info" id={`${footerId}-phone`}>Teléfono: {phone}</p>
          <p className="footer__info" id={`${footerId}-address`}>Dirección: {address}</p>
        </div>

        <div className="footer__social">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright-text">
          &copy; 2026 SupermercadoElEconomico. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
