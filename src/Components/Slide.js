import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styles from "./Slide.module.css"

const Slide = ({ slides }) => {
    const [data, setData] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setData(data === length - 1 ? 0 : data + 1);
    }

    const prevSlide = () => {
        setData(data === 0 ? length - 1 : data - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className={styles.slider}>
            <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
            <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide}/>
            {SliderData.map((slide, index ) => {
                return (
                    <div className={index === data ? styles.active : styles.inactive} key={index}>
                        {index === data && (<a href={slide.url} target="_blank"><img src={slide.image} alt="Image of project" className={styles.image}/></a>)}
                    </div>
                )
            })}
        </section>
    )
}

export default Slide
