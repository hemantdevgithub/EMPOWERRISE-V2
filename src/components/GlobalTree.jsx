import { Tree, TreeNode } from "react-organizational-chart";
import TreeNodeComponent from "./TreeNodeComponent";
import Node from "../Shared/Node";

const GlobalTree = () => {
  const data1 = ["Customer Relations", "Marketing", "Hunting Logos"];
  const data2 = ["Strategy", "Operations", "Supply Chain", "Quality Assurance"];
  const data3 = ["Investment", "Finance Management"];
  const data4 = ["Legal", "Compliance", "Contracts"];

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
              label="Tirepreneurs - B2B2B2C"
              description=""
              bgColor="bg-gray-300"
              textColor="text-black"
            />
          }
        >
          <TreeNode
            label={
              <TreeNodeComponent
                label="Trust Development Entrepreneurs"
                description={<Node successFramework1={data1} />}
                bgColor="bg-blue-100"
                textColor="text-gray-800"
              />
            }
          />
          <TreeNode
            label={
              <TreeNodeComponent
                label="Ecosystem Development Entrepreneurs"
                description={<Node successFramework1={data2} />}
                bgColor="bg-green-100"
                textColor="text-gray-800"
              />
            }
          />
          <TreeNode
            label={
              <TreeNodeComponent
                label="Infrastructure Development Entrepreneurs"
                description={<Node successFramework1={data3} />}
                bgColor="bg-yellow-100"
                textColor="text-gray-800"
              />
            }
          />
          <TreeNode
            label={
              <TreeNodeComponent
                label="Regulation Support Entrepreneurs"
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

export default GlobalTree;
