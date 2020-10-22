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
        "Driven by the careful use of business metrics from our expanding 600+ restaurant community network, CFO AI is like having the power of the largest multi-unit franchises in your hands. It leverages your most recent and relevant business metrics to highlight the counter-intuitive actions that can boost your profits and maximize your efficiency.",
      paragraph2:
        "CFO AI takes care of the number crunching so you can spend your time on what matters most - your restaurant and its customers.",
      button: "Learn More",
      buttonPath: "cfo-ai",
    },
    image: robotCFO,
  },
  {
    reverse: false,
    isLast: false,
    text: {
      headline: "Hospitality Tech",
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
        "Stop throwing away money by being a victim of food wastage. CFO AI has made it a top priority to minimize this profit killer. Using a camera and scale device on disposal bins, the AI pinpoints the ingredients that are being wasted and provides actionable insights to steer your restaurant back to peak efficiency.",
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
