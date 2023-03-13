import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals, { collectLatLong } from "./reportWebVitals";
import VSCodeEditor, { VSCodeEditorAsPage } from "./components/VSCodeEditor";
import Carousel, { carouselChildren, sources } from "./components/Carousel";
// import Carousel2 from "./components/Carousel2";
import AmongUs from "./components/AmongUs";

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <PhoneChat /> */}

        <VSCodeEditorAsPage />
        <AmongUs />

        {/* <Carousel>
            <h1>hi there</h1>
            <h2>the second elem</h2>
            <p>whoa now, we got 3?</p>
            <Editor />
            {carouselChildren(sources)}
        </Carousel> */}

        {/* <Carousel2/> */}
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
collectLatLong();