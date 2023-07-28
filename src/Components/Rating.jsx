import React from "react";
import * as PiIcons from "react-icons/pi";
import "../Styles/rating.scss";

const Rating = ({ num }) => {
  const pawPrints = [];

  for (let i = 0; i < 5; i++) {
    if (i < num) {
      pawPrints.push(<PiIcons.PiPawPrintFill key={i} />);
    } else {
      pawPrints.push(<PiIcons.PiPawPrint key={i} />);
    }
  }

  return <div className="rating-container">{pawPrints}</div>;
};

export default Rating;