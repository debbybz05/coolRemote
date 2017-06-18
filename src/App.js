import React, {Component} from 'react';
import './App.css';
import Swipeable from 'react-swipeable'
import {colors} from './constants'

class App extends Component {

    constructor(props) {
        super(props);
        this.Up = this.Up.bind(this);
        this.Down = this.Down.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {number: 25, jump:1};
    }
    
    render() {
        let number =this.state.number;
        let color=colors[number-15];
        return (
            <Swipeable trackMouse={true} 
                onSwipingUp={this.Up}
                onSwipingDown={this.Down}
                flickThreshold={0.6}
                delta ={50} >
                <div style={{background: color}} className="App">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="Arrow">
                            {number===35
                                ?<a style={{color: color}}>
                                    <span className="glyphicon glyphicon-menu-up"></span>
                                </a>
                                :<a onClick={this.increase} >
                                    <span className="glyphicon glyphicon-menu-up"></span>
                                </a>
                            }
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12" style={{fontSize: 300}}>
                        {number}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="Arrow" hidden={number===15}>
                            <a onClick={this.decrease} >
                                <span className="glyphicon glyphicon-menu-down"></span>
                            </a>
                        </div>
                    </div>
                </div>   
            </Swipeable>
        );
    }
  
    Up(event){
        let jump=this.state.jump;
        if(jump%5===0){
            this.increase();
        }
        this.setState({jump:++jump});
    }
    Down(event){
        let jump=this.state.jump;
        if(jump%5===0){
            this.decrease();
        }
        this.setState({jump:++jump});
    }
    increase(){
        let currentNumber=this.state.number;
        if(currentNumber!==35)
            this.setState({number:++currentNumber});
    }
    decrease(){
        let currentNumber=this.state.number;
        if(currentNumber!==15)
            this.setState({number:--currentNumber});
    }
}
export default App;