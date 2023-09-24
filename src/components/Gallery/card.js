import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
    const [popup, setPopup] = useState(false)
    const toggleModal = () => {
        setPopup(!popup)
    }
    return ( 
        <>
            <div className="items">
                <div className="img" onClick={toggleModal}>
                    <img src={props.images} alt={props.title} />
                    <FontAwesomeIcon icon={faImage} />
                </div>
                <div className="title">
                    <h3>{props.title}</h3>
                </div>
            </div>
            {popup && (
            <div className="popup" onClick={toggleModal}>
                <div className="hide"></div>
                <div className="popup-content" >
                    <img src={props.images} alt={props.title} />
                </div>
            </div>
            )}
            
        </>
     );
}
 
export default Card;