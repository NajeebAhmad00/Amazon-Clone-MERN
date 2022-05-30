import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { popularProducts } from '../data'
import { Img } from '../styles/Global'
import { Banner, ProductShowcase, ShowcaseItem, ShowcaseHead, ImageBox, ImgContainer, ShowcaseText } from '../styles/Home'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />

            <ProductShowcase>
                {popularProducts.map((product, i) => (
                    <ShowcaseItem key={i}>
                        <ShowcaseHead>{product.title}</ShowcaseHead>
                        <ImageBox>
                            {product.img.length > 1 ?
                                <ImgContainer>
                                    {product.img.map((img, i) => (
                                        <Img src={img} key={i} />
                                    ))}
                                </ImgContainer> : <Img src={product.img} />}
                        </ImageBox>
                        <Link to={`/products?cat=${product.category}`} className='link'>
                            <ShowcaseText>
                                See More
                            </ShowcaseText>
                        </Link>
                    </ShowcaseItem>
                ))}
            </ProductShowcase>

            <Footer />
        </>
    )
}

export default Home