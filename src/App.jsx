import Navbar from "./Navbar";
import Library from "./Library";
import { useState } from "react";
function App() {
  let [theme,setTheme]=useState('dark');
  let prep=true;
  let [openlibrary,setOpenlibrary]=useState(false);

  function toggleUIMode(){
    let UIelements=document.getElementsByClassName('ui-element');
    if(theme==='dark'){setTheme('light');
    for(let i=0;i<UIelements.length;i++){UIelements[i].classList.add('light');UIelements[i].classList.remove('dark');}
    }
    else{setTheme('dark');
    for(let i=0;i<UIelements.length;i++){UIelements[i].classList.add('dark');UIelements[i].classList.remove('light');}
    }
  }

  return (
    <>
    <div className="app ui-element dark">
      <Navbar theme={theme} toggleUIMode={toggleUIMode} />
      <div className="content">
        {prep?<div className="prep">
          <h1>Choose Meme Format</h1>
          <button style={{fontSize:"2.5vh"}} onClick={()=>{setOpenlibrary(!openlibrary);}}>{openlibrary?'Close':'Open'} Library</button>
          {openlibrary?<Library />:""}
          <br />
          <h1>OR</h1>
          <br />
          <h1>Upload Custom Image</h1>
          <button style={{fontSize:"2.5vh"}}>Upload Image</button>
        </div>
        :<div className="create">
          </div>}
      </div>
    </div>
    </>
  );
};
export default App;