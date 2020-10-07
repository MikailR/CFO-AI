import robotCFO from "./robot-cfo.png"
import bankruptcyProtection from "./bankruptcy-protection.png"
import wasteManagement from "./waste-management.png"
import employeeOptimization from "./employee-optimization.png"

const FeatureContent = [
  {
    reverse: true,
    isLast: false,
    text: {
      headline: "CFO AI",
      paragraph1:
        "Managing finances is a hassle, let CFO AI take over the process for you. The AI takes care of all your accounting and financial management needs and allows you to access handy reports, graphs and statistics without having to crunch the numbers yourself.",
      paragraph2:
        "You don't have to be a financial expert to see your restaurant thrive. Spend your time on what matters most - your restaurant and its customers.",
      button: "Learn More",
    },
    image: robotCFO,
  },
  {
    reverse: false,
    isLast: false,
    text: {
      headline: "Bankruptcy Protection",
      paragraph1:
        "CFO AI has reinvented insurance to prevent a financial crisis before it even happens. Using a complex array of data points, it predicts when your restaurant is about to go under and qualifies you for micro-financing to make sure that you stay afloat.",
      paragraph2:
        "Insurance to help you avoid bankruptcy rather than dealing with it after the fact.",
      button: "Learn More",
    },
    image: bankruptcyProtection,
  },
  {
    reverse: true,
    isLast: false,
    text: {
      headline: "Waste Management",
      paragraph1:
        "Stop throwing away money by being a victim of food wastage. We have partnered with Kitro to automate the monitoring of your garbage disposal. Using a camera and scale device on disposal bins, the AI pinpoints the ingredients that are being wasted and provides actionable insights to steer your restaurant back to peak efficiency.",
      paragraph2:
        "Boost your restaurant's profits by reducing food wastage and saving the planet.",
      button: "Learn More",
    },
    image: wasteManagement,
  },
  {
    reverse: false,
    isLast: true,
    text: {
      headline: "Staff and Menu Optimization",
      paragraph1:
        "CFO AI puts extra weight on hospitality metrics when ranking employees and trains them to engage with customers in a way that maximizes your return rate. With its POS integration, CFO AI also analyzes the performance of different menu items and identifies the most profitable menu changes.",
      paragraph2:
        "Maximize the use of all your restaurant data without having to do the math yourself!",
      button: "Learn More",
    },
    image: employeeOptimization,
  },
];

export default FeatureContent;
