import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import useUnsplashImages from "../ReusableParts/ApiFeching";
import "./Home.css"

const Slide = () => {
    
    const [current, setCurrent] = useState(0);
    const { imagesApi, error } = useUnsplashImages('hotel-sea-view', 5, 3, "landscape");
 
//   useEffect(()=> {
// const interval = setInterval(() => {
//             setCurrent((prevCurrent) => (prevCurrent === imagesApi.length - 1 ? 0 : prevCurrent + 1));
//           }, 3500);
        
//           return () => clearInterval(interval);
//   }, [imagesApi.length])
  if (error) {
    return <div>Error: {error.message}</div>;
  }

    const length = imagesApi.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(imagesApi) || imagesApi.length <= 0) {
        return null
    }
    
    return ( 
        <>
            <section className="container parent flex">
                <div className="control-btn">
                    <button className="prev" onClick={prevSlide} aria-label="prev slide">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className="next" onClick={nextSlide}  aria-label="next slide">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                {imagesApi.slice(current, current + 5).map((image, index) => (
                    <div key={image.id} className={index === current ? "slide active" : "slide"}>
                        <div className="image-container">
                            <img src={image.urls.regular} alt={image.alt_description} loading="lazy"/>
                        </div>
                        <div className="slide-title">
                            <h2>The Hotel Booking & Resort</h2>
                            <p>Make Your Life Better and Bright! You must trip with Us!</p>
                            <button>Book A Room</button>
                        </div>
                    </div>
                ))}
            </section>
        </>
     );
}
 
export default Slide;