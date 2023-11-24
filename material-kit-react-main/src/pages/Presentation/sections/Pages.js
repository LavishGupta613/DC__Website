import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import DesignBlocks1 from "./DB";
// import DesignBlocksData from "./data/designBlocksData";
// import DesignBlocks from "./DesignBlocks";

function PresentationPages() {
  return (
    <div>
    <div style={{ backgroundColor: '#F8F8F8' ,marginTop:"170px" }}>
    <MKBox component="section" py={0.002} style={{ backgroundColor: '#F8F8F8' ,textAlign: 'justify' }}>
    <Container  >
      <Grid
        container
        item
        xs={12}
        lg={-10}
        flexDirection="column"
        alignItems="left"
        sx={{ textAlign: "left", my: 10, mx: "auto", px: 0 }}
      >
       
        <div style={{ textAlign: 'left' }}>
          <MKTypography variant="h2" fontWeight="bold" sx={{ marginLeft: '0px' }}>
            Undergrad Research Volunteers and Interns
          </MKTypography>
          
        </div>
      </Grid>
    </Container>
    <Container sx={{ mt: { xs: 1, lg: 10 } ,marginBottom:"50px"}}>
  <Grid container spacing={3}>
          <Grid item xs={2} lg={6} sx={{ mt: -7, px: { xs: 0, lg: 0 }, marginRight: 0 }}>
            
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Prakriti app development
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Abhishek Raghav</li>
              <li style={{  fontSize: "18px" }}>Abhinav Kashyap</li>
<li style={{  fontSize: "18px" }}>Hriday Kondru</li>
<li style={{  fontSize: "18px" }}>Akriti Gupta</li>
<li style={{  fontSize: "18px" }}>Khushi Parikh</li>
<li style={{  fontSize: "18px" }}>Mohammad Zaid Shamshad</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Web development for sensing as service middleware
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Naman Goyal</li>
              <li style={{  fontSize: "18px" }}>Aakash Maheshwari</li>
<li style={{  fontSize: "18px" }}>Vansh Agarwal</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            IoT device development: bat tracker/wearable/OBU for two-wheeler
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Rachit Agnihotri</li>
              <li style={{  fontSize: "18px" }}>Sneha Gupta</li>
<li style={{  fontSize: "18px" }}>Uppala Giridhar</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Multimodal data analysis for HAR
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Shubh Goyal</li>
              <li style={{  fontSize: "18px" }}>Sukriti Goyal</li>
<li style={{  fontSize: "18px" }}>Ashish Cherukuri</li>
<li style={{  fontSize: "18px" }}>Kartik Choudhary</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Wargaming UX/UI
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Rankireddy Sai Mani Akarsh</li>
              <li style={{  fontSize: "18px" }}>Shivam Kumar</li>
            </ul>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ mt: -7, px: { xs: 0, lg: 18 } }}>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Interns
            </MKTypography>
            <MKTypography variant="h6" fontWeight="bold" mb={1}>
            2023
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/martin-kaushal-7689761bb/?originalSubdomain=in" style={{color :"blue"}}>Martin Kaushal </a>(Thapar Institute) - Android Development</li>
              <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/arihant-tanwar-778520191/?originalSubdomain=in" style={{color :"blue"}}>Arihant Tanwar</a> (Thapar Institute) - Trajectory Prediction</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/pratham-garg-781206249/?originalSubdomain=in" style={{color :"blue"}}>Pratham Garg </a> (Thapar Institute) - Object Recognition</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/sheral-singla-b97103232/?originalSubdomain=in" style={{color :"blue"}}>Sheral Singla </a>(Thapar Institute) - HAR</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{color :"blue"}}>Raghav Garg</a> (Thapar Institute) - Communication Protocol</li>
<li style={{  fontSize: "18px" }}>Ravindra (IIIT Vadodara) - Android Development</li>
<li style={{  fontSize: "18px" }}>Tanmay Bajaj (IIT Roorkee) - Sensing as a Service</li>
<li style={{  fontSize: "18px" }}>Swarup Kumar Mondal (Heritage Institute of Technology) - HAR</li>
<li style={{  fontSize: "18px" }}>Azhar Khan (IIT Jodhpur) - Embedded Systems</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{color :"blue"}}>Kartik Chhipa</a> (IIT Jodhpur) - Sensing as a Service</li>
<li style={{  fontSize: "18px" }}>Ankur Kumar Shukla (IIIT Vadodara) - HAR</li>
<li style={{  fontSize: "18px" }}>Jaysukh (IIT Jodhpur) - Android Development</li>
<li style={{  fontSize: "18px" }}>Naman Labhsetwar (Pune Institute of Computer Technology) - Wifi Sensing and ML</li>
<li style={{  fontSize: "18px" }}>Aditya Deshpande (Pune Institute of Computer Technology) - Wifi Sensing and ML</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h6" fontWeight="bold" mb={1}>
            2022
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            
            <ul>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/avijit-das-50960b207/" style={{ color: "blue" }}>Avijit Das </a> (IIT Madras), Smartphone Sensory Data Management</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/yaman-saraswat-75979b1b9/" style={{ color: "blue", fontSize: "18px" }}>Yaman Saraswat </a> (NIT Agartala), Multi Modal Data Analysis</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/saksham-gautam-22b41b203/" style={{ color: "blue", fontSize: "18px" }}>Saksham Gautam </a>  (IIIT Prayagraj), IMU Based Sensing</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/khushbu-bijawat-27b4a11b3/" style={{ color: "blue", fontSize: "18px" }}>Khushbu Bijawat</a> (MBM, Jodhpur), Smartwatch Sensory Data Management</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/anushkaagarwal24/" style={{ color: "blue", fontSize: "18px" }}>Anushka Agarwal</a> (RV College Of Engineering), Smartwatch Sensory Data Management</li>

  <a href="/sections/attention-catchers/Interns" style={{ fontSize: '18px', float: 'right', color: 'blue' }}>
  See All Details
</a>



            </ul>
            </MKTypography>
            
          </Grid>
        </Grid>
      
      </Container>
 
    </MKBox>
    </div>
    <DesignBlocks1></DesignBlocks1>
    </div>
  
  );
}
// 2022
// Avijit Das (IIT Madras), Smartphone Sensory Data Management
// Yaman Saraswat (NIT Agartala), Multi Modal Data Analysis
// Saksham Gautam (IIIT Prayagraj), IMU Based Sensing
// Khushbu Bijawat (MBM, Jodhpur), Smartwatch Sensory Data Management
// Anushka Agarwal (RV College Of Engineering), Smartwatch Sensory Data Management

export default PresentationPages;
