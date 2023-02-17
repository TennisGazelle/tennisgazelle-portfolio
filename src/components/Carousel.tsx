import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

const Carousel = () => {
    const [selected, setSelected] = useState(0);
    const itemsRef = useRef<any>([]);

    useEffect(() => {
        itemsRef.current[selected].scrollIntoView({ behavior: "smooth" });
    }, [selected]);

    const renderItem = (src: string | undefined, index: number, classNames: string | undefined) => {
        return (
            <div className={classNames} key={index}>
                <img src={src} alt="Carousel item" />
            </div>
        );
    };
      
    const renderItems = () => {
        const sources = [
            "https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg",
            "https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg"
        ];
        const items = [];
        for (let i = 0; i < sources.length; i++) {
            let classNames = "carousel ";
            if (i === selected) {
                classNames += " selected";
            } else if (i === selected - 1) {
                classNames += " prev";
            } else if (i === selected - 2) {
                classNames += " prevLeftSecond";
            } else if (i === selected + 1) {
                classNames += " next";
            } else if (i === selected + 2) {
                classNames += " nextRightSecond";
            } else if (i < selected - 2 || i > selected + 2) {
                classNames += " hide";
            }
            items.push(renderItem(sources[i], i, classNames));
        }
        return (
            <div ref={(el) => {
                // itemsRef.current = el.children;
            }}>{items}</div>
        );
    };

    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === "ArrowLeft") {
            moveToSelected("prev");
        } else if (e.key === "ArrowRight") {
            moveToSelected("next");
        }
    };

    const handleClick = (index: number) => {
        setSelected(index);
    };

    const moveToSelected = (direction: string) => {
        if (direction === "next" && selected < itemsRef.current.length - 1) {
            setSelected(selected + 1);
        } else if (direction === "prev" && selected > 0) {
            setSelected(selected - 1);
        }
    };
    

    return <>
        <div className="carousel" tabIndex={0} onKeyDown={handleKeyDown}>
            <div className="carousel-items">{renderItems()}</div>
            <div className="buttons">
                <button id="prev" onClick={() => moveToSelected("prev")}>Prev</button>
                <button id="next" onClick={() => moveToSelected("next")}>Next</button>
            </div>

        </div>
    </>;
};

export default Carousel;