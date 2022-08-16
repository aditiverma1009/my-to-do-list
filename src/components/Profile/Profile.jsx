import "./Profile.css";
import avatar from "../../assets/avatar.png";
import moment from "moment";

const Profile = () => {
  function getCurrentDate() {
    const currentDate = moment();
    const timeDetails = moment(currentDate).format(`h:mm a`);
    const dateDetails = moment(currentDate).format(`DD MMMM, YYYY`);

    return (
      <div className="time-date-details-wrapper">
        <div>{timeDetails}&nbsp;</div>
        <div> {dateDetails}</div>
      </div>
    );
  }
  return (
    <div className="profile-container">
      <div className="sidebar-container-wapper">
        <div className="avatar-wrapper">
          <img className="avatar-image" alt="avatar" src={avatar} />
        </div>
        <div className="title-wrapper">
          <div>
            <strong>Hi, User!</strong>
          </div>
          <div className="date-time-wrapper">{getCurrentDate()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
