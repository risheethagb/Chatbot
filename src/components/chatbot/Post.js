import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { firstname, lastname, email, zipcode, phone, submit, } = steps;

    this.state =  { firstname, lastname, email, zipcode, phone, submit }; 
  }


  componentDidMount() {
    const userObject = {
      first_name:this.state.firstname.value,
      last_name:this.state.lastname.value,
      email:this.state.email.value,
      zipcode:this.state.zipcode.value,
      phone:this.state.phone.value,
      submit:this.state.submit.value,
    };
    axios.post(`/api`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>Thank you! Your data was submitted successfully!</div>
      );
    }
  };


  export default Post;