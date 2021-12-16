import logo from './profilephoto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="Profilephoto">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="overlay">
            <div className="menu">
              <ul>
                <li>
                  TOOLS
                </li>
                <li>
                  WORK
                </li>
                <li>
                  CONTACT
                </li>
              </ul>
              <div className="socials">
              </div>
            </div> 
            
            <div>
              
            </div>
            <div className="description left">
              <p>Software Developer <br></br> based in Nairobi</p>
            </div> 
            <div className="left">
              <p className="username ">BRENDA <br></br> GACERI</p>
              <p className="left bottom"> &copy; 2021</p>
            </div>
        </div>
      </main>
     
    </div>
  );
}

export default App;
