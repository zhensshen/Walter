import React from "react";

function Item(person: any) {
  console.log("Item ", person);
  return (
   <>
  
    <div> 

    </div>
      <h2>{person.Name}</h2>
      <p>{person.Surname}</p>
      <p>{person.Email}</p>
    </>
  );
}

export default Item;
