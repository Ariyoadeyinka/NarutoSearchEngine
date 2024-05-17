import styles from "../css/CharacterCards.module.css";
export default function CharacterCards({ bio }) {
  return (
    <div>
      <article className={styles.CharInfo}>
        <div className={styles.cards}>
          <article className={styles.personalInfo}>
            <img src={bio?.images[0]} alt={bio?.name} />
            <h3>{bio?.name}</h3>
            <p>
              <strong>Birthdate:</strong> {bio.personal.birthdate}
            </p>
            <p>
              <strong>Sex:</strong> {bio.personal.sex}
            </p>
            <p>
              <strong>Clan:</strong> {bio.personal.clan}
            </p>
            <p>
              <strong>Blood-Type:</strong> {bio.personal.bloodType}
            </p>
            <strong>Affiliations:</strong>
            {bio?.personal.affiliation?.map((affiliation, idx) => (
              <li key={idx}>{affiliation}</li>
            ))}
          </article>

          <article className={styles.personalInfo}>
            <h3>🎙️VOICE ACTORS:</h3>
            <p>
              <strong>Japanese-VA:</strong> <br></br>
              {bio.voiceActors.japanese}
            </p>

            <p>
              <strong>English-VA:</strong>{" "}
              {bio.voiceActors.english}
            </p>
          </article>
        </div>
        <div className={styles.OtherInfoBox}>
          <article className={styles.OtherInfo}>
            <h2>Jutsus</h2>
            <ol>
              {bio?.jutsu?.map((jutsu, idx) => (
                <li key={idx}>{jutsu}</li>
              ))}
            </ol>
          </article>
          <div className={styles.OtherInfoOuter}>
            {" "}
            <article className={styles.OtherInfoInner}>
              <h2>Chakra Nature</h2>
              <ol>
                {bio?.natureType?.map((natureType, idx) => (
                  <li key={idx}>{natureType}</li>
                ))}
              </ol>
            </article>

            <article className={styles.OtherInfoInner}>
              <h2>Character Debut</h2>
              <p>
              <strong>Manga Debut:</strong>{" "}
              {bio.debut.manga}
            </p>
            <p>
              <strong>Anime Debut:</strong>{" "}
              {bio.debut.anime}
            </p>
            <p>
              <strong>Novel Debut:</strong>{" "}
              {bio.debut.novel}
            </p>
            <p>
              <strong>Movie Debut:</strong>{" "}
              {bio.debut.movie}
            </p>

            </article>
          </div>
        </div>
      </article>
    </div>
  );
}
