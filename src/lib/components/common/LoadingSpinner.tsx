import "./style/loadingSpinner.scss"

export default function LoadingSpinner() {
    return (
        <div className="loading-spinner-component">
            <hr className="loading-spinner-component__dot loading-spinner-component__dot--main" />
            <hr className="loading-spinner-component__dot loading-spinner-component__dot--sub" />
        </div>
    )
}