import compoundImg from "./src/assets/images/Compound 2.jpg";
import kitchen1Img from "./src/assets/images/Kitchen 1.jpg";
import livingRoom1Img from "./src/assets/images/Living room 1.jpg";
import bedroom1Img from "./src/assets/images/Bedroom 1.jpg";
import livingRoom3Img from "./src/assets/images/Living room 3.jpg";
import restRoom1Img from "./src/assets/images/Rest Room 3.jpg";
import kitchen2Img from "./src/assets/images/Kitchen 4.jpg";
import bedroom2Img from "./src/assets/images/Bedroom 4.jpg";

export const moreImages = [
  { id: 0, image5: compoundImg },
  { id: 1, image6: kitchen1Img },
  { id: 2, image7: livingRoom1Img },
  { id: 3, image8: bedroom1Img },
];

export const homeImages = [
  {
    id: 1,
    image1: compoundImg,
    houseType: "3 bedroom apartment in Alagbaka",
    price: "N1,000,000",
    summary: "3 bedrooms and 2 bathrooms",
  },
  {
    id: 2,
    image1: compoundImg,
    houseType: "2 bedroom apartment in Oba-ile",
    price: "N650,000",
    summary: "2 bedrooms and 2 bathrooms",
  },
];

export const properties = [
  {
    id: 1,
    title: "3 Bedroom Apartment",
    location: "Alagbaka",
    houseType: "Apartment",
    price: 1000000,
    bedrooms: 3,
    bathrooms: 2,
    images: [compoundImg, kitchen2Img, bedroom2Img],
  },
  {
    id: 2,
    title: "2 Bedroom Bungalow",
    location: "Ijapo Estate",
    houseType: "Bungalow",
    price: 750000,
    bedrooms: 2,
    bathrooms: 2,
    images: [livingRoom3Img, bedroom1Img, restRoom1Img],
  },
];
