// GReviews.js
import React from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import "./GReviews.css";
function GReviews() {
  const featurableWidgetId = "a534fb67-9511-4753-806f-671b133a6f72";

  <h1 className="">Top Reviews</h1>;
  return (
    <section className="FirstBox">
      <div className="revDiv">
        <ReactGoogleReviews
          layout="carousel"
          featurableId={featurableWidgetId}
        />
        {/* TODO make her an account */}
      </div>
    </section>
  );
}
export default GReviews;
