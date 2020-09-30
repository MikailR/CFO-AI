import robotInterface from "./robot-interface 2.png";
import robotWaiter from "./robot-waiter 3.png";
import robotSupplier from "./inventory.png";

const SliderContent = [
  {
    id: 0,
    text: {
      headline: "Restaurant Growth On Autopilot",
      paragraph1:
        "Join 600+ restaurants and pre-register for CFO AI. With actionable insights, recommendations powered by Artificial Intelligence, and benchmarking against your competitors, you don't want to wait!",
      paragraph2:
        "Restaurants around the world have already started using AI to make better financial decisions. Be sure to pre-register for your free demo when we launch.",
      test: "Actionable insights and recommendations powered by artificial intelligence",
      button: "Pre-Register",
    },
    image: robotInterface,
  },
  {
    id: 1,
    text: {
      headline: "Hospitality-Centred Staff Optimizations",
      paragraph1:
        "BDO Canada reports that customers value hospitality, but a time in motion study done by a Sweedish WeOrder Restaurant found that employees spend more than 85% of their time on mundane tasks like taking or fulfulling orders.",
      paragraph2:
        "CFO AI's staff optimization feature lets your employees focus on hospitality by analyzing their performance metrics, and gives profitable recommendations on shift scheduling and staff to table ratios.",
      button: "Pre-Register",
    },
    image: robotWaiter,
  },
  {
    id: 2,
    text: {
      headline: "Menu And Inventory Management",
      paragraph1:
        "Our Kitro partnetship lets CFO AI accurately track your food wastage. CFO AI also analyzes your sales data to generate recommendations such as price changes or new combos.",
      paragraph2:
        "This gives you insights into what customers want the most and also lets you know exactly what to order to reduce wastage.",
      button: "Pre-Register",
    },
    image: robotSupplier,
  },
];

export default SliderContent;
