import React from "react";
import "./SAMODetails.css";

export default function SAMODetails({ textGenerator }) {
  return (
    <div className="samo-details">
      <h2 className="header">
        {textGenerator("Here's how it works", "这是它的工作原理")}
      </h2>

      <p className="paragraph">
        {textGenerator(
          "CFO AI also trains your employees to be hospitality providers rather than just order takers. With a global hospitality ranking, they gain deeper insights into their ability to engage with customers and are provided with actionable steps to boost their ranking.",
          "CFOai还可以通过培训您的员工提高服务质量，而不仅仅是对其做要求。通过服务质量的全球排名，他们可以更深入地了解自己与客户的关系，并为他们提供操作的步骤来提升他们的排名。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "This ‘gamifies’ the idea of providing hospitality to stir up some friendly competition amongst employees and maximize your customer retention.",
          '将如何提高接待服务的方式 "趣味化"，激发员工之间的友好竞争，最大限度地留住客户。'
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "By combining the data points from both your POS and your food wastage, CFO AI calculates the performance of all menu items in real time and easily identifies the varying demands and profitabilities. Using these metrics, it indicates the menu changes that will result in the highest profit.",
          "通过结合您的POS和食材损耗的数据，CFOai实时计算所有菜品的利润率，并轻松识别不同的需求和盈利能力。利用这些指标，CFO  AI可以指导菜单的变化，带来最高利润。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "For example, if two complementary items are performing well, then it may suggest a price increase or a combo to further incentivize purchase. On the other hand, if an item is performing poorly, the AI may suggest that you remove it.",
          "例如，两个很受到欢迎搭配菜品，那CFOai可能会建议提高价格或组合，以进一步刺激消费。另一方面，如果一个菜品热度一般，CFO  AI可能会建议您删除它。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "In other words, CFO AI optimizes your resources and sets your restaurant up for a prosperous future.",
          "换句话说，CFOai能优化你的资源，为您的餐厅点亮未来。"
        )}
      </p>
    </div>
  );
}
