import React from 'react';
class BasicPage{
  constructor(){
    this.component = null;
  }
  render(Component,actions){
    return(
      <Component
        ref={(_ref)=>{this.component = _ref}}
        {...actions}
      />
    )
  }
  onBack(){
    return true;
  }
  onForward(){
    return false;
  }
}

export default BasicPage;