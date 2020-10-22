import React from "react";
import "./CFOAIDetails.css";
import screenshot from "../../../assets/cfo-ai/dashboard-screenshot.png";

import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import CFOAIDetailContent from "../../../assets/details/CFOAIDetailContent.js";

const CFOAIDetails = () => {
  return (
    <div className="cfo-ai-details">
      <h2 className="header">
        Here's how CFO AI helps you to profit and grow on autopilot
      </h2>

      <p className="paragraph">
        BDO Canada has highlighted the positive impact of benchmarking in
        identifying areas of strength to be replicated across a multi-unit
        franchise. Powered by our global restaurant community, CFO AI makes this
        type of 'analysis through benchmarking' available to all restaurants.
      </p>

      <p className="paragraph">
        For the first time, you’ll be able to compare your most important
        metrics to every restaurant in our 600+ global network with CFO AI’s
        beautiful and customizable data-dashboard.
      </p>

      <p className="paragraph">
        It highlights the metrics that matter the most such as:
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
        You can interpret this data in any way you wish, but to save you the
        time from doing a bunch of complicated math, CFO AI goes a step further
        to highlight the unintuitive. It uses these metrics and your benchmark
        to generate recommendations that boost your profits and reduce your
        wastage.
      </p>

      <p className="paragraph">
        For example, CFO AI might realize that certain menu items are
        underperforming and recommend that you remove that item from the menu.
        It may also find two menu items that appear to be complementary and
        suggest that you pair them in a combo. The coolest part is that these
        menu changes can easily be phased in with CFO AI's hospitality tech.
      </p>

      <p className="paragraph">
        CFO AI also monitors the fluctuating demand of each menu ingredient to
        reliably automate your inventory management. It forecasts the future
        demand for each ingredient and gives you the option to automatically
        order the exact quantities needed to reduce inventory wastage and still
        fulfill every customer’s order.
      </p>

      <p className="paragraph">
        The best part is that it all works by using only your most recent and
        relevant restaurant data. CFO AI only monitors this and last week’s data
        without ever storing it.
      </p>

      <p className="paragraph">
        In other words, CFO AI does the complicated math to grow your restaurant
        while keeping your data safe and secure! It crunches the numbers in real
        time and on autopilot to highlight your most important metrics and
        generate profitable suggestions for menu changes, staff scheduling, food
        wastage, and more.
      </p>

      <p className="paragraph">
        Also, CFO AI’s recommendations are completely optional so you can decide
        whether or not to implement them by simply clicking a button.
      </p>

      <p className="paragraph">
        Take a look at our demo video below to see some more of what CFO AI can
        do for your restaurant.
      </p>
    </div>
  );
};

export default CFOAIDetails;
