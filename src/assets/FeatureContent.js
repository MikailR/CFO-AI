import robotCFO from "./robot-cfo.png"
import robotInterface from "./robot-interface.png"
import bankruptcyProtection from "./bankruptcy-protection.png"
import wasteManagement from "./waste-management.png"
import optimization from "./optimization 2.png"

const FeatureContent = [
  {
    reverse: true,
    isLast: false,
    text: {
      headline: "CFO AI",
      paragraph1:
        "Managing finances is a hassle, let CFO AI take over the process for you. The AI takes care of all your accounting and financial management needs and allows you to access handy reports, graphs and statistics without having to crunch the numbers yourself.",
      paragraph2:
        "You don't have to be a financial expert to see your restaurant thrive. Spend your time on what matters most: your restaurant and its customers.",
      button: "View Demo",
    },
    image: robotCFO,
  },
  {
    reverse: false,
    isLast: false,
    text: {
      headline: "Bankruptcy Protection",
      paragraph1:
        "Protect your restaurant from bankruptcy with micro-financing options to breathe in times of need. CFO AI contributes a percentage of your profits to our Community Fund so that your loans can have a much higher principal than your total contributions.",
      paragraph2:
        "And of course, if you decide to pull out of the fund, every cent can easily be retrieved.",
      button: "View Demo",
    },
    image: bankruptcyProtection,
  },
  {
    reverse: true,
    isLast: false,
    text: {
      headline: "Waste Management",
      paragraph1:
        "Stop throwing your money away by being a victim of food wastage. We have partnered with Kitro to automate the monitoring of garbage disposal. Using a camera and scale device on disposal bins, the AI pinpoints the ingredients that are being wasted and provides actionable insights to steer your restaurant back to peak efficiency.",
      paragraph2:
        "Save the planet while also boosting your restaurant's profits by reducing food wastage. ",
      button: "View Demo",
    },
    image: wasteManagement,
  },
  {
    reverse: false,
    isLast: true,
    text: {
      headline: "Staff and Menu Optimization",
      paragraph1:
        "Getting the most out of your restaurant staff involves making difficult decisions. Give your mind a rest since CFO AI has all the data required to make these decisions for you. With its POS integration, CFO AI can advise you on staff deployment in accordance with peak and off-peak hours.  In addition, the AI can also use the POS data to determine the performance of different menu items and then provide appropriate menu recommendations. ",
      paragraph2:
        "Make the best use of your resources without all the thinking. ",
      button: "View Demo",
    },
    image: optimization,
  },
];

export default FeatureContent;
