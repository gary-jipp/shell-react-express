import {useState} from 'react';
import useData from './hooks/useData';
import ItemList from './components/FriendList';
import './App.css';

export default function App() {
  const [text, setText] = useState("");
  const {status, data, addItem, deleteItem} = useData();

  const addFriend = function() {
    addItem(text);
  };

  return (
    <div className="App">
      <h1>Hello React World</h1>

      <section>
        {!status.error &&
          <>API Version: <code>{status.version}</code></>}
        {!!status.error &&
          <>API Error: <code>{status.error}</code></>}
      </section>

      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addFriend}>Add</button>

      <ItemList friends={data} deleteItem={deleteItem} />
    </div>
  );
}
