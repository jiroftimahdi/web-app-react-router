import React,{Component} from 'react';
import PageTwo from '../samplePages/PageTwo';
export default class Test_1 extends Component{
  constructor(){
    super();
    this.state = {
      s_one : true
    }
  }
  handleClick = ()=>{
    this.props.push(PageTwo);
  };
  render(){
    if(this.state.s_one)
      return (<div>STATE IS TRUE <div onClick={this.handleClick}>click</div></div>);
    else
      return (<div>STATE IS FALSE</div>)
  }
}