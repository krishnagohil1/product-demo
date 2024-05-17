import { useFormik } from "formik"
import "../products/Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from "../../config"
import { useDispatch } from "react-redux"
import { getLogin } from "./productSlice"
function Login(){
    const dispatch = useDispatch()
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
            dispatch(getLogin())
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