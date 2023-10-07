import React from 'react';
import FriendListItem from './FriendListItem';

function ItemList(props) {
  const friends = props.friends || [];

  const remove = function(id) {
    props.deleteItem(id);
  };

  const list = friends.map((item) => {
    return <FriendListItem
      key={item.id}
      item={item}
      deleteItem={() => remove(item.id)} />;
  });

  return (
    <ul>{list}</ul>
  );
}

export default ItemList;