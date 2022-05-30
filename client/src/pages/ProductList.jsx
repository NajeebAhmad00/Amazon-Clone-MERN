import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilterProduct from '../components/FilterProduct'
import {
    Container,
    FilterContainer,
    ProductContainer,
    Head,
    ProductListContainer,
    ProductListInner,
    ProductImg,
    ProductInfo,
    ProductName,
    Price
} from '../styles/ProductList'
import { publicRequest } from '../requestMethods'

const ProductList = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState('')
    const category = location.search.split('=')[1]

    useEffect(() => {
        const getProducts = async () => {
            try {
                if (category) {
                    if (category === 'all' || category === '') {
                        const res = await publicRequest.get('/products')
                        setProducts(res.data)
                        setLoading(false)
                    } else {
                        const { data } = await publicRequest.get(`/products?cat=${category}`)
                        await setProducts(data)
                        setLoading(false)
                    }
                } else {
                    const res = await publicRequest.get('/products')
                    setProducts(res.data)
                    setLoading(false)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
    }, [category])
    return (
        <>
            <Navbar />

            <Container>
                <FilterContainer>
                    <FilterProduct />
                </FilterContainer>

                <ProductContainer>
                    <Head>Results</Head>

                    {loading ? <CircularProgress className='progress' /> : (
                        <ProductListContainer>
                            {products?.map((product) => (
                                <ProductListInner key={product._id}>
                                    <Link to={`/product/${product._id}`}>
                                        <ProductImg src={product.img} />
                                    </Link>
                                    <ProductInfo>
                                        <Link to={`/product/${product._id}`} className='link'>
                                            <ProductName style={{ color: 'rgb(45, 56, 122)' }}>
                                                {product.title?.length > 23 ? product.title?.slice(0, 23) + '...' : product?.name}
                                            </ProductName>
                                        </Link>
                                        <Price>${product.price}</Price>
                                    </ProductInfo>
                                </ProductListInner>
                            ))}
                        </ProductListContainer>
                    )}
                </ProductContainer>
            </Container>

            <Footer />
        </>
    )
}

export default ProductList