import { useFormik } from "formik"
import "../products/Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from "../../config"
import { useDispatch } from "react-redux"

function Login(){
    
    const navigate=useNavigate()
    const formik = useFormik({
        initialValues:{
            username : '',
            password : ''
        },
        validate:(values)=>{
            let errors = {}
            if(!values.username){
                errors.username = "Enter Username"
            }
            if(!values.password){
                errors.password = "Enter password"
            }
            return errors
        },
        onSubmit :async(values)=>{
            let response = await axios.post(`${ENDPOINT}/auth/login`,{
                username : formik.values.username,
                password : formik.values.password
            })
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
    })
    return(
        <>
            <h3>Login....</h3>
            
            <form onSubmit={formik.handleSubmit}>
                <div>
                <input  type="text"
                        name="username"
                        placeholder="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        className={formik.errors.username && 'is-error'}
                />
                {formik.errors.username && <p className="error">{formik.errors.username}</p>}
                </div>
                <div>
                <input  type="password"
                        name="password"
                        placeholder="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className={formik.errors.password && 'is-error'}
                />
                {formik.errors.password && <p className="error">{formik.errors.password}</p>}
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
             
        </>
    )
}
export default Login