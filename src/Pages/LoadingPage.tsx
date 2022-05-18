import React from 'react'
import { Link } from "react-router-dom";
import "./LoadingPage.module.scss";
const logo = require("../img/loading.svg") as string;

function LoadingPage() {
    return (
        <Link to={"/SetTimer"}> <div className="startBg">
            <img src={logo} alt="logo" />
        </div>
        </Link>
    );
}

export default LoadingPage;