import React from "react";
import "./CFOAIDetails.css";
import screenshot from "../../../assets/cfo-ai/dashboard-screenshot.png";
import networkEffect from "../../../assets/cfo-ai/network-effect.png";

import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import CFOAIDetailContent from "../../../assets/details/CFOAIDetailContent.js";

const CFOAIDetails = () => {
  return (
    <div className="cfo-ai-details">
      <h2 className="header">
        Here's how CFO AI helps you to profit and grow on autopilot
      </h2>

      <p className="paragraph">
        The 2019 BDO Report highlighted the positive impact on profitability
        that multi-unit franchises enjoy by benchmarking across their network to
        identify operational improvements for each franchise. Powered by our
        global restaurant community, CFO AI provides this ‘profit boost through
        benchmarking’ to all of its member restaurants.
      </p>

      <p className="paragraph">
        For the first time, you will be able to learn why your performance
        metrics are better or worse than other restaurants. You will be guided
        on what steps to take to improve by the user-friendly and easy-to-follow
        CFO AI.
      </p>

      <p className="paragraph">
        CFO AI dashboards provide recommendations and explain the impact on key
        metrics such as:
      </p>

      <div className="bullet-container">
        {CFOAIDetailContent.map((detail, index) => {
          return (
            <BulletPoint
              text={detail.text}
              color={"blue"}
              className="cfo-ai-bullet-point"
              key={index}
            />
          );
        })}
      </div>

      <img
        src={screenshot}
        className="screenshot"
        alt="Screenshot of the CFO AI dashboard"
      />

      <p className="paragraph">
        CFO AI simplifies the complexity of your restaurant’s financial
        management into “green button” moments so you can easily interpret the
        purpose and impact of any recommendation.
      </p>

      <p className="paragraph">
        Many restaurant owners know which menu items make the most sales. But
        best-selling does not always mean it is the most profitable. CFO AI
        helps you understand what matters most to profitability.
      </p>

      <p className="paragraph">
        Depending on the level of digital integration with your restaurant, CFO
        AI may be applied to automate your inventory management.
      </p>

      <p className="paragraph">
        CFO AI enables credit and financing options because the focus is only on
        recent and relevant business metrics. Traditional credit scoring is too
        harsh and ineffective because what matters most is how the entire
        marketplace is performing and sharing insights so that all restaurants
        are thriving.
      </p>

      <img
        src={networkEffect}
        className="network-effect"
        alt="Smaller fishes coming together to capture a big fish"
      />

      <p className="paragraph">
        In other words, CFO AI does the complicated math to improve your
        restaurant along with the entire community of restaurants. CFO AI is a
        shared resource for the community, so no personally identifiable
        information is ever stored on the platform.
      </p>

      {/* <p className="paragraph">
        Also, CFO AI’s recommendations are completely optional so you can decide
        whether or not to implement them by simply clicking a button.
      </p> */}

      <p className="paragraph">
        Take a look at our demo video below to see some more of what CFO AI can
        do for your restaurant.
      </p>
    </div>
  );
};

export default CFOAIDetails;
