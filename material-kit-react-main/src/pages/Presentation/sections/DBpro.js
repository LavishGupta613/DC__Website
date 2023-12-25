import React from 'react';
import { Link } from 'react-router-dom'; // Remove the unnecessary 'Route' and 'Routes' imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard1 from "pages/Presentation/components/ExampleCard/index1";
import pro from './pro';


function DesignBlocksp() {
  const renderData = pro.map(({ title, items }) => (
    <Grid container spacing={0} sx={{ mb: 0 }} key={title}>
      <Grid item xs={0} lg={0}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 8 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={2} lg={12}>
        <Grid container spacing={-10}>
          {items.map(({ image, name, count, des, route, pro }) => (
            <Grid item xs={4} md={7} sx={{ mb: -4 }} key={name}>
              <Link to={route}>
                <ExampleCard1 image={image} name={name} count={count} des={des} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
        .
      </Grid>
      
      
  
  <div style={{ textAlign: 'right', marginBottom: '60px' }}>
  <a
    href="http://127.0.0.1:3000/material-kit-react-main/src/pages/Presentation/sections/DC%20Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/project.html"
    style={{ textDecoration: 'underline', marginLeft: "1100px" }}
  >
    See All Publication
  </a>
</div>





    </Grid>
  ));

  return (
    <MKBox component="section" my={-15} py={6}>
      <Container>
        <Grid
          container
          item
          xs={0}
          lg={9}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge variant="contained" color="info" container sx={{ mb: 2 }} />
        </Grid>
      </Container>
     
      <Container sx={{ mt: 3 }}>{renderData}</Container>
      
    </MKBox>
  );
}

export default DesignBlocksp;