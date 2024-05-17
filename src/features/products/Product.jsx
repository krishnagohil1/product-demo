import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getAllProducts} from "./productSlice"
import loader from "../../assects/images/loader.gif"
import ProductList from "./ProductList"
import "../products/product.css"
import { useNavigate } from "react-router-dom"
const Product =()=>{
    const navigate= useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
    const handleLogOut = ()=>{
        localStorage.clear()
        navigate('/')
    }
    const loading = useSelector((state)=> state.product.loading)
    const data = useSelector((state)=> state.product.data)
    console.log({loading , data})
    return(
        <>
            <h1>Product...  </h1>
            <span><button onClick={handleLogOut}>LOG OUT</button></span>
            <div className="listing-section">
                {
                    loading ? <img  src={loader}/> : 
                    data?.products?.length > 0 ?
                     <ProductList 
                        data = {data?.products}
                     />
                    :
                    <div> NO PRODUCTS HERE...</div>
                } 
            </div>
        </>
    )
}

export default Product