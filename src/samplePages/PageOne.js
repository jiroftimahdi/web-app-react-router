import Test_1 from '../sampleComponent/Test_1';
import BasicPage from '../BasicPage';
import React from 'react';
class PageOne extends BasicPage{
  constructor(){
    super();
  }
  render(actions){
    return super.render(Test_1,actions)
  }
  onBack(){
    if(this.component.state && this.component.state.s_one){
      this.component.setState({
        s_one : false
      });
      return false;
    }
    else{
      return true;
    }
  }
}
export default new PageOne();