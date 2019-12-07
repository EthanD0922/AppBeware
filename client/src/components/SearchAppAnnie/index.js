// Import React & Node packages
// =========================================================
    import React from 'react';
    import { connect } from "react-redux";
    import { push } from 'connected-react-router';
    import Downshift from "downshift";
    import { viewAppNames, viewSingleApp } from "../../Store/Actions/appActions";
// Import Material UI components
// =========================================================
//  import { NoSsr} from '@material-ui/core';
    import { Input, Grid, Button } from '@material-ui/core';

// Import Material UI Icons
// =========================================================
  import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
    // import MenuItem from '@material-ui/core/MenuItem';
    // import CancelIcon from '@material-ui/icons/Cancel';
// Custom Components
// =========================================================
  import Wrapper from "../Wrapper"
// Import CSS
// =========================================================
    import "./style.css"

// function NoOptionsMessage(props) {
//   return (
//     <>
//     <Typography
//       color="textSecondary"
//       className={props.selectProps.classes.noOptionsMessage}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//     <Button>button {props.alertTeam}</Button>
//     </>
//   );
// }

// NoOptionsMessage.propTypes = {
//   // The children to be rendered.
//   children: PropTypes.node,
//    // Props to be passed on to the wrapper.
//   innerProps: PropTypes.object.isRequired,
//   selectProps: PropTypes.object.isRequired,
// };

class SearchAppAnnie extends React.Component {
  state = {};

  onChange = (selectedApp) => {
    // alert(`View ${selectedApp.label}`)
    this.props.viewSingleApp(selectedApp.id)
    this.props.push('/appPage');
  }

<<<<<<< HEAD
=======
  stateReducer = (state, changes) => {
    // this prevents the menu from being closed when the user
    // selects an item with a keyboard or mouse
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          isOpen: state.isOpen,
          highlightedIndex: state.highlightedIndex,
        }
      default:
        return changes
    }
  }

>>>>>>> 373dc6ec77fd87900da13bbb1c83da1caa1a14ed
  render() {
    const item = {
      id: 123,
      value:  'Snapchat'
    }
  
    return (
      <div className="root" >
      <Wrapper style={{position: "relative", zIndex: 1000}}>
       <h2 align="center"> Search for an app or see what's trending! </h2>
       
      <Downshift 
<<<<<<< HEAD
=======
        stateReducer={this.stateReducer}
>>>>>>> 373dc6ec77fd87900da13bbb1c83da1caa1a14ed
        onChange={this.onChange} 
        itemToString={items => (items ? items.label : '')}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
          <div style={{position: "relative", zIndex: 1000}}>
            <Input className="searchInput" {...getInputProps({ placeholder: "Search for an App" })} />
            
            {isOpen ? (
              <div className="downshift-dropdown" >
                {
                   // filter the Apps and return items that match the inputValue
                  // items
                  this.props.appNames
                  .filter(item => !inputValue || item.label.toLowerCase().includes(inputValue.toLowerCase()))
                  // map the return value and return a div
                  .map((item, index) => (
                    <Grid container 
                      className="dropdown-item"
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    
                      {...getItemProps({
                    
                        key: item.label,
                        index,
                        item
                      })}
                        style = {{
                          backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal",
                          zIndex: 3
                        }}
                    >
                    <Grid item xs={4}>
                      {item.label}
                    </Grid>
                    <Grid item xs={4}>
                      <div style={{ color: "#F7F7F7", backgroundColor: "grey"}}> Temporary Placeholder for shield icons</div>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        // onClick={() => this.viewApp(item.id)}
                      >View {item.label}</Button>
                      </Grid>
                    </Grid>
                  ))}
              </div>
             ) : null} 
           </div>
        )}
      </Downshift>
      </Wrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleApp: state.apps.singleApp,
  appNames: state.apps.allAppNames
})

export default connect(mapStateToProps, 
  { 
    viewSingleApp,
    viewAppNames,
    push
  })(SearchAppAnnie); 
