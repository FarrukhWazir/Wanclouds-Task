import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { updateUser} from '../actions/useractions.js';

class view extends Component {


  
   
    
     

    
  render(){

    
console.log(this.props);
    return (
  
      <div className="Form-div">
    
        <center>
        <h3> User Data </h3>
        </center>
        <div className="data-div">
        <b>  First Name : </b> {this.props.user.fname}
        </div>
        
        <br/>
        <div className="data-div">
       <b> Last Name  :  </b>  {this.props.user.lname}
        </div>
        
        <br/>
        <div className="data-div">
        <b>  Address    : </b> {this.props.user.address}
        </div>
        <br/>
        <div className="data-div">
        <b>  Company    :</b>  {this.props.user.company}
        </div>
        <br/>
        <div className="data-div">
        <b>  Phone#    : </b> {this.props.user.phone}
        </div>
        <br/>
        <div className="data-div">
        <b> DOB    : </b>  {this.props.user.dob}
        </div>
      
        <br/> <br/>
      
          </div>
      
      
      );

  }



}

const mapStateToProps = state =>({
  user:state.user
  
}); 

const mapActionToProps = {
 
  
};


export default connect(mapStateToProps,mapActionToProps)(view);
