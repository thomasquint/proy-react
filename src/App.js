import './App.css';
import itemsFooter from './itemsFooter'


function App() {  
  
  return (
    <>
      <div className="App-header"></div>
      <div className="App-navigation"></div>
      <div className="App-items-list">
        
            <div className="App-items-futbol">          
                <h1>FÚTBOL</h1>
                <img src="https://placeimg.com/360/280/any"/>        
                <img src="https://placeimg.com/360/280/any"/>
                <img src="https://placeimg.com/360/280/any"/>
            </div>  
            
            <div className="App-items-basquet">          
                <h1>BASQUET</h1>
                <img src="https://placeimg.com/360/280/nature"/>
                <img src="https://placeimg.com/360/280/tech"/>
                <img src="https://placeimg.com/360/280/tech"/>
            </div>         
      </div>

     <itemsFooter />
    
      


      

    </>
  );
}

export default App;