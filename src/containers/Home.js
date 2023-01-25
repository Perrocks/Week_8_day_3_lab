import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import ItemList from "../components/ItemList";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () =>{

    const [products, setProducts] = useState([
        {name : "Guitar",
        price : "100",
        type : "Acoustic"
    },
        {name : "Guitar",
        price : "200",
        type : "Bass"
    },
        {name : "Piano",
        price : "400",
        type : "Digital"
    },
        {name : "Piano",
        price : "500",
        type : "Upright"
    },
        {name : "Violin",
        price : "300",
        type : "Acoustic"
    },
        {name : "Trumpet",
        price : "150",
        type : "Brass"

        }
    ])

    return(
        <Router>
            <NavBar/>
                <Routes>
                    <Route path ="/" element={ <ItemList products = {products}/>}/>
                </Routes>
        </Router>
        )
}

export default Home