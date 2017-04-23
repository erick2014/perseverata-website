import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import myHome from '../stylesheets/myHome.styl';


// Home page component
export default class MyHome extends React.Component {
  // render
  render() {
    return (
      <div className="my-home-box">
        this is my home app
        <RaisedButton label="Default" />
      </div>
    );
  }
}
