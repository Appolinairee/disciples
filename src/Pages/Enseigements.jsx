import { Link } from "react-router-dom";
import { enseignementsData } from "../assets/data/enseignementsData";
import "../assets/styles/enseignements.css";
import { BsArrowRight } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";

const Enseignements = () => {
  const lessonsLength = enseignementsData.length;

  return (
    <div className="section lessons">
      {lessonsLength === 0 ? (
        <h2>Aucun enseignement en ligne pour l'instant.</h2>
      ) : (
        <>
          <h2>
            {" "}
            <span className="text-primary">{lessonsLength} </span> enseignement
            {lessonsLength > 1 ? "s" : ""} disponible{" "}
          </h2>

          <ul className="lessons-list">
            {enseignementsData.map((enseignement) => (
              <Link
                className="flex box-shadow"
                to={`/enseignement/${enseignement.id}`}
              >
                <li className="" key={enseignement.id}>
                  <strong>
                    Enseignement {enseignement.id} :
                    <br /> {enseignement.title}
                  </strong>

                  <p>
                    par{" "}
                    <span className="font-semibold">{enseignement.author}</span>{" "}
                  </p>

                  <span className="flex">
                    {" "}
                    <CiClock1 /> {enseignement.date}{" "}
                  </span>

                  <button href="" className="btn-primary">
                    Lire
                  </button>
                </li>

                <p className="lesson-arrow">
                  <BsArrowRight />
                </p>
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Enseignements;
