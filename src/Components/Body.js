import React, {Component} from 'react'
import data from '../data'
import People from './People'

class Body extends Component {
    constructor() {
        super()

        this.state = {
            people: data,
            index: 0
        }

        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
    } 

    handleNext() {
        if (this.state.index === this.state.people.length - 1){
            this.setState({
                index: 0
            }) 

        }else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    handlePrev() {
        if (this.state.index === 0){
            this.setState({
                index: this.state.people.length - 1
            })
        }else {          
            this.setState({
                index: this.state.index - 1
            }) 
        }
    }
        

    render() {
      
        return(
            <div className='body'>

                <div className='people'>
                    <People info={this.state.people[this.state.index]} />
                </div>

                <div className='buttons'>
                    <button onClick={this.handlePrev}> {'< Previous'} </button>
                    <div className='midbutton'>
                        <button className='bluebutton'>Edit</button>
                        <button className='bluebutton'>Delete</button>
                        <button className='bluebutton'>New</button>
                    </div>
                    <button onClick={this.handleNext}> {'Next >'} </button>
                </div>

            </div>
        )
    }
}
export default Body