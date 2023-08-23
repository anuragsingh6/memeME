function Navbar(props){
    return(
        <div className="navbar">
            <div id="navbarName">memeME</div>
            <div id="navbarToggleUIMode" onClick={props.toggleUIMode}>{props.theme==='dark'?'☀️':'🌙'}</div>
        </div>
    );
};
export default Navbar;