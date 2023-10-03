import React from "react";
import "./TripStyle.css";
import TripData from "./TripData";
import trip1 from "../assets/5.jpg";
import trip2 from "../assets/6.jpg";
import trip3 from "../assets/8.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>

      <div className="tripCard">
        <TripData
          image={trip1}
          heading="Trip in indonesia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam eos? Deleniti nemo reprehenderit non libero nostrum similique veritatis praesentium."
        />
        <TripData
          image={trip2}
          heading="Trip in indonesia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam eos? Deleniti nemo reprehenderit non libero nostrum similique veritatis praesentium."
        />
        <TripData
          image={trip3}
          heading="Trip in indonesia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam eos? Deleniti nemo reprehenderit non libero nostrum similique veritatis praesentium."
        />
      </div>
    </div>
  );
};

export default Trip;
