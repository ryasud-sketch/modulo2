import "./button.css";

function Button(propiedades) {
    return (<button type="button" className="counter">
        {propiedades.titulo}
    </button>)
}
export default Button;