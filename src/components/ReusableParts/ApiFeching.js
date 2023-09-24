import { useEffect, useState } from 'react';

const useUnsplashImages = (query, perPage, page, orientation) => {
  const [imagesApi, setImagesApi] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = 'https://api.unsplash.com/search/photos';
  const apiKey = 'OUaKiH8GygKA0TiBxNxE8Om2QxIL1YZZuiTJKn8nCXo';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `${apiUrl}?query=${query}&page=${page}&per_page=${perPage}&orientation=${orientation}&client_id=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setImagesApi(jsonData.results);
      } catch (error) {
        setError(error);
      }
    };
    fetchImages();
  }, [query, perPage, page, orientation]);

  return { imagesApi, error };
};
export default useUnsplashImages

// Usage in a component
// const MyComponent = () => {
//   const { imagesApi, error } = useUnsplashImages('hotel-sea-view', 5);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {imagesApi.map((image) => (
//         <img key={image.id} src={image.urls.small} alt={image.alt_description} />
//       ))}
//     </div>
//   );
// };
