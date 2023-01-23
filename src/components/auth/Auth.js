import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";

export default function Auth({setToken}){
    return (
        <div>
            <h3>SignIn</h3>
            <h3>SignUp</h3>
            <SignUpForm setToken={setToken}/>
            <SignInForm setToken={setToken}/>
        </div>
    )
}