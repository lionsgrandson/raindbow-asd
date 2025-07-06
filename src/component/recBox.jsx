import "../App.css";

function RecBox(props) {
  return (
    <div className="FirstBox divrecbox">
      <p className="StartRev">★★★★★</p>
      <p className="RevPCon">{props.RevText}</p>
      <p className="RevName">{props.RevName}</p>
    </div>
  );
}

export default RecBox;
