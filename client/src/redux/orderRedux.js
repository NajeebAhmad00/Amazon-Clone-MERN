import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        products: [],
        paymentMethod: ''
    },
    reducers: {
        createOrder: (state, action) => {
            state.products = action.payload.products
            state.paymentMethod = action.payload.paymentMethod
        }
    }
})

export const { createOrder } = orderSlice.actions
export default orderSlice.reducer