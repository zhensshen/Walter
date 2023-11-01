import React from "react";
import Item from "../Item";

function List() {
  let contactList = [
    {
      Id: 1,
      Name: "Bob",
      Surname: "Smith",
      Email: "bs@email.com",
    },
    {
      Id: 2,
      Name: "Stive",
      Surname: "Robinson",
      Email: "sr@email.com",
    },
    {
      Id: 3,
      Name: "Emma",
      Surname: "Robinson",
      Email: "er@email.com",
    },
  ];

  const item = contactList.map((person: any) => {
    return <Item key={person.Id} {...person} />;
  });

  return (
    <>
       <div className="container">{item}</div> 


    </>
  );
}

export default List;
