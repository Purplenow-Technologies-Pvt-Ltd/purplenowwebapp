import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();

  const jobsData = [
    {
  id: 1,
  title: "Sr. Lead Engineer – SOC Verification & validation",
  location: "San Jose / Austin",
  type: "Onsite",
  experience: "8+ Years",
  qualification: "BS/MS",
  description: "We are looking for Senior SoC Verification/Validation Engineer who are passionate about bringing next-generation SoCs to life on industry-leading emulation platforms. You will play a critical role in validating complex SoCs for AI connectivity and cloud infrastructure, ensuring functionality and performance well before silicon tape-out.",

  responsibilities: [
    "Collaborate closely with Architecture, Design, Verification, and SW/FW teams",
    "Define and execute functional and performance validation plans",
    "Build tools and methodologies to validate HW and SW/FW issues",
    "Debug complex SoC issues on emulation platforms",
    "Drive pre-silicon verification and validation activities"
  ],

  qualifications: [
    "BS/MS in Electrical Engineering, Computer Engineering or related field",
    "8+ years of pre-silicon verification experience",
    "Strong SystemVerilog, C/C++, and Python skills",
    "Experience with PCIe, Ethernet, or UALink protocols"
  ]
},
    {
  id: 2,
  title: "Physical Design Engineer",
  location: "San Jose / Austin",
  type: "Onsite",
  experience: "7+ Years",
  qualification: "B.Tech",
  description: "Senior Principal Physical Design Engineer (Top-Level Floorplanning & STA) will be responsible for leading advanced physical design activities for high-performance semiconductor chips. The role involves top-level floorplanning, timing closure, static timing analysis (STA), physical implementation, and optimization of complex SoC designs. The candidate will collaborate with cross-functional teams including RTL, DFT, and verification teams to ensure design quality, performance, power efficiency, and successful tape-out. Strong expertise in physical design methodologies, timing analysis, floorplanning, and industry-standard EDA tools is required to deliver robust and high-quality silicon solutions.",

  responsibilities: [
    "Own the full-chip top-level floorplan: die/partition planning, macro and memory placement, and pin/port alignment across block boundaries",
    "Define partition abutment, repeating structures, and channel/feedthrough strategy to enable clean block integration",
    "Drive top-level PPA optimization (power, performance, area) across the chip hierarchy",
    "Plan and review the top-level power grid / PDN in coordination with EM/IR sign-off",
    "Author and maintain top-level SDC and timing budgets; partition constraints down to block owners"
  ],

  qualifications: [
    "Bachelor’s or Master’s degree in Electrical Engineering, Electronics Engineering, Computer Engineering, or a related field.",
    "Minimum 7+ years of hands-on experience in Physical Design for advanced ASIC/SoC designs.",
    "Strong expertise in top-level floorplanning, partition planning, macro placement, and chip integration.",
    "Deep understanding of Static Timing Analysis (STA), timing closure methodologies, and timing budgeting."
  ]
},
{
  id: 3,
  title: "Cloud Engineer",
  location: "Indianapolis, IN",
  type: "Contract",
  experience: "3+ Years",
  qualification: "B.Tech",
  description: "Cloud Engineer will be responsible for designing, implementing, and maintaining secure, scalable, and reliable cloud infrastructure solutions. The role involves managing cloud environments, automating deployments, monitoring system performance, and ensuring high availability of applications and services. The candidate will work closely with development, DevOps, and security teams to optimize cloud resources, improve operational efficiency, and support digital transformation initiatives. Strong experience with cloud platforms such as AWS, Azure, or Google Cloud Platform, along with expertise in automation, containerization, and infrastructure management, is highly desirable.",

  responsibilities: [
    "Design and deploy cloud architectures across AWS that meet performance, security, availability, and cost-efficiency requirements for a diverse portfolio of enterprise and research applications.",
    "Architect and implement cloud networking, compute, storage, and identity constructs with security built in from the outset applying least-privilege principles, network segmentation, encryption, and defense-in-depth across every layer.",
    "Evaluate and recommend cloud services, architectural patterns, and infrastructure approaches; build evidence-based adoption cases that account for engineering capability, operational cost, and long-term platform sustainability",
    "Implement and maintain infrastructure-as-code (IaC) frameworks using Terraform, CloudFormation, Ansible, or equivalent making infrastructure provisioning repeatable, auditable, and developer-friendly.",
    "Build and maintain CI/CD pipelines for cloud infrastructure and application deployments; ensure changes are tested, validated, and deployed safely with automated rollback capability."
  ],

  qualifications: [
    "Bachelor’s degree in Computer Science, Information Technology, Engineering, or a related field, or equivalent professional experience.",
    "Minimum 3+ years of hands-on cloud engineering experience in a production AWS enterprise environment.",
    "Strong experience with Infrastructure as Code (IaC) tools such as Terraform, CloudFormation, Ansible, or similar technologies.",
    "Proficiency in scripting and automation using Python, Bash, PowerShell, or equivalent programming languages.",
    "Experience with version control systems such as Git and collaborative development workflows."
  ]
},

{
  id: 4,
  title: "VLSI SoC Verification & Validation Engineer",
  location: "Mariton, New Jersey,USA",
  type: "Onsite",
  experience: "7+ Years",
  qualification: "B.Tech",
  description: "The VLSI SoC Verification & Validation Engineer will be responsible for highly specialized duties in the design, research, and validation of System-on-Chip (SoC) architectures for the Prunus Project. This role requires advanced technical knowledge typically acquired through a Bachelor’s degree or higher in Electronics Engineering, Electrical Engineering, or a closely related field.",

  responsibilities: [
    "System-on-Chip Security Engineering R&D (Prunus Project)",
    "Define secure SoC architectures integrating hardware, firmware, and software security features.",
    "Develop verification plans covering functional, performance, and security aspects.",
    "Conduct pre-silicon validation using simulation, emulation, and FPGA prototyping.",
    "Perform post-silicon validation to ensure robustness under real workloads."
  ],

  qualifications: [
    "Bachelor’s or Master’s degree in Electrical Engineering, Electronics Engineering, Computer Engineering, or a related field.",
    "Strong knowledge of System-on-Chip (SoC) architecture and design.",
    "Experience with SoC Verification and Validation methodologies.",
    "Hands-on experience with FPGA prototyping, simulation, and emulation tools."
  ]
},
  ];

  const job = jobsData.find(
    (job) => job.id === Number(id)
  );

  if (!job) {
    return <h2>Job Not Found</h2>;
  }

  return (
    <>
      <Navbar />
      <Link to="/jobs" className="back-btn">
  ← Back to all jobs
</Link>

      <section className="job-details-page">

        <Link to="/jobs" className="back-btn">
          ← Back to all jobs
        </Link>

        <h1>{job.title}</h1>

        <div className="job-info-grid">
          <p>📍 {job.location}</p>
          <p>📅 Job Posted: Apr 15, 2026</p>
          <p>💼 Experience: {job.experience}</p>
          <p>🎓 Qualification: {job.qualification}</p>
          <p>📄 Job Type: {job.type}</p>
        </div>

        <div className="job-content">
          <h2>About Purplenow</h2>

          <p>
            Purplenow Inc., a Delaware-based technology company founded in 2021, empowers organizations to accelerate digital transformation through Artificial Intelligence, Generative AI, Intelligent Automation, IoT, Embedded Engineering, Cloud Solutions, and Digital Platforms.
          </p>

          <h2>Job Summary</h2>

          <p>{job.description}</p>

          <h2>Responsibilities</h2>

<ul>
  {job.responsibilities.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<h2>Required Qualification</h2>

<ul>
  {job.qualifications.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
        </div>
        
        <div className="apply-section">
  <button className="apply-btn">
    Apply Now →
  </button>
</div>

      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

export default JobDetails;