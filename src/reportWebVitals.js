const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

const collectLatLong = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos);
        });
    } else {
        console.log("geolocation not in navigator");
    }
    return;
};

export default reportWebVitals;

export {
    collectLatLong
};