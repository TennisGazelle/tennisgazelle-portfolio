import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Editor from "./components/VSCodeEditor";
// import Carousel from "./components/Carousel";
// import Carousel2 from "./components/Carousel2";


ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <PhoneChat /> */}
        <Editor />
        {/* <Carousel /> */}
        {/* <Carousel2/> */}
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
