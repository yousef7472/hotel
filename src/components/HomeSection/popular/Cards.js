import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import PopularData from "./PopData";
import Slider from "react-slick";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const Cards = (props) => {
  const CartCTX = useContext(CartContext)  
  var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,

            }
          },
        ]
      };
      
      const addToCartHandler = (amount, name, price, id) => {
          CartCTX.addItem({
            amount: amount,
            name: name,
            price: price,
            id: id,
          })
      }
      const submitHandler = (e) => {
        e.preventDefault();
      }
    return ( 
        <>
        <Slider {...settings}>
            {PopularData.map((value, index) => {
                return (
                  <form className="cards" key={value.id} onSubmit={submitHandler}>
                        <div className="item">
                            <div className="imgae">
                                <img src={value.image} alt="img for hotel" />
                                <div className="add">
                                    <button onClick={() => addToCartHandler(1, value.name, value.price, value.id)}><FontAwesomeIcon icon={faCartShopping} /></button>
                                </div>
                                <div className="cont-inside">
                                  <FontAwesomeIcon icon={faLocationDot} />
                                  <label>{value.country}</label>
                                </div>
                            </div>
                        <div className="rate">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="details">
                            <h3>{value.name}</h3>
                            <div className="boarder">
                                <h4>
                                    {value.price} / <span>Per Night</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </form>
                )
        })}
        </Slider>
        </>
     );
}
 
export default Cards;