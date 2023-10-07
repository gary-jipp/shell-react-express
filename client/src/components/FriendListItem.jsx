import React from 'react';

function FriendListItem(props) {

  console.log(props.item.id);

  return (
    <li
      onClick={props.deleteItem} >
      {props.item.name}
    </li>
  );
}

export default FriendListItem;