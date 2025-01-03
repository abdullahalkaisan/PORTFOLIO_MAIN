
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardMedia } from '@mui/material';

export default function Portfolio_card(props) {
  return (
    <Card variant='' sx={{ width: 345, margin:2, borderRadius:4 }}>
      <a style={{color:"#333", textDecoration:"none"}} href={props.items.url} target="_blank" rel="noopener noreferrer">
      
      {/* <CardActionArea disableRipple> */}
        <CardMedia
          component="img"
          height="240"
          image={props.items.pictureUrl}
          sx={{borderRadius:7
          }}
          alt="portfolio"
        />
        {/* <img style={{height:240, borderRadius:10}} src={props.items.pictureUrl} alt="" /> */}
        <CardContent>
          <Typography gutterBottom variant="body1" sx={{fontWeight:"bold",cursor:"pointer", transition:"ease", transitionDuration:".3s", "&:hover":{color:"royalblue", letterSpacing:"2px"}}}  component="div">
            {props.items.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.items.category}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
      </a>
    </Card>
  );
}
