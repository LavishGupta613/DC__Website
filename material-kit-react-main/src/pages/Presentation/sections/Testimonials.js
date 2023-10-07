import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Information() {
  return (
    <Box component="section" py={12} bgcolor="black">
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box bgcolor="white" p={3} borderRadius={4}>
              <Typography variant="h2" color="textPrimary">
                Trusted by over
              </Typography>
              <Typography variant="h2" color="info" textGradient mb={2}>
                1,679,477+ web developers
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={2}>
                Many Fortune 500 companies, startups, universities, and
                governmental institutions love Creative Timroducts.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="black" p={3} borderRadius={4}>
              {/* Text with a black background and white text */}
              <Typography variant="h4" color="white" gutterBottom>
                White Text on Black Background
              </Typography>
              <Typography variant="body1" color="white">
                This text has white color on a black background.
              </Typography>
            </Box>
            {/* Add more content for the second column */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Information;
