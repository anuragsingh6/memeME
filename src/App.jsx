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

  function uploadImage(){
    let filedialog=document.createElement('input');filedialog.type='file';filedialog.accept='image/*';filedialog.click();
    filedialog.onchange=e=>{
      let file=e.target.files[0];let filereader= new FileReader();filereader.readAsBinaryString(file);
      filereader.onload=readerEvent=>{let baseimage=readerEvent.target.result;
        document.getElementById('baseimage').style.backgroundImage=baseimage;}
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
          <button style={{fontSize:"2.5vh"}} onClick={uploadImage}>Upload Image</button>
          <div id='baseimage'></div>
        </div>
        :<div className="create">
          </div>}
      </div>
      <div className="footer">
        <a href="https://www.github.com/anuragsingh6/memeME">Add images to library</a>
        <a href="https://www.github.com/anuragsingh6/">&copy; Anurag Singh</a>
        <a href="https://www.github.com/anuragsingh6/memeME">Report a bug</a>
      </div>
    </div>
    </>
  );
};
export default App;