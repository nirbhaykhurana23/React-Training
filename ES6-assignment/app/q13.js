class NodeStack{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class StackUsingLinkedList{
    constructor(){
        this.top = null;
    }

    push(data){
        let nodeStack=new NodeStack(data);
        if(this.top){
            nodeStack.next=this.top;
            this.top=nodeStack;
        }
        else{
            this.top=nodeStack;
        }
    }
    
    pop(){
        if(this.top) {
          let dataToPop = this.top;
          this.top = this.top.next;
        } 
        else {
          console.log("stack is empty");
        }
    }
    
    peek() {
        if(this.top) {
            return this.top.data;
        }
        else {
            console.log("stack is empty");
        }
    }
    
    length() {
        let current = this.top;
        let counter = 0;
        while( current ) {
         counter++;
         current = current.next;
        }
        return counter;
    }
    
}

export {StackUsingLinkedList}