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
        "Managing finances is a hassle, so let CFO AI take over the process for you. The AI takes care of all your accounting and financial management needs and allows you to access handy reports, graphs and statistics without having to crunch the numbers yourself.",
      paragraph2:
        "You don't have to be a financial expert to see your restaurant thrive. Spend your time on what matters most - your restaurant and its customers.",
      button: "Learn More",
      buttonPath: "cfo-ai",
    },
    image: robotCFO,
  },
  {
    reverse: false,
    isLast: false,
    text: {
      headline: "Staff and Menu Optimization",
      paragraph1:
        "CFO AI’s hospitality tech energizes and motivates your staff to be the great host that they are. It makes ordering food and booking reservations entirely digital. CFO AI brings out the gracious host in your staff and increases the tables per staff ratio.",
      paragraph2:
        "With CFO AI’s hospitality tech, your motivated staff will steer your restaurant to success!",
      button: "Learn More",
      buttonPath: "staff-and-menu-optimization",
    },
    
    image: employeeOptimization,
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
      buttonPath: "waste-management",
    },
    image: wasteManagement,
  },
  {
    reverse: false,
    isLast: true,
    text: {
      headline: "Bankruptcy Protection",
      paragraph1:
        "CFO AI has reinvented insurance to prevent a financial crisis before it even happens. Using a complex array of data points, it predicts when your restaurant is about to go under and qualifies you for micro-financing to make sure that you stay afloat.",
      paragraph2:
        "Insurance to help you avoid bankruptcy rather than dealing with it after the fact.",
      button: "Learn More",
      buttonPath: "bankruptcy-protection",
    },
    image: bankruptcyProtection,
  },
];

export default FeatureContent;
