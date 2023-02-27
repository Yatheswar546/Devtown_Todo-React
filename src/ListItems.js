import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash)
export default function ListItems(props) {
  const items = props.items;
  const listitems = items.map((item) => {
    return (
      <>
        <div className='list' key={item.key}>
          <p>
            <input type='text' id={item.key} value={item.text} onChange={e=>{
                props.setUpdate(e.target.value,item.key)
            }}/>
            <span>
              <FontAwesomeIcon
                className='favicons'
                icon='trash'
                onClick={() => props.deleteItem(item.key)}
              />
            </span>
          </p>
        </div>
      </>
    );
  });
  
  
  return (
    <>
      <div className='listitems'>{listitems}</div>
    
    </>
  );
}

