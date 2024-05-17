import axios from "axios";
import { ENDPOINT } from "../../config";
import { useNavigate } from "react-router-dom";
export function getProductAPI(){
    return axios.get(`${ENDPOINT}/products`)
}


export function DetailsPageProduct(productId){
    return axios.get(`${ENDPOINT}/products/${productId}`)
}

