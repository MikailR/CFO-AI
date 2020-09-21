import robotInterface from "./robot-interface.png";
import robotWaiter from "./robot-waiter.png";
import robotSupplier from "./robot-supplier.png"

const CarouselContent = [
  {
    text: {
      headline: "CFO AI: Restaurant Growth On Autopilot",
      paragraph1:
        "Join 600+ restaurants and pre-register for our new Financial Management App. With recommendations powered by Artificial Intelligence, a built in POS System, options for micro-financing, and an emergency fund, you don't want to wait!",
      paragraph2:
        "Restaurants around the world have already started using AI to make better financial decisions. Be sure to pre-register for your free demo when the App launches.",
      button: "Pre-Register Now",
    },
    image: robotInterface,
  },
  {
    text: {
      headline: "Focus on more important staff duties!",
      paragraph1:
        "According to a time in motion study done by a Sweedish We Order Restaurant, an average 12 out of 14 minutes of restaurant staff are spent on mundane tasks like taking or fulfulling.",
      paragraph2:
        "Staff optimizations allow employees to focus on being hospitality providers.",
      button: "Pre-Register Now",
    },
    image: robotWaiter,
  },
  {
    text: {
      headline: "Inventory Management easier than ever before!",
      paragraph1: "Inventory management is a time-consuming and thought-intensive process for restaurant owners.",
      paragraph2: "CFO AI connects the owner and the supplier by automating inventory management based on POS data.",
      button: "Pre-Register Now",
    },
    image: robotSupplier,
  }
];

export default CarouselContent;
