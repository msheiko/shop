import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productsApi from '../api/products'

const initialState = {
    items: [],
    meta: {},
    loading: 'idle',
}

export const fetchAll = createAsyncThunk(
    'product/fetchAll',
    async () => {
        const response = await productsApi.getProducts()
        return response.data
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAll.fulfilled, (state, action) => {
            state.items.push(...action.payload.data)
            state.meta = action.payload.meta
        })
    },
})

// export const {fetchAll } = productSlice.actions
export const productSelect = (state) => state.product.items;
export default productSlice.reducer