import React from "react";
import "./CFOAIDetails.css";
import screenshot from "../../../assets/cfo-ai/dashboard-screenshot.png";
import networkEffect from "../../../assets/cfo-ai/network-effect.png";

import BulletPoint from "../../../components/BulletPoint/BulletPoint.js";

import CFOAIDetailContent from "../../../assets/details/CFOAIDetailContent.js";

const CFOAIDetails = ({ lang, textGenerator }) => {
  return (
    <div className="cfo-ai-details">
      <h2 className="header">
        {textGenerator(
          "Here's how CFO AI helps you to profit and grow on autopilot",
          "以下是CFOai如何帮助你实现利润的自动增长"
        )}
      </h2>

      <p className="paragraph">
        {textGenerator(
          "The 2019 BDO Report highlighted the positive impact on profitability that multi-unit franchises enjoy by benchmarking across their network to identify operational improvements for each franchise. Powered by our global restaurant community, CFO AI provides this ‘profit boost through benchmarking’ to all of its member restaurants.",
          '2019年BDO的报告是通过网络对大型连锁餐饮进行基准测试，以确定每个餐厅运营的改进方案，能对盈利能力产生积极影响。在我们的全球餐厅网络的支持下，CFOai为其所有成员提供 "通过基准数据提升利润"的服务。'
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "For the first time, you will be able to learn why your performance metrics are better or worse than other restaurants. You will be guided on what steps to take to improve by the user-friendly and easy-to-follow CFO AI.",
          "您将能够了解您的餐厅比其他餐厅好或差的原因。您可通过界面简洁和流程简单的CFOai您建立一套改善方案。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "CFO AI dashboards provide recommendations and explain the impact on key metrics such as:",
          "CFOai的板面提供建议以及解释关键指标对您经营的影响，例如："
        )}
      </p>

      <div className="bullet-container">
        {CFOAIDetailContent.map((detail, index) => {
          return (
            <BulletPoint
              text={detail[lang]}
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
        {textGenerator(
          "CFO AI simplifies the complexity of your restaurant’s financial management into “green button” moments so you can easily interpret the purpose and impact of any recommendation.",
          'CFOai将餐厅复杂的财务管理简化为"绿点通"，让您可以轻松了解改善方案的目的和影响范围。'
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "Many restaurant owners know which menu items make the most sales. But best-selling does not always mean it is the most profitable. CFO AI helps you understand what matters most to profitability.",
          "许多餐厅老板都知道哪些菜品的销量最大，但畅销并不总是意味着是利润最高的。CFOai可以帮助您找到哪种菜品是最盈利的。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "Depending on the level of digital integration with your restaurant, CFO AI may be applied to automate your inventory management.",
          "根据您餐厅的数字化集成程度，您可以使用CFOai的自动化库存管理。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "CFO AI enables credit and financing options because the focus is only on recent and relevant business metrics. Traditional credit scoring is too harsh and ineffective because what matters most is how the entire marketplace is performing and sharing insights so that all restaurants are thriving.",
          "因为CFOai只关注您餐厅最近相关的业务指标，因此它可以提供信贷和融资的信用评分。传统的信用评分过于苛刻和低效，因为传统的信用评分关注的是整个市场是否在蓬勃发展。"
        )}
      </p>

      <img
        src={networkEffect}
        className="network-effect"
        alt="Smaller fishes coming together to capture a big fish"
      />

      <p className="paragraph">
        {textGenerator(
          "In other words, CFO AI does the complicated math to improve your restaurant along with the entire community of restaurants. CFO AI is a shared resource for the community, so no personally identifiable information is ever stored on the platform.",
          "换句话说，CFOai通过复杂的后台计算，让您的餐厅与我们全球餐厅网络一起得到改善。CFOai是社区共享资源，因此平台上永远不会存储任何个人身份信息。"
        )}
      </p>

      {/* <p className="paragraph">
        Also, CFO AI’s recommendations are completely optional so you can decide
        whether or not to implement them by simply clicking a button.
      </p> */}

      <p className="paragraph">
        {textGenerator(
          "Take a look at our demo video below to see some more of what CFO AI can do for your restaurant.",
          "请看以下演示，了解CFOai能为您的餐厅做什么。"
        )}
      </p>
    </div>
  );
};

export default CFOAIDetails;
