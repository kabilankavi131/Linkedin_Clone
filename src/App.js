import "./App.css";

import Header from "./Components/Header/header";
import Profile from "./Components/Profile/profile";
import Recent from "./Components/Recent/recent";
import StartPost from "./Components/StartPost/startpost";
import EachPost from "./Components/EachPost/eachpost";
import News from "./Components/LinkedinNews/news";
import Adds from "./Components/Advertisements/Add";

function App() {
  return (
    <div className="main">
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Profile />
      <br />
      <Recent />
      <br />
      <StartPost />
      <br></br>
      <EachPost />
      <br></br>
      <EachPost />
      <br></br>
      <EachPost />
      <br></br>
      <News />
      <br></br>
      <Adds />
    </div>
  );
}

export default App;
