import "./Button.css";

const Button = ({
  onClick,
  children,
  type = "default",
  disabled = false,
  className = "",
  icon: Icon,
}) => {
  const buttonClass = `button ${type} ${
    disabled ? "disabled" : ""
  } ${className}`;

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
