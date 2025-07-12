import React from 'react'
import { MdPerson } from "react-icons/md";
import { FaGrinHearts } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const baglength = useSelector((Store) => Store.bag)

  return (
    <>
    <header>
        <div className="logo_container">
            <Link to={'/'}><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/homeAndLiving">Home & Living</Link>
            <Link href="/beauty">Beauty</Link>
            <Link href="/studio">Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
            <MdPerson />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
               <FaGrinHearts/>
                <span className="action_name">Wishlist</span>
            </div>

            <Link to={'/bag'} className="action_container">
               <IoBagHandle/ >
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{baglength.length}</span>
            </Link>
        </div>
    </header></>
  )
}

export default Header