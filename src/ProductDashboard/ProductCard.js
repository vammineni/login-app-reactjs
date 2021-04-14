import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
  media: {
    // height: 140,
    height: '280px',
    margin: '10px'
  },
});

export default function ProductCard(props) {
  const classes = useStyles();
  const {product} = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={'images/' + product.coverImage}
          title={product.name}
        />
        <CardContent>
          <Typography variant="subtitle1" component="h4">
                {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.isExpire ? 'Expired' : 'Expiry By: ' + product.expiryDate.toLocaleDateString()}
          </Typography>
          <Typography variant="subtitle1" component="h4">
            ${product.price}
          <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize:'14px', marginLeft: '10px'}}>
               ${product.discountPrice}
          </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  style={{textTransform:'none'}}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
