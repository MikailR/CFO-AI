import React from "react";
import "./WMDetails.css";

const WMDetails = ({ textGenerator }) => {
  return (
    <div className="waste-management-details">
      <h2 className="header">
        {textGenerator("Here's how it works", "这是它的工作原理")}
      </h2>

      <p className="paragraph">
        {textGenerator(
          "CFO AI quickly processes this information and elegantly displays your key wastage metrics on an easy-to-read dashboard.",
          "CFOai可以快速处理这些信息，并整理出简单的数据图表向您展示。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "Now although you can interpret this data on your own, CFOai greatly simplifies the analysis for you. It leverages only your most recent wastage metrics to generate evidence-based suggestions for reducing your food wastage, along with the expected increase in profits if implemented.",
          "虽然现在您可以自行分析数据，但CFOai为您大大简化了分析过程。它将根据您最近的食材损耗指标来生成有数据支持的建议，以减少您的食材损耗，以实现可预期的利润增长。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "For example, if CFOai recognizes that fries are frequently wasted in a burger combo, it will present an array of sustainable options to combat this such as resizing the portion or reallocating the fries to a different menu item.",
          "例如，如果CFOai识别出汉堡套餐中的薯条损耗过高，它将提出一系列可持续的选项来解决问题，如调整份量或将薯条重新分配到不同的菜品"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "CFOai may also realize that chefs on a certain shift are wasting more meat than others. In this case, it uses your benchmark in our global community to identify a threshold that will prompt you to take action when it is crossed.",
          "CFOai也可以识别到，某个班次的厨师比其他班次的厨师损耗了更多的肉。在这种情况下，CFOai使用我们全球餐厅网络的数据来确定一个阈值，当超出阈值时，将提示您采取行动。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "Of course, the decision to implement a recommendation is all yours, and depending on the recommendation you choose, CFOai will automatically adjust your inventory orders accordingly.",
          "当然，执行建议的决定权掌握在您手中，根据您选择的建议，CFOai会自动调整您的库存订单，并作出相应的调整。"
        )}
      </p>

      <p className="paragraph">
        {textGenerator(
          "Let us take you to the forefront of waste management in the restaurant industry. Equipped with our waste management tech, you’ll be a superhero for both your business and the planet.",
          "让我们带您走在餐饮行业损耗管理的最前沿。利用我们的损耗管理技术，您将成为餐厅和地球的环保卫士。"
        )}
      </p>
    </div>
  );
};

export default WMDetails;
