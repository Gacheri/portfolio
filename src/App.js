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
          <div className='topOverlay'>
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
            <div className="description left">
              <p>Software Developer based in Nairobi</p>
              <button className='resume'>Download resume</button>
            </div>
          </div>
          <div className='bottomRight'> 
              <div>
                <p className="username">BRENDA <br></br> GACERI</p>
                <p className='copyright'> &copy;2021</p>
              </div>
          </div>       
        </div>
      </main>  
    </div>
  );
}

export default App;
