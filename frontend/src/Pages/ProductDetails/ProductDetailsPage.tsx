import React from 'react';
import {Link} from "react-router-dom";

const ProductDetailsPage = () => (
    <div>
        <h1>Product details</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus deleniti, dolor dolorem doloremque et fugit impedit laudantium magnam molestias mollitia odio, quia quis ratione sed veritatis, vero voluptatibus voluptatum.</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>

    </div>
);

export default ProductDetailsPage;