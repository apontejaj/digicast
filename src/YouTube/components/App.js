// import react
// import searchboar
// import youtube 

import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


//Asynchronous API request example
// Calling the youtube API..


class App extends React.Component {
    // we default our state to be a empty array
    // the selected video default will be null
    state = { videos: [],selectedVideo:null};

    
    // Define the default search term
    componentDidMount() {
        this.onTermSubmit('tudublin');
    }

    // callback method inside class app for SearchTerm
    onTermSubmit = async term => {
       const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // Console logs testing
        console.log(term);
        console.log(response);
        // call this set state to update application
        this.setState({ videos: response.data.items,
        
        // take our first video as default
        selectedVideo: response.data.items[0] 
        });
    };

        // callback function onVideoSelect
        // console log from the app - which video
    onVideoSelect = (video) => {
        console.log('From the App!',video);
        this.setState({ selectedVideo: video});
    };
    
    render () {
        return (
            // Div for margin left and right
         <div className = "ui container"> 
            <SearchBar onFormSubmit={this.onTermSubmit} />
            {/* <div className="ui grid">
                <div className="ui row">
             <div className="eleven wide column">       */}
            <VideoDetail video={this.state.selectedVideo} />
            {/* </div>  */}
            {/* <div className="five wide column"> */}
            <VideoList 
                onVideoSelect={this.onVideoSelect}
                videos ={this.state.videos} 
             />
             </div>
        //  </div>
            //  </div>
            // I have {this.state.videos.length} videos.
            // </div>

        );
    }
}

export default App;