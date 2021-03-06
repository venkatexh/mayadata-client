import moment from "moment";
import deleteIcon from "../../assets/images/deleteIcon.svg";
import "./meetingItem.scss";

const MeetingItem = (props) => {
  const { sl, name, count, date, startTime, endTime } = props;
  return (
    <div className={`meeting-item ${props.header ? "text-blue" : ""}`}>
      <div className={"item"}>{sl}</div>
      <div className={"item"}>{name}</div>
      <div className={"item"}>{count}</div>
      <div className={"item"}>
        {props.header ? date : moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")}
      </div>
      <div className={"item"}>
        {props.header ? startTime : moment(startTime, "HH:mm").format("LT")}
      </div>
      <div className={"item"}>
        {props.header ? endTime : moment(endTime, "HH:mm").format("LT")}
      </div>
      <div className={"item"}>
        {props.header ? (
          "Action"
        ) : (
          <img
            style={{ cursor: "pointer" }}
            src={deleteIcon}
            alt={"delete"}
            onClick={() => props.deleteMeeting(props.id)}
          />
        )}
      </div>
    </div>
  );
};

export default MeetingItem;
