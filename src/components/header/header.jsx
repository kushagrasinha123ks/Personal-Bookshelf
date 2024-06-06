import React from "react";
import { useNavigate } from 'react-router-dom';
import Searchform from "../searchform/searchform";

const Header = () => {
    const navigate = useNavigate();

    const handleNavigateToShelf = () => {
        navigate('/shelf');
    };

    return (
        <div className="header fs-18 fw-9">
            <div className="nav">
                <header className="header-c">LIBRARY</header>
                <button className="btn-r" onClick={handleNavigateToShelf}>My-Shelf</button>
            </div>
            <Searchform />
        </div>
    );
}

export default Header;
