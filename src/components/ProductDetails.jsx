import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

function ProductDetails({ match, products }) {
	const [product, setProduct] = React.useState(null)

	React.useEffect(() => {
		setProduct(products.find((product) => product.id === +match.params.id))
	}, [match.params.id, products])

  if(product)
    return (
      <Card className="my-2">
        <CardActionArea>
          <CardMedia
            component="img"
            image={product.images[0].large}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  return null
}

export default ProductDetails
