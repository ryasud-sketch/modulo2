import './button.css';

export default function Button({ id, text, onClick, className, type = 'button', ...props }) {
  return (
    <button
      id={id}
      type={type}
      className={className ?? 'btn-buy'}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}
