// Import React
// =========================================================
    import React, { Component } from 'react';
// Import Redux Components
// =========================================================
    import { connect } from "react-redux";
    import { viewAllShields } from "../../Store/Actions/shieldActions";
// Import Material UI Styles
// =========================================================
    import { withStyles } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
    import { FormControl, FormControlLabel, Checkbox, TextField, Table, TableBody, TableRow, TableCell, Grid, Button } from '@material-ui/core/';
    import Autocomplete from '@material-ui/lab/Autocomplete';
// Import Media
// =========================================================
    import "./style.css"

    import searchTestData from "./searchTestData";

    const InputOverRideOutline = withStyles({
        root: {
          '& label.Mui-focused': {
            color: '#13BAC7', // Teal
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#13BAC7', // Teal
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#A9A9A9', // Grey
            },
            '&:hover fieldset': {
              borderColor: '#F7C533', // Yellow
            },
            '&.Mui-focused fieldset': {
              borderColor: '#13BAC7', // Teal
            },
          },
        },
      })(TextField);


    export function SearchResultsGrid(props) {
        return (
            <TableRow> 

                <TableCell  align="center"> 
                    {props.appName}
                </TableCell>

                <TableCell  align="center"> 
                    {props.viewApp}
                </TableCell>

            </TableRow>
        )
    }

// Export About the Shields function
// =========================================================
    class AdvancedSearchModal extends Component {
        constructor(props) {
            super(props);
            this.state = {
              checkedIos: false,
              checkedAndriod: false,
            };
        }; 

        search42 = () => {
            console.log("Inside search42");
        }

        // handleChange = name => event => {
        //     if (!this.state.checkedIos && !this.state.checkedAndriod || this.state.checkedAndriod && !this.state.checkedIos ){
        //         return (
        //             this.setState({ 
        //                 checkedIos: true, 
        //                 checkedAndriod: false 
        //             })
        //         )
        //      } else if (!this.state.checkedAndriod && !this.state.checkedAndriod || !this.state.checkedAndriod && this.state.checkedIos ){
        //         return (
        //             this.setState({ 
        //                 checkedIos: false, 
        //                 checkedAndriod: true
        //             })
        //         )
        //      }
        // }

        render() {
            
            return (
                <>
                    <Grid 
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    > 
                        <Grid items>
                        <FormControl>
                        <FormControlLabel 
                            control={ <Checkbox
                                checked={this.state.checkedIos}
                                onChange={this.handleChange('Ios')}
                                value="Ios"
                                inputProps={{
                                'aria-label': 'Ios',
                                }}
                            />}
                            label="IOS"
                        />
                         <FormControlLabel 
                           control={<Checkbox
                                checked={this.state.checkedAndriod}
                                onChange={this.handleChange('Andriod')}
                                value="Andriod"
                                inputProps={{
                                'aria-label': 'Andriod',
                                }}
                            />}
                            label="Andriod"
                        />

                        </FormControl>
                        </Grid> 
                        <Grid item xs={12}> 
                            {/* <div className="searchBarBackground"> */}
                                <Autocomplete
                                    style={{ maxWidth: "1000px", width:"100%",  }}
                                    freeSolo
                                    id="search-categories"
                                    className="searchInput"
                                    disableClearable
                                    // options={this.props.categories.map(option => option.name)}
                                    // onChange={this.onTagsChange}
                                    renderInput={params => (
                                        <InputOverRideOutline
                                            {...params}
                                            label={<p style={{ padding: "20px"}}>Search By App Name...</p>}
                                            fullWidth
                                            InputProps={{ ...params.InputProps, type: 'search' }}
                                        />
                                    )}
                                />
                            {/* </div>  */}
                        </Grid>
                        <Button
                            onClick={this.search42}
                        >Search</Button>
                        <Grid  style={{width: "100%"}} item> 
                            <Table>
                                <TableBody>
                                    {/* <SearchResultsGrid> */}

                                        {searchTestData.map(item => (
                                            <TableRow> 

                                                <TableCell  align="center"> 
                                                    {item.trackCensoredName}
                                                </TableCell>

                                                <TableCell  align="center"> 
                                                    <Button> 
                                                        View App
                                                    </Button> 
                                                </TableCell>

                                            </TableRow>
                                        ))
                                        }



                                    {/* </SearchResultsGrid> */}
                                </TableBody>
                            </Table>
                        </Grid> 
                        

                    </Grid> 
                </>
            )
        }
    }

    export default AdvancedSearchModal; 

// const mapStateToProps = state => ({
//     // shields: state.shields.allShields
// })

// export default connect(mapStateToProps, 
//     { 
        
//     }
// )(AdvancedSearchModal); 
