import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <h1>Pesqueiro 110</h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar