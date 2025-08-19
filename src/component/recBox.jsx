import "../App.css";
import "./recBox.css";
import logo from "../img/Logo_icon_noshadow.png";
function RecBox(props) {
  return (
    <div className="FirstBox divrecbox">
      <p className="StartRev">
        <img
          src={logo}
          className="startLogo"
          alt="puzzle peice with  rainbow colors"
        />
        <img
          src={logo}
          className="startLogo"
          alt="puzzle peice with  rainbow colors"
        />
        <img
          src={logo}
          className="startLogo"
          alt="puzzle peice with  rainbow colors"
        />
        <img
          src={logo}
          className="startLogo"
          alt="puzzle peice with  rainbow colors"
        />
        <img
          src={logo}
          className="startLogo"
          alt="puzzle peice with  rainbow colors"
        />
      </p>
      <p className="RevPCon">{props.RevText}</p>
      <p className="RevName">{props.RevName}</p>
    </div>
  );
}

export default RecBox;
