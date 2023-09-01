import * as React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";


function Copyright() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 2,

      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Chi sono?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sono uno sviluppatore software che fornisce assistenza ai clienti
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              I miei contatti
            </Typography>
            <Typography variant="body2" color="text.secondary">
              via Ottorino Rossi, Varese (VA)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: <a href='mailto:fguarino@libero.it'>fguarino@libero.it</a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Telefono: <a href='phone:3456092389'> 3456092389</a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Seguimi sulle pagine
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © dai un'occhiata al  "}
            <Link color="inherit" href="https://www.google.it/">
              nostro sito
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default Copyright;