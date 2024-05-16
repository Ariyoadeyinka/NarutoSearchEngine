import styles from "../css/CharacterCards.module.css";
export default function CharacterCards({ bio }) {
  return (
    <div>
      <article>
        <div>
          <article className={styles.personalInfo}>
            <img src={bio?.images[0]} alt={bio?.name} />
            <h1>{bio?.name}</h1>
            <p>Birthdate: {bio.personal.birthdate}</p>
            <p>Sex: {bio.personal.sex}</p>
            <p>Blood-Type: {bio.personal.bloodType}</p>
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
