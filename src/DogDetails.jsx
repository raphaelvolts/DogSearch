import { Link } from "react-router-dom";
import "./DogDetails.css";
export default function DogDetails({ dog }) {
  return (
    <div className="DogDetails row justify-content-center mt-4 mb-3">
      <div className="col-11 col-lg-5">
        <div className="DogDetails-card card">
          <img src={dog.src} alt={dog.name} className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">{dog.name}</h2>
            <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
          </div>
          <ul className="list-group list-group-flush">
            {dog.facts.map((fact, i) => (
              <li className="list-group-item" key={`f-${i}`}>
                {fact}
              </li>
            ))}
          </ul>
          <div className="card-body">
            <Link to="/dogs" className="btn btn-info">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
