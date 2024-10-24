
export const MissionModelSectio2 = () => {
  const data = [
    {
      heading: "Connecting MSMEs to Global Markets",
      text: "Connecting MSMEs to Global Markets: Tirepreneurs help MSMEs, which often have limited resources or exposure, to access international markets. They understand the demands of global customers and use their entrepreneurial skills to position the products or services of MSMEs in a way that resonates with international standards and requirements.",
      image:
        "https://img.freepik.com/free-photo/two-indian-business-man-suits-sitting-office-cafe-looking-laptop-drinking-coffee_627829-1513.jpg?t=st=1729764492~exp=1729768092~hmac=4cdca2e6b4a492e2a3eff918313fd1bf104e567b3aba897f92087e90c8cae73f&w=1380",
      isLeft: true,
    },
    {
      heading: "Market Knowledge and Expertise",
      text: "Market Knowledge and Expertise: These entrepreneurs possess in-depth knowledge of both the global market trends and the MSME sector. They leverage their expertise to facilitate smoother transactions, guiding MSMEs in adapting to global customer expectations, such as quality standards, competitive pricing, and legal regulations.",
      image:
        "https://img.freepik.com/free-photo/business-partners-discussing-project-with-charts-screen_9975-22964.jpg?t=st=1729764669~exp=1729768269~hmac=e780ecd593a324cc07f309f1a493fae6ca6d1d2e1746d728a5f09663f1441f2c&w=1380",
      isLeft: false,
    },
    {
      heading: "Negotiating Deals",
      text: "Negotiating Deals: Tirepreneurs act as agents or mediators who negotiate deals between MSMEs and global clients. They help MSMEs understand how to price their products or services competitively and fairly while ensuring that international customers receive quality offerings at a reasonable cost.",
      image:
        "https://img.freepik.com/free-photo/businessman-handshaking-new-colleague-team-meeting_1163-4790.jpg?t=st=1729765752~exp=1729769352~hmac=3f63a49d7101a1c6eecb8469bfcef9d2222226f3831ee1e919812c4c5953b33c&w=1380",
      isLeft: true,
    },
    {
      heading: "Supply Chain Management",
      text: "Supply Chain Management: Acting as facilitators, tirepreneurs often manage logistics, shipping, and other supply chain-related challenges that MSMEs might face when dealing with foreign markets. This includes overseeing the production process, ensuring timely delivery, and managing international customs and shipping requirements.",
      image:
        "https://img.freepik.com/free-photo/hardworking-confident-professional-team-discussing-one-issue-documents-office_140725-106035.jpg?t=st=1729765087~exp=1729768687~hmac=0375cfb9cd962084db474b04a1f05d8e90b9cbbf4771ccb9801e27425168cbe8&w=996",
      isLeft: false,
    },
    {
      heading: "Business Development for MSMEs",

      text: "Business Development for MSMEs: Tirepreneurs also assist MSMEs in scaling their businesses by providing strategic advice on market entry, product development, and branding. They help MSMEs craft their business strategies in a way that aligns with the demands of global markets, enabling these small enterprises to grow and expand beyond local or national boundaries.",
      image:
        "https://img.freepik.com/free-photo/business-development-startup-growth-statistics-concept_53876-147951.jpg?t=st=1729765353~exp=1729768953~hmac=cda3e77a1373729c2133f4c1799acb391114b2fd0d6889f02a27c83f7a86d657&w=996",
      isLeft: true,
    },
    {
      heading: "Innovation and Growth",
      text: " Innovation and Growth: By fostering collaborations and bringing in global perspectives, tirepreneurs encourage innovation within MSMEs. They help introduce cutting-edge technologies, sustainable practices, and process improvements that can give MSMEs a competitive edge in the international marketplace.",
      image:
        "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1729765400~exp=1729769000~hmac=c3c0c213f2e93c3f194474ce3dad0aec4fc5158524469a65ff77b5061f15f7d6&w=740",
      isLeft: false,
    },

  ];
  return (
    <div className="lg:mx-20 mx-10 space-y-5">
      <h1 className="uppercase text-2xl text-center font-bold">
        Global Workforce as Tirepreneurs - B2B2B2C
      </h1>
      <p className="text-lg">
        Tirepreneurs refers to entrepreneurs who act as intermediaries between
        global customers and Micro, Small, and Medium Enterprises (MSMEs). Their
        role is essential in creating a bridge between local manufacturers or
        service providers (MSMEs) and the broader international market.
      </p>
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            isLeft={item.isLeft}
            heading={item.heading}
            text={item.text}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

const Card = ({ isLeft, heading, text, image }) => {
  return (
    <div
      className={`flex items-center justify-between gap-10 lg:*:w-[50%] ${
        isLeft ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
      }`}
    >
      <div className="space-y-5 font-poppins text-sm">
        <h3 className="text-2xl font-rubik text-empower font-semibold">
          {heading}
        </h3>
        <p className="text">{text}</p>
      </div>
      <div className={`flex  ${isLeft ? "justify-end" : "justify-start"}`}>
        <img className="max-h-[330px] w-full rounded-xl" src={image} alt="" />
      </div>
    </div>
  );
};

