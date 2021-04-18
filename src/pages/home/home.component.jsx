import Navbar from "../../components/navbar/navbar.component";
import "./home.styles.scss";
import MeetingItem from "../../components/MeetingItem/meetingItem.component";
import { useEffect, useState } from "react";
import { fetchMeetings } from "../../redux/actions/fetchMeetings";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { hostHeader } from "../../config/hostHeader";
import { addMeeting } from "../../redux/actions/addMeeting";
import searchIcon from "../../assets/images/searchIcon.svg";

const Home = () => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(0);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [searchString, setSearchString] = useState("");
  const [searchStartDate, setSearchStartDate] = useState("");
  const [searchEndDate, setSearchEndDate] = useState("");
  const [noName, setNoName] = useState(false);
  const [noAttendance, setNoAttendance] = useState(false);
  const [noDate, setNoDate] = useState(false);
  const [noStartTime, setNoStartTime] = useState(false);
  const [noEndTime, setNoEndTime] = useState(false);

  useEffect(() => {
    dispatch(fetchMeetings());
  }, [refresh, dispatch]);

  const state = useSelector(({ meetingList, navbarStatus }) => ({
    meetingList,
    navbarStatus,
  }));

  const filteredList = state.meetingList
    ? state.meetingList.filter((meeting) =>
        meeting.name.toLowerCase().includes(searchString)
      )
    : [];

  const dateFiltered = filteredList.filter(
    (meeting) =>
      meeting.date >= searchStartDate && meeting.date <= searchEndDate
  );

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNoName(false);
  };

  const handleAttendanceChange = (e) => {
    setAttendance(e.target.value);
    setNoAttendance(false);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setNoDate(false);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
    setNoStartTime(false);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
    setNoEndTime(false);
  };

  const handleStringSearch = (e) => {
    setSearchString(e.target.value);
  };

  const handleSearchStartDate = (e) => {
    setSearchStartDate(e.target.value);
  };

  const handleSearchEndDate = (e) => {
    setSearchEndDate(e.target.value);
  };

  const handleMeetingDelete = (meetingId) => {
    Axios.delete(`${hostHeader.url}/api/meeting/${meetingId}`)
      .then((res) => {
        setRefresh(refresh + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddMeeting = () => {
    if (!name) {
      setNoName(true);
    } else if (!attendance) {
      setNoAttendance(true);
    } else if (!date) {
      setNoDate(true);
    } else if (!startTime) {
      setNoStartTime(true);
    } else if (!endTime) {
      setNoEndTime(true);
    } else {
      let meeting = {
        name,
        attendance,
        date,
        startTime,
        endTime,
      };
      dispatch(addMeeting(meeting, state.meetingList));
      setName("");
      setAttendance("");
      setDate(new Date());
      setStartTime("");
      setEndTime("");
    }
  };

  return (
    <div className={"homepage"}>
      <Navbar />
      <div
        style={{ width: `${state.navbarStatus ? "96%" : "82%"}` }}
        className={"home-container"}
      >
        <div className={"banner"}>My Meetings</div>
        <div className={"search-container"}>
          <input
            style={{
              backgroundImage: `url(${searchIcon})`,
            }}
            className={"search-input"}
            type={"text"}
            placeholder={"Search"}
            onChange={handleStringSearch}
          />
          <div className={"date-search"}>
            <div className={"from-to"}>From</div>
            <input
              className={"date-input"}
              type={"date"}
              onChange={handleSearchStartDate}
            />
          </div>
          <div className={"date-search"}>
            <div className={"from-to"}>To</div>
            <input
              className={"date-input"}
              type={"date"}
              onChange={handleSearchEndDate}
            />
          </div>
        </div>
        <div className={"meetings-container"}>
          <MeetingItem
            header
            sl={"Sl. No."}
            name={"Meeting Name"}
            count={"Attendance"}
            date={"Date"}
            startTime={"Start Time"}
            endTime={"End Time"}
          />
          <div className={"meeting-list"}>
            {searchStartDate !== "" && searchEndDate !== ""
              ? dateFiltered.map((meeting, idx) => {
                  return (
                    <MeetingItem
                      key={meeting._id}
                      sl={idx + 1}
                      name={meeting.name}
                      count={meeting.attendance}
                      date={meeting.date}
                      startTime={meeting.startTime}
                      endTime={meeting.endTime}
                      deleteMeeting={handleMeetingDelete}
                      id={meeting._id}
                    />
                  );
                })
              : filteredList.map((meeting, idx) => {
                  return (
                    <MeetingItem
                      key={meeting._id}
                      sl={idx + 1}
                      name={meeting.name}
                      count={meeting.attendance}
                      date={meeting.date}
                      startTime={meeting.startTime}
                      endTime={meeting.endTime}
                      deleteMeeting={handleMeetingDelete}
                      id={meeting._id}
                    />
                  );
                })}
          </div>
          <div className={"input-container"}>
            <div className={"input-item"}>{""}</div>
            <div className={"input-item"}>
              <input
                className={`name-input ${noName ? "no-input" : ""}`}
                type={"text"}
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className={"input-item"}>
              <input
                className={`count-input ${noAttendance ? "no-input" : ""}`}
                type={"number"}
                value={attendance}
                onChange={handleAttendanceChange}
              />
            </div>
            <div className={"input-item"}>
              <input
                className={`date-input ${noDate ? "no-input" : ""}`}
                type={"date"}
                onChange={handleDateChange}
              />
            </div>
            <div className={"input-item"}>
              <input
                className={`time-input ${noStartTime ? "no-input" : ""}`}
                type={"time"}
                onChange={handleStartTimeChange}
              />
            </div>
            <div className={"input-item"}>
              <input
                className={`time-input ${noEndTime ? "no-input" : ""}`}
                type={"time"}
                onChange={handleEndTimeChange}
              />
            </div>
            <div className={"input-item"}>
              <button className={"add-meeting-btn"} onClick={handleAddMeeting}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
