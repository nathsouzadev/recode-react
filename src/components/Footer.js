const Footer = ({ children, valor }) => {
  return(
    <>
      <p>Valor: {valor}</p>
      {children}
    </>
  )
}

export default Footer
