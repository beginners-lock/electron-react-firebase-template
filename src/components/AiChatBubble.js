//import './../styles/AiChatBubble.css';

/*type AiChatBubbleProps = {
    text: string,
    loading: boolean
}*/

export default function AiChatBubble({ text, loading }){
    return(
        <div className="aichatbubblediv" style={{...stylesheet.bubblediv, boxSizing:'border-box'}}>
            {text}
        </div>
    );
}

const stylesheet = {
    bubblediv: {
        backgroundColor:'rgba(150, 150, 150, 0.2)', color:'white', fontSize:'small', 
        maxWidth:'60%', padding:'10px', borderRadius:'8px' 
    }
}