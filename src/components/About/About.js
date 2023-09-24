import AboutCard from "./AboutCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeadTitle from "../../common/HeadTitle/HeadTitle";

const About = () => {
    return ( 
        <>
            <HeadTitle/>
            <section className="about top">
                <div className="container">
                    <AboutCard/>
                </div>
            </section>
            <section className="features top">
                <div className="container aboutCard flex_space">
                    <div className="row row1">
                        <h2 className="title">
                            Our <span>Features</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit ad voluptatum quisquam odio perferendis et, doloribus ipsa nulla necessitatibus?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit ad voluptatum quisquam odio perferendis et, doloribus ipsa nulla necessitatibus?</p>
                        <button className="secondary-btn"  aria-label="explore more">
                        Explore More <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    <div className="row image">
                    <img src={require('../../images/About/about-img-1.webp')} alt="feature" loading="lazy"/>
                </div>
                </div>
            </section>
        </>
     );
}
 
export default About;