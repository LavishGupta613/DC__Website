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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import App from "./App";
// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
//App

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      /><App></App>
      {/* <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${""})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >  */}
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" position="absolute" 
           bottom ="200px" left="300px" mx="auto">
            <MKTypography 
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3x1"],
                },
              })}
            >
              Welcome to UbiSys Research Lab!{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              .
            </MKTypography>
          </Grid>
        </Container>
  
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={20} lg={6}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title=<h3>Few ongoing research efforts</h3>
                description=<div><ul>
                  <li >Understanding user behavior through inertial sensing</li>
                  <li >Task offloading and microservices management in MEC</li>
                  <li >Decentralized trust computation and reputation system in IoT and CPS</li>
                  <li >Context aware data sourcing from extreme edge</li>
                  <li >Situation-awareness in Connected and Autonomous vehicles</li>
                  <li >IoT intervention in wild habitat monitoring</li>
                  <li >Sensing as a service middleware for applications of human sensing</li>
                </ul></div>
               
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FilledInfoCard
                color="info"
                icon=<i className="fas fa-book" style={{ marginRight: '5px' }}></i>
                title=<h3>Education</h3>
                description=<div>
               <ul>
               <i className="fas fa-graduation-cap" style={{ display: 'inline', marginRight: '5px' }}></i>
<h4 style={{ display: 'inline' }}>PhD in Computer Science and Engineering, 2014</h4>


<p>Indian Institute of Technology Guwahati | India</p>
<i className="fas fa-graduation-cap" style={{ display: 'inline', marginRight: '5px' }}></i>
<h4 style={{ display: 'inline' }}>MTech in Computer Science and Engineering, 2011</h4>

<p>Indian Institute of Technology Guwahati | India</p>

<i className="fas fa-graduation-cap" style={{ display: 'inline', marginRight: '5px' }}></i>
<h4 style={{ display: 'inline' }}>
BTech in Computer Science and Engineering, 2009</h4>

<p>West Bengal University of Technology | India</p></ul></div>
                
              />
            </Grid>
            {/* <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid> */}
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;