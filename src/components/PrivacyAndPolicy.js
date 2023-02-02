import React from "react";
class PrivacyAndPolicy extends React.Component{
    constructor(props){
    super(props)
    // this.a=128;
    this.state={
        name:"nithish"
    }
    this.changer=this.changer.bind(this)
}
changer(){

    console.log("changer.hit")
    this.setState({
        name:"dinesh"
    })
}
render(){

    return(
        <>
        <h2>my name is:{this.state.name}</h2>
        <button onClick={this.changer}>change name</button>
        </>

    )
}
}



//     }
// render(){
//     return(
//         <div>
//             <h1>I Agree to all terms and conditions</h1>
//             <h2>{this.props.number}</h2>
//             <h2>{this.a}</h2>
//         </div>
//     )
// }

export default PrivacyAndPolicy;