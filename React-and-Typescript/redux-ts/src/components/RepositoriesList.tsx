import { useState } from "react";
import useActions from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function RepositoriesList() {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  console.log(data);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    searchRepositories(term);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ol>
          {data.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

// dispatch(actionCreators.searchRepositories(term) as any);
