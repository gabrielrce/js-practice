function contarOvejas(ovejas) {
  return ovejas
    .filter((el) => el.color === "rojo")
    .filter((el) => `${el.name}`.toLowerCase().includes("n"))
    .filter((el) => `${el.name}`.toLowerCase().includes("a"));
}

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);
