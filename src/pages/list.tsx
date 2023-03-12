import React from 'react';

type Person = {
  id: number;
  name: string;
  age: number;
  image: string;
};

type Props = {
  people: Person[];
};

const List = ({ people }: Props) => {
  return (
    <>
      {people.map((person: any) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
