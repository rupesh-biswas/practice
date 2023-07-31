import { FormEvent, useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  function handleClick(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setGuests([...guests, name]);
    setName("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <div>
      <h3>Guest List</h3>
      <ol>
        {guests.map((guest, index) => {
          return <li key={index}>{guest}</li>;
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleClick}>Add Guest</button>
      </form>
    </div>
  );
};

export default GuestList;
