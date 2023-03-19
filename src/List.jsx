import Person from './Person';
import React from 'react';
const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </section>
  );
};
export default List;
