import React from "react";
import PropTypes from "prop-types";
import style from "./profileStyle.module.css";

const Profile = ({ name, tag, url, location, stats }) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img src={url} alt="Аватар пользователя" className={style.avatar} />
      <p className={style.name}>{name}</p>
      <p className={style.tag}>@{tag}</p>
      <p className={style.location}>{location}</p>
    </div>
    <ul className={style.stats}>
      <li>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  url: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;
