import React from "react"
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "guest",
            buttonText: "log in",
            message: "hello",
            heading: "My Gallery",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('old state ', prevState)
            console.log('old props ', prevProps)
            return {
                message: prevState.message === "welcome back" ? "hello" : "welcome back",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
                name: prevState.name === "PJ" ? "guest" : "PJ",
            }
        })
    }


    render() {
        return (
            <div className={css.NavBar}>

                    <h1>{this.state.heading}</h1>
                    <span>
                        <h2>{this.state.message} {this.state.name}</h2>
                        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                    </span>

            </div>
        )
    }
}

export default NavBarSimple