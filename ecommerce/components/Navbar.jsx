import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
    <Link href="/">Ezechiel Headphones</Link>
      </p>
      <button type="button" className="cart-icon" onClick=""></button>
    <AiOutlineShopping />
    <span className="cart-item-qty">1</span>
    </div>
  )
}

export default Navbar