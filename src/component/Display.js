import "./display.css";

export default function Display (props) {
  return (
    <div className="component-display">
      <p className="display-text">{props.text}</p>
    </div>
  );
}
