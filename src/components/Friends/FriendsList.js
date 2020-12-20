import React from "react";
import PropTypes from "prop-types";
import FriendsItem from "./FriendsItem";
import style from "./friendsListStyle.module.css";

const FriendsList = ({ friends }) => (
  <ul className={style.friendlist}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendsList;
