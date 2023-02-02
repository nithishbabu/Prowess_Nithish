import React from "react";
class Formpractice extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
        <div className="main-ctn">
            <label>url</label>
            <input type="text"/>
            <label>username</label>
            <input type="text"/>
            <label>password</label>
            <input type="text"/>
            <input type="submit"/>
        </div>
        )

    }
}
export default Formpractice;