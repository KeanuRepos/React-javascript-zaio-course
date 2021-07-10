import React,{Component} from 'react';
import SearchText from './components/SearchText';
import LocationList from './components/LocationList';
import SearchSummary from './hoc/SearchSummary';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      filterText:''
    }
  }
  filterUpdate(val){//value from child component
    this.setState({
      filterText:val
    })
    
  }

  render(){
    console.log("Application",this.props.location);
    console.log("AppfilterText",this.state.filterText);
    return( 
      <div className = "App">
        <SearchText filterText = {this.state.filterText} filterUpdate={this.filterUpdate.bind(this)}/*(method is passed down as prop)*//>
        <LocationList data = {this.props.location} filterText = {this.state.filterText}/>
      </div>
    )
}
}

export default SearchSummary(App)
