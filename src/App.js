import {lazy, Suspense} from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css';

const Home = lazy(() => import('./components/Pages/Home'));
const About = lazy(() => import('./components/About/About'));
const Gallery = lazy(() => import('./components/Gallery/gallery'));
const Destination = lazy(() => import('./components/Destination/Home'));
const SinglePages = lazy(() => import('./singlePage/SinglePages'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const BlogSingle = lazy(() => import('./components/Blog/blog-single-page/BlogSingle'));
const RoomSingle = lazy(() => import('./components/HomeSection/Rooms/RoomSingle'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Login = lazy(() => import('./components/Login/Login'));
const Register = lazy(() => import('./components/Login/Register'));
const ForgotPass = lazy(() => import('./components/Login/ForgotPass'));
const ErrorPage = lazy(() => import('./components/Error'));
const RootLayout = lazy(() => import('./components/Root'));
const PrivateRoute = lazy(() => import('./components/Login/PrivateRoute'));
const Dashboard = lazy(() => import('./components/Login/Dashboard'));
const UpdateProfile = lazy(() => import('./components/Login/UpdateProfile'));

function App() {
  const loading = <Box><CircularProgress /></Box>
  // const location = useLocation();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/gallery', element: <Gallery /> },
        { path: '/destination', element: <Destination /> },
        { path: '/singlepage/:id', element: <SinglePages /> },
        { path: '/room-single', element: <RoomSingle /> },
        { path: '/blog', element: <Blog /> },
        { path: '/blogsingle/:id', element: <BlogSingle /> },
        { path: '/contact', element: <Contact /> },
        { path: '/sign', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/forgot', element: <ForgotPass /> },
        { path: '/dashboard', element: <PrivateRoute exact component={Dashboard}/>},
        { path: '/dashboard/update-profile', element: <PrivateRoute component={UpdateProfile}/>}
      ],
    }
  ]);
  
  return (
    <Suspense fallback={loading}>
     <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
