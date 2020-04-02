import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import '../styles/icons.css';


class TopNavBar extends React.Component {

    navItemStyling = () => {
        return {
            paddingLeft:'2em', 
            fontSize:'20px', 
            color:'blue', 
            fontWeight:'bold'
            
            
            
            
        }
    }
    navBarStyling = () => {
        return {
        backgroundColor: 'transparent',
        position: 'auto', 
        width:'100%',
        top: '0',
        overflow:'auto',
        zIndex:'5',
        float: 'center'
    
        
    }
    }

    getUserUrl = (username) =>{
        return "/users/"+username;
      }
render(){
    if (this.props.is_logged_in && !this.props.username){
    this.props.refresh_user()
}
    return( 

    <div >
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,700&family=Yanone+Kaffeesatz:wght@700&display=swap" rel="stylesheet"></link>
    <Navbar color="light" light expand="md" style={this.navBarStyling()}>
      <NavbarBrand href="/" style={{flexGrow:'5'}}>
      <i className="fa fa-camera" style={{fontSize:'45px', color:'blue'}}>Beer ME</i></NavbarBrand>
        <Nav className="ml-auto" navbar style={{flexGrow: '1'}}>
            <NavItem >
                {this.props.is_logged_in? 
              <div>
            <a href={this.getUserUrl(this.props.username)} className= "Profile" style={this.navItemStyling()}>{'  '}</a> 

            <a href="/notifications/" className= "Like" style={this.navItemStyling()}>{'  '}</a>  

            <a href="/upload/" className= "Upload" style={this.navItemStyling()}>{'  '}</a>
            <button onClick={() => this.props.handle_logout()}>Logout</button> 

            </div>:
    
            
    <a href="/"></a>}
    </NavItem>
    </Nav>
    </Navbar>
    </div>
)
}

}


export default TopNavBar