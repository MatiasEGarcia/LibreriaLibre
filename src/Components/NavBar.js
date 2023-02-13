import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../Context/CartContext'

function NavBar() {

    const {totalQuantity} = useContext(CartContext);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >
                    <h1>Free library</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navOptionsCollapse" aria-controls="navOptionsCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navOptionsCollapse">
                    <ul className="navbar-nav navOptions">
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                <i class="bi bi-cart"></i>
                                {totalQuantity}
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="dropdownGenders" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Genders
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="dropdownGenders">
                                <li><Link to="/Fantasy" className="dropdown-item">Fantasy</Link></li>
                                <li><Link to="/Science fiction" className="dropdown-item">Science fiction</Link></li>
                                <li><Link to="/History" className="dropdown-item">History</Link></li>
                                <li><Link to="/Romance" className="dropdown-item">Romance</Link></li>
                                <li><Link to="/Adventure" className="dropdown-item">Adventure</Link></li>
                                <li><Link to="/Mistery" className="dropdown-item">Mistery</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar