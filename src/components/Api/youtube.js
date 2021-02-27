import Axios from 'axios'




const KEY = 'AIzaSyCl3XOEHPGAQ2r7iikyG4jFPRrAVsGo5AU'


export default Axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        maxResults: 5,
        type: 'video',
        key: KEY,
    }
})