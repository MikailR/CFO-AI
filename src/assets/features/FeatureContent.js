import robotCFO from "./robot-cfo.png";
import bankruptcyProtection from "./bankruptcy-protection.png";
import wasteManagement from "./waste-management.png";
import employeeOptimization from "./employee-optimization.png";

const FeatureContent = [
  {
    reverse: true,
    isLast: false,
    text: {
      en: {
        headline: "CFO AI",
        paragraph1:
          "Driven by the careful use of business metrics from our expanding 600+ restaurant community network, CFO AI puts insights similar to those of large multi-unit franchises within your grasp. It leverages your most recent and relevant business metrics to highlight the counter-intuitive actions that can boost your profits and maximize your efficiency.",
        paragraph2:
          "CFO AI takes care of the number crunching so you can spend your time on what matters most - your restaurant and its customers.",
        button: "Learn More",
      },
      ma: {
        headline: "CFO AI",
        paragraph1:
          "在不断扩大的600多家全球餐厅网络中，我们谨慎使用其中的数据，CFOai将使用类似于大型连锁餐厅的经营模式，为您提供服务。它利用您最新的业务指标，计算出最佳的抉择，从而提高您的利润和最大限度地提升您的效率。",
        paragraph2:
          "CFOai负责数字计算，因此您可以将时间花在最重要的事情上--您的餐厅及客户。",
        button: "了解更多",
      },
      buttonPath: "/cfo-ai",
    },
    image: robotCFO,
  },
  {
    reverse: false,
    isLast: false,
    text: {
      en: {
        headline: "Hospitality Tech",
        paragraph1:
          "CFO AI’s hospitality tech energizes and motivates your staff to be the great hosts that they are. It makes ordering food and booking reservations entirely digital. CFO AI brings out the gracious host in your staff and increases the tables per staff ratio.",
        paragraph2:
          "With CFO AI’s hospitality tech, your motivated staff will steer your restaurant to success!",
        button: "Learn More",
      },
      ma: {
        headline: "服务管理技术",
        paragraph1:
          "CFOai的服务管理技术为您的员工注入活力，激励他们成为优秀的主导者。CFOai使点餐和预订完全数字化。CFOai让您的员工展现出亲切的主人翁风范，并提高每位员工服务的桌数。",
        paragraph2:
          "有了CFOai的服务管理技术，您的员工更积极，您的餐厅走向成功!",
        button: "了解更多",
      },
      buttonPath: "/staff-and-menu-optimization",
    },

    image: employeeOptimization,
  },
  {
    reverse: true,
    isLast: false,
    text: {
      en: {
        headline: "Waste Management",
        paragraph1:
          "Stop throwing away money by being a victim of food wastage. CFO AI has made it a top priority to minimize this profit killer. Using financial metrics and image recognition over your waste bins, the AI pinpoints the ingredients that are being wasted and provides actionable insights to steer your restaurant back to peak efficiency.",
        paragraph2:
          "Boost your restaurant's profits by reducing food wastage and saving the planet.",
        button: "Learn More",
      },
      ma: {
        headline: "损耗管理",
        paragraph1:
          "不要再因为食材损耗而浪费资金。CFOai将最大限度地减少这个利润杀手作为首要任务。通过使用财务指标和图像识别，CFOai可以精确地分析出发生损耗的环节，并提供改善方案，以帮助您的餐厅恢复到最高效率。",
        paragraph2: "减少食物浪费和保护地球，同时也可以提高餐厅的利润。",
        button: "了解更多",
      },
      buttonPath: "/waste-management",
    },
    image: wasteManagement,
  },
  {
    reverse: false,
    isLast: true,
    text: {
      en: {
        headline: "Bankruptcy Protection",
        paragraph1:
          "CFO AI enables a new and innovative type of business disruption insurance. CFO AI can identify when your restaurant’s financial future is in peril. CFO AI also determines the necessary changes to avoid bankruptcy, and may provide micro-financing.",
        paragraph2:
          "Insurance to help you avoid bankruptcy rather than dealing with it after the fact.",
        button: "Learn More",
      },
      ma: {
        headline: "破产保护",
        paragraph1:
          "CFOai实现了一种新型的营业中断保险。CFOai可以识别您餐厅的财务在未来何时出现危险。CFOai还可以提出建议行动，从而避免破产的发生，并可以提供小额融资。保险帮助您避免破产，而不是破产后再处理。",
        paragraph2:
          "保险帮助您避免破产，而不是破产后再处理。",
        button: "了解更多",
      },
      buttonPath: "/bankruptcy-protection",
    },
    image: bankruptcyProtection,
  },
];

export default FeatureContent;
