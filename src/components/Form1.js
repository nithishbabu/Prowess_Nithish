import React from "react";
class Form1 extends React.Component{
    constructor(){
        super()
        this.state={
            fname:" ",
            lname:" "
        }
    }
    handleInputChange1 =(event)=>{
        this.setState({ 
            fname:event.target.value
            
           })
           console.log(this.state.fname)

           }
           handleInputChange2 =(event)=>{
            this.setState({ 
                lname:event.target.value
               })
               console.log(this.state.lname)
               }


    
    handleSubmit=(event)=>{
        event.preventDefault();
        // console.log('Name is '+this.state.fname);
        const json={
            "first name":this.state.fname,
            "last name":this.state.lname


        }
        console.log(json)
        }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>FirstName</label>
                    <input type="text" value={this.state.fname} placeholder="enter firstname" onChange={this.handleInputChange1}/>
                    <label>lastname</label>
                    <input type="text" value={this.state.lname} placeholder="enter lastname" onChange={this.handleInputChange2}/>
                    <input type="submit" />
                </form>
              </div>  
        )
    }
}
export default Form1;