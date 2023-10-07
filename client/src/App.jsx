import useData from './hooks/useData';
import ItemList from './components/FriendList';
import './App.css';

export default function App() {
  const {status, data, addItem, deleteItem} = useData();

  return (
    <div className="App">
      <h1>Hello React World</h1>

      <section>
        {!status.error &&
          <>API Version: <code>{status.version}</code></>}
        {!!status.error &&
          <>API Error: <code>{status.error}</code></>}
      </section>

      <ItemList friends={data} deleteItem={deleteItem} />
    </div>
  );
}