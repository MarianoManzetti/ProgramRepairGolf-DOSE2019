import React from "react";

import FormProposition from "./FormProposition";

const Propositions = ({ propositions, description, currentUser }) => {
  const id = propositions.id;

  return (
    <div className="proposition card" key={id}>
      <div className="card-content">
        <span className="card-title"></span>
        <p> {description} </p>
      </div>

      <FormProposition
        code={propositions.source}
        idProp={propositions.id}
        currentUser={currentUser}
      />
    </div>
  );
};

export default Propositions;
