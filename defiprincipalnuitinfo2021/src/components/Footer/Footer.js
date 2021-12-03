import React from "react";
import "./Footer.css";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


function FormRow() {
    return (
        <React.Fragment>
            <Grid item md={1} sm={6} xs={12}>
                <Link className={'foot_item'} href="https://sauveteurdudunkerquois.fr/qui-sommes-nous/" underline="none" color={"white"}>
                    {'Qui sommes-nous'}
                </Link>
            </Grid>
            <Grid item md={1} sm={6} xs={12}>
                <Link className={'foot_item'} href="https://sauveteurdudunkerquois.fr/presse/" underline="none" color={"white"}>
                    {'Presse'}
                </Link>
            </Grid>
            <Grid item md={1} sm={6} xs={12}>
                <Link className={'foot_item'} href="https://sauveteurdudunkerquois.fr/sites-amis/" underline="none" color={"white"}>
                    {'Sites amis'}
                </Link>
            </Grid>
            <Grid item md={1} sm={6} xs={12}>
                <Link className={'foot_item'} href="https://sauveteurdudunkerquois.fr/plan-du-site/" underline="none" color={"white"}>
                    {'Plan du site'}
                </Link>
            </Grid>
            <Grid item md={1} sm={6} xs={12}>
                <Link className={'foot_item'} href="https://sauveteurdudunkerquois.fr/lettre-hebdomadaire/" underline="none" color={"white"}>
                    {'Lettre hebdomadaire'}
                </Link>
            </Grid>
            <Grid item md={1} sm={6} xs={12}>
                <Link className={'foot_item'} href="https://sauveteurdudunkerquois.fr/exprimez-vous/" underline="none" color={"white"}>
                    {'Exprimez-vous'}
                </Link>
            </Grid>
        </React.Fragment>
    );
}

const Footer = (props) => {
    return (
        <footer class="footer-distributed">
            <h3>Ma Libellule</h3>
            <div className="container">
                <span style={{ color: props.stateDark ? "grey" : "yellow" }}>☀︎</span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => props.setStateDark(!props.stateDark)} />
                        <span className="slider round"> </span>
                    </label>
                </div>
                <span style={{ color: props.stateDark ? "#c96dfd" : "grey" }}>☽</span>
            </div>
            <Box
                sx={{
                    mx: 'auto',
                    bgcolor: 'primary.main',
                    color: 'blue',
                    width: 200,
                    borderRadius: 1,
                    textAlign: 'center',
                    display: 'inline',
                    marginTop: '10px'
                }}
            >
                <Grid container item spacing={5} sx={{justifyContent:'space-around', marginTop: 0}}>
                    <FormRow/>
                </Grid>
            </Box>
        </footer>
    );
};

export default Footer;
