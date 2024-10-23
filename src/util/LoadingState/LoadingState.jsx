import { loadingStyle } from "../styles/LoadingStyle"


function LoadingState() {
    return (
        <div style={loadingStyle}>
            <h1>Loading...</h1>
        </div>
    )
}

export default LoadingState;