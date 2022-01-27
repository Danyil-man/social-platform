import React from "react";

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
                    <input type="checkbox" />
                </div>
            </form>
        </div>
    )
}

export default LogIn;