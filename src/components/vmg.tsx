import { useState } from "react";
import "./vmg.css";
import { vmg } from "../data/database";

const Vmg = () => {
  const [show, setshow] = useState(vmg[0].description);

  return (
    <>
      <div className="App">
        <div className="container">
          {vmg.map((v, i) => {
            return (
              <button
                className={`btn btn-outline ${
                  show == v.description ? "btn btn-outline btn-primary" : ""
                }`}
                onClick={() => setshow(v.description)}
                key={i}
              >
                {v.title}
              </button>
            );
          })}
        </div>
        <p>{show}</p>
      </div>
    </>
  );
};

export default Vmg;
