import styles from "../css/CharacterCards.module.css";
export default function CharacterCards({ bio }) {
  return (
    <div>
      <article className={styles.CharInfo}>
        <div className={styles.cards}>
          <article className={styles.personalInfo}>
            <img src={bio?.images[0]} alt={bio?.name} />
            <h3>{bio?.name}</h3>
            <p><strong>Birthdate:</strong> {bio.personal.birthdate}</p>
            <p><strong>Sex:</strong> {bio.personal.sex}</p>
            <p><strong>Clan:</strong> {bio.personal.clan}</p>
            <p><strong>Blood-Type:</strong> {bio.personal.bloodType}</p>
            <strong>Affiliations:</strong>
            {bio?.personal.affiliation?.map((affiliation, idx) => (
              <li key={idx}>{affiliation}</li>
            ))}
          </article>

          <article className={styles.personalInfo}>
            <img src={bio?.images[0]} alt={bio?.name} />
            <h3>{bio?.name}</h3>
            <p><strong>Birthdate:</strong> {bio.personal.birthdate}</p>
            <p><strong>Sex:</strong> {bio.personal.sex}</p>
            <p><strong>Clan:</strong> {bio.personal.clan}</p>
            <p><strong>Blood-Type:</strong> {bio.personal.bloodType}</p>
            <strong>Affiliations:</strong>
            {bio?.personal.affiliation?.map((affiliation, idx) => (
              <li key={idx}>{affiliation}</li>
            ))}
          </article>
        </div>
        <div>
          <h2>Jutsus</h2>
          <ol>
            {bio?.jutsu?.map((jutsu, idx) => (
              <li key={idx}>{jutsu}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2>Chakra Nautre</h2>
          <ol>
            {bio?.natureType?.map((natureType, idx) => (
              <li key={idx}>{natureType}</li>
            ))}
          </ol>
        </div>
        <div>
          <h2>Family</h2>
          <ol>
            {bio?.father?.map((father, idx) => (
              <li key={idx}>{father}</li>
            ))}
          </ol>
        </div>
      </article>
    </div>
  );
}
