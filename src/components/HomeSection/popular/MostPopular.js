import Cards from "./Cards";
import "./MostPopular.css"
const MostPopular = () => {
    return ( 
        <>
            <section className="popular top">
                <div className="full_container">
                    <div className="heading">
                        <h2>Most Popular Hotel</h2>
                        <div className="line"></div>
                    </div>
                    <div className="content">
                        <Cards/>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default MostPopular;