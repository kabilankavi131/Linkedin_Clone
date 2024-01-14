import Header from './Header/header'
import './App.css';
import Profile from './Profile/profile';
import Recent from './Recent/recent'
import StartPost from './StartPost/startpost';
import EachPost from './EachPost/eachpost';
function App() {
     return (<div className='main'>
          <Header />
          <br></br><br></br><br></br><br></br>
          <Profile />
          <br />
          <Recent />
          <br />
          <StartPost />
          <br ></br>
          <EachPost />
          
     </div>);
}

export default App;