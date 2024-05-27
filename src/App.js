import './index.css';
import First from "./components/First";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App(){
	const [page, setPage] = useState('first');

	return (
		<div style={{width:'100%', height:'100%'}}>
		{
			page==='first'?
				<First
					changepage={(page)=>{ setPage(page); }}
				/>
			:	<Dashboard
					changepage={(page)=>{ setPage(page); }}
				/>
		}	
		</div> 
	)
}

export default App