import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DetailsPageProduct, LoginAPI, getProductAPI } from "./productAPI";
const initialState = {
    loading : false,
    data : {},
    productDetails : {}
}
export const getAllProducts = createAsyncThunk("product/getAllProduct",async()=>{
        try{
            const response = await  getProductAPI()
            if(response?.status == 200){
                return response.data
            }
        }
        catch(error){
            console.error(error.message)
        }
})
export const getDetailProduct = createAsyncThunk("product/getDetailProduct",async(productId)=>{
        try{
            const response = await DetailsPageProduct(productId)
            if(response?.status==200){
                return response.data
            }
        }
        catch(error){
            console.error(error.message)
        }
})
export const getLogin = createAsyncThunk("",async ()=>{
        let response = await LoginAPI()
})
const productSlice = createSlice({
    name : "product" ,
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
        }).addCase(getAllProducts.fulfilled,(state , action )=>{
            state.loading = false
            state.data = action.payload     
        })
        builder.addCase(getDetailProduct.pending,(state)=>{
            state.loading = true
        }).addCase(getDetailProduct.fulfilled,(state,action)=>{
            state.loading = false
            state.productDetails = action.payload 
        })
    }
})


export default productSlice.reducer