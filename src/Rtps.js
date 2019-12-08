import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  card: {
    //maxWidth: 345,
    //height: '33.33%',
  },
}));

function PaperSheet(props) {
  const stopid = props.stopid;

  const classes = useStyles();

  const [rtps, setRtps] = useState([]);

  useEffect(() => {
    call();
  });

  async function call() {
    const response = await fetch("http://localhost/test/rtpi_stop_realtime?stopid=" + stopid);
    const rtps = await response.json();
    //console.log(rtps);
    setRtps(rtps);
  }

  let component = [];
  
  for (var i = 0; i < rtps.length; i++){

    component.push(   
      <div>       
      <Typography variant="h5" component="h3">
        {rtps[i].route} - {rtps[i].destination}
      </Typography>
      <Typography component="p">
        Due in {rtps[i].departureduetime} mins
      </Typography>
      </div>
    );
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          {component}
        </CardContent>
      </CardActionArea>
    </Card>
  );

}

export default PaperSheet;