import React from 'react'

class Statepractise extends React.Component{
    render(){
        return(<React.Fragment>
            < h1>{this.props.inc.counter}</h1>
            <button></button>
            </React.Fragment>)
    }
}

export default Statepractise;
// changeLog(){
//     this.setState(prevState => ({ isLoggedIn : !prevState.isLoggedIn
//    }))
//<button onClick={this.changeLog}>{button_text}</button>
// const button_text= this.state.isLoggedIn ? "Log out" : "Log in"
//     const display_text = this.state.isLoggedIn ? "Log in" : "Log out"