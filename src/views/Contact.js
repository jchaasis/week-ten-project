import React, { Component } from 'react';


class Contact extends Component {

  render(){
    let listStyle = {
      listStyle: "none",
    }
    return(
      <section>
        <p> Contact Me: </p>
        <ul style={listStyle}>
          <li>Phone: 867-5309</li>
          <li>Email: me@coolplace.org</li>
          <li>Address: 123 Main Street, Charlotte NC, 12345</li>
          <a href="http://www.pictame.com/user/crazydaisyfinds/4110851520">
            <img src="https://www.seeklogo.net/wp-content/uploads/2016/06/Instagram-logo.png" width="50px" />
          </a>
          <a href="https://www.facebook.com/Crazy-Daisy-Finds-1688116521429451/" >
            <img src="http://logovector.net/wp-content/uploads/2011/11/facebook-f-logo.png" width="50px" /> 
          </a>
        </ul>
      </section>
    )
  }
}

export default Contact;
