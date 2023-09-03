import Navbar from "./Navbar";
import Library from "./Library";
import { useState } from "react";
function App() {
	let [theme,setTheme]=useState('dark');
	let [prep,setPrep]=useState(true);
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
		if(openlibrary){setOpenlibrary(false);};
		let filedialog=document.createElement('input');filedialog.type='file';filedialog.accept='image/*';filedialog.click();
		filedialog.onchange=e=>{document.getElementById('baseimage').src=URL.createObjectURL(e.target.files[0]);};
		let baseimageContainer=document.getElementById('baseimageContainer');
		baseimageContainer.showModal();
		baseimageContainer.addEventListener('click',(e)=>{
			if(e.clientX<baseimageContainer.getBoundingClientRect().left||e.clientX>baseimageContainer.getBoundingClientRect().right||
			e.clientY<baseimageContainer.getBoundingClientRect().top||e.clientY>baseimageContainer.getBoundingClientRect().bottom){
				baseimageContainer.close();}
		})
	}

	return (
		<>
		<div className="app ui-element dark">
		<Navbar theme={theme} toggleUIMode={toggleUIMode} />
		<div className="content">
			{prep?<div className="prep">
			<h1>Choose Meme Format</h1>
			<button onClick={()=>{setOpenlibrary(!openlibrary);}}>{openlibrary?'Close':'Open'} Library</button>
			{openlibrary?<Library />:""}
			<br />
			<h1>OR</h1>
			<br />
			<h1>Upload Custom Image</h1>
			<button onClick={uploadImage}>Upload Image</button>
			<dialog id="baseimageContainer" className="ui-element dark">
				<img id='baseimage' style={{height:"75%",width:"50%"}}></img>
				<div className="baseimageButtonContainer">
					<button onClick={()=>document.getElementById('baseimageContainer').close()}>Cancel</button>
					<button onClick={()=>{document.getElementById('baseimageContainer').close();setPrep(false);}}>Continue</button>
				</div>
			</dialog>
			
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