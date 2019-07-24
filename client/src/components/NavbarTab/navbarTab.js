import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});


export default function CenteredTabs(props) {
    // console.log(props)
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [item, setItem] = useState({
        item: ''
    })

    // props.tabs.map(tabs => {
    //    return console.log(tabs.items)
    // })
    

    useEffect(() => {
        props.handleGetTabs({})
    },[])

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                onClick={props.handleGetTabs}
                indicatorColor="primary"
                textColor="primary"
            >
                {props.tabs.map(tabs => {
                    return <Tab id={tabs._id} label={tabs.name} />
                })}
            </Tabs>
        </Paper>
    );
}