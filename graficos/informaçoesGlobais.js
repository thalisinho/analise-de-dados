const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()

        console.log(dados);
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
    }

    visualizarInformacoesGlobais()