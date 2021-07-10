import React from 'react'

const SearchSummary = (WrappedComponent) => {
    return (props) =>{
        console.log('searchsum',props);
        return(
            <div className = "container">
        
                <div className = "form-row">
        
                    <div className = "col mt-2">
                        <h3>Logo</h3> 
                    </div>
        
                    <div className = "col-4">
                        <div className = "input-group md-form form-sm form-1 pl-0 mt-2">   
                        </div>
                        <WrappedComponent {...props}/>
                    </div>
                </div>
            </div>
            )
    }

}
export default SearchSummary