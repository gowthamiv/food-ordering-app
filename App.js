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
const resList = [
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
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
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "aggregatedDiscountInfoV3":{
                                    "header":"ITEMS",
                                    "subHeader":"AT ₹159"
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/e109ae70-80ca-4f7d-b2a6-2d60706a72b9_1003414.JPG"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/pizza-hut-chhindwara-city-rest1003414",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"1271089",
                                 "name":"City Restaurant",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2025/11/24/3b0f677b-9852-4177-b7c0-852d459e3024_1271089.jpg",
                                 "locality":"Chhindwara City",
                                 "areaName":"Chhindwara City",
                                 "costForTwo":"₹300 for two",
                                 "cuisines":[
                                    "North Indian"
                                 ],
                                 "avgRating":3.9,
                                 "veg":true,
                                 "parentId":"63499",
                                 "avgRatingString":"3.9",
                                 "totalRatingsString":"22",
                                 "sla":{
                                    "deliveryTime":60,
                                    "lastMileTravel":12.7,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"60-70 mins",
                                    "lastMileTravelString":"12.7 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 12 noon, today"
                                 },
                                 "badges":{
                                    
                                 },
                                 "aggregatedDiscountInfoV2":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2025/11/24/3b0f677b-9852-4177-b7c0-852d459e3024_1271089.jpg"
                                       }
                                    }
                                 ],
                                 "isNewlyOnboarded":true,
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/city-restaurant-chhindwara-city-rest1271089",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"912754",
                                 "name":"Urban Cafe",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
                                 "locality":"SOUTH CIVIL LINE",
                                 "areaName":"Chhindwara City",
                                 "costForTwo":"₹300 for two",
                                 "cuisines":[
                                    "Snacks",
                                    "Pizzas",
                                    "Pastas",
                                    "Fast Food",
                                    "Burgers",
                                    "Cafe"
                                 ],
                                 "avgRating":4.3,
                                 "veg":true,
                                 "parentId":"1330",
                                 "avgRatingString":"4.3",
                                 "totalRatingsString":"26",
                                 "sla":{
                                    "deliveryTime":699,
                                    "lastMileTravel":13.9,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"699-709 mins",
                                    "lastMileTravelString":"13.9 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 12 noon, today"
                                 },
                                 "badges":{
                                    "imageBadges":[
                                       {
                                          "imageId":"v1695133679/badges/Pure_Veg111.png",
                                          "description":"pureveg"
                                       }
                                    ]
                                 },
                                 "aggregatedDiscountInfoV2":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          "badgeObject":[
                                             {
                                                "attributes":{
                                                   "description":"pureveg",
                                                   "imageId":"v1695133679/badges/Pure_Veg111.png",
                                                   "theme":""
                                                }
                                             }
                                          ]
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/urban-cafe-south-civil-line-chhindwara-city-rest912754",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"1211364",
                                 "name":"Pizza Wala",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2025/9/20/49ae89fa-5a3c-4177-828b-bc0469cfb6b3_1211364.jpg",
                                 "locality":"Chhindwara City",
                                 "areaName":"Chhindwara City",
                                 "costForTwo":"₹219 for two",
                                 "cuisines":[
                                    "Italian",
                                    "French",
                                    "Snacks",
                                    "Pizzas",
                                    "Fast Food",
                                    "Burgers"
                                 ],
                                 "avgRating":4.3,
                                 "veg":true,
                                 "parentId":"12161",
                                 "avgRatingString":"4.3",
                                 "totalRatingsString":"9",
                                 "sla":{
                                    "deliveryTime":52,
                                    "lastMileTravel":14.7,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"50-60 mins",
                                    "lastMileTravelString":"14.7 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 11 am, today"
                                 },
                                 "badges":{
                                    
                                 },
                                 "aggregatedDiscountInfoV2":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2025/9/20/49ae89fa-5a3c-4177-828b-bc0469cfb6b3_1211364.jpg"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/pizza-wala-chhindwara-city-rest1211364",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"625927",
                                 "name":"Kathi Junction",
                                 "cloudinaryImageId":"nigqvxgzvyxtfjuqasgg",
                                 "locality":"Bunglow Madhuvan Colony",
                                 "areaName":"Prasia Road",
                                 "costForTwo":"₹200 for two",
                                 "cuisines":[
                                    "rolls",
                                    "Burgers",
                                    "Pizzas",
                                    "Fast Food"
                                 ],
                                 "avgRating":4.2,
                                 "parentId":"1935",
                                 "avgRatingString":"4.2",
                                 "totalRatingsString":"451",
                                 "sla":{
                                    "deliveryTime":63,
                                    "lastMileTravel":13.5,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"60-70 mins",
                                    "lastMileTravelString":"13.5 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 12:15 pm, today"
                                 },
                                 "badges":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "aggregatedDiscountInfoV3":{
                                    "header":"20% OFF",
                                    "subHeader":"UPTO ₹50"
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"nigqvxgzvyxtfjuqasgg"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"1309927",
                                 "name":"Swad Ghar Ka",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2026/1/14/6e94c6b3-b3fa-42e9-8c82-a5ed6606b338_1309927.jpg",
                                 "locality":"Chhindwara City",
                                 "areaName":"Chhindwara City",
                                 "costForTwo":"₹200 for two",
                                 "cuisines":[
                                    "Thalis",
                                    "Indian",
                                    "Snacks",
                                    "Home Food",
                                    "Healthy Food",
                                    "Navratri Special"
                                 ],
                                 "avgRating":4.4,
                                 "veg":true,
                                 "parentId":"198517",
                                 "avgRatingString":"4.4",
                                 "totalRatingsString":"15",
                                 "sla":{
                                    "deliveryTime":66,
                                    "lastMileTravel":14.2,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"65-75 mins",
                                    "lastMileTravelString":"14.2 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 10 am, today"
                                 },
                                 "badges":{
                                    
                                 },
                                 "aggregatedDiscountInfoV2":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2026/1/14/6e94c6b3-b3fa-42e9-8c82-a5ed6606b338_1309927.jpg"
                                       }
                                    }
                                 ],
                                 "isNewlyOnboarded":true,
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/swad-ghar-ka-chhindwara-city-rest1309927",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"830418",
                                 "name":"Indian Coffee House",
                                 "cloudinaryImageId":"2469fa88ee9b0b5d1366ba88f2a7fa7f",
                                 "locality":"Chhindwara City",
                                 "areaName":"Khajri Chowk",
                                 "costForTwo":"₹300 for two",
                                 "cuisines":[
                                    "South Indian",
                                    "Chinese",
                                    "Fast Food",
                                    "Beverages"
                                 ],
                                 "avgRating":4.5,
                                 "veg":true,
                                 "parentId":"106448",
                                 "avgRatingString":"4.5",
                                 "totalRatingsString":"360",
                                 "sla":{
                                    "deliveryTime":515,
                                    "lastMileTravel":13.1,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"514-524 mins",
                                    "lastMileTravelString":"13.1 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 9 am, today"
                                 },
                                 "badges":{
                                    "imageBadges":[
                                       {
                                          "imageId":"v1695133679/badges/Pure_Veg111.png",
                                          "description":"pureveg"
                                       }
                                    ]
                                 },
                                 "aggregatedDiscountInfoV2":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          "badgeObject":[
                                             {
                                                "attributes":{
                                                   "description":"pureveg",
                                                   "imageId":"v1695133679/badges/Pure_Veg111.png",
                                                   "theme":""
                                                }
                                             }
                                          ]
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"2469fa88ee9b0b5d1366ba88f2a7fa7f"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"487096",
                                 "name":"Dino's Pizza",
                                 "cloudinaryImageId":"seqnlipynpingek2iirl",
                                 "locality":"Teacher's Colony",
                                 "areaName":"Parasia Road",
                                 "costForTwo":"₹200 for two",
                                 "cuisines":[
                                    "Pizzas",
                                    "Burgers",
                                    "Beverages"
                                 ],
                                 "avgRating":4.1,
                                 "parentId":"387459",
                                 "avgRatingString":"4.1",
                                 "totalRatingsString":"277",
                                 "sla":{
                                    "deliveryTime":636,
                                    "lastMileTravel":14.7,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"634-644 mins",
                                    "lastMileTravelString":"14.7 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 11 am, today"
                                 },
                                 "badges":{
                                    "imageBadges":[
                                       {
                                          "imageId":"v1695133679/badges/Pure_Veg111.png",
                                          "description":"pureveg"
                                       }
                                    ]
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          "badgeObject":[
                                             {
                                                "attributes":{
                                                   "description":"pureveg",
                                                   "imageId":"v1695133679/badges/Pure_Veg111.png",
                                                   "theme":""
                                                }
                                             }
                                          ]
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "aggregatedDiscountInfoV3":{
                                    "header":"₹150 OFF",
                                    "subHeader":"ABOVE ₹349",
                                    "discountTag":"FLAT DEAL"
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"seqnlipynpingek2iirl"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/dinos-pizza-teachers-colony-parasia-road-rest487096",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"1210008",
                                 "name":"Dosa Corner",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2025/9/19/9a26abac-1179-469e-a640-0649e6586301_1210008.jpg",
                                 "locality":"Chhindwara City",
                                 "areaName":"Chhindwara City",
                                 "costForTwo":"₹149 for two",
                                 "cuisines":[
                                    "South Indian"
                                 ],
                                 "veg":true,
                                 "parentId":"1541",
                                 "avgRatingString":"--",
                                 "sla":{
                                    "deliveryTime":50,
                                    "lastMileTravel":13.4,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"45-50 mins",
                                    "lastMileTravelString":"13.4 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 10 am, today"
                                 },
                                 "badges":{
                                    
                                 },
                                 "aggregatedDiscountInfoV2":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2025/9/19/9a26abac-1179-469e-a640-0649e6586301_1210008.jpg"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/dosa-corner-chhindwara-city-rest1210008",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"1098358",
                                 "name":"Top N Town Ice Cream",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2025/5/19/06c32af7-790f-4e83-a0e0-a6341560f3c8_1098358.jpg",
                                 "locality":"NARSINGHPUR ROAD",
                                 "areaName":"Chhindwara City",
                                 "costForTwo":"₹300 for two",
                                 "cuisines":[
                                    "Desserts",
                                    "Ice Cream"
                                 ],
                                 "veg":true,
                                 "parentId":"515321",
                                 "avgRatingString":"--",
                                 "sla":{
                                    "deliveryTime":43,
                                    "lastMileTravel":11.8,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"40-45 mins",
                                    "lastMileTravelString":"11.8 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Temporarily closed for delivery"
                                 },
                                 "badges":{
                                    "imageBadges":[
                                       {
                                          "imageId":"v1695133679/badges/Pure_Veg111.png",
                                          "description":"pureveg"
                                       }
                                    ]
                                 },
                                 "aggregatedDiscountInfoV2":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          "badgeObject":[
                                             {
                                                "attributes":{
                                                   "description":"pureveg",
                                                   "imageId":"v1695133679/badges/Pure_Veg111.png",
                                                   "theme":""
                                                }
                                             }
                                          ]
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2025/5/19/06c32af7-790f-4e83-a0e0-a6341560f3c8_1098358.jpg"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/top-n-town-ice-cream-narsinghpur-road-chhindwara-city-rest1098358",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"1034629",
                                 "name":"food of indians",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/30278215-be3c-43b4-b524-c951a8c89e5b_1034629.jpg",
                                 "locality":"Narshingpur road ",
                                 "areaName":"Shanichara Bazaar ",
                                 "costForTwo":"₹200 for two",
                                 "cuisines":[
                                    "Chinese",
                                    "Beverages"
                                 ],
                                 "avgRating":3.9,
                                 "parentId":"81752",
                                 "avgRatingString":"3.9",
                                 "totalRatingsString":"17",
                                 "sla":{
                                    "deliveryTime":44,
                                    "lastMileTravel":11.9,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"40-45 mins",
                                    "lastMileTravelString":"11.9 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 5 pm, today"
                                 },
                                 "badges":{
                                    "imageBadges":[
                                       {
                                          "imageId":"v1695133679/badges/Pure_Veg111.png",
                                          "description":"pureveg"
                                       }
                                    ]
                                 },
                                 "aggregatedDiscountInfoV2":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          "badgeObject":[
                                             {
                                                "attributes":{
                                                   "description":"pureveg",
                                                   "imageId":"v1695133679/badges/Pure_Veg111.png",
                                                   "theme":""
                                                }
                                             }
                                          ]
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/30278215-be3c-43b4-b524-c951a8c89e5b_1034629.jpg"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/food-of-indians-narshingpur-road-shanichara-bazaar-rest1034629",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"1339838",
                                 "name":"Naadbramha Idli",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2024/12/18/bad5d960-769c-49bc-a7f0-1ceeb9a4878c_1011013.jpg",
                                 "locality":"Chhindwara City",
                                 "areaName":"Chhindwara City",
                                 "costForTwo":"₹200 for two",
                                 "cuisines":[
                                    "South Indian",
                                    "Batter",
                                    "Snacks"
                                 ],
                                 "avgRating":3.6,
                                 "veg":true,
                                 "parentId":"251339",
                                 "avgRatingString":"3.6",
                                 "totalRatingsString":"5",
                                 "sla":{
                                    "deliveryTime":41,
                                    "lastMileTravel":11.5,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"40-45 mins",
                                    "lastMileTravelString":"11.5 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 8:30 am, today"
                                 },
                                 "badges":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "aggregatedDiscountInfoV3":{
                                    "header":"₹150 OFF",
                                    "subHeader":"ABOVE ₹999",
                                    "discountTag":"FLAT DEAL"
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2024/12/18/bad5d960-769c-49bc-a7f0-1ceeb9a4878c_1011013.jpg"
                                       }
                                    }
                                 ],
                                 "isNewlyOnboarded":true,
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/naadbramha-idli-chhindwara-city-rest1339838",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           },
                           {
                              "@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                              "info":{
                                 "id":"385824",
                                 "name":"The Belgian Waffle Co.",
                                 "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
                                 "locality":"Sinchai Colony",
                                 "areaName":"Mohan Nagar",
                                 "costForTwo":"₹200 for two",
                                 "cuisines":[
                                    "Waffle",
                                    "Desserts",
                                    "Ice Cream",
                                    "Beverages"
                                 ],
                                 "avgRating":4.5,
                                 "veg":true,
                                 "parentId":"2233",
                                 "avgRatingString":"4.5",
                                 "totalRatingsString":"377",
                                 "sla":{
                                    "deliveryTime":53,
                                    "lastMileTravel":13.4,
                                    "serviceability":"SERVICEABLE_WITH_BANNER",
                                    "slaString":"50-60 mins",
                                    "lastMileTravelString":"13.4 km",
                                    "iconType":"ICON_TYPE_EMPTY"
                                 },
                                 "availability":{
                                    "nextOpenTimeMessage":"Opens next at 2 pm, today"
                                 },
                                 "badges":{
                                    "imageBadges":[
                                       {
                                          "imageId":"v1695133679/badges/Pure_Veg111.png",
                                          "description":"pureveg"
                                       }
                                    ]
                                 },
                                 "aggregatedDiscountInfoV2":{
                                    
                                 },
                                 "type":"F",
                                 "badgesV2":{
                                    "entityBadges":{
                                       "imageBased":{
                                          "badgeObject":[
                                             {
                                                "attributes":{
                                                   "description":"pureveg",
                                                   "imageId":"v1695133679/badges/Pure_Veg111.png",
                                                   "theme":""
                                                }
                                             }
                                          ]
                                       },
                                       "textBased":{
                                          
                                       },
                                       "textExtendedBadges":{
                                          
                                       }
                                    }
                                 },
                                 "orderabilityCommunication":{
                                    "title":{
                                       
                                    },
                                    "subTitle":{
                                       
                                    },
                                    "message":{
                                       
                                    },
                                    "customIcon":{
                                       
                                    }
                                 },
                                 "differentiatedUi":{
                                    "displayType":"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails":{
                                       "maxDuration":"3000",
                                       "mediaType":"ADS_MEDIA_ENUM_IMAGE",
                                       "lottie":{
                                          
                                       },
                                       "video":{
                                          
                                       }
                                    }
                                 },
                                 "reviewsSummary":{
                                    
                                 },
                                 "displayType":"RESTAURANT_DISPLAY_TYPE_BIG_CARD",
                                 "mediaDetails":[
                                    {
                                       "image":{
                                          "resource":"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG"
                                       }
                                    }
                                 ],
                                 "restaurantOfferPresentationInfo":{
                                    
                                 },
                                 "externalRatings":{
                                    "aggregatedRating":{
                                       "rating":"--"
                                    }
                                 },
                                 "ratingsDisplayPreference":"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics":{
                                 "context":"seo-data-5576a02c-2a35-4cf1-8eed-2f68fed413ff"
                              },
                              "cta":{
                                 "link":"https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
                                 "text":"RESTAURANT_MENU",
                                 "type":"WEBLINK"
                              },
                              "widgetId":"Foodpage_UX5_VerticalRestaurantList_TemporarilyClosed_by_Name"
                           }
                        ];

const Body = () => {
    return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        ))}
      </div>
    </div>
    );
}

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resData?.info;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/"+cloudinaryImageId}>
            </img>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{costForTwo}</h3>
            <h3>{deliveryTime} minutes</h3>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);