import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlineWifi,
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineCog6Tooth,
  HiOutlineBolt,
} from "react-icons/hi2";

import {
  FaTruck,
  FaIndustry,
} from "react-icons/fa";

import { LuBadgeCheck } from "react-icons/lu";

import { useEffect, useState } from "react";

import logo from "../assets/logo.png";



import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [engineeringDropdown, setEngineeringDropdown] = useState(false);
const [industriesDropdown, setIndustriesDropdown] = useState(false);
const [resellerDropdown, setResellerDropdown] = useState(false);
const [aboutDropdown, setAboutDropdown] = useState(false);
 
  useEffect(() => {

    const handleScroll = () => {

      if(window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>

      {/* TOP NAVBAR */}

      {!scrolled && (

        <div className="top-navbar">

          <div className="top-right">

            <div className="top-links">

              

              <span>
                Careers
                <IoIosArrowDown className="down-icon" />
              </span>

            </div>

            {/* SOCIAL ICONS */}

            <div className="social-icons">

              <FaLinkedinIn />
              <FaYoutube />
              <FaFacebookF />

            </div>

            {/* SEARCH */}

            <div className="search-box">
              <IoSearchOutline />
            </div>

          </div>

        </div>

      )}

      {/* MAIN NAVBAR */}

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* LOGO */}

        <Link
  to="/"
  className="logo"
  onClick={() => setMenuOpen(false)}
>
  <img src={logo} alt="iLenSys Logo" />
</Link>

        {/* DESKTOP MENU */}

        <ul className="nav-links">
          {/* ABOUT US */}

<li className="dropdown about-dropdown">
  <span>
    About Purplenow
    <IoIosArrowDown className="nav-arrow" />
  </span>

  <div className="about-dropdown-menu">
    <Link to="/who-we-are">Who We Are</Link>

    <Link to="/values-and-ethics">
      Values and Ethics
    </Link>

    <Link to="/quality-certification">
      Quality Certification
    </Link>
    

    
  </div>
</li>

 {/* ENGINEERING SERVICES */}

<li className="dropdown engineering-dropdown">

  <span>
    What we do
    <IoIosArrowDown className="nav-arrow" />
  </span>

  {/* ENGINEERING MEGA MENU */}

  <div className="engineering-mega-menu">

    <div className="engineering-menu-content">

      {/* COLUMN 1 */}

     <div
  className="engineering-column"
  onClick={() => window.location.href = "/platform-development"}
  style={{ cursor: "pointer" }}
>
  <div className="engineering-heading">

    <div className="engineering-icon green">
      <HiOutlineComputerDesktop />
    </div>

    <h3>Platform development</h3>

  </div>

  <p>Platform development</p>

</div>

      {/* COLUMN 2 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/mobility"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon orange">
      <HiOutlineDevicePhoneMobile />
    </div>

    <h3>Mobile & Web</h3>

  </div>

  <p>Mobile & Web</p>

</div>


{/* COLUMN 4 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/cloud"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon blue">
      <HiOutlineShieldCheck />
    </div>

    <h3>Cybersecurity & Cloud Services</h3>

  </div>

  <p>Cybersecurity & Cloud Services</p>

</div>

      {/* COLUMN 3 */}

      

<div
  className="engineering-column iot-column"
  onClick={() => window.location.href = "/internet-of-things"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon blue">
      <HiOutlineWifi />
    </div>

    <h3>Internet of Things</h3>

  </div>

  <p>Internet of Things</p>

</div>
      
      {/* COLUMN 5 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/ai-ml-services"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon blue">
      <HiOutlineCpuChip />
    </div>

    <h3>AI/ML Services</h3>

  </div>

  <p>AI/ML Services</p>

</div>
      

    </div>
    {/* BOTTOM INQUIRY SECTION */}


  </div>

</li>



{/* INDUSTRIES */}

<li className="dropdown industries-dropdown">

  <span>
    Industries
    <IoIosArrowDown className="nav-arrow" />
  </span>

  {/* INDUSTRIES MEGA MENU */}

  <div className="engineering-mega-menu">

    <div className="engineering-menu-content">

      {/* COLUMN 1 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/automative"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon purple">
      <FaTruck />
    </div>

    <h3>Automative & E-Mobility</h3>

  </div>

  <p>Automative</p>

</div>

      {/* COLUMN 2 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/enterprise"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon red">
      <HiOutlineComputerDesktop />
    </div>

    <h3>Enterprise Device</h3>

  </div>

  <p>Enterprise Device</p>

</div>

      {/* COLUMN 3 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/semiconductor"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon green">
      <HiOutlineCpuChip />
    </div>

    <h3>Semiconductor</h3>

  </div>

  <p>Semiconductor</p>

</div>

{/* COLUMN 5 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/industrial"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon green">
      <FaIndustry />
    </div>

    <h3>Industrial</h3>

  </div>

  <p>Industrial</p>

</div>


      {/* COLUMN 4 */}
<div
  className="engineering-column"
  onClick={() => window.location.href = "/consumer-power-electronics"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon green">
      <HiOutlineBolt />
    </div>

    <h3>Healthcare & Life Sciences</h3>

  </div>

  <p>Healthcare & Life Sciences</p>

</div>
      

      
    </div>
    {/* BOTTOM INQUIRY SECTION */}



  </div>

</li>



  
{/* =========================
    SOLUTIONS DROPDOWN
========================= */}

{/*}
<li className="dropdown solution-dropdown">

  <span>
    Solutions
    <IoIosArrowDown className="nav-arrow" />
  </span>

  
  <div className="solution-mega-menu">

    <div className="solution-menu-content">

      
      <div className="solution-column">

        <Link
          to="/solutions/ionexus-compliance-manager"
          className="solution-link"
          onClick={() => {
            setMenuOpen(false);
            setSolutionOpen(false);
          }}
        >
          <div className="solution-heading">

            <div className="solution-icon purple">
              <LuBadgeCheck />
            </div>

            <h3>Product1</h3>

          </div>
        </Link>

      </div>

      
      <div className="solution-column">

        <Link
          to="/solutions/obsolescence-management-services"
          className="solution-link"
          onClick={() => {
            setMenuOpen(false);
            setSolutionOpen(false);
          }}
        >
          <div className="solution-heading">

            <div className="solution-icon red">
              <HiOutlineCog6Tooth />
            </div>

            <h3>Product2</h3>

          </div>
        </Link>

      </div>

      
      <div className="solution-column">

        <Link
          to="/solutions/environmental-regulations"
          className="solution-link"
          onClick={() => {
            setMenuOpen(false);
            setSolutionOpen(false);
          }}
        >
          <div className="solution-heading">

            <div className="solution-icon green">
              <HiOutlineShieldCheck />
            </div>

            <h3>Product3</h3>

          </div>
        </Link>

      </div>

    </div>

  </div>

</li>
/*}
  {/* RESOURCES */}

 {/* RESELLERS */}

<li className="dropdown reseller-dropdown">

  <span>
    Resellers
    <IoIosArrowDown className="nav-arrow" />
  </span>

  <div className="reseller-dropdown-menu">

    <Link to="/core-implementation">
      Core Implementation
    </Link>

    <Link to="/managed-services">
      Managed Services
    </Link>

    <Link to="/support-services">
      Support Services
    </Link>

    

  </div>

</li>

  {/* CONTACT */}

  <li>
  <Link to="/contact-us" className="contact-nav-link">
    Contact Us
  </Link>
</li>

</ul>

        {/* RIGHT SECTION */}

        <div className="nav-right">

          <button className="demo-btn">
            Partner Login
          </button>

          {/* MOBILE MENU ICON */}

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}

      {/* MOBILE MENU */}

<div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>

  {/* CLOSE ICON */}

  <div
    className="close-icon"
    onClick={() => setMenuOpen(false)}
  >
    <FaTimes />
  </div>

  {/* MOBILE LINKS */}

  <ul>
    {/* MOBILE ABOUT US */}

<li
  className={`mobile-solution ${
    aboutDropdown ? "mobile-active" : ""
  }`}
>
  <div
    className="mobile-solution-title"
    onClick={() => setAboutDropdown(!aboutDropdown)}
  >
    <span>About Us</span>

    <IoIosArrowDown className="nav-arrow" />
  </div>

  <div className="mobile-solution-dropdown">

    <Link
      to="/who-we-are"
      onClick={() => {
        setMenuOpen(false);
        setAboutDropdown(false);
      }}
    >
      Who We Are
    </Link>

    <Link
      to="/values-and-ethics"
      onClick={() => {
        setMenuOpen(false);
        setAboutDropdown(false);
      }}
    >
      Values & Ethics
    </Link>

    <Link
      to="/quality-certification"
      onClick={() => {
        setMenuOpen(false);
        setAboutDropdown(false);
      }}
    >
      Quality Certification
    </Link>

  </div>
</li>
    

    {/* MOBILE ENGINEERING SERVICES */}

<li
  className={`mobile-solution ${engineeringDropdown ? "mobile-active" : ""}`}
>

  <div
    className="mobile-solution-title"
    onClick={() => setEngineeringDropdown(!engineeringDropdown)}
  >
    <span>Engineering Services</span>

    <IoIosArrowDown className="nav-arrow" />
  </div>

  {/* MOBILE ENGINEERING DROPDOWN */}

  <div className="mobile-solution-dropdown">

    {/* COLUMN 1 */}

     <div
  className="engineering-column"
  onClick={() => window.location.href = "/platform-development"}
  style={{ cursor: "pointer" }}
>
  <div className="engineering-heading">

    <div className="engineering-icon green">
      <HiOutlineComputerDesktop />
    </div>

    <h3>Platform development</h3>

  </div>

  <p>Platform development</p>

</div>

      {/* COLUMN 2 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/mobility"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon orange">
      <HiOutlineDevicePhoneMobile />
    </div>

    <h3>Mobility</h3>

  </div>

  <p>Mobility</p>

</div>

      {/* COLUMN 3 */}

      

<div
  className="engineering-column iot-column"
  onClick={() => window.location.href = "/internet-of-things"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon blue">
      <HiOutlineWifi />
    </div>

    <h3>Internet of Things</h3>

  </div>

  <p>Internet of Things</p>

</div>
      {/* COLUMN 4 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/cloud"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon blue">
      <HiOutlineShieldCheck />
    </div>

    <h3>Cybersecurity & Cloud Services</h3>

  </div>

  <p>Cybersecurity & Cloud Services</p>

</div>
      {/* COLUMN 5 */}

      <div
  className="engineering-column"
  onClick={() => window.location.href = "/ai-ml-services"}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon blue">
      <HiOutlineCpuChip />
    </div>

    <h3>AI/ML Services</h3>

  </div>

  <p>AI/ML Services</p>

</div>
      


    </div>

</li>



{/* MOBILE INDUSTRIES */}

<li
className={`mobile-solution ${industriesDropdown ? "mobile-active" : ""}`}
>
  <div
    className="mobile-solution-title"
    onClick={() => setIndustriesDropdown(!industriesDropdown)}
  >
    <span>Industries</span>

    <IoIosArrowDown className="nav-arrow" />
  </div>

  {/* MOBILE INDUSTRIES DROPDOWN */}

  <div className="mobile-solution-dropdown">

    {/* COLUMN 1 */}

      <div
  className="engineering-column"
  onClick={() => {
    window.location.href = "/automative";
    setMenuOpen(false);
  }}
  style={{ cursor: "pointer" }}
>
  <div className="engineering-heading">
    <div className="engineering-icon purple">
      <FaTruck />
    </div>

    <h3>Automative</h3>
  </div>

  <p>Automative</p>
</div>

      {/* COLUMN 2 */}

      <div
  className="engineering-column"
  onClick={() => {
    window.location.href = "/enterprise";
    setMenuOpen(false);
  }}
  style={{ cursor: "pointer" }}
>
  <div className="engineering-heading">
    <div className="engineering-icon red">
      <HiOutlineComputerDesktop />
    </div>

    <h3>Enterprise Device</h3>
  </div>

  <p>Enterprise Device</p>
</div>

      {/* COLUMN 3 */}

      <div
  className="engineering-column"
  onClick={() => {
    window.location.href = "/semiconductor";
    setMenuOpen(false);
  }}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon green">
      <HiOutlineCpuChip />
    </div>

    <h3>Semiconductor</h3>

  </div>

  <p>Semiconductor</p>

</div>
      {/* COLUMN 4 */}

      <div
  className="engineering-column"
  onClick={() => {
    window.location.href = "/industrial";
    setMenuOpen(false);
  }}
  style={{ cursor: "pointer" }}
>
  <div className="engineering-heading">
    <div className="engineering-icon green">
      <FaIndustry />
    </div>

    <h3>Industrial</h3>
  </div>

  <p>Industrial</p>
</div>
      {/* COLUMN 5 */}

      <div
  className="engineering-column"
  onClick={() => {
    window.location.href = "/consumer-power-electronics";
    setMenuOpen(false);
  }}
  style={{ cursor: "pointer" }}
>

  <div className="engineering-heading">

    <div className="engineering-icon green">
      <HiOutlineBolt />
    </div>

    <h3>Consume and Power Electronics</h3>

  </div>

  <p>Consume and Power Electronics</p>

</div>
  </div>

</li>

    {/* MOBILE SOLUTIONS */}

    <li
  className={`mobile-solution ${solutionOpen ? "mobile-active" : ""}`}
>

      <div
  className="mobile-solution-title"
  onClick={() => setSolutionOpen(!solutionOpen)}
>
        <span>Solutions</span>

        <IoIosArrowDown className="nav-arrow" />

      </div>

      {/* MOBILE DROPDOWN */}

      <div className="mobile-solution-dropdown">

        {/* COLUMN 1 */}

        {/* COLUMN 1 */}

<div className="solution-column">

  <div className="solution-heading">

    <div className="solution-icon purple">
      <LuBadgeCheck />
    </div>

    <h3>product1</h3>

  </div>

  <Link
    to="/solutions/ionexus-compliance-manager"
    className="solution-sub-link"
    onClick={() => {
      setMenuOpen(false);
      setSolutionOpen(false);
    }}
  >
    
  </Link>

  

  

</div>

        {/* COLUMN 2 */}

<Link
  to="/solutions/ionexus-obsolescence-manager"
  className="solution-column mobile-solution-link"
  onClick={() => {
    setMenuOpen(false);
    setSolutionOpen(false);
  }}
>

  <div className="solution-heading">

    <div className="solution-icon red">
      <HiOutlineCog6Tooth />
    </div>

    <h3>Product2</h3>

  </div>

  
  

</Link>

        {/* COLUMN 3 */}

        <div className="solution-column">

          <div className="solution-heading">

            <div className="solution-icon green">
              <HiOutlineShieldCheck />
            </div>

            <h3>Product3</h3>

          </div>

          <Link
    to="/solutions/environmental-regulations"
    className="solution-sub-link"
    onClick={() => {
      setMenuOpen(false);
      setSolutionOpen(false);
    }}
  >
   
  </Link>
        </div>

      </div>

    </li>

   <li
  className={`mobile-solution ${
    resellerDropdown ? "mobile-active" : ""
  }`}
>
  <div
    className="mobile-solution-title"
    onClick={() =>
      setResellerDropdown(!resellerDropdown)
    }
  >
    <span>Resellers</span>
    <IoIosArrowDown className="nav-arrow" />
  </div>

  <div className="mobile-solution-dropdown">

    <Link
      to="/core-implementation"
      onClick={() => setMenuOpen(false)}
    >
      Core Implementation
    </Link>

    <Link
      to="/managed-services"
      onClick={() => setMenuOpen(false)}
    >
      Managed Services
    </Link>

    <Link
      to="/support-services"
      onClick={() => setMenuOpen(false)}
    >
      Support Services
    </Link>

    <Link
      to="/transparency-services"
      onClick={() => setMenuOpen(false)}
    >
      Transparency Services
    </Link>

  </div>
</li>

    <li className="nav-item">
  <Link
    to="/contact-us"
    onClick={() => {
      setMenuOpen(false);
    }}
  >
    Contact Us
  </Link>
</li>

  </ul>

</div>

    </>
  );
}

export default Navbar;