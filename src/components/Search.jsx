import { useState } from "react";
import CharacterCards from "./CharacterCards";
import characters from '../images/Characters.png'
import styles from '../css/Search.module.css'

export default function Search({ query, setQuery }) {
  const [bio, setBio] = useState({});
  const [loading, setLoading] = useState(false);
  const searchChar = async () => {
    if (!query) return;
    setBio({})
    setLoading(true);
    try {
      const res = await fetch(
        "https://narutodb.xyz/api/character/search?name=" + query
      );
      const data = await res?.json();
      console.log(data);
      setBio(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="container">
      <img src={characters} alt="" />
      <input
        type="search"
        name="search"
        placeholder="Search"
        aria-label="Search"
        className={styles.Search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchChar} disabled={loading} aria-busy={loading ? "true" :  "false"}>
        Search
      </button>
      </div>
      {bio?.name?.length > 0? <CharacterCards bio = {bio} setBio={setBio} /> : ""}
    </div>
  );
}
