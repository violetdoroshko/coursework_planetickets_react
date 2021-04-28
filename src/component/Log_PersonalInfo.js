import React from "react";
import './Sign.css';
import {Button, Container} from "react-bootstrap";

function Log_PersonalInfo() {
    return (
        <Container className="Log in">
            <body>
            <h2>Login Form</h2>
            <h3>Personal Info</h3>

            <form>
                <div className="container">
                    <label htmlFor="first name"><b>First Name</b></label>
                    <input type="text" placeholder="Enter first name" name="first name" required>
                    </input>

                    <label htmlFor="second name"><b>Second Name</b></label>
                    <input type="text" placeholder="Enter second name" name="second name" required>
                    </input>

                    <label htmlFor="date of "><b>Birth Date</b></label>
                    <input type="date" placeholder="Enter birth date" name="birth date" required>
                    </input>

                    <label htmlFor="passport no"><b>Passport No</b></label>
                    <input type="text" placeholder="Enter passport no" name="passport no" required>
                    </input>

                    <label htmlFor="identification no"><b>Identification No</b></label>
                    <input type="text" placeholder="Enter identification no" name="identification no" required>
                    </input>

                    <Button type="submit">Next</Button>

                </div>
            </form>
            </body>
        </Container>);
}

export default Log_PersonalInfo;