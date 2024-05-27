import './../styles/Spinner.css';

/*type SpinnerProps = {
    loading: boolean,
    size: string,
    borderColor: string,
    borderTopColor: string,
}*/

export default function LoadingSpinner({loading, size, borderColor, borderTopColor}) {
    return (
        <div style={{display:loading?'flex':'none'}}>
            <div className='spindiv' style={{width:size, height:size, borderColor:borderColor, borderTopColor:borderTopColor}}>
            </div>
        </div>
    );
}