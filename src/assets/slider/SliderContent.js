import robotInterface from "./robot-interface.png";
import robotWaiter from "./robot-waiter.png";
import robotInventory from "./robot-inventory.png";
import robotMenu from "./robot-menu.png";

const SliderContent = [
  {
    text: {
      headline: "Restaurant Growth On Autopilot",
      paragraph1:
        "Benchmark your way to success! By comparing your performance to 600+ peers in our global restaurant community, CFO AI generates actionable insights to:",
      bullets: [
        "Maximize efficiency and profitability",
        "Increase staff productivity",
        "Automate and improve financial management",
      ],
      // paragraph2:
      //   ":",
      button1: "Pre-Register",
      button2: "View Demo",
    },
    image: robotInterface,
  },
  {
    text: {
      headline: "Operations Made Easy",
      paragraph1:
        "You have enough on your plate! So let CFO AI maximize your operational efficiency. It integrates with your POS and does the math to help prevent wastage, maximize profits, and predict your cash flow.",
      paragraph2:
        "CFO AI does the technical stuff so you can focus on keeping your customers happy.",
      button1: "Pre-Register",
      button2: "View Demo",
    },
    image: robotMenu,
  },
  {
    text: {
      headline: "Hosts... Not Order Takers",
      paragraph1:
        "CFO AI maximizes your customer retention by keeping your staff motivated and productive. It uses POS data to rank their performance and gives them ‘gamified’ incentives to move up the leaderboard.",
      paragraph2:
        "With a motivated staff on deck, your restaurant will steer itself to success.",
      button1: "Pre-Register",
      button2: "View Demo",
    },
    image: robotWaiter,
  },
  {
    text: {
      headline: "Your Financial Consultant",
      paragraph1:
      "No more struggling to make financial decisions. CFO AI tracks your revenues, expenses, customers, inventory, and wastage. It uses this to generate data-driven and easy-to-folow suggestions to boost your profitability.",
      paragraph2:
      "Don’t worry about the numbers, focus on your customers!",
      button1: "Pre-Register",
      button2: "View Demo",
    },
    image: robotInventory,
  },
];

export default SliderContent;
