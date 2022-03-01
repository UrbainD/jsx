import logo from './logo.svg';
import img_Video from './img_Video/2.jpg';
import './style.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <div style={{"border":"solid 1px black","max-width":"100vw"}}>
      <h1 className="title">Your name here</h1>
      <br />
      <img src={"/1.jpg"} />
      <br />
      <img src={img_Video} />
      </div>
      <video width={320} height={240} controls>
      <source src="./video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
