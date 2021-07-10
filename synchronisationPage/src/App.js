import React,{Component} from 'react';


class App extends Component {
  state = {
    name:null,
  }

  handleChange = (e) =>{
    this.setState({
      name:e.target.value
    })
  }

  render(){
    return (
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        <div className="row container">
          <form autocomplete ="off" className="col s12">
            <div className="row">
              <h3>Your input will be: {this.state.name}</h3>
              <div className="input-field"> 
                <i className="material-icons prefix">chevron_right</i>
                <input autocomplete ="off" type ="text" id="name" onChange={this.handleChange}/>
                <label htmlFor="icon_prefix2">Input text</label>
                //dropdown
              </div>
            </div>
          </form>
      </div>
      </div>
    );
  }
  
}

export default App;
