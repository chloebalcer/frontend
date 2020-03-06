import React, {Component} from 'react';
import brace from 'brace';
import 'brace/mode/python';
import 'brace/theme/github';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';

//import AceEditor from 'react-ace';

export default class App extends React.Component {

  constructor(props, context) {
      super(props, context);
      
      this.state= {
        value:"print ('hello world')",
        value_output: "output"
      }
     this.onChange = this.onChange.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }

  onChange(newValue) {

    console.log('change', newValue);
  }

  run(e){
    console.log("Command send ", e)
    let command = e

    let self = this;
    fetch('http://localhost:8000/api/execute-code', {
      method:'POST',
      mode: 'cors',
      body: command
    })
    .then(function(response) {
      console.log("OEKOEKOEKOE", response);
      return response.json();
    }).then(function(data) {
      console.log('Data', data);

      var newline = String.fromCharCode(13, 10)
      self.setState({
        'value_output': data['data'].replace(/b'/g, '').replace(/'/g, '').replace(/\\n/g, newline).replace(/\\r/g, '')
      })
    });
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }


  render() {
    return (
      <div>
            <textarea rows="4" cols="50" value={this.state.value} onChange={this.handleChange}></textarea>
            <button bsStyle="primary" onClick={() => this.run(this.state.value)}>
            Run
            </button>
          <textarea type="textarea" class="form-control" style={{'white-space': 'pre-wrap'}} rows="4" cols="50" value={this.state.value_output} readOnly></textarea> 
      </div>
    );
  }
}
