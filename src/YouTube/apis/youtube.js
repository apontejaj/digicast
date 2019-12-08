//npm install axios@0.18.1
// note this version is not the most current 
// but it is a stable release.
import axios from 'axios';



const KEY = 'AIzaSyBs6jBJENZ0-dTIWAVOyBLevYp_W3l3veE';


export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

