import React, {Component} from 'react';
import { Form, FormGroup, Col, Button, Alert } from 'react-bootstrap';
//import CodeEditor from './AceEditor'
import AceEditor from 'react-ace';
import 'brace/mode/python';
import 'brace/theme/github';
import 'brace/ext/language_tools';


const editorStyle = {
  border: '1px solid lightgray',
};

export default class App extends React.Component {

  constructor(props, context) {
      super(props, context);
      
      this.state= {
        value:"print ('hello world')",
        value_output: ""
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
      return response.json();
    }).then(function(data) {
      console.log('Data', data);

      var newline = String.fromCharCode(13, 10)
      self.setState({
        'value_output': data['data'].replace(/b'/g, '').replace(/'/g, '').replace(/\\n/g, newline).replace(/\\r/g, '')
      })
    });
  }

  handleChange(newvalue){
    this.setState({ value:newvalue });
  }

  render() {
    return (
      <div>
            <AceEditor
              style={editorStyle}
              readOnly={false}
              value={this.state.value}
              onChange={this.handleChange}
              width="100%"
              height="200px"
              mode="python"
              theme="github"
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
              }}/>
            <button bsStyle="primary" onClick={() => this.run(this.state.value)}>
            Run
            </button>
            <textarea 
              type="textarea" 
              class="form-control" 
              style={{'white-space': 'pre-wrap'}} 
              rows="15" 
              cols="50" 
              value={this.state.value_output} 
              readOnly>
            </textarea>
      </div>
    );
  }
}
