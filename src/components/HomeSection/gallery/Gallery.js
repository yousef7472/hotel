// import Data from "./Data"
// import "./Gallery.css"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// const Gallery = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//   }
//   return (
//     <div>
//       <section className='collection'>
//         <div className='container top'>
//           <Slider {...settings}>
//             {Data.map((value, index) => {
//               return (
//                 <div className='box' key={index}>
//                   <img src={value.cover} alt='' />
//                 </div>
//               )
//             })}
//           </Slider>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Gallery