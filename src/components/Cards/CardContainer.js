import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Editor from '../../../pages/editor/Editor';

const useStyles = makeStyles({
    root: {

    },
    container: {
        background: "white"
    }
});

const CardContainer = () => {
    const classes = useStyles();


    return (
        <div className={classes.container}>

        </div>
    );
}

export default CardContainer;