const Button = ({ onClick, classText, text }) => {
  return (
    <button
      onClick={onClick}
      className={classText}
      type='button'
    >
    {text}
    </button>
  )
}

export default Button