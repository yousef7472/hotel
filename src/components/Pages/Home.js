import {lazy, Suspense} from 'react';

// import Hero from "../HomeSection/Hero";
const HomeAbout = lazy(() => import('../HomeSection/HomeAbout'));
const MostPopular = lazy(() => import('../HomeSection/popular/MostPopular'));
const DestinationHome = lazy(() => import('../HomeSection/Destina/destinationHome'));
const News = lazy(() => import('../HomeSection/New/News'));
const Download = lazy(() => import('../HomeSection/Download/Download'));
const Works = lazy(() => import('../HomeSection/Works/Works'));
// const Gallery = lazy(() => import('../HomeSection/gallery/Gallery'));
const Slide = lazy(() => import('../HomeSection/Slide'));
const BasicTabs = lazy(() => import('../HomeSection/Rooms/CustomTabPanel'))
const Testimonial = lazy(() => import('../HomeSection/Testimonial/Testimonial'))

const Home = () => {
      
    return ( 
        <>
                <Slide/>
                <HomeAbout/>
                <DestinationHome/>
                <MostPopular/>
                <News/>
                <Download/>
                {/* <Gallery/> */}
                <BasicTabs/>
                <Testimonial/>
                <Works/>
        </>
     );
} 
export default Home;