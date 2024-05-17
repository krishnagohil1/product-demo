import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { getDetailProduct } from "./productSlice";
import Rating from "react-rating";
import "../products/product.css"
function ProductDetails(){
    const navigate = useNavigate()
    const [productImage,setProductImage] = useState("")
    const {productId} = useParams()
    const dispatch=useDispatch()
    console.log("productId",productId);
    const Back=()=>{
        navigate("/product")
    }
    const productDetails = useSelector((state)=> state.product.productDetails)
    const loading = useSelector((state)=> state.product.loading)
    console.log({productDetails , loading});

    useEffect(()=>{
        dispatch(getDetailProduct(productId))
    },[])
    useEffect(()=>{
        if(productDetails && productDetails.images && productDetails.images.length){
            setProductImage(productDetails.images[0]) 
        }
    },[productDetails])
    return(
        <>
        <div className="product_Details">
        <h1>ProductDetails {productId}</h1>
        
        <h1> Id:-{productDetails.id}</h1>
        <p> <b>Title:- </b>{productDetails.title}</p>
        <p> <b>Brand:- </b>{productDetails.brand}</p>
        <p> <b>Category:- </b>{productDetails.category}</p>
        <p> <b>Description:- </b>{productDetails.description}</p>
        <p> <b>discountPercentage:- </b>{productDetails.discountPercentage}</p>
        <p> <b>price:- </b>{productDetails.price}</p>
        <p> <b>Rating:- </b>{productDetails.rating}</p>
        <Rating  placeholderRating={productDetails.rating}/>
        <p> <b>Stock:- </b>{productDetails.stock}</p>
        <img src={productImage}/>

        <div style={{display:"flex"}}>

            {
                productDetails.images?.map((image,index)=>(
                    <img  onClick={()=>{setProductImage(image)}} src={image} style={{width:"50px"}} className={productImage == image ? 'active' : ''} />
                ))
            }
        </div>
        <button style={{margin:'10px',padding:"5px 5px"}} onClick={Back}>BACK</button>
        </div>
        </>   
    )
}
export default ProductDetails