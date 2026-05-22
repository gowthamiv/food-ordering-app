import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Component Structure of the the App
 * Header Component
 *  - Logo
 *  - Nav Items
 *      - About
 *      - Home
 *      - Cart
 * Body Component
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card (multiple)
 * Footer Componet
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

//Create top level component let it be App/AppLayout
//App Component
const App = () => {
    return (
    <div id="app-container" className="app">
        <Header />
        <Body />
    </div>
    );
}

const Header = () => {
    return (
    <div className="header">
        <div className="logo-container">
            <img 
                className="logo" 
                src="https://img.freepik.com/premium-vector/burger-drawing-food-symbol-modern-simple-vector-icon-website-design-mobile-app-ui-illustration_901054-509.jpg" 
            />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
}

const Body = () => {
    return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
    );
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/4/19982534/169529ec69e973aa53d15c3d63535347_featured_v2.jpg?output-format=webp">
            </img>
            <h3>Sylas Kitchen</h3>
            <h3>Biryani, North, Asian</h3>
            <h3>4.6</h3>
            <h3>20 minutes</h3>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);