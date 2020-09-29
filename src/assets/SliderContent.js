import robotInterface from "./robot-interface 2.png";
import robotWaiter from "./robot-waiter 3.png";
import robotSupplier from "./robot-inventory.png";
// import svgTest from "./robot-waiter.svg";

const SliderContent = [
  {
    id: 0,
    text: {
      headline: "Restaurant Growth On Autopilot",
      paragraph1:
        "Join 600+ restaurants and pre-register for our new Financial Management App. With recommendations powered by Artificial Intelligence, a built in POS System, options for micro-financing, and an emergency fund, you don't want to wait!",
      paragraph2:
        "Restaurants around the world have already started using AI to make better financial decisions. Be sure to pre-register for your free demo when the App launches.",
      button: "Pre-Register",
    },
    image: robotInterface,
  },
  {
    id: 1,
    text: {
      headline: "Focus On Hospitality",
      paragraph1:
        "According to a time in motion study done by a Sweedish We Order Restaurant, an average 12 out of 14 minutes of restaurant staff are spent on mundane tasks like taking or fulfulling orders.",
      paragraph2:
        "Staff optimizations allow employees to focus on being hospitality providers rather than order takers while the robots take care of the robotic stuff",
      button: "Pre-Register",
    },
    image: robotWaiter,
  },
  {
    id: 2,
    text: {
      headline: "Inventory Easier Than Ever!",
      paragraph1: "Inventory management is a time-consuming and thought-intensive process for restaurant owners.",
      paragraph2: "CFO AI connects the owner and the supplier by automating inventory management based on POS data.",
      button: "Pre-Register",
    },
    image: robotSupplier,
  }
];

export default SliderContent;
