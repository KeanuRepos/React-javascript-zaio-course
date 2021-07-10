import React,{Component} from 'react'


class SearchText extends Component{
    filterUpdate(event){
        const val = event.target.value//problem area
        console.log("searchText",val)
        this.props.filterUpdate(val)//calls a parent function and passes down value
       
    }
    render(){
        console.log('filterTextValue' , this.props.filterText);
        return(
            <div className="inputBox">
                <input 
                    className = "form-control my-0 py-1" 
                    type = "text" 
                    placeholder = "Search" 
                    aria-label = "Search"  
                    onChange={this.filterUpdate.bind(this)}
                />
            </div>
        )
    }
}

export default SearchText