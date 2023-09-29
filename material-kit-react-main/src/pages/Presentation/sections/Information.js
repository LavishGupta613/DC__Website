/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import img from "./img.jpg";
// Material Kit 2 React examples
// import { Link } from 'react-router-dom';
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
           
                   
                    <br />
                 
                  </>
                }
                description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                image={bgBack}
                title="Applications"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
           
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={19} md={29}>
                <DefaultInfoCard
                 icon=<i className="fas fa-laptop" style={{ color: 'gray', fontSize: '20px' }}></i>
                  title="Lab News"
                 
                  description="Prospective Members Apply Here!"
                  des2= <a href="https://ubisysresearch.github.io/openpositions/index.html" style={{ color: 'blue' }}>Interns, BTP/MTP, PhD, Postdoc and design credits</a>

                  des3="A few PhD positions are available."
                  des4="Looking for self-motivated BTech/MTech students (NET/GATE qualified) with high analytical skill, strong research aptitude and excellent academic background to join our research team. If you are interested to work with us and pursue PhD/Summer Internship/MTP/BTP, write to us with your updated resume."
                />
              </Grid>

            </Grid>
           
  
  

            <Grid container spacing={-2} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={19} md={26}>
                <DefaultInfoCard
                  icon=<i className="fas fa-trophy" style={{ color: 'gold', fontSize: '20px' }}></i>
                  title="Student Accomplishments"
                  description=<div>[Publication] <a href="https://chughgarvit.github.io/"  style={{ color: 'blue' }}>Garvit</a> received an acceptance for a full paper at <a href="https://chase23.sigbed.org/Home.html" style={{ color: 'blue' }}>IEEE/ACM CHASE 2023! </a></div>
                  des2="Ananya was selected and attended the SERB-sponsored high-end workshop on AI and Data Science for Industrial Applications at CSIR-CMERI."
                  des3=<div> <a href="https://chughgarvit.github.io/" style={{ color: 'blue' }}>Garvit </a>received a Travel Grant from <a href="https://www.comsnets.org/" style={{ color: 'blue' }}>COMSNETS!</a> to attend the 15th International Conference on COMmunication Systems & NETworkS from 3rd to 9th January 2023.</div>
                  des4=<div>[Publication] <a href="https://chughgarvit.github.io/"  style={{ color: 'blue' }}>Garvit</a> presented one Poster and one Demo at <a href="https://www.comsnets.org/" style={{ color: 'blue' }}>COMSNETS!</a></div>
                />
                <DefaultInfoCard  container spacing={-1} sx={{ mt: { xs: 0, md: 6 } }}
                  description="The very first version of PoC for bat tracker and smartwatch have been developed."
                  des2="CRG grant from SERB got approved"
                  des3=<div> <a href="https://chughgarvit.github.io/" style={{ color: 'blue' }}>Garvit </a> received outstanding TA Award.</div>
                  des4="[APP] Prakriti App v2.1 to be released soon"
                
                />
                <DefaultInfoCard  container spacing={-1} sx={{ mt: { xs: 0, md: 6 } }}
                  description="3-D printed smart home and ambient sensing lab to come up soon!"
                  des2=<div> <a href="https://chughgarvit.github.io/" style={{ color: 'blue' }}>Garvit </a>received a Grant to attend <a href="https://www.esense.io/earcomp2022/index.html" style={{ color: 'blue' }}>EarComp</a> 2022 by <a href="https://www.bell-labs.com/" style={{ color: 'blue' }}>Nokia Bell Labs.</a></div>
                  des3=<div>[Publication] <a href="https://chughgarvit.github.io/"  style={{ color: 'blue' }}>Garvit</a>received a paper acceptance in <a href="https://www.esense.io/earcomp2022/index.html" style={{ color: 'blue' }}>EarComp</a> 2022.</div>
                  des4=<div> <a href="https://chughgarvit.github.io/" style={{ color: 'blue' }}>Garvit</a>secured 2nd position at the <a href="https://iitjsc.acm.org/pages/activities/ideathon.html" style={{ color: 'blue' }}>iS3: iDeathon on Sustainable Smart Systems </a>organised by ACM Student Chapter IIT Jodhpur.</div>
                
                />

                
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
