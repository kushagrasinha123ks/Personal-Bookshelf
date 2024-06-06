import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context";
import { useNavigate } from 'react-router-dom';

const Searchform = () => {
    const { setSearch } = useContext(AppContext);
    const inputRef = useRef('');
    const navigate = useNavigate();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = () => {
        let searchTerm = inputRef.current.value.trim();
        if (searchTerm === "") {
            return;
        }
        setSearch(searchTerm);
        navigate('/book');
    }


    return (
        <div className="searchform">
            <input id="searchbox" type="text" placeholder="Search by book name" ref={inputRef} onChange={handleChange} />
        </div>
    )
}

export default Searchform;