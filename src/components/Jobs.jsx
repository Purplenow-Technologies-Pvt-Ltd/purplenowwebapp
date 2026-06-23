import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import "./Jobs.css";
import { useState } from "react";

import jobhero from "../assets/job-hero.png"; // change extension if needed
import { Link } from "react-router-dom";

function Jobs() {
    const [searchTerm, setSearchTerm] = useState("");
const [location, setLocation] = useState("");
const [jobType, setJobType] = useState("");
    const jobsData = [
  {
    id: 1,
    title: "Sr. Lead  Engineer – SOC Verification & validation ",
    location: "San Jose / Austin",
    type: "Onsite",
    description:
      "Purplenow Inc provides rack-scale AI infrastructure through purpose-built connectivity solutions. By collaborating with hyperscalers and ecosystem partners, Astera Labs enables organizations to unlock the full potential of modern AI. Purplenow Inc Intelligent Connectivity Platform integrates CXL , Ethernet, NVLink, PCIe , and UALink semiconductor-based technologies with the company's COSMOS software suite to unify diverse components into cohesive, flexible systems that deliver end-to-end scale-up, and scale-out connectivity. The company's custom connectivity solutions business complements its standards-based portfolio, enabling customers to deploy tailored architectures to meet their unique infrastructure requirements. ",
  },
  {
    id: 2,
    title: "Physical Design Engineer",
    location: "San Jose / Austin",
    type: "Onsite",
    description:
      "A Physical Design Engineer transforms semiconductor chip logic (RTL netlists) into physical, manufacturable layouts. They bridge the gap between abstract architecture and silicon fabrication, ensuring chips hit strict Performance, Power, and Area (PPA) targets using EDA tools like Synopsys and Cadence.",
  },
  {
    id: 3,
    title: "Cloud Engineer",
    location: "Indianapolis, IN",
    type: "Contract",
    description:
      "A cloud engineer is an IT professional responsible for designing, deploying, and maintaining scalable and secure cloud infrastructure. They bridge the gap between software development and IT operations, managing compute, storage, and networking resources on platforms like AWS, Microsoft Azure, or Google Cloud.",
  },
 
];
const filteredJobs = jobsData.filter((job) => {
  const matchesTitle = job.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesLocation =
    location === "" || job.location === location;

  const matchesType =
    jobType === "" || job.type === jobType;

  return matchesTitle && matchesLocation && matchesType;
});

const resetFilters = () => {
  setSearchTerm("");
  setLocation("");
  setJobType("");
};
  return (
    <>
      <Navbar />

      <section
        className="jobs-hero"
        style={{
          backgroundImage: `url(${jobhero})`,
        }}
      >
        <div className="jobs-overlay">
          <div className="jobs-content">
            <h1>Building a Bright Future through Innovation</h1>

            <p>
              Unleash Your Potential with Exciting Opportunities.
              <br />
              We're Perfectly Suited to Work Together!
            </p>

            <button className="talk-btn">
              Talk to us
            </button>
          </div>
        </div>
      </section>
      
<section className="jobs-search-section">
  <div className="jobs-search-container">

    <div className="jobs-breadcrumb">
      <Link to="/">Home</Link> &gt; Careers
    </div>

    <h2>Search Jobs</h2>

    <div className="jobs-filters">

      <input
        type="text"
        placeholder="Search by Job Title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">Select Location</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
        <option value="Remote">Remote</option>
      </select>

      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
      >
        <option value="">Select Job Type</option>
        <option value="Permanent">Onsite</option>
        <option value="Internship">Contract</option>
      </select>

      <button className="search-btn">
        Search
      </button>

      <button
        className="reset-btn"
        onClick={resetFilters}
      >
        Reset Filters
      </button>

    </div>

  </div>
</section>
<section className="jobs-list-section">

  <h2>{filteredJobs.length} Jobs</h2>

  {filteredJobs.length === 0 ? (
    <div className="no-jobs">
      No jobs found
    </div>
  ) : (
    filteredJobs.map((job) => (
      <div className="job-card" key={job.id}>

        <div className="job-top">

          <div>
            <h3>{job.title}</h3>

            <p className="location">
              📍 {job.location}
            </p>
          </div>

          <Link
  to={`/jobs/${job.id}`}
  className="view-job-btn"
>
  View Job Detail
</Link>

        </div>

        <p className="job-description">
          {job.description}
        </p>

        <div className="job-footer">

          <span className="job-type">
            {job.type}
          </span>

          <span className="posted-date">
            Posted : 1 month ago
          </span>

        </div>

      </div>
    ))
  )}

</section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Jobs;