import React from "react";
import PropTypes from "prop-types";
import style from "./friendsListStyle.module.css";

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={style[isOnline]}>{isOnline}</span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};

export default FriendsItem;
