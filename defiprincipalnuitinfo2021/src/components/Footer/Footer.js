import React from "react";
import "./Footer.css";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


function FormRow() {
    return (
        <React.Fragment>
            <Grid item md={2} sm={6} xs={12}>
                <Link href="https://sauveteurdudunkerquois.fr/qui-sommes-nous/" underline="hover" color={"white"}>
                    {'Qui sommes-nous ?'}
                </Link>
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
                <Link href="https://sauveteurdudunkerquois.fr/presse/" underline="hover" color={"white"}>
                    {'Presse'}
                </Link>
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
                <Link href="https://sauveteurdudunkerquois.fr/sites-amis/" underline="hover" color={"white"}>
                    {'Sites amis'}
                </Link>
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
                <Link href="https://sauveteurdudunkerquois.fr/plan-du-site/" underline="hover" color={"white"}>
                    {'Plan du site'}
                </Link>
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
                <Link href="https://sauveteurdudunkerquois.fr/lettre-hebdomadaire/" underline="hover" color={"white"}>
                    {'Lettre hebdomadaire'}
                </Link>
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
                    <Link href="https://sauveteurdudunkerquois.fr/exprimez-vous/" underline="hover" color={"white"}>
                        {'Exprimez-vous'}
                    </Link>
            </Grid>
        </React.Fragment>
    );
}

const Footer = () => {
  return (
    <div className="footer">
      <footer class="footer-distributed">
        <div class="footer-left">
            <h3>Ma Libellule</h3>
        </div>
            <Box
                sx={{
                    mx: 'auto',
                    bgcolor: 'primary.main',
                    color: 'blue',
                    width: 200,
                    p: 1,
                    m: 1,
                    borderRadius: 1,
                    textAlign: 'center',
                    display: 'inline',
                    alignContent: 'space-around'
                }}
            >
                <Grid container spacing={1}>
                    <Grid container item spacing={3}>
                        <FormRow />
                    </Grid>
                </Grid>
            </Box>
      </footer>
    </div>
  );
};

export default Footer;
