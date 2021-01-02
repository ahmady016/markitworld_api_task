import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import ProductList from './components/Products'
import ProductDetails from './components/ProductDetails'

function App() {
	const [products, setProducts] = React.useState([])
	return (
		<>
			<Header />
			<Container maxWidth="lg">
				<Switch>
					<Route
						path="/products"
						render={(props) => (
							<ProductList
								{...props}
								products={products}
								setProducts={setProducts}
							/>
						)}
					/>
					<Route
						path="/product-details/:id"
						render={(props) => <ProductDetails {...props} products={products} />}
					/>
					<Redirect to="/products" />
				</Switch>
			</Container>
		</>
	)
}

export default App
