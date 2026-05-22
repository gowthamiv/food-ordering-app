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

/**
 * Sample public data from swiggy/zomato sites 
 */
const resObj = {
                                 "id":"1003414",
                                 "name":"Pizza Hut",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/e109ae70-80ca-4f7d-b2a6-2d60706a72b9_1003414.JPG",
                                 "locality":"Chhindwara",
                                 "areaName":"Chhindwara City",
                                 "costForTwo":"₹350 for two",
                                 "cuisines":[
                                    "Pizzas"
                                 ],
                                 "avgRating":4.3,
                                 "parentId":"721",
                                 "avgRatingString":"4.3",
                                 "totalRatingsString":"273",
                                 "sla":{
                                    "deliveryTime":50,
                                    "lastMileTravel":14.1,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"45-50 mins",
                                    "lastMileTravelString":"14.1 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 11 am, today"
                                 },
                                 "badges":{
                                    
                                 }
                                };

const Body = () => {
    return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj}/>
      </div>
    </div>
    );
}

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/"+resData.cloudinaryImageId}>
            </img>
            <h3>{resData.name}</h3>
            <h3>{resData.cuisines.join(", ")}</h3>
            <h3>{resData.avgRating} stars</h3>
            <h3>{resData.costForTwo}</h3>
            <h3>{resData.sla.deliveryTime} minutes</h3>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);