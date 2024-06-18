const planets = [];
type situacao = "habitado" | "habitável" | "inabitável" | "inexplorado";
type tupla = [number, number, number, number];

function runApp() {
  const res = prompt(`
      Bem vindo à aplicação!
      faça sua escolha:
      1- Salvar planeta
      2- Editar planeta
      3- Adicionar satélite
      4- Remover Satélite
      5- Listar planetas
      0- Sair
    `);

  switch (res) {
    case "1":
      savePlanetHUD();
      runApp();
    case "2":
      updatePlanetHUD();
      runApp();
    case "3":
      addSateliteHUD();
      runApp();
    case "4":
      removeSateliteHUD();
      runApp();
    case "5":
      getPlanets();
      runApp();
    case "0":
      alert("Até mais!");
      break;
    default:
      break;
  }
}

function savePlanet(planet: {
  nome: string;
  coordenadas: tupla;
  situacao: situacao;
  satelites: string[];
}) {
  planets.push(planet);
}

function savePlanetHUD() {
  const nome = prompt("Nome do planeta?");
  const coordenadasStr = prompt(
    "Coordenadas do mesmo? Escreva separado por vírgulas, ex: '10,20,30,40'"
  ).split(",");
  let coordenadasNumb: tupla = coordenadasStr.map((str, index) => {
    let num = +str;
    if (isNaN(num)) {
      switch (index) {
        case 0:
          return 0; // Valor padrão para o primeiro elemento
        case 1:
          return 0; // Valor padrão para o segundo elemento
        case 2:
          return 0; // Valor padrão para o terceiro elemento
        case 3:
          return 0; // Valor padrão para o quarto elemento
        default:
          return 0; // Valor padrão caso haja mais elementos (embora não deva ocorrer)
      }
    }
    return num;
  }) as tupla;

  const situacao = prompt(
    "Qual situação do planeta? (habitado | habitável | inabitável | inexplorado)"
  ) as situacao;

  const satelites = prompt(
    "Satélites do planeta? Escreva separado por vírgulas, ex: 'lua,proteu,tritão'"
  ).split(",");

  const planet = { nome, coordenadas: coordenadasNumb, situacao, satelites };

  savePlanet(planet);
}
function updatePlanet(planet: {
  nome: string;
  coordenadas: tupla;
  situacao: situacao;
  satelites: string[];
}) {
  const planetTarget = planets.findIndex(
    (planetArr) => planetArr.nome === planet.nome
  );

  planets[planetTarget].nome = planet.nome;
  planets[planetTarget].coordenadas = planet.coordenadas;
  planets[planetTarget].situacao = planet.situacao;
  planets[planetTarget].satelites = planet.satelites;
}
function updatePlanetHUD() {
  const nome = prompt("Nome do planeta?");

  let planetTarget = -1;

  planetTarget = planets.findIndex((planetArr) => planetArr.nome === nome);

  if (planetTarget === -1) {
    alert("Não foi possível encontrar o nome do planeta!");
  }

  const coordenadasStr = prompt(
    "Coordenadas do mesmo? Escreva separado por vírgulas, ex: '10,20,30,40'"
  ).split(",");
  let coordenadasNumb: tupla = coordenadasStr.map((str, index) => {
    let num = +str;
    if (isNaN(num)) {
      switch (index) {
        case 0:
          return 0; // Valor padrão para o primeiro elemento
        case 1:
          return 0; // Valor padrão para o segundo elemento
        case 2:
          return 0; // Valor padrão para o terceiro elemento
        case 3:
          return 0; // Valor padrão para o quarto elemento
        default:
          return 0; // Valor padrão caso haja mais elementos (embora não deva ocorrer)
      }
    }
    return num;
  }) as tupla;

  const situacao = prompt(
    "Qual situação do planeta? (habitado | habitável | inabitável | inexplorado)"
  ) as situacao;

  const satelites = prompt(
    "Satélites do planeta? Escreva separado por vírgulas, ex: 'lua,proteu,tritão'"
  ).split(",");

  const planet = { nome, coordenadas: coordenadasNumb, situacao, satelites };

  updatePlanet(planet);
}
function addSatelite(planet: { nome: string; satelites: string[] }) {
  const planetTarget = planets.findIndex(
    (planetArr) => planetArr.nome === planet.nome
  );
  planets[planetTarget].satelites.push(planet.satelites);
}
function addSateliteHUD() {
  const nome = prompt("Nome do planeta?");

  let planetTarget = -1;

  planetTarget = planets.findIndex((planetArr) => planetArr.nome === nome);

  if (planetTarget === -1) {
    alert("Não foi possível encontrar o nome do planeta!");
  }
}
function removeSatelite(planet: { nome: string; satelites: string[] }) {
  const planetTarget = planets.findIndex(
    (planetArr) => planetArr.nome === planet.nome
  );
  planets[planetTarget].satelites.filter(
    (satelite: string) => !planet.satelites.includes(satelite)
  );
}
function removeSateliteHUD() {
  const nome = prompt("Nome do planeta?");

  let planetTarget = -1;

  planetTarget = planets.findIndex((planetArr) => planetArr.nome === nome);

  if (planetTarget === -1) {
    alert("Não foi possível encontrar o nome do planeta!");
  }
}

function getPlanets() {
  let str: string;

  planets.map((planet) => {
    str += `
    Nome: ${planet.nome}
    Coordenadas: ${planet.tupla}
    Satelites: ${planet.satelites}
    Situação: ${planet.situacao}
    `;
  });

  alert(str);
}
