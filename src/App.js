import React from 'react'
import SearchBar from './components/SearchBar'
import youtube from './components/Api/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

class App extends React.Component {
    state = {
        videos: [], 
        selectedVideo: null
    }

    componentDidMount() {
        this.onTermSubmit('MERN stack')
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }})  

            this.setState({
                videos: response.data.items, 
                selectedVideo: response.data.items[0]
            })
        
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container">

                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">  
                        <VideoList 
                            onVideoSelect = {this.onVideoSelect} 
                            videos={this.state.videos}
                        />
                        </div>
                    </div> 
                </div> 
            </div>
        )
    }
}

export default App;


