import React from 'react';


export class Register extends React.Component {

    render() {
        return (
            <div className="background">


                <div className="shapes">
                    <div className="circle"></div>
                    <div className="Rectangle"></div></div>
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="socialButtons">
                                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-twitter"></a>
                                <a href="#" class="fa fa-google"></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="socialButtons">
                                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-twitter"></a>
                                <a href="#" class="fa fa-google"></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button >Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn" onClick={() => {
                                    document.getElementById('container').classList.remove("right-panel-active");
                                }}>Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp" onClick={() => {
                                    document.getElementById('container').classList.add("right-panel-active");
                                }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}