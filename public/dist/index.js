var planets = [];
function runApp() {
    var res = prompt("\n      Bem vindo \u00E0 aplica\u00E7\u00E3o!\n      fa\u00E7a sua escolha:\n      1- Salvar planeta\n      2- Editar planeta\n      3- Adicionar sat\u00E9lite\n      4- Remover Sat\u00E9lite\n      5- Listar planetas\n      0- Sair\n    ");
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
function savePlanet(planet) {
    planets.push(planet);
}
function savePlanetHUD() {
    var nome = prompt("Nome do planeta?");
    var coordenadasStr = prompt("Coordenadas do mesmo? Escreva separado por vírgulas, ex: '10,20,30,40'").split(",");
    var coordenadasNumb = coordenadasStr.map(function (str, index) {
        var num = +str;
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
    });
    var situacao = prompt("Qual situação do planeta? (habitado | habitável | inabitável | inexplorado)");
    var satelites = prompt("Satélites do planeta? Escreva separado por vírgulas, ex: 'lua,proteu,tritão'").split(",");
    var planet = { nome: nome, coordenadas: coordenadasNumb, situacao: situacao, satelites: satelites };
    savePlanet(planet);
}
function updatePlanet(planet) {
    var planetTarget = planets.findIndex(function (planetArr) { return planetArr.nome === planet.nome; });
    planets[planetTarget].nome = planet.nome;
    planets[planetTarget].coordenadas = planet.coordenadas;
    planets[planetTarget].situacao = planet.situacao;
    planets[planetTarget].satelites = planet.satelites;
}
function updatePlanetHUD() {
    var nome = prompt("Nome do planeta?");
    var planetTarget = -1;
    planetTarget = planets.findIndex(function (planetArr) { return planetArr.nome === nome; });
    if (planetTarget === -1) {
        alert("Não foi possível encontrar o nome do planeta!");
    }
    var coordenadasStr = prompt("Coordenadas do mesmo? Escreva separado por vírgulas, ex: '10,20,30,40'").split(",");
    var coordenadasNumb = coordenadasStr.map(function (str, index) {
        var num = +str;
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
    });
    var situacao = prompt("Qual situação do planeta? (habitado | habitável | inabitável | inexplorado)");
    var satelites = prompt("Satélites do planeta? Escreva separado por vírgulas, ex: 'lua,proteu,tritão'").split(",");
    var planet = { nome: nome, coordenadas: coordenadasNumb, situacao: situacao, satelites: satelites };
    updatePlanet(planet);
}
function addSatelite(planet) {
    var planetTarget = planets.findIndex(function (planetArr) { return planetArr.nome === planet.nome; });
    planets[planetTarget].satelites.push(planet.satelites);
}
function addSateliteHUD() {
    var nome = prompt("Nome do planeta?");
    var planetTarget = -1;
    planetTarget = planets.findIndex(function (planetArr) { return planetArr.nome === nome; });
    if (planetTarget === -1) {
        alert("Não foi possível encontrar o nome do planeta!");
    }
}
function removeSatelite(planet) {
    var planetTarget = planets.findIndex(function (planetArr) { return planetArr.nome === planet.nome; });
    planets[planetTarget].satelites.filter(function (satelite) { return !planet.satelites.includes(satelite); });
}
function removeSateliteHUD() {
    var nome = prompt("Nome do planeta?");
    var planetTarget = -1;
    planetTarget = planets.findIndex(function (planetArr) { return planetArr.nome === nome; });
    if (planetTarget === -1) {
        alert("Não foi possível encontrar o nome do planeta!");
    }
}
function getPlanets() {
    var str;
    planets.map(function (planet) {
        str += "\n    Nome: ".concat(planet.nome, "\n    Coordenadas: ").concat(planet.tupla, "\n    Satelites: ").concat(planet.satelites, "\n    Situa\u00E7\u00E3o: ").concat(planet.situacao, "\n    ");
    });
    alert(str);
}
