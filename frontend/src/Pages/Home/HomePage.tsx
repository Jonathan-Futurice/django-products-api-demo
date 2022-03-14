import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>List of products</p>
          <nav>
            <Link to="/product">Product</Link>
          </nav>
        </div>
    );
}

export default HomePage;