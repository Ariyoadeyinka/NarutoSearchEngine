export default function CharacterCards({ bio }) {
  return (
    <div>
      <article>
      <img src={bio?.images[0]} alt={bio?.name} />
        <h1>{bio?.name}</h1>
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
      </article>
    </div>
  );
}
