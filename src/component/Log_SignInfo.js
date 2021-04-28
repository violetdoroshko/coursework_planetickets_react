import React from "react";
import './Sign.css';
import {Button, Container} from "react-bootstrap";

function Log_SignInfo() {
    return (
        <Container className="Log in">
            <body>
            <h2>Login Form</h2>
            <h3>Personal Info</h3>

            <form>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>
                    </input>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                    </input>

                    <label htmlFor="psw"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw" required>
                    </input>

                    <Button type="submit" >Register</Button>

                </div>
            </form>
            </body>
        </Container>);
}

export default Log_SignInfo;