import "./DogList.css";

export default function DogLIst({ dogs }) {
  return (
    <div className="DogList">
      <h1 className="display-1 text-center">Dog List!</h1>
      <div className="row">
        {dogs.map((d) => {
          return (
            <div
              className="DogList-dog col-md-6 col-lg-4 text-center"
              key={d.name}
            >
              <img src={d.src} alt={d.name} />
              <h3>{d.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
