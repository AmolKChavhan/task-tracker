import './Button.css'; 

const Button = ({
  onClick,
  children,
  type = 'default', 
  disabled = false,
  className = '',
}) => {
  const buttonClass = `button ${type} ${disabled ? 'disabled' : ''} ${className}`;

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
