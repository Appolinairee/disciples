import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { BsFillPlayFill } from "react-icons/bs";


const Formation = ({ title, categorie, description }) => {
  return (
    <div className="formation">
        <div className="formation__content">
            <span> {categorie} </span>

            <h3> {title} </h3>
            <p> {description} </p>

            <Link to='formation'> <Button title="En savoir plus" Class="button2" Icon={<BsFillPlayFill />} /> </Link>
        </div>

        <div className="form__border"></div>
    </div>
  )
}

export default Formation;
