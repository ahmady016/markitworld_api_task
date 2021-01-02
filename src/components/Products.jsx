import React from 'react'

import { Link as RouterLink } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Alert from '@material-ui/lab/Alert'

import TextField from '@material-ui/core/TextField'

import { getProducts } from '../api/getProducts'

function ProductCard({ id, title, description, images, brand_name, status }) {
	return (
		<Card className="w-50 mx-auto">
			<CardHeader
				avatar={<Avatar aria-label="recipe">{brand_name}</Avatar>}
				title={title}
				subheader={status}
			/>
			<CardMedia
				component="img"
				title={title}
				alt={title}
				image={images?.length ? images[0].thumbnail : ''}
				style={{ height: '200px' }}
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing className="mb-1">
				<Link component={RouterLink} to={`/product-details/${id}`}>
					More Details ...
				</Link>
			</CardActions>
		</Card>
	)
}

function ProductList({ products, setProducts }) {
	const [keyword, setKeyword] = React.useState('hp')

	React.useEffect(() => {
		if (keyword.trim()) getProducts(keyword, setProducts)
	}, [setProducts, keyword])

	return (
		<div className="my-2">
			<form noValidate>
				<TextField
					className="w-100 mb-1"
					id="products-search"
					label="Search Our Products"
					variant="outlined"
					name="keyword"
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
				/>
			</form>
			<Typography variant="h5" className="mb-1">Product List</Typography>
			{products?.length > 0 ? (
				products.map((product) => (
					<ProductCard key={product.id} {...product} />
				))
			) : (
				<Alert severity="info">No products ...</Alert>
			)}
		</div>
	)
}

export default ProductList
