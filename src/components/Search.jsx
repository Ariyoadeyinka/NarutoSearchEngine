import { useState } from "react";
import CharacterCards from "./CharacterCards";
import characters from "../images/Characters.png";
import styles from "../css/Search.module.css";
import searchIcon from "../images/10618925.png";
export default function Search({ query, setQuery }) {
  const [bio, setBio] = useState({});
  const [loading, setLoading] = useState(false);
  const searchChar = async () => {
    if (!query) return;
    setBio({});
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
      <img src={characters} className={styles.charImage} alt="" />
      <div className={styles.container}>
        <input
          type="search"
          name="search"
          placeholder="Search Naruto Characters..."
          aria-label="Search"
          className={styles.Search}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        onClick={searchChar}
        disabled={loading}
        aria-busy={loading ? "true" : "false"}
      >
        <img src={searchIcon} className={styles.searchIcon} alt="" />
      </button>
      {bio?.name?.length > 0 ? (
        <CharacterCards bio={bio} setBio={setBio} />
      ) : (
        ""
      )}
    </div>
  );
}
