import React, {Component} from 'react';
import History from './History';
class Router extends Component{
  constructor(){
    super();
    this.history = new History();
    this.id = "ASD34@456";
    this.actions = {
      pop : this.pop,
      push : this.push
    };
    this.state = {
      currentPage : null
    }
  }
  handleOnPopState = ()=>{
    if(window.history.state.id === this.id){
      if(window.history.state.state === 'back'){
        if(this.history.getCurrentPage().onBack()){
          let result = this.history.popPage();
          if(!result){
            window.history.go(-1);
          }
          else{
            window.history.go(1);
            this.setState({
              currentPage: result
            })
          }
        }
        else{
          window.history.go(1);
        }
      }
      else if(window.history.state.state === "forward"){
        window.history.go(-1);
      }
    }

  };
  componentDidMount(){
    window.history.replaceState({state : 'back',id : this.id},'','');
    window.history.pushState({state : 'current',id : this.id},'','');
    window.history.pushState({state : 'forward',id : this.id},'','');
    window.history.go(-1);
    window.addEventListener('popstate',this.handleOnPopState);
    let currentPage = this.history.pushPage(this.props.entryPage);
    this.setState({
      currentPage
    })
  }
  componentWillUnmount(){
    window.removeEventListener('popstate',this.handleOnPopState);
  }
  push =(page)=>{
    let currentPage = this.history.pushPage(page);
    this.setState({
      currentPage
    })
  };
  pop =()=>{
    let currentPage = this.history.popPage();
    this.setState({
      currentPage
    })
  };
  render(){
    if(this.state.currentPage){
      return (this.state.currentPage.render(this.actions))
    }
    else
      return null;
  }
}

export default Router;