import React from "react";
import "./WMDetails.css";

const WMDetails = () => {
  return (
    <div className="waste-management-details">
      <h2 className="header">Here's how it works</h2>

      <p className="paragraph">
        Our waste management tech determines the weight and identity of every
        food item and ingredient that is disposed of in the bins at your
        restaurant.
      </p>

      <p className="paragraph">
        CFO AI quickly processes this information and elegantly displays your
        key wastage metrics on an easy-to-read dashboard.
      </p>

      <p className="paragraph">
        Now although you can interpret this data on your own, CFO AI greatly
        simplifies the analysis for you. It leverages only your most recent
        wastage metrics to generate evidence-based suggestions for reducing your
        food wastage, along with the expected increase in profits if
        implemented.
      </p>

      <p className="paragraph">
        For example, if CFO AI recognizes that fries are frequently wasted in a
        burger combo, it will present an array of sustainable options to combat
        this such as resizing the portion or reallocating the fries to a
        different menu item.
      </p>

      <p className="paragraph">
        CFO AI may also realize that chefs on a certain shift are wasting more
        meat than others. In this case, it uses your benchmark in our global
        community to identify a threshold that will prompt you to take action
        when it is crossed.
      </p>

      <p className="paragraph">
        Of course, the decision to implement a recommendation is all yours, and
        depending on the recommendation you choose, CFO AI will automatically
        adjust your inventory orders accordingly.
      </p>

      <p className="paragraph">
        Let us take you to the forefront of waste management in the restaurant
        industry. Equipped with our waste management tech, you’ll be a superhero
        for both your business and the planet.
      </p>
    </div>
  );
};

export default WMDetails;
