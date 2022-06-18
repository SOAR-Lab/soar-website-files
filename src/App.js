import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import Publications from './Components/Publications';
import { PublicationItems } from './Components/PublicationItems';
import Team from './Components/Team';
import Research from './Components/Research'
import { ResearchDB } from './Components/ResearchCard/ResearchDB';
import News from './Components/News/News'
import { NewsDB } from './Components/News/NewsDB'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/Publications' element={<Publications />} />
            <Route path='/Research' element={<Research />} />
            <Route path='/Team' element={<Team />} />
          </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div className='HomeContainer'>
      <div className='HomeMainContainer'>
        <div className='bg-img'>
          <h1>Software Engineering and Analytics Research</h1>
        </div>
        <div className='HomeTextBox'>
          <h2>Welcome to the SOAR (Software Engineering and Analytics Research) Lab. SOAR Lab is a software engineering research group in the <a href='https://drexel.edu/cci/'>Department of Computer Science</a> at <a href='https://drexel.edu/'>Drexel University</a> led by <a href='https://preethac.github.io/'>Dr. Preetha Chatterjee</a>. At SOAR, our focus is on improving software engineers’ tools and environments through empirical data analysis, natural language processing and machine learning.</h2>
        </div>
        <div className='Widgets'>
          <div className='NewsComponent Feed'>
            <h2 id='newsfeed'>News Feed</h2>
            <div className='HomeNewsContainer'>
              {NewsDB.map((news, index) => {
                return(
                  <News
                    key={index}
                    {...news}
                    picture={'/bell.png'}
                  />
                )
              })}
            </div>
          </div>
          <div className='ResearchFeed Feed'>
            <h2 id='newsfeed'>Research</h2>
            <div className='HomeNewsContainer'>
              {ResearchDB.map((news, index) => {
                return(
                  <News
                    key={index}
                    {...news}
                    picture={'/research.png'}
                  />
                )
              })}
            </div>
          </div>
          <div className='PublicationsFeed Feed'>
            <h2 id='newsfeed'>Publications</h2>
            <div className='HomeNewsContainer'>
              {PublicationItems.map((news, index) => {
                return(
                  <News
                    key={index}
                    {...news}
                    picture={'/publication.png'}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='TwitterFeed'>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="soar_lab"
          theme='light'
        />
      </div>
    </div>
  )
}

export default App;
