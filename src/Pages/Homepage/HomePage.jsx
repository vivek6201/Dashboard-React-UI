import "./Homepage.css";
import dataAnalysis from "../../assets/Data-Analysis.png"
import { RiMessageFill } from "react-icons/ri";
// import dataWrangling from "../../assets/Data Wrangling.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container">

        {/* Certificate Container */}
        <div className="upcomming-cert">
          <h2 className="title">Upcoming Certifications</h2>

          <div className="cert-container">
            <img src={dataAnalysis} alt="" />

            <div className="upcert-detail">
              <span className="bar">Certification | Attempt 1</span>
              <h4>Data analysis Certification</h4>
              <span className="bar">Completed | 21 MAR 2022</span>
            </div>

            <div className="exam-struct">
              <p>Exam Structure</p>
              <div>
                <p>Round 1</p>
                <span>MCQ</span>
                <span>Coding</span>
              </div>
              <div>
                <p>Round 2</p>
                <span>Project</span>
              </div>
            </div>
            <button>View Exam Details</button>
          </div>
        </div>
      </div>

      {/* Continue Learning is Left */}
      <div className="continue-learning">
        
      </div>
      
      {/* floating icon*/}
      <div className="popup">
        <RiMessageFill color="white" size={22} />
      </div>
    </div>
  );
};

export default HomePage;
