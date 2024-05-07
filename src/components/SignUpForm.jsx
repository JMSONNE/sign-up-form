import { useState } from "react"

export default function SignUpForm({token}){

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    

    async function handleSubmit(event){
       
       event.preventDefault();

       setToken(result.token);

        try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup")
        const result = await response.json();
       } catch (error) {
        console.error(error);
       }
    } 


    return(
        <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>Username: 
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
                </label>
                <label>Password: 
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}