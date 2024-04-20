import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
    < div className="home">
        <Link to="/products">Link to Products</Link>
        <Link to="/about">Link to About</Link>
        </ div>
    );
}

export default Home;