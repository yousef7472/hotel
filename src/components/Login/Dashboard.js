import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material"

export default function Dashboard() {
  const [error, setError] = useState("");
  const [age, setAge] = useState('');

  const { currentUser, logout } = useAuth();
  const history = useNavigate();
  const [imageApi, setImageApi] = useState();
  const [imagesApi, setImagesApi] = useState()
  const apiUrl = 'https://api.unsplash.com/search/photos';
  const apiKey = 'OUaKiH8GygKA0TiBxNxE8Om2QxIL1YZZuiTJKn8nCXo';

      const fetchbg = async () => {
        try {
          const response = await fetch(`${apiUrl}?query=sea&page=5&per_page=1&client_id=${apiKey}`);
          const response1 = await fetch(`${apiUrl}?query=home&page=1&per_page=3&client_id=${apiKey}`);

          if (!response.ok || !response1.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          const jsonData1 = await response1.json();

          setImageApi(jsonData.results);
          setImagesApi(jsonData1.results);

        } catch (error) {
          setError(error);
        }
      };
      console.log(fetchbg());

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/sign")
    } catch {
      setError("Failed to log out")
    }
  }

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <section className="dash">
        <div>
          {imageApi?.map((item, index) => {
                    return (
                              <div className="bg-sea" key={index}>
                                    {<img key={item.id} src={item.urls.regular} alt={item.alt_description} />}
                              </div>
                            )
          })}
          <div className="flex">
              {imagesApi?.map((item, index) => {
                    return (
                          <div className="card" key={index}>
                                {<img key={item.id} src={item.urls.small} alt={item.alt_description} />}
                          </div>
                    )
              })}
          </div>
          <h2>Hotel Booking</h2>
          <p>Experience something new every moment</p>
          <form>
              <div className="flex">
                <label htmlFor="standard-basic">Name:</label>
                <TextField id="standard-basic" label="First Name" variant="standard" />
                <TextField id="standard-basic" label="Last Name" variant="standard" />
              </div>
              <div className="flex email">
                  <strong>E-mail:</strong> 
                  <TextField
                    disabled
                    id="outlined-disabled"
                    defaultValue={currentUser.email}
                  />
              </div>
              <div className="flex roomt">
              
                    <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Room Type"
                      onChange={handleChangeAge}
                    >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value='standard'>Standard Room (1 to 2 People)</MenuItem>
                          <MenuItem value='family'>Family Room (1 to 4 People)</MenuItem>
                          <MenuItem value='private'>Private Room (1 to 3 People)</MenuItem>
                          <MenuItem value='mix'>Mix Dorm Room (6 People)</MenuItem>
                          <MenuItem value='female'>Female Dorm Room (6 People)</MenuItem>
                          <MenuItem value='male'>Male Dorm Room (6 People)</MenuItem>
                      </Select>
              </div>
              <div className="date">
                
              </div>
          </form>
          {error && <p>{error}</p>}
          <Link to="/dashboard/update-profile" className="">
            Update Profile
          </Link>
        </div>
      </section>
      <div className="">
        <Button onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}