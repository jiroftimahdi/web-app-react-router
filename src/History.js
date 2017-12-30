class History{
  constructor(){
    this.history = [];
    this.index = -1;
  }
  goBack(){
    this.index--;
    return history[this.index];
  }
  goForward(){
    this.index++;
    return history[this.index];
  }
  removeAllAhead(){
    this.history = this.history.filter((item,index)=>{
      return index<=this.index;
    });
  }
  removeAllAback(){
    this.history = this.history.filter((item,index)=>{
      return index>=this.index;
    });
  }
  removePageAt(index){
    this.history = this.history.filter((item,_index)=>{
      return _index !== index
    })
  }
  pushPage(page){
    this.history.splice(this.index+1,0,page);
    this.index++;
    return this.history[this.index];
  }
  popPage(){
    this.history.splice(this.index,1);
    this.index--;
    return this.history[this.index];
  }
}

export default History;