import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
        <img width={150} height={75} alt="Flag of UAE" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4215855.jpg&f=1&nofb=1&ipt=694b75ef56cfedbbaf9aa0c2359b24e834e7b65d0740692955a31e471d8ef736&ipo=images"></img>
            <h1 className="welcome-message">Vote for your favorite emirate in UAE</h1>
            <button className="login-button" onClick = {props.connectWallet}><b>Connect Metamask</b></button>
        </div>
    )
}

export default Login;