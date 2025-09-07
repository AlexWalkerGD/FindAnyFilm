import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiMovieAiLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
    const [search,setSearch] = useState ("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to='/'>
                  <RiMovieAiLine /> FindAnyFilm
                </Link>
            </h2>
           <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Enter a movie" onChange={(e) => setSearch(e.target.value)} value={search}/>
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
           </form>
        </nav>
    );
};

export default Navbar;