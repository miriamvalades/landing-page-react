//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import NavBar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import BootstrapCard from "./component/bootstrapcard.jsx";
import Footer from "./component/footer.jsx";


//render your react application
ReactDOM.render(
<div>
    <NavBar />
    <Jumbotron />
    <BootstrapCard />
    <Footer />
</div>, document.querySelector("#app"));