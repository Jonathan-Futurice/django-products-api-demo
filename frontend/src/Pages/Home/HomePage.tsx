import React from 'react';
import {Link} from "react-router-dom";
import {ProductListItem} from "./components/ProductListItem";
import {WelcomeBanner} from "./components/WelcomeBanner";



const HomePage = () => {
    return (
        <main>
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
                    <WelcomeBanner/>

                    <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
                        <ProductListItem/>
                        <ProductListItem/>
                        <ProductListItem/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;