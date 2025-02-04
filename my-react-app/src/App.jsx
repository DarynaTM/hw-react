import React from "react";
import Card from "./Card";

const data = [
  {
    img: "https://uploads5.wikiart.org/images/maria-prymachenko/ivan-gave-the-landlord-a-ride-in-his-gig-and-fell-inside-1983.jpg!Large.jpg",
    title: "Отак Іван пана покатав, аж у коляску впав",
    description: "Рік: 1983. Жанр: жанровий живопис",
  },
  {
    img: "https://uploads2.wikiart.org/images/maria-prymachenko/this-beast-is-making-magic-1983.jpg!Large.jpg",
    title: "Цей звір ворожить",
    description: "Рік: 1983. Жанр: міфологічний живопис",
  },
  {
    img: "https://uploads0.wikiart.org/images/maria-prymachenko/monkey-riding-a-four-headed-beast-1982.jpg!Large.jpg",
    title: "Мавпа їде на чотириголовому звірі",
    description: "Рік: 1982. Жанр: міфологічний живопис",
  },
];

const App = () => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <Card key={index} img={item.img} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default App;