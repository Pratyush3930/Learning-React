import React from 'react';
import ItemList from './itemList';

const Content = ({ items, handleCheck, handleDelete }) => {


    return (
        <main>
            {/* the items.length is false when it 
            is equal to zero  */}
            {items.length ? (
                // when it is true the following statement gets executed
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content