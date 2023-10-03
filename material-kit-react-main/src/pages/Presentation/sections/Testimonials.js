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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={10} md={3} lg={4}>
            <DefaultReviewCard
              name="Recent Conference Proceedings"
              date="1 day ago"
              review=<ul><li>This is an excellent product, the documentation is excellent and helped me get things done more efficiently.</li></ul>
              r1=<ul><li><a href="https://ubisysresearch.github.io/publication/molevolvr_webapp/" style={{color: "blue"}}>Demonstration of LegalHelper</a>: A Low-cost tool for Smart Translation and Creation of Legal Contracts</li></ul>
              r2=<ul><li><a href="https://ubisysresearch.github.io/publication/molevolvr_webapp/" style={{color: "blue"}}>enVolve+</a>: Inertial Sensing to Reinforce Involvement of Silent Listeners during an Online Interaction</li></ul>
              r3=<ul><li>crossTrustChain: CrossChain Interoperability using Multivariate Trust Models</li></ul>
             r4=  <a href="https://sites.google.com/site/suchetana0116/publications" style={{ color: "blue", textDecoration: "underline" }}>
    SEE ALL PUBLICATIONS→
  </a>

            />
            <DefaultReviewCard
              review="Demonstration of LegalHelper: A Low-cost tool for Smart Translation and Creation of Legal Contracts"
              rating={5}
            />
          </Grid>
         
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Recent Journal Publications"
              date="1 week ago"
              review=<ul><li><a href="https://arxiv.org/abs/2208.01394" style={{color :"black"}}>UniPreCIS </a>: A data pre-processing solution for collocated services on shared IoT</li></ul>
              r1=<ul><li><a href="https://www.sciencedirect.com/science/article/pii/S1570870522002165?via%3Dihub" style={{color :"black"}}>A survey of mobility aware Multi-access Edge Computing</a>: Challenges, use cases and future directions</li></ul>
              r2=<ul><li><a href="https://linkinghub.elsevier.com/retrieve/pii/S0167739X22001029" style={{color :"black"}}>Where Do All My Smart Home Data Go? Context-aware Data Generation and Forwarding for Edge-based Microservices over Shared IoT Infrastructure</a></li></ul>
              r3=<ul><li><a href="https://ubisysresearch.github.io/publication/molevolvr_webapp/" style={{color :"black"}}>Deep Unsupervised Methods towards Behavior Analysis in Ubiquitous Sensor Data</a></li></ul>
              r4=<a href="https://sites.google.com/site/suchetana0116/publications" style={{ color: "black", textDecoration: "underline" }}>SEE ALL PUBLICATIONS→</a>
          />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
