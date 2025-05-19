import hh1 from "/public/img/details/hh1.jpg";
import hh2 from "/public/img/details/hh2.jpg";
import hh3 from "/public/img/details/hh3.jpg";
import hh4 from "/public/img/details/hh4.jpg";
import hh5 from "/public/img/details/hh5.jpg";
import hh6 from "/public/img/details/hh6.jpg";

const hotelsData = [
  {
    id: 1,
    title: "Bitast Hotel",
    rating: "4.6",
    location: "New City, Dubai",
    price: {
      originalPrice: "$332",
      discountedPrice: "$312",
      discount: "20% OFF",
    },
    roomPerNight: "1 Room/night",
    image: hh1,
    link: "/hotel-details",
  },
  {
    id: 2,
    title: "Skyp Hotel",
    rating: "4.7",
    location: "Paris, France",
    price: {
      originalPrice: "$532",
      discountedPrice: "$442",
      discount: "20% OFF",
    },
    roomPerNight: "1 Room/night",
    image: hh2,
    link: "/hotel-details",
  },
  {
    id: 3,
    title: "East West Hotel",
    rating: "4.9",
    location: "Prime city, Abu Dhabi",
    price: {
      originalPrice: "$932",
      discountedPrice: "$712",
      discount: "20% OFF",
    },
    roomPerNight: "1 Room/night",
    image: hh3,
    link: "/hotel-details",
  },
  {
    id: 4,
    title: "North South Hotel",
    rating: "5",
    location: "New york, US",
    price: {
      originalPrice: "$1032",
      discountedPrice: "$912",
      discount: "20% OFF",
    },
    roomPerNight: "1 Room/night",
    image: hh4,
    link: "/hotel-details",
  },
  {
    id: 5,
    title: "Jack Luxury Hotel",
    rating: "4.7",
    location: "Mumbai, India",
    price: {
      originalPrice: "$932",
      discountedPrice: "$742",
      discount: "20% OFF",
    },
    roomPerNight: "1 Room/night",
    image: hh5,
    link: "/hotel-details",
  },
  {
    id: 6,
    title: "Sea Life Hotel",
    rating: "5",
    location: "Sydney, Australia",
    price: {
      originalPrice: "$1050",
      discountedPrice: "$950",
      discount: "10% OFF",
    },
    roomPerNight: "1 Room/night",
    image: hh6,
    link: "/hotel-details",
  },
];

export default hotelsData;
