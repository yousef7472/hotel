import { BrowserRouter, Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./HeadTitle.module.css"
import { useEffect, useState } from "react";
const HeadTitle = () => {
    const location = useLocation()
    const [imageApi, setImageApi] = useState()
    const [error, setError] = useState()
    // const history = useNavigate();

    // const handleClick = () => {
    //   history('/');
    // };
    const navigate = useNavigate();
	const goHome = () => {
		navigate(-1);
	}
  const apiUrl = 'https://api.unsplash.com/search/photos';
  const apiKey = 'OUaKiH8GygKA0TiBxNxE8Om2QxIL1YZZuiTJKn8nCXo';
useEffect(() => {
  const fetchbg = async () => {
    try {
      const response = await fetch(`${apiUrl}?query=sea&page=70&per_page=1&client_id=${apiKey}`);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();

      setImageApi(jsonData.results);

    } catch (error) {
      setError(error);
    }
  };
  console.log(fetchbg());
}, [])
    
    return ( 
       <>
        <section className={classes.heading}>
        {imageApi?.map((item, index) => {
                    return (
                              <div className={classes.background} key={index}>
                                    {<img key={item.id} src={item.urls.regular} alt={item.alt_description} />}
                              </div>
                            )
          })}
            <div className={classes.container}>
                <h1>{location.pathname.split("/")[1]}</h1>
                <button type="button" aria-label="back to home">
                    <Link to='/'>Home  / </Link>
                    <span>{location.pathname.split("/")[1]}</span>
                </button>
            </div>
        </section>
       </> 
     );
}
 
export default HeadTitle;