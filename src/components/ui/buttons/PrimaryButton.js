function PrimaryButton({ children, onClick, disabled = false, className = '', ...props }) {
  return (
    <button
      className={`btn btn-primary ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
