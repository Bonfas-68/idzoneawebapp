import { createContext, useContext } from "react";

export const AuthContext = createContext()

export const AuthContextPro = ({children})=>{
    const [user, setUser]= useState(localStorage.getItem("user", JSON.parse(user)) || null)
    const login = async()=>{
        const res = await axios.post('http://localhost:5000/auth/login',user)
        setUser(res.response.data)
    }

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}