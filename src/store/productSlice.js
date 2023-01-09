import { createSlice } from '@reduxjs/toolkit'
import productsApi from '../api/products'

const initialState = {
    value: 0,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
})

// export const {  } = productSlice.actions

export default productSlice.reducer