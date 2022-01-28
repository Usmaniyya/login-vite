import React from 'react';
import App from '../App';



export default function Login() {
  return <div>
      <div class="container">
        <form action="" id="login" class="form">
            <h3 class="form-title">Login</h3>
            <div class="form-input-group">
                <input type="text" class="form-input" placeholder="Matric Number" autofocus />
            </div>
            <div class="form-input-group">
                <input type="password" class="form-input" placeholder="Password" autofocus />
            </div>
            <button class="form-button" type="submit">Login</button>
            <p class="form-text">
                <a href="./signup.html" class="form-link">Don't have an account? Create account</a>
            </p>
            
        </form>
    </div>
  </div>;
}
