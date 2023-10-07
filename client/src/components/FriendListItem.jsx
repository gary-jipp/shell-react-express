import React from 'react';

function FriendListItem(props) {

  return (
    <li
      onClick={props.deleteItem} >
      {props.item.name}
    </li>
  );
}

export default FriendListItem;