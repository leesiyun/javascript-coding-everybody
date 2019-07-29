const name = `k8805`;
// String literals
/* const letter =
  ' Dear ' +
  name +
  ' \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque repellendus quo assumenda praesentium laborum, incidunt ' +
  name +
  ' mollitia ratione nemo, debitis blanditiis voluptatibus ' +
  name +
  ' fugiat deserunt, voluptates facere ex in nulla maiores! ' +
  name 
  ;*/

// Template literals
const letter = ` Dear  ${name}
  
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque repellendus quo assumenda praesentium laborum, incidunt ${name} mollitia ratione nemo, debitis ${1 +
  1} blanditiis voluptatibus ${name} fugiat deserunt, voluptates facere ex in nulla maiores! ${name}
  `;

console.log(letter);
