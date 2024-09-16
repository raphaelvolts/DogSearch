import { Route, Routes, useParams, Navigate } from "react-router-dom";
import DogLIst from "./DogList";
import DogDetails from "./DogDetails";

export default function Routers({ dogs }) {
  function getDog() {
    let { name } = useParams();
    console.log(name);
    let dog = dogs.find((d) => {
      if (d.name.toLowerCase() === name.toLowerCase()) return d;
    });
    console.log(dog);
    if (dog) return <DogDetails dog={dog} />;
    else return <Navigate to="/dogs" replace={true} />;
  }
  return (
    <Routes>
      <Route path="/dogs" element={<DogLIst dogs={dogs} />} />
      <Route path="/dogs/:name" Component={getDog} />
      <Route path="/*" element={<Navigate to="/dogs" replace={true} />} />
    </Routes>
  );
}
