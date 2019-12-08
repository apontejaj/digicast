import React from 'react';

class SearchBar extends React.Component {
    // Search term = TUDublin
    state = { term: ''};
    // Callback method will be called with event
    onInputChange = (event) => {
      this.setState({ term: event.target.value});
    }

    // Callback method will be called with form submit
    onFormSubmit = event => {
        event.preventDefault();
        
        // TODO: Make sure we call callback prop
        // from parent component when form is submitted
        this.props.onFormSubmit(this.state.term);


    };

    render () {
        return (
            // Div for searchbar on the top
            <div className ="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className ="field">
                        <label>Video Search</label> 
                        <input type="text" 
                         value={this.state.term}
                         onChange={this.onInputChange}
                         />
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;