import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const InterventionCarte = (props) => {
    console.log(props)
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.date}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" component={Link} to={"/interventions/" + props.id}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default InterventionCarte;


