import BasicPage from '../BasicPage';
import React from 'react';
import Test_2 from '../sampleComponent/Test_2';
class PageTwo extends BasicPage{
  constructor(){
    super();
  }
  render(actions){
    return super.render(Test_2,actions)
  }
}

export default new PageTwo();