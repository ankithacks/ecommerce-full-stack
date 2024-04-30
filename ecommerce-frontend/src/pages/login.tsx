import { useState } from "react"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const[gender, setGender]=useState("");
    const [date, setDate]=useState("");
    return (
    <div className="login">
        <main>
            <h1 className="heading">LOGIN</h1>
            <div>
                <label>Gender</label>
                <select value={gender} onChange={e=>setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            
            <div>
                <label>Date</label>
                <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
            </div>

            <div>
                <p>Already signed in?</p>
                <button>
                    <FcGoogle/>
                    <span>Sign in with Google</span>
                </button>
            </div>
        </main>
    </div>
  )
}

export default Login