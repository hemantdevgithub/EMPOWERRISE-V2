import { Tree, TreeNode } from "react-organizational-chart";
import TreeNodeComponent from "./TreeNodeComponent";
import Node from "../Shared/Node";

const GlobalTree2 = () => {
  const data1 = [
    "Diverse Choices with Global MSME Offerings",
    "Video Interviewed Teams and Professional Resumes",
    "Glass Transparent Day-to-Day Project Execution",
    "Scored and Rates Service Provider Companies &, Professionals",
    "Online Instant Vendor Comparative Analytics",
  ];
  const data2 = [
    "Instant and Transperant Investment",
    "Opportunutues with KPIs-Driven",
    "Tierpreneur and MSME Portfolios",
  ];
  const data3 = [
    "Predictable Rois With Small Investments",
    "Global Portfolios",
    " Roi & Social Roi",
  ];
  const data4 = [
    "Transaction Based Local Trust Development Tierpreneur Representation",
    "Client-side Delivery Leader",
    "Growth-centric Strategy Tierpreneur Support",
    "Tierpreneurs Support Seamless Operations And Invoicing, Etc.",
    "Pool Of Quality Assurance With Interviewers ",
    "Local Regulation And Contractual Support",
  ];

  return (
    <div className=" py-8">
      <h1 className="text-center text-2xl uppercase font-bold text-gray-800">
        Global Socio-Economic Disparity
      </h1>
      <div className="relative overflow-auto p-8">
        <Tree
          lineWidth={"2px"}
          lineColor={"#6B7280"}
          lineBorderRadius={"10px"}
          label={
            <TreeNodeComponent
              label="Global Customers"
              description=""
              bgColor="bg-gray-300"
              textColor="text-black"
            />
          }
        >
          <TreeNode
            label={
              <TreeNodeComponent
                label="Global IT & Digital Customers with Small & Medium projects Budgets - B2B2B2C2B"
                description={<Node successFramework1={data1} />}
                bgColor="bg-blue-100"
                textColor="text-gray-800"
              />
            }
          />
          <TreeNode
            label={
              <TreeNodeComponent
                label="Business Investors for MSMEs, Projects & Tierpreneurs-B2B2B2C2B"
                description={<Node successFramework1={data2} />}
                bgColor="bg-green-100"
                textColor="text-gray-800"
              />
            }
          />
          <TreeNode
            label={
              <TreeNodeComponent
                label="Regulation Support entities-B2B2B2C2B"
                description={<Node successFramework1={data3} />}
                bgColor="bg-yellow-100"
                textColor="text-gray-800"
              />
            }
          />
          <TreeNode
            label={
              <TreeNodeComponent
                label="Global MSMEs IT & Digital Services -B2B2B2C2B"
                description={<Node successFramework1={data4} />}
                bgColor="bg-purple-100"
                textColor="text-gray-800"
              />
            }
          />
        </Tree>
      </div>
    </div>
  );
};

export default GlobalTree2;
