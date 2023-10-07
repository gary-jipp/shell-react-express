import React from 'react';

function DataListItem(props) {

  return (
    <li
      onClick={props.onClick} >
      {props.item.name}
    </li>
  );
}

export default DataListItem;