
import axios from 'axios'

const baseURL = 'https://app.markitworld.com/api/v2/user/products'
export const getProducts = async (keyword, setProducts) => {
	const url = keyword ? `${baseURL}?keyword=${keyword}` : baseURL
	console.log('🚀: getProducts -> url', url)
	const config = {
		method: 'get',
		url,
		headers: {
			Authorization: '446a6828200604377695aa034cf57e36',
			StoreID: '1',
		},
	}
	const { data } = await axios(config)
	console.log('🚀: getProducts -> data', data.data)
	if (data.data?.products?.length) setProducts(data.data.products)
	else setProducts([])
}
