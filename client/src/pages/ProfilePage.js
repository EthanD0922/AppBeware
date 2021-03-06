// Import React
// =========================================================
    import React, { Component } from "react"; 
    import {Redirect} from 'react-router-dom';
    import { connect } from "react-redux"; 
// Import Material Ui Components
// =========================================================
    import { Grid } from '@material-ui/core';
// Import Components
// =========================================================
    import Nav from "../components/Nav"
    import Wrapper from "../components/Wrapper"
    import Footer from "../components/Footer"
    import HeaderContainer from "../components/HeaderContainer"
    import UserDetailsPanel from "../components/UserDetailsPanels"
// Import Styles
// =========================================================
    import "../assets/styling/appStyle.css"
// Import Redux Components
// =========================================================
    import { userInfo, updateEmail, updateName, updatePassword, updatePhone } from '../Store/Actions/authentication';
    import API from "../utils/API";
    import store from '../Store'
// Export Default Profile Page Function
// =========================================================
    class Profile extends Component {

        state = {
            name: '',
            password: '',
            email: '', 
            phone: ''
        }
        
        componentDidMount() {
            this.props.userInfo();
        }
        
  handleInputchange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
      console.log("Inside Handle Form Submit");
      event.preventDefault();
      if(this.state.name){
          API.updateName({
              name: this.state.name
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
      if(this.state.phone){
          API.updatePhone({
              phoneNumber: this.state.phone
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
      if(this.state.email){
          API.updateEmail({
              email: this.state.email
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
      if(this.state.password){
          API.updatePassword({
              password: this.state.password
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
      
  }
        
    render() {
        console.log(this.props.isloggedIn)
        if (this.props.isloggedIn) {
        return (
            <>
                <Nav/>
                <main>
                    <HeaderContainer style={{backgroundColor: "#EAEAEA", borderBottom: "4px solid #F7C533"}}> 
                        <Wrapper align="center" style={{padding: 40}}> 
                            <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center" 
                            >
                                <Grid item xs={12}> 
                                    <img alt={`${this.props.user.name}'s Profile`} 
                                    src={this.props.user.profilePicture}
                                    style={{ height: 200, width: 200, borderRadius: "50%"}}/>
                                </Grid>
                                
                                <Grid item xs={12} > 
                                    <h3>Name: {this.props.user.name}</h3>
                                </Grid>

                            </Grid> 
                        </Wrapper>
                    </HeaderContainer>
                    <Wrapper align="left" style={{padding: 40, maxWidth: "800px"}}> 
                        
                        <UserDetailsPanel
                            ariaControls="UserName"
                            title="Username"
                            currentDetails={this.props.user.name}
                            edit={"hi"}
                            inputSubmit = {this.handleFormSubmit}
                            name={'name'}
                            description="Enter a new username."
                            onChange={this.handleInputchange}
                        />

                        <UserDetailsPanel 
                            ariaControls="password"
                            title="Password"
                            currentDetails={'******'}
                            edit={"hi"}
                            inputSubmit = {this.handleFormSubmit}
                            name={'password'}
                            description="Enter a new password."
                            onChange={this.handleInputchange}
                        />
                        <UserDetailsPanel
                            ariaControls="email"
                            title="Email"
                            currentDetails={this.props.user.email}
                            edit={" "}
                            inputSubmit = {this.handleFormSubmit}
                            name={'email'}
                            description="Enter a new email."
                            onChange={this.handleInputchange}
                        />
                        <UserDetailsPanel
                            ariaControls="phone"
                            title="Phone Number"
                            currentDetails={this.props.user.phoneNumber}
                            edit={"hi"}
                            inputSubmit = {this.handleFormSubmit}
                            name={'phone'}
                            description="Enter a new phone number."
                            onChange={this.handleInputchange}
                        />
                    </Wrapper>

                </main>
                <Footer/>
            </>
            )}
            else {
                return <Redirect to="/" />
            }
        }
    }

    const mapStateToProps = state => ({
        user: state.user.userInfo,
        isloggedIn: state.user.isloggedIn
    })

    export default connect(mapStateToProps, 
        {
            userInfo
        }
    )(Profile); 