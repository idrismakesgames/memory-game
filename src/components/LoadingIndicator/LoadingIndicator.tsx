import "./LoadingIndicator.css";

function LoadingIndicator(props: { text: string }) {
  return (
    <div className="loading">
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>{props.text}</div>
    </div>
  );
}

export default LoadingIndicator;
