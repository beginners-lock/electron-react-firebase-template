import './../styles/First.css';
import { ipcRenderer } from 'electron';

/*type FirstProps = {
    changepage: (page: string)=>void
}*/

export default function First({ changepage }){
    const closeapp = async () => {
		//await window.renderer.closeapp();
        ipcRenderer.send('ping');
	}

    return(
        <div id="firstparent">
            <div id="vaheader" className="vctext">Voice Assistant</div>
            <div style={{marginTop:'30px'}}>
                <div className="firstbtns" onClick={()=>{ changepage('dashaboard') }}>
                    Start
                </div>
                <div className="firstbtns" style={{marginTop:'15px'}}>
                    Help
                </div>
                <div className="firstbtns" style={{marginTop:'15px'}} onClick={()=>{ closeapp(); }}>
                    Exit
                </div>
            </div>
        </div>
    )
}