import useUnsplashImages from "../../ReusableParts/ApiFeching";
import classes from "./destination.module.css";
const DestinationHome = () => {
    const { imagesApi, error } = useUnsplashImages('popular-tourist-view', 4, 3, "portrait");

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return ( 
        <>
            <section className="popular top">
                <div className="full_container flex">
                    <div className={classes.text}>
                        <span className="title">Populer Destination</span>
                        <h2 className="title">Choose Your Country</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                         All the Lorem Ipsum generators.</p>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.images}>
                            <div className={classes.one}>
                            {imagesApi.slice(0,2).map((slide) => (
                                <div key={slide.id}>
                                    <div className={classes.box}>
                                        <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy"/>
                                        <div className={classes.text}>
                                            <h3>Firenze, Italy </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <div className={classes.two}>
                            {imagesApi.slice(2).map((slide) => (
                                <div key={slide.id}>
                                    <div className={classes.box}>
                                        <img src={slide.urls.thumb} alt={slide.alt_description} loading="lazy"/>
                                        <div className={classes.text}>
                                            <h3>Carisbrooke, UK </h3>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default DestinationHome;