import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1
            state.products.push(action.payload)
            state.total += action.payload.price
        },
        removeProduct: (state, action) => {
            state.quantity -= 1
            state.products.splice(
                state.products.findIndex(item => item._id === action.payload._id), 1
            )
            state.total -= action.payload.price
        },
        removeAll: (state) => {
            state.products = []
            state.quantity = 0
            state.total = 0
        }
    }
})

export const { addProduct, removeProduct, removeAll } = cartSlice.actions
export default cartSlice.reducer