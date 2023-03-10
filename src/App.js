import Header from './header';
import Content from './content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem('shoppingList', JSON.stringify(newItem));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id, checked: false, item
    };
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
    // lenght starts from 1 but position in array from 0
    // lenght - 1 is done there
  }
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    // ...item le item ko properties copy grxa ani !item.checked tesma halera return grxa
    setAndSaveItems(listItems)

  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    //    this will filter out the items whose id is not equal to the passed id
    setAndSaveItems(listItems)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
