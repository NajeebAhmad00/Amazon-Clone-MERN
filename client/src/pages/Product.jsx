import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Lock } from '@material-ui/icons'

import Navbar from '../components/Navbar'
import {
    Container,
    ImgContainer,
    Image,
    ProductInfo,
    ProductName,
    Hr,
    Price,
    Tag,
    ProductDesc,
    Span,
    Button,
    ProductType,
    Section,
    About,
    SecondHead,
    ListGroup,
    ListItem,
    BuyProduct,
    Stock,
    ButtonContainer,
    Links
} from '../styles/Product'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import { CircularProgress } from '@material-ui/core'
import { Message } from '../styles/Global'

const Product = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const productId = location.pathname.split('/')[2]

    const { products } = useSelector(state => state.cart)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${productId}`)
                setProduct(res.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        getProduct()
    }, [productId])

    const handleCart = (e) => {
        e.preventDefault()

        dispatch(addProduct(product))
    }
    return (
        <>
            <Navbar />

            <Container>
                {loading ? <CircularProgress className='progress' /> : (
                    <>
                        <ImgContainer>
                            <Image src={product?.img} />
                        </ImgContainer>

                        <ProductInfo>
                            <ProductName>{product?.title}</ProductName>
                            <Hr />
                            <Price>${product?.price}</Price>
                            <a
                                href='https://www.amazon.com/b?ie=UTF8&node=18726306011'
                                className='link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Tag>& Free Returns</Tag>
                            </a>

                            <ProductDesc>
                                {/* {Saved for later} */}
                                {/* {product.category.includes('electronics') && (
                                    <>
                                        <Span>Capacity: <b>512 GB</b></Span>
                                        <Button active>512 GB</Button>
                                        <Button>1 TB</Button>
                                    </>
                                )} */}

                                <ProductType>
                                    <Section>
                                        {product.info && Object.keys(product['info'])?.map(i => (
                                            <Span bold>{i.charAt(0).toUpperCase() + i.substring(1)}</Span>
                                        ))}
                                    </Section>
                                    <Section>
                                        {product.info && Object.values(product['info'])?.map(i => (
                                            <Span>
                                                {Array.isArray(i) ? (
                                                    i.map(item => (
                                                        <span style={{ marginRight: '10px', cursor: 'pointer' }}>{item}</span>
                                                    ))
                                                ) : i}
                                            </Span>
                                        ))}
                                    </Section>
                                </ProductType>
                            </ProductDesc>
                            <Hr />

                            <About>
                                <SecondHead>About this item</SecondHead>

                                <ListGroup>
                                    {product?.desc?.length > 1 ? product?.desc?.map((item, i) => (
                                        <ListItem key={i}>{item}</ListItem>
                                    )) : (
                                        <ListItem>{product?.desc}</ListItem>
                                    )}
                                </ListGroup>
                            </About>
                        </ProductInfo>

                        <BuyProduct>
                            <Price>${product?.price}</Price>
                            <a
                                href='https://www.amazon.com/b?ie=UTF8&node=18726306011'
                                className='link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Tag>& Free Returns</Tag>
                            </a>
                            {product?.quantity > 0 ? (
                                <Stock>In Stock.</Stock>
                            ) : <Stock out>Out of stock</Stock>}
                            {product.quantity > 0 && (
                                <ButtonContainer>
                                    {products.find(item => item._id === product._id) ? (
                                        <Message success style={{ marginBottom: '10px' }}>Item added to cart</Message>
                                    ) : (
                                        <>
                                            <Button onClick={handleCart} buy>Add to Cart</Button>
                                            <Button buy now onClick={handleCart}>Buy Now</Button>
                                        </>
                                    )}
                                </ButtonContainer>
                            )}

                            <a href='https://www.amazon.in/gp/help/customer/display.html?nodeId=GH79TEB7MQ7SBXPG' className='link' target='_blank' rel="noreferrer">
                                <Tag><Lock style={{ marginBottom: '-5px', color: '#999999' }} />Secure transaction</Tag>
                            </a>
                            <Links>
                                Return policy: <Tag><a href='https://www.amazon.in/gp/help/customer/display.html?nodeId=202111910' target='_blank' rel="noreferrer" className='link'>
                                    Eligible for Return, Refund or Replacement within 30 days of receipt
                                </a></Tag>
                            </Links>
                            <Links>
                                Support: <a href="https://forum.vodafone.co.uk/t5/Other-broadband-queries/Amazon-Tech-Pack/td-p/2694699" className='link' rel="noreferrer" target='_blank'>
                                    <Tag>Free Amazon tech support included</Tag>
                                </a>
                            </Links>
                        </BuyProduct>
                    </>
                )}
            </Container>
        </>
    )
}

export default Product