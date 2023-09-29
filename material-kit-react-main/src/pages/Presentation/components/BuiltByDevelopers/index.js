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
import Icon from "@mui/material/Icon";
import img from "./mam.jpeg";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={1}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={11} sx={{ ml: { xs: 1, lg: 6 } }}>
        <Grid item xs={12} lg={6}>
        <MKTypography variant="p" color="white" style={{ marginLeft: '10px' }}>
        
            <img
                src={img}
                style={{
                    borderRadius: '50%', 
                    width: '270px',     
                    height: '300px',   
                }}
                alt="Profile"
            />
             <MKTypography
            component="a"
            href="https://sites.google.com/site/suchetana0116/home"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >      
       <h1 style={{ cursor: 'pointer' }}>
  <span 
    style={{ 
      color: 'white',
      textDecoration: 'none',
    }}
    onMouseOver={(e) => e.target.style.textDecoration = 'underline blue'} // Set underline color to blue on mouse over
    onMouseOut={(e) => e.target.style.textDecoration = 'none'} // Remove underline on mouse out
  >
    Suchetana Chakraborty
  </span>
</h1>
 <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
 
          </MKTypography>
          <h2>Assistant Professor</h2>
          <MKTypography
            component="a"
            href="https://cse.iitj.ac.in/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          ><p style={{ cursor: 'pointer' }}>
 <span 
    style={{ 
      color: 'white',
      textDecoration: 'none',
    }}
    onMouseOver={(e) => e.target.style.textDecoration = 'underline blue'} // Set underline color to blue on mouse over
    onMouseOut={(e) => e.target.style.textDecoration = 'none'} // Remove underline on mouse out
  >
      Indian Institute of Technology, Jodhpur
  </span><br />
  <a
  href="https://www.linkedin.com/in/suchetana/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fab fa-linkedin"
    style={{
      color: 'white',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://scholar.google.co.in/citations?hl=en&user=sLnKodYAAAAJ"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fa fa-graduation-cap"
    style={{
      color: 'white',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://www.researchgate.net/profile/Suchetana-Chakraborty"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fab fa-researchgate"
    style={{
      color: 'white',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://sites.google.com/site/suchetana0116/contact"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fas fa-address-book"
    style={{
      color: 'white',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://orcid.org/0000-0001-9856-0687"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fas fa-id-badge"
    style={{
      color: 'white',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>
<a
  href="https://dblp.org/pid/52/10123.html"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginLeft: '10px',
    textDecoration: 'none', 
    transition: 'transform 0.2s',
    display: 'inline-block', 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.2)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  <i
    className="fas fa-database"
    style={{
      color: 'white',
      fontSize: '33px',
      verticalAlign: 'middle', 
      display: 'inline-block', 
    }}
  ></i>
</a>


</p>   
           </MKTypography>
          



        </MKTypography>
        </Grid>
        <Grid item xs={12} lg={6}>
        <MKTypography variant="p" color="white" style={{ marginLeft: '10px' }}>
        I am an Assistant Professor in the Department of <a href="https://cse.iitj.ac.in/"  style={{ color: 'green' }}>Computer Science and Engineering</a>,<a href="https://www.iitj.ac.in/" style={{color : 'green'}}> Indian Institute of Technology, Jodhpur </a>Since December 2020. My research interests are broadly in the domains of Ubiquitous Computing, IoT and Edge Computing, Wireless sensor and mobile ad hoc networks, Distributed Systems and Smart city applications. To know more about the work, please explore <a href="https://sites.google.com/site/suchetana0116/research" style={{color: 'green'}}>this page</a>. I am one of the founding members of UbiSys Research Group, in the department and actively involved in interdisciplinary research through <a href="https://iitj.ac.in/shc/" style={{color : 'green'}}>IDRP - Smart Healthcare</a>, <a href="https://iitj.ac.in/iot/" style={{color:'green'}}>IDRP - IoT & Applications</a> and<a href="https://iitj.ac.in/CETSD/" style={{color : 'green'}}> Centre of Emerging Technologies for Sustainable Development (CETSD)</a>. Currently, I am working as an Area Editor of Ad Hoc Networks journal, Elsevier. Also I am involved in organizing many conferences including IEEE ANTS 2021 (as Tutorial Co-chair), IEEE LCN 2021, 2022, 2023 (as TPC member), COMSNETS 2022, 2023 (as TPC member), ICDCN 2023 (as Workshop Co-chair) to name a few.        </MKTypography></Grid>
        </Grid>
     
      
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
