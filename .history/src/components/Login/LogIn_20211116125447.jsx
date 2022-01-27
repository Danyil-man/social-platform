import React from "react";

export const LogInForm = () => {
    return(
        <form>
                <div>
                    <input placeholder="username"/>
                </div>
                <div>
                    <input placeholder="password"/>
                </div>
                <div>
                    <input type="checkbox" /> remember me
                </div>
                <button>Log In</button>
            </form>
    )
}

const LogIn = (props) => {
    return(
        <div>
            <h1>Log In</h1>
            <form>
                <div>
                    <input placeholder="username"/>
                </div>
                <div>
                    <input placeholder="password"/>
                </div>
                <div>
                    <input type="checkbox" /> remember me
                </div>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LogIn;