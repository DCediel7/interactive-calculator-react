function Button({ label, type, onClick }) {
  return (
    <button
      className={`btn ${type}`}
      onClick={() => onClick(label)}
      aria-label={label}
    >
      {label}
    </button>
  )
}

export default Button