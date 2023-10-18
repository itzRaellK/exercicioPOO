function Ator(nomeAtor) {
    this.nomeAtor = nomeAtor; 
}

function Estudio(nomeAtor, nomeEstudio) {
    this.nomeEstudio = nomeEstudio;

    Ator.call(this, nomeAtor);
}

function Filme(nomeAtor, nomeEstudio, nomeFilme, diretor, genero, dataLancamento) {
    this.nomeFilme = nomeFilme;
    this.diretor = diretor;
    this.genero = genero;
    this.dataLancamento = dataLancamento;

    Ator.call(this, nomeAtor);
    Estudio.call(this, nomeEstudio);

    this.retorno = function() {
        const saida = `"O filme ${nomeFilme}, dirigido por ${diretor} e estrelado por ${nomeAtor}, lançado em ${dataLancamento} é um filme do(s) genêro(s) ${genero}."`;
        return saida;
    }
}

const filme1 = new Filme("Leonardo Di Caprio", "New Regency Pictures", "The Revenant", "Alejandro G. Iñárritu", ["Ação", " Aventura", " Drama", " Faroeste"], 2015);
const filme2 = new Filme("Cillian Murphy", "Syncopy Inc. Atlas Entertainment", "Oppenheimer", "Christopher Nolan", ["Cinebiografia", " Drama"], 2023);

console.log(filme2.retorno());
console.log(filme1.retorno());

