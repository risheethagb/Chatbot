
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './Post';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

  const config = {
    width: "600px",
    height: "650px",
    floating: true, 
};

class SimpleForm extends Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <ChatBot 
       steps={[
        {
            id:'q-firstname', 
            message:'Hello. What is your first name?', 
            trigger:'firstname',
        },
        {
            id:'firstname', 
            user:true, 
            validator: (value) => 
            {
                if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Please input alphabet characters only.';
                  }
            },
            trigger: 'q-lastname'
        },
        {
            id:'q-lastname', 
            message:'What is your last name?', 
            trigger:'lastname',
        },
        {
            id:'lastname', 
            user:true, 
            validator: (value) => 
            {
                if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Please input alphabet characters only.';
                  }
            },
            trigger: 'q-email',
        },
        {
          id:'q-email', 
          message:'Please enter your email.', 
          trigger:'email',
        },
        {
          id:'email', 
          user:true, 
          validator: (value) => 
          {
             if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
               {
                 return true;
               }
             else
               {
                 return'Please enter a valid email.';
               }
          },
          trigger:'q-zipcode',
        },
        {
            id:'q-zipcode', 
            message:' What is your zipcode?', 
            trigger:'zipcode',
        },
        {
            id:'zipcode', 
            user:true, 
            validator: (value) => 
            {
               if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(value))
                 {
                   return true;
                 }
               else
                 {
                   return'Please enter a valid zip code.';
                 }
            },
            trigger:'q-phone',
        },
        {
            id:'q-phone', 
            message:'Finally, please enter your phone number', 
            trigger:'phone',
        },
        {
            id:'phone', 
            user:true, 
            validator: (value) => 
            {
               if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
                 {
                   return true;
                 }
               else
                 {
                   return'Please enter a valid phone number.';
                 }
            },
            trigger:"q-submit",
        },
        {
            id:'q-submit', 
            message:'Do you agree to the Terms and Conditions and wish to submit?', 
            trigger:'submit',
        },
        {
            id:'submit', 
            options:
            [
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-response'},
            ] 
        },
        {
            id:'maybe-response', 
            message:'You indecisive buffoon.', 
            end:true,
        },
        {
            id:'no-response', 
            message:'Sorry to hear that. Your information was not submitted', 
            end:true,
        },
        {
            id:'yes-response', 
            component: <Post />,
            asMessage: true,
            end:true,
        },
        ]}
        {...config}
      />
      </ThemeProvider>
    );
  }
       
}

export default SimpleForm;


