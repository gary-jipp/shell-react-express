import React from 'react';
import DataListItem from './DataListItem';

function DataList(props) {
  const friends = props.friends || [];

  const removeItem = function(id) {
    props.deleteItem(id);
  };

  const list = friends.map((item) => {
    return <DataListItem
      key={item.id}
      item={item}
      onClick={() => removeItem(item.id)} />;
  });

  return (
    <ul>{list}</ul>
  );
}

export default DataList;