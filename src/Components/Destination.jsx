import React from "react";
import "./DestinationStyle.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, Within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Paris, France:"
        text="Paris is the capital and most populous city of France, with an estimated population of 2,102,650 residents as of 1 January 2023, making it the fifth-most populated city in the European Union and the 30th most densely populated city in the world in 2022. The City of Paris is the center of the Île-de-France region, or Paris Region, with an official estimated population of 12,271,794 inhabitants as of 1 January 2023,"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-revers"
        heading="Somnath temple, Gujrat"
        text="The Somnath temple is an important pilgrimage and tourist spot in Gujarat, India. It is located in Prabhas Patan near Veraval in Saurashtra on the western coast of Gujrat and is believed to be the first among the twelve Jyotirlinga shrines of Shiva. It was reconstructed in the Chalukya style of Hindu temple architecture and was completed in May 1951. The reconstruction was started under the orders of the Indian Home Minister, Vallabhbhai Patel and completed after his death. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
