import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Shipping from './pages/Shipping'
import Orders from './pages/Orders'
import Account from './pages/Account'
import PaymentMethod from './pages/PaymentMethod'
import ReviewOrder from './pages/reviewOrder/ReviewOrder'
import Pay from './pages/Pay'
import Success from './pages/Success'

const App = () => {
  const { currentUser } = useSelector(state => state.user)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={
          currentUser !== null ? <Navigate to='/' /> : <Login />
        } />
        <Route path='/register' element={
          currentUser !== null ? <Navigate to='/' /> : <Register />
        } />
        <Route path='/user/:userId' element={
          currentUser !== null ? <Account /> : <Navigate to='/login' />
        } />
        <Route path='/orders' element={
          currentUser !== null ? <Orders /> : <Navigate to='/login' />
        } />
        <Route path='/shipping' element={
          currentUser !== null ? <Shipping /> : <Navigate to='/login' />
        } />
        <Route path='/paymentmethod' element={
          currentUser !== null ? <PaymentMethod /> : <Navigate to='/login' />
        } />
        <Route path='/revieworder' element={
          currentUser !== null ? <ReviewOrder /> : <Navigate to='/login' />
        } />
        <Route path='/pay' element={
          currentUser !== null ? <Pay /> : <Navigate to='/login' />
        } />
        <Route path='/success' element={
          currentUser !== null ? <Success /> : <Navigate to='/login' />
        } />
      </Routes>
    </Router>
  )
}

export default App