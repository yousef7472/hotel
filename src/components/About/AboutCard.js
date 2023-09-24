import "./About.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import useUnsplashImages from "../ReusableParts/ApiFeching";

const AboutCard = () => {
  const { imagesApi, error } = useUnsplashImages('enjoying-life', 2, 4, "portrait");
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return ( 
        <>
            <div className="aboutCard mtop flex_space">
                <div className="row image">
                            {imagesApi.map((img) => (
                                    <img key={img.id} src={img.urls.small} alt={img.alt_description} loading="lazy"/>
                            ))}
                </div>
                <div className="row row1">
                    <span className="title">About Us</span>
                    <h1>A Best Place to Enjoy </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit odio veritatis qui, voluptate debitis ad nemo accusantium quisquam voluptatibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit odio veritatis qui, voluptate debitis ad nemo accusantium quisquam voluptatibus.</p>
                    <button className="secondary-btn" aria-label="explore more">
                        Explore More <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </>
     );
}
export default AboutCard;