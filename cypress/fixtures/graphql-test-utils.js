// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req;
  return (
    body.hasOwnProperty("operationName") && body.operationName === operationName
  );
};

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
  if (operationName === "AllUsers") {
    console.log("AllUsers");
    req.reply({
      fixture: "../fixtures/Test_UsersPlural.fixture.json",
      delay: 500,
    });
  }
  if (operationName === "AllSqueaks") {
    console.log("AllSqueaks");
    req.reply({
      fixture: "../fixtures/Test_Squeaks.fixture.json",
      delay: 500,
    });
  }
};

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `GQL${operationName}Mutation`;
  }
};
