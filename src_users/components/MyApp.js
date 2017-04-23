import React from "react";
import { connect } from "react-redux";
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// App component
class MyApp extends React.Component {

  // render
  render() {
    const {users, children} = this.props;
    return (
      <MuiThemeProvider>
        {children}
      </MuiThemeProvider>
    )
  }

}

// export the connected class
function mapStateToProps(state) {
  return {
    users: state.users || [],
  };
}
export default connect(mapStateToProps)(MyApp);
