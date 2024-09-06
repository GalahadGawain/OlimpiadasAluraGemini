function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi Encontrado!</p>";
        return;
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.linkInsta}" target="_blank">${dado.titulo}<a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.linkWiki}" target="_blank">Mais Informações</a>
                </div>
            `
        };
    };

    if (!resultados) {
        resultados = "<p>Nada foi Encontrado!</p>"
    };

    section.innerHTML = resultados;
};