function additionFactFamily(
  addendALower,
  addendAUpper,
  addendBLower,
  addendBUpper
) {
  const firstAddend = Math.floor(
    Math.random() * (1 + addendAUpper - addendALower) + addendALower
  );
  const secondAddend = Math.floor(
    Math.random() * (1 + addendBUpper - addendBLower) + addendBLower
  );
  const total = firstAddend + secondAddend;
  return [firstAddend, secondAddend, total];
}

function getRanges() {
  const addendALower = document.getElementById("addedALower");
  const addendAUpper = document.getElementById("addedAUpper");
  const addendBLower = document.getElementById("addedBLower");
  const addendBUpper = document.getElementById("addedBUpper");
  return [addendALower, addendAUpper, addendBLower, addendBUpper];
}

function generateAdditionProblem() {
  additionFactFamily(...getRanges());
  document.getElementById(
    "problems"
  ).innerText = `${firstAddend} + ${secondAddend} = ?`;
}
