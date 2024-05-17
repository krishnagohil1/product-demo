import axios from "axios";
import { ENDPOINT } from "../../config";
import { useNavigate } from "react-router-dom";
export function getProductAPI(){
    return axios.get(`${ENDPOINT}/products`)
}


export function DetailsPageProduct(productId){
    return axios.get(`${ENDPOINT}/products/${productId}`)
}

export function LoginAPI(){
const navigate = useNavigate()
    let response =axios.post(`${ENDPOINT}/auth/login`)
            console.log(response);
            console.log(response.data);
            console.log(response.data.token)
            if(response.data.token){
                localStorage.setItem("token",response.data.token) 
                navigate("/product")
            }
            else{
                navigate("/")
            }
}