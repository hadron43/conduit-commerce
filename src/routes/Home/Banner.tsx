import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "mui-image";

function Banner() {
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6} sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', alignSelf: 'center' }}>
            <Box>
              <Typography variant="h2" gutterBottom>
                Supercharging Distributor Operations
              </Typography>

              <Typography variant="subtitle1" gutterBottom sx={{ my: 5}}>
                We empower DTC fulfillment teams to better onboard, serve, and maintain multi-platform marketplace integrations. Our powerful no-code solution helps fast-track integrations and monitor key datapoints, unlocking net-new sales channels, with a near-instant return on investment.
              </Typography>

              <Button variant="contained" color="warning" size="medium" sx={{ px: 4 }}>
                Request a demo
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid xs={12} md={6} sx={{ my: 4 }}>
          <Image src="/doppio.gif" alt="banner" width={"100%"} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Banner;