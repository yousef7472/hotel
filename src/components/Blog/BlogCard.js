import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({item : {id, date, catgeory, title, cover, para, desc}}) => {
    return ( 
        <>
            <div className="items">
                <div className="img">
                    <img src={cover} alt="" />
                </div>
                <div className="catgeory flex_space">
                    <span>{date}</span>
                    <label>{catgeory}</label>
                </div>
                <div className="details">
                    <h3>{title}</h3>
                    <p>{para}</p>
                </div>
                <Link to={`/blogsingle/${id}`} className="blogItem-link">
                    <span className="sr-only">Read More</span>
                    <span aria-hidden="true">blog page</span>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </Link>
            </div>
        </>
     );
}
 
export default BlogCard;