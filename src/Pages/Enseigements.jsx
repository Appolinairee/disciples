import { Link } from "react-router-dom";
import { enseignementsData } from "../assets/data/enseignementsData";

const Enseignements = () => {
  return (
    <div className="section">
      {enseignementsData.length === 0 ? (
        <h2>Aucun enseignement en ligne pour l'instant.</h2>
      ) : (
        <>
          <h2>Nombre d'enseignements : {enseignementsData.length}</h2>

          <ul>
            {enseignementsData.map((enseignement) => (
              <li key={enseignement.id}>
                <Link to={`/enseignement/${enseignement.id}`}>
                  <strong>{enseignement.title}</strong>
                  <p>par {enseignement.author}</p>
                  <span> {enseignement.date} </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Enseignements;
