function calcularNivel() {
  // Variáveis
  const nome = document.getElementById("heroName").value;
  const xp = parseInt(document.getElementById("heroXP").value);
  let nivel;

  // Estruturas de Decisão utilizando switch/case para intervalos de XP
  switch (true) {
    case xp <= 1000:
      nivel = "Ferro";
      break;
    case xp <= 2000:
      nivel = "Bronze";
      break;
    case xp <= 5000:
      nivel = "Prata";
      break;
    case xp <= 7000:
      nivel = "Ouro";
      break;
    case xp <= 8000:
      nivel = "Platina";
      break;
    case xp <= 9000:
      nivel = "Ascendente";
      break;
    case xp <= 10000:
      nivel = "Imortal";
      break;
    default:
      nivel = "Radiante";
      break;
  }

  // Exibindo o resultado
  const resultado = document.getElementById("resultado");
  resultado.textContent = `O Herói Marvel ${nome} está no nível ${nivel}`;
}

function resetarClassificacao() {
  document.getElementById("heroName").value = "";
  document.getElementById("heroXP").value = "";
  document.getElementById("resultado").textContent = "";
}
