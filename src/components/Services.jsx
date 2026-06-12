import React, { useState } from "react";
import "./Services.css";

const tabs = [
  "Platform Development",
  "Cyber Security & Cloud",
  "Mobile & Web",
  "Internet of things",
  "Artificial Intelligence",
];

const cardsData = {
  "Platform Development": [
    {
      image:
        "https://blogs.sas.com/content/hiddeninsights/files/2018/01/842727156-1.jpg",
      title: "Platform Modernization",
      description:
        "Transform legacy platforms into modern, secure, and high-performance digital ecosystems.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDEx149Tm5zmX5oSsAa4HexDpxRQtbpyJ_5w&s",
      title: "Product Engineering",
      description:
        "End-to-end product engineering services from concept, design, development, testing, and deployment..",
    },
    {
      image:
        "https://synoptek.com/wp-content/uploads/2019/11/thumb-software-development.jpg",
      title: "Application Development",
      description:
        "Custom web and mobile application development solutions tailored to business requirements.",
    },
  ],

  "Cyber Security & Cloud": [
    {
      image:
        "https://www.capgemini.com/wp-content/uploads/2023/05/11a.jpg",
      title: "Cloud Infrastructure Management",
      description:
        "Design, deploy, and manage secure cloud environments that ensure scalability, reliability, and performance.",
    },
    {
      image:
        "https://etimg.etb2bimg.com/photo/88428872.cms",
      title: "Cybersecurity Services",
      description:
        "Protect business-critical assets with advanced threat detection, risk assessment, and security monitoring solutions.",
    },
    {
      image:
        "https://www.kiteworks.com/wp-content/uploads/2025/07/Identity-and-Access-Management.jpg",
      title: "Identity & Access Management",
      description:
        "Implement secure authentication and access controls to safeguard users, applications, and enterprise data.",
    },
  ],

  "Mobile & Web": [
    {
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/mobile_app_development_tools.jpg",
      title: "Mobile App Development",
      description:
        "Build intuitive and high-performance mobile applications that deliver seamless user experiences across platforms.",
    },
    {
      image:
        "https://www.cs7.tf.fau.eu/files/2019/04/vm.jpg",
      title: "Connected Mobility Solutions",
      description:
        "Enable smart and connected mobility experiences through innovative digital platforms and real-time data integration..",
    },
    {
      image:
        "https://www.deepware.it/wp-content/uploads/2025/05/t-box-deepware.webp",
      title: "Enterprise Applications",
      description:
        "Build reliable embedded software and control systems that power next-generation mobility and transportation solutions..",
    },
  ],

  "Internet of things": [
    {
      image:
        "https://www.technosphere.io/wp-content/uploads/2022/11/Untitled-design-1-1024x683.jpg",
      title: "IoT Product Engineering",
      description:
        "Design and develop intelligent IoT solutions that connect devices, systems, and users for enhanced operational efficiency..",
    },
    {
      image:
        "https://arorian.com/wp-content/uploads/2024/04/IoT-and-Digital-Engineering-Services.jpg",
      title: "Industrial IoT Solutions",
      description:
        "Enable real-time monitoring, predictive maintenance, and process optimization through advanced Industrial IoT technologies.",
    },
    {
      image:
        "https://www.rishabhsoft.com/wp-content/uploads/2023/03/RSPL_Blog_IoT-Data-Analytics_Benefits-Use-Cases_Banner.jpg",
      title: "IoT Analytics & Insights",
      description:
        "Transform connected device data into actionable insights using analytics, visualization, and intelligent decision-making tools.",
    },
  ],

  "Artificial Intelligence": [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9vIMuHEb6PEbAqPai0YEv952MfsfUrNg9eA&s",
      title: "AI & Machine Learning Solutions",
      description:
        "Develop intelligent systems that leverage machine learning and advanced analytics to drive smarter business decisions.",
    },
    {
      image:
        "https://globalnodes.tech/wp-content/uploads/2024/11/Gen-AI-2.webp",
      title: "Generative AI Solutions",
      description:
        "Harness the power of Generative AI to automate workflows, enhance productivity, and create innovative digital experiences.",
    },
    {
      image:
        "https://integranxt.com/wp-content/uploads/2024/05/The-Impact-of-Intelligent-Automation-on-Cost-Savings.jpg",
      title: "Intelligent Automation",
      description:
        "Streamline business operations through AI-powered automation, reducing costs and improving operational efficiency..",
    },
  ],
};

const Service = () => {
  const [activeTab, setActiveTab] = useState(
    "Platform Development"
  );

  return (
    <section className="service-section">
      {/* ===== Heading Section ===== */}

<div className="services-heading-section">

  <h2>Services</h2>

  <div className="yellow-line"></div>

  <p>
    We possess a wide range of competencies in product design
    services, enabling us to comprehensively understand client
    specifications and provide unwavering support in meeting
    market needs and ensuring customer satisfaction.
  </p>

</div>
      <div className="service-container">

        {/* Tabs */}
        <div className="service-tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${
                activeTab === tab ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="service-cards">
          {cardsData[activeTab]?.map((card, index) => (
            <div className="service-card" key={index}>
              <img src={card.image} alt={card.title} />

              <div className="card-content">
                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <button className="learn-btn">
                  Learn More <span>›</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    
  );
};

export default Service;