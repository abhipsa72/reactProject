import React, { Component } from 'react';

class People extends Component {
constructor(){
    super()
    this.state={
        loading: false,
        character:{}}
}
componentDidMount(){
    this.setState({loading: true})
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data =>{
        this.setState({
            loading: false,
            character: data
        })
    })
    console.log(this.state.character)
        
    
}

    render() {
        const x= this.state.loading ? 'loading..': this.state.character.results
        return (
            this.state.loading ? 'loading'
            :
            <div>
                { this.state.character.results.map(result => <div>{result.name} </div>)}
                
            </div>
        );
    }
}

export default People ;