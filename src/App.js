import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef } from 'react'; // Add at the top

  // Import components/pages
  import HomePage from './HomePage';
  import Header from './Header';
import LoadingScreen from './LoadingScreen';
  // Services - Vaastu & Surveying
  import VaastuPlan from './VaastuPlan';
  import Surveying from './Surveying';
  import SurveyPlan from './SurveyPlan';
  import PlotSeparation from './PlotSeparation';
  import Approval from './Approval';
  import BuildingApproval from './BuildingApproval';

  // Services - Architectural Design & Visualization
  import ArchitecturalConceptPlanning from './ArchitecturalConceptPlanning';
  import ArchitecturalDrawings from './ArchitecturalDrawings';
  import ConstructionWorkingDrawings from './ConstructionWorkingDrawings';
  import FloorPlans3D from './FloorPlans3D';
  import ElectricalLayout from './ElectricalLayoutPlans';
  import SectionElevation from './SectionElevations';
  import DInterior from './DInterior.js';
  

  // Services - 
  import StructuralDesignDetailing from './StructuralDesignDetailing';
  import CclDrawing from './CclDrawing';
  import WorkLayout from './WorkLayout';
  import RcSchedule from './RcSchedule';
  import FootingRcDetails from './FootingRcDetails';
  import ColumnRcDetails from './ColumnRcDetails';
  import BeamLayout from './BeamLayout';
  import StaircaseRcDetails from './StairCaseRcDet.js';
  import RcDetails from './RcDetails';
  import Layout from './Layout';
  import SlabRcDetails from './SlabRcDetails';
  import BeamRcDetails from './BeamRcDetails';
  import RC from './RC';
  import BBS from './BBS';   

  // Services - Estimation & Financial
  import CostEstimationServices from './CostEstimationServices';
  import ConstructionBankEstimationReports from './ConstructionBankEstimationReports';
  import BankLoanAssistance from './BankLoanAssistance';

  import InternshipOpportunities from './InternshipOpportunities';
  import CadTraining from './CadTraining.js';
  import SiteMeasurements from './SiteMeasurements';
  import LispIntro from './LispIntro';

  import ClientOwnedLand from "./ClientOwnedLand";
  import RCCSteelStructures from "./RCCSteelStructures";
  import PEBDesignDetailing from "./PEBDesignDetailing";
  import StaircaseFabrication from "./StaircaseFabrication";
  import ElectricalPlumbingInstallations from "./ElectricalPlumbingInstallations";
  import Vetrified from './Vetrified';
  import PaintingWork from "./PaintingWork";

  import AmmoniaBlueprints from "./AmmoniaBlueprints";
  import PublicBuildingStabilityCertification from "./PublicBuildingStabilityCertification";
  import SiteInspections from "./SiteInspections";


function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
const handleLoadingComplete = () => setIsLoading(false);


  useEffect(() => {
    setShowVideoModal(true); // show modal on every refresh
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log(err));
    }
  }, []);

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
  <Router>
    {isLoading ? (
      <LoadingScreen onComplete={handleLoadingComplete} />
    ) : (
      <>
        {/* Video Modal */}
        {showVideoModal && (
          <div className="video-modal-overlay">
            <div className="video-modal">
              <button className="close-video-btn" onClick={closeVideoModal}>×</button>
              <video ref={videoRef} autoPlay muted loop playsInline>
                <source src="/diwali.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}

          <Header />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Vaastu & Surveying Services */}
          <Route path="/services/vaasthu" element={<VaastuPlan />} />
          <Route path="/services/surveying" element={<Surveying />} />
          <Route path="/services/survey-plan" element={<SurveyPlan />} />
          <Route path="/services/plot-separation" element={<PlotSeparation />} />
          <Route path="/services/approval" element={<Approval />} />
          <Route path="/services/building-approval" element={<BuildingApproval />} />

          {/* Architectural Design & Visualization Services */}
          <Route path="/services/architectural-concept-planning" element={<ArchitecturalConceptPlanning />} />
          <Route path="/services/architectural-drawings" element={<ArchitecturalDrawings />} />
          <Route path="/services/construction-working-drawings" element={<ConstructionWorkingDrawings />} />
          <Route path="/services/floor-plans-3d" element={<FloorPlans3D />} />
          <Route path="/services/electrical-layout" element={<ElectricalLayout />} />
           <Route path="/services/sections-elevations" element={<SectionElevation />} />
          <Route path="/services/3d-interior" element={<DInterior />} />

          {/*  Services */}
          <Route path="/services/structural-design-detailing" element={<StructuralDesignDetailing />} />
          <Route path="/services/ccl-drawing" element={<CclDrawing />} />
          <Route path="/services/work-layout" element={<WorkLayout />} />
          <Route path="/services/rc-schedule" element={<RcSchedule />} />
          <Route path="/services/footing-rc-details" element={<FootingRcDetails />} />
          <Route path="/services/column-rc-details" element={<ColumnRcDetails />} />
          <Route path="/services/beam-layout" element={<BeamLayout />} />
          <Route path="/services/staircase-rc-details" element={<stairCaseRcDet />} />
          <Route path="/services/rc-details" element={<RcDetails />} />
          <Route path="/services/layout" element={<Layout />} />
          <Route path="/services/slab-rc-details" element={<SlabRcDetails />} />
          <Route path="/services/beam-rc-details" element={<BeamRcDetails />} />
          <Route path="/services/rc" element={<RC />} />
          <Route path="/services/bbs" element={<BBS />} />


          {/* Estimation & Financial Services */}
          <Route path="/services/cost-estimation" element={<CostEstimationServices />} />
          <Route path="/services/construction-bank-estimation" element={<ConstructionBankEstimationReports />} />
          <Route path="/services/bank-loan-assistance" element={<BankLoanAssistance />} />

          <Route path="/services/education/internship" element={<InternshipOpportunities />} />
          <Route path="/services/education/cad-training" element={<CadTraining />} />
          <Route path="/services/education/sitemeasurement-draft" element={<SiteMeasurements />} />
          <Route path="/services/education/lisp-intro" element={<LispIntro />} />

          <Route path="/services/construction/client-land" element={<ClientOwnedLand />} />
          <Route path="/services/construction/rcc-steel" element={<RCCSteelStructures />} />
          <Route path="/services/construction/peb" element={<PEBDesignDetailing />} />
          <Route path="/services/construction/staircase" element={<StaircaseFabrication />} />
          <Route path="/services/construction/electrical-plumbing" element={<ElectricalPlumbingInstallations />} />
          <Route path="/services/construction/fixing" element={<Vetrified />} />
          <Route path="/services/construction/painting" element={<PaintingWork />} />

          <Route path="/services/inspection/ammonia" element={<AmmoniaBlueprints />} />
    <Route
            path="/services/inspection/certification"
            element={<PublicBuildingStabilityCertification />}
          />
  <Route path="/services/inspection/site" element={<SiteInspections />} />

        </Routes>
        </>
    )}
      </Router>
    );
  }

  export default App;
