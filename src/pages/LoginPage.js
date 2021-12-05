import useAuth from "../auth/useAuth"

const userCredentials={};

export default function LoginPage() {
    const {login} = useAuth();
    return (
        <div>
            <h1>Login page</h1>
            <button onClick={()=>login(userCredentials)} >login</button>
        </div>
    )
}
