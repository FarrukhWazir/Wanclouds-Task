import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { updateUser} from '../actions/useractions.js';

class form extends Component {

constructor(props){
  super(props);
this.onUpdateUser =this.onUpdateUser.bind(this);


}
  
   /* 
    
  add_user(event) {
   // event.preventDefault();
 //alert('Name'+this.refs.fname.value+' '+this.refs.lname.value);
 //console.log(this.refs.fname.value);
 this.add_user(this.refs.fname.value,this.refs.phone.value);
 
  } */

     onUpdateUser(){

this.props.onUpdateUser({
  fname:this.refs.fname.value,
  lname:this.refs.lname.value ,
  address:this.refs.address.value,
  company:this.refs.company.value,
  phone:this.refs.phone.value,
  dob:this.refs.dob.value
  });

  alert('User Added');
     }
     

    
  render(){

    
console.log(this.props);
    return (
  
      <div className="Form-div">
      <center>
        
        <h3> React Form </h3>

      

      <input type="text" ref="fname" className="Form-input" placeholder="Enter First Name Please" />

      <input type="text" ref="lname" className="Form-input" placeholder="Enter Last Name Please" />

      <input type="text" ref="address" className="Form-input" placeholder="Enter Address Please" />

      <input type="text" ref="company" className="Form-input" placeholder="Enter Company Please" />

      <input type="number" ref="phone" className="Form-input" placeholder="Enter Ph# Please" />

      <input type="date" ref="dob" className="Form-input" placeholder="Enter Dob Please" /> 
      <br/>

      <input type="submit" onClick={this.onUpdateUser} className="Form-subbutton" value="submit" name="submit"/>

      
       
      </center>
      
          </div>
      
      
      );

  }



}

const mapStateToProps = state =>({
  user:state.user
  
}); 

const mapActionToProps = {
  onUpdateUser: updateUser
  
};


export default connect(mapStateToProps,mapActionToProps)(form);
