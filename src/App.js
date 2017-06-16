import React, {Component} from 'react';
import './App.css';
import Swipeable from 'react-swipeable'
import {colors} from './constants'
/*if (React.initializeTouchEvents) {
    React.initializeTouchEvents(true);
}*/

class App extends Component {
    constructor(props) {
        super(props);
        this.Up = this.Up.bind(this);
        this.Down = this.Down.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {number: 25};
    }
    
    render() {
        let number =this.state.number;
        let color=colors[number-15];
        let arrowColor=(number===35 ?color : "white");
        return (
            <Swipeable trackMouse={true} 
                preventDefaultTouchmoveEvent={true}
                onSwipingUp={this.Up}
                onSwipingDown={this.Down}
                flickThreshold={5}
                delta ={100} >
                <div style={{background: color}} className="App">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="Arrow" hidden={number===35}>
                            <a onClick={this.increase} >
                                <span className="glyphicon glyphicon-menu-up"></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        {number}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="Arrow" hidden={number===15}>
                            <a href="#" onClick={this.decrease} >
                                <span className="glyphicon glyphicon-menu-down"></span>
                            </a>
                        </div>
                    </div>
                </div>   
            </Swipeable>
        );
    }
  
    Up(event){
        console.log("up")
        //console.log(event);
        let currentNumber=this.state.number;
        if(currentNumber!==35)
            this.setState({number:++currentNumber});
    }
    Down(event){
        console.log("Down")
        //console.log(event);
        let currentNumber=this.state.number;
        if(currentNumber!==15)
            this.setState({number:--currentNumber});
    }
    increase(){
        let currentNumber=this.state.number;
        this.setState({number:++currentNumber});
    }
    decrease(){
        let currentNumber=this.state.number;
        this.setState({number:--currentNumber});
    }
}
export default App;