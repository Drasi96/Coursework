import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Spidey from './../assets/images/tarantula.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Grid } from '@material-ui/core';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Events() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const addEvent = () =>{
      console.log('pressed the button')
    return(
        <Grid container>
          <Grid>
    <Card sx={{ maxWidth: 345,
        gap: 2,
        display: Grid
        }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Event"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="200"
        image= {Spidey}
        alt="Spidey"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Event Short Description
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share"
        
        onClick={addEvent}>
          <AddBoxIcon
           />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Full Description:</Typography>
          <Typography>
            Justice for the UGLIES
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    <Grid>
    <Card sx={{ maxWidth: 345,
        gap: 2,
        display: Grid
        }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Event"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="200"
        image= {Spidey}
        alt="Spidey"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Event Short Description
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share"
        
        onClick={addEvent}>
          <AddBoxIcon
           />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Full Description:</Typography>
          <Typography>
            Justice for the UGLIES
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </Grid>
    );
  }
  

  return (
      <Grid container>
          <Grid>
    <Card sx={{ maxWidth: 345,
        }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Event"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="200"
        image= {Spidey}
        alt="Spidey"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Event Short Description
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share"
        
        onClick={addEvent}>
          <AddBoxIcon
           />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Full Description:</Typography>
          <Typography>
            Justice for the UGLIES
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </Grid>
  );
}