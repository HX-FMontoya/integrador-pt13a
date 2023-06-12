import styles from "./Form.module.css"
import {useEffect, useState} from "react"
import validation from "./validation"
export default function Form ({login}){
    const [userData, setUserData] = useState({email:"", password:""}) 
    const [errors , setErrors] = useState({email: "", password: ""})
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        // const {value, name} = event.target
        setErrors(validation({...userData,[name]: value}))
        setUserData({...userData,[name]: value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(Object.values(errors).length === 0)login(userData)
    }
    useEffect(()=>{console.log(userData)},[userData])
    return (
        <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
            <form className={styles.container}>
            <div className={styles.input}>
                <label>Email</label>
                <input name="email" onChange={handleChange} type="text" placeholder="example@mail.com"/>
                <p style={{color: "red"}}>{errors.email}</p>
            </div>
            <div className={styles.input}>
                <label>Password</label>
                <input name="password" onChange={handleChange} type="password"  />
                <p style={{color: "red"}}>{errors.password}</p>
            </div>
            <button onClick={handleSubmit} className={styles.button}>Log in</button>
            </form>
            
        </div>
    )
}