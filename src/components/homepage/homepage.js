import React, { Component } from 'react';
import LoginForm from '../auth/LoginForm';


class Homepage extends Component {
    render() {
        return (
<div className="wrapper">
            <div className="thin"> Altoscholarship</div>
                <div >Specially designed for students in finance eager to test their algorithms, collaborate and challenge themselves.</div>
                <form action="/register">
                        <input className="blackbutton" type="submit" value="START HERE" />
                    </form>
                </div>           
        );
    }
}
export default Homepage;

