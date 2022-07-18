import logo from "../../logo.svg";
import { Container,Row,Col } from "react-bootstrap";
import { Component } from "react";

class Home extends Component{

    state = {
            mouseX: 0,
            mouseY: 0,
            dX: 0,
            dY:0,
            rotation: 0,
            faceLeft: 0,
            faceTop: 0,
    };
    handleMouseMove = event => {
        this.setState({
          mouseX: event.clientX,
          mouseY: event.clientY
         });
          var face = document.getElementById("bigJ");
          var roll = document.getElementById("rollJ");
          this.state.faceLeft = roll.offsetLeft + roll.offsetWidth/2;
          this.state.faceTop = roll.offsetTop + roll.offsetHeight/2;
          var dX = event.clientX - this.state.faceLeft;
          var dY = event.clientY - this.state.faceTop;
          this.state.dX = dX;
          this.state.dY = dY;
          var degree = (Math.atan(- dX / dY) * 180 / Math.PI);
          if (dY > 0){degree += 180}
          this.state.rotation = degree;
          face.style.transform = "rotate("+degree+"deg)"       
    };


    render(){
        return (
            <div id="rollJ" onMouseMove={(ev)=> this.handleMouseMove(ev)}
            onLoadStart={(ev)=>this.width(ev)}
            className="roller-back">
                <div id="bigJ">
                    <img   src={logo} width="100%" className="roller"/>
                    jnqa's app
                </div>
            </div>
        )
    }
    }
    export default Home;