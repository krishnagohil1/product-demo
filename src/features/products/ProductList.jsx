import { Link } from "react-router-dom"

const ProductList = ({ data }) => {
    return (
        data?.map((product , index) =>
           
            (
            <Link to={`/product/${product.id}`}> 
            <div className="product" key={index}>
                <div className="image-box">
                    <img className="images" id="image-1" src = {product.thumbnail} />
                </div>
                <div className="text-box">
                    <h2 className="item" title={product.title}>{ product.title.length > 15 ?  `${product.title.slice(0,15)}...`  : product.title}</h2>
                    <h3 className="price">₹{product.price}</h3>
                    <p  style={{fontSize:'12px'}} className="description" title={product.description}> { product.description.length >50 ? `${product.description.slice(0,50)}...` : product.description}</p>
                    <label for="item-1-quantity">Quantity:</label>
                    <input type="number" name="item-1-quantity" id="item-1-quantity" value="1" />
                    <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
                </div>
            </div>
            </Link>
        )
    )
    )
}
export default ProductList