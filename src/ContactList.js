import React, { Component } from 'react';
import Contact from './Contact';

class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }; //set the default value
  }
  //Controlls the inputs
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }
   
  render() {
    //Filters
    let filteredContacts = this.props.contacts.filter(
      (contact)=> {
        return contact.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
    <div>
      <input type="text" 
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
      />
      <ul>
        {filteredContacts.map((contact)=> {
          return <Contact contact={contact} key={contact.id} />
        })}  
      </ul>
      
    </div>
    ); 
  }
}

export default ContactsList;