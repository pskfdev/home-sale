import React from "react";
import { Container, ImageList, ImageListItem } from "@mui/material";

const PropertyCard = ({ imageSrc, title, propertiesCount }) => {
  return (
    <div className="relative">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-white bg-opacity-50 p-4">
        <p className="text-lg font-bold">{title}</p>
        <p>{propertiesCount} Properties</p>
      </div>
    </div>
  );
};

function SelectType() {
  const cards = [
    {
      id: 1,
      title: "delectus aut autem",
      url: "https://thepandaproperty.com/wp-content/uploads/2023/07/townhouse.jpeg",
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      url: "https://thepandaproperty.com/wp-content/uploads/2023/07/ready-to-build.jpeg",
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      url: "https://thepandaproperty.com/wp-content/uploads/2023/07/semi-detached-house.jpeg",
    },
    {
      id: 4,
      title: "et porro tempora",
      url: "https://thepandaproperty.com/wp-content/uploads/2023/07/condo.jpeg",
    },
    {
      id: 5,
      title: "laboriosam mollitia et",
      url: "https://thepandaproperty.com/wp-content/uploads/2023/07/land.jpeg",
    },
    {
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      url: "https://thepandaproperty.com/wp-content/uploads/2023/07/single-house.jpeg",
    },
    {
      id: 7,
      title: "illo expedita consequatur quia in",
      url: "https://thepandaproperty.com/wp-content/uploads/2023/07/apartment.jpeg",
    },
    {
      id: 8,
      title: "quo adipisci enim quam ut ab",
      url: "https://thepandaproperty.com/wp-content/uploads/2023/07/commercial-building.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <PropertyCard
          key={index}
          imageSrc={card.url}
          title={card.title}
          propertiesCount={card.id}
        />
      ))}
    </div>
  );
}

export default SelectType;
