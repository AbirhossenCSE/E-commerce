// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import SectionTitle from "../SectionTitle/SectionTitle";

// const FeaturedCategory = () => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:5000/product")
//             .then((res) => res.json())
//             .then((data) => {
//                 // Extract unique categories
//                 const uniqueCategories = [];
//                 const categorySet = new Set();

//                 data.forEach((cat) => {
//                     if (!categorySet.has(cat.category)) {
//                         categorySet.add(cat.category);
//                         uniqueCategories.push(cat);
//                     }
//                 });

//                 setCategories(uniqueCategories);
//             });
//     }, []);

//     return (
//         <div className="mx-auto py-10">
//             <SectionTitle
//                 heading="Featured Category"
//                 subHeading="Get Your Desired Product from Featured Category!"
//             />

//             {/* Category Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//                 {categories.map((cat) => (
//                     <Link key={cat._id} to={`/products/${encodeURIComponent(cat.category)}`}>
//                         <div className="p-5 bg-white shadow-xl rounded-lg flex flex-col items-center cursor-pointer hover:scale-105 transition">
//                             <img src={cat.image} alt={cat.category} className="w-30 h-30 object-contain" />
//                             <h3 className="text-lg font-semibold mt-3">{cat.category}</h3>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FeaturedCategory;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then((res) => res.json())
            .then((data) => {
                const uniqueCategories = [];
                const categorySet = new Set();

                data.forEach((cat) => {
                    if (!categorySet.has(cat.category)) {
                        categorySet.add(cat.category);
                        uniqueCategories.push(cat);
                    }
                });

                setCategories(uniqueCategories);
            });
    }, []);

    return (
        <div className="mx-auto py-10">
            <SectionTitle
                heading="Featured Category"
                subHeading="Get Your Desired Product from Featured Category!"
            />

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {categories.map((cat) => (
                    <SwiperSlide key={cat._id}>
                        <Link to={`/products/${encodeURIComponent(cat.category)}`}>
                            <div className="p-5 bg-white shadow-xl rounded-lg flex flex-col items-center cursor-pointer hover:scale-105 transition">
                                <img src={cat.image} alt={cat.category} className="w-30 h-30 object-contain" />
                                <h3 className="text-lg font-semibold mt-3">{cat.category}</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedCategory;
