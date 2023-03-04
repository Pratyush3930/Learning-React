import Header from './header';
import Content from './content';
import Footer from './Footer';
import AddItem from './AddItem';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound of Cocoa Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);

  
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    // ...item le item ko properties copy grxa ani !item.checked tesma halera return grxa
    setItems(listItems);
    localStorage.setItem('shoppingList' , JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
  //    this will filter out the items whose id is not equal to the passed id
    setItems(listItems);
    localStorage.setItem('shoppingList' , JSON.stringify(listItems));

  }

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem/>
      <Content
        items={items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />

      <Footer length = {items.length} />
    </div>
  );
}

export default App;
