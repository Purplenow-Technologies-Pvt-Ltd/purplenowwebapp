import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Cloud from "./components/Cloud";
import ComplianceManager from "./components/ComplianceManager";

import Newsletter from "./components/Newsletter";
import ObsolescenceManagement from "./components/ObsolescenceManagement";
import EnvironmentalRegulations from "./components/Environmentalregulations";
import ContactUs from "./components/ContactUs";
import PlatformDevelopment from "./components/PlatformDevelopment";
import Mobility from "./components/Mobility";
import AI from "./components/AI";
import InternetOfThings from "./components/InternetOfThings";
import ConsumePower from "./components/ConsumePower";
import Enterprise from "./components/Enterprise";
import Industrial from "./components/Industrial";
import SemiConductor from "./components/SemiConductor";
import WhoWeAre from "./components/WhoWeAre";
import ValueAndEthics from "./components/ValueAndEthics";
import Qualitycertification from "./components/Qualitycertification";
import CoreImplementation from "./components/CoreImplementation";
import ManagedServices from "./components/ManagedServices";
import SupportServices from "./components/SupportServices";





import ScrollToTop from "./components/ScrollToTop";
import Automative from "./components/Automative";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Newsletter />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* COMPLIANCE PAGE */}
        <Route
          path="/solutions/ionexus-compliance-manager"
          element={<ComplianceManager />}
        />

        

        <Route
          path="/solutions/obsolescence-management-services"
          element={<ObsolescenceManagement />}
        />

        <Route
          path="/solutions/environmental-regulations"
          element={<EnvironmentalRegulations />}
        />
        <Route
            path="/contact-us"
            element={<ContactUs />}
        /> 
<Route
  path="/platform-development"
  element={<PlatformDevelopment />}
/>
<Route
  path="/mobility"
  element={<Mobility />}
/>
<Route
  path="/cloud"
  element={<Cloud />}
/>
<Route
  path="/ai-ml-services"
  element={<AI />}
/>
<Route
  path="/internet-of-things"
  element={<InternetOfThings />}
/>
<Route
  path="/automative"
  element={<Automative />}
/>
<Route
  path="/consumer-power-electronics"
  element={<ConsumePower />}
/>
<Route
  path="/enterprise"
  element={<Enterprise />}
/>
<Route
  path="/industrial"
  element={<Industrial />}
/>
<Route
  path="/semiconductor"
  element={<SemiConductor />}
/>
<Route path="/who-we-are" element={<WhoWeAre />} />
<Route
  path="/values-and-ethics"
  element={<ValueAndEthics />}
/>
<Route
  path="/quality-certification"
  element={<Qualitycertification />}
/>


<Route
  path="/core-implementation"
  element={<CoreImplementation />}
/>

<Route
  path="/managed-services"
  element={<ManagedServices />}
/>

<Route
  path="/support-services"
  element={<SupportServices />}
/>



   </Routes>
   

    </BrowserRouter>
  );
}

export default App;