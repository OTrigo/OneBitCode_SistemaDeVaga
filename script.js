let listaVagas = []
let menuInput

while (menuInput != 6){
    menuInput = prompt("Sistema de Vagas de emprego - Jorge Lucas \n [1] Listar \n [2] Criar vaga \n [3] Visualizar uma vaga \n [4] Inscrever um candidato em uma vaga \n [5] Excluir uma vaga \n [6] Sair")

    switch (menuInput) {
        case "1":
            listarVagas()
            break
        case "2":
            criarVaga() 
            break
        case "3":
            visualizarVaga()
            break
        case "4":
            candidatoVaga()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert('saindo...')
            break;
    }
}

function listarVagas(){
        const listar = listaVagas.reduce(function(exibirTexto, vaga){
            exibirTexto += `${vaga.id} - `
            exibirTexto += `${vaga.nome} ( ${vaga.candidatos.length} candidatos ) \n`
            return exibirTexto
        }, "Consulta das vagas disponíveis: \n")

        alert(listar)
}

function criarVaga(){
    const id = listaVagas.length
    const nome = prompt('Digite o nome da vaga:')
    const desc = prompt('Dê uma descrição da vaga:')
    const data = prompt('Diga até quando essa vaga estará disponível:')
    const confirmar = confirm(`Está certo de criar uma vaga com essas informações? \n Nome da Vaga: ${nome} \n Descrição da vaga: ${desc} \n Data limite da vaga: ${data} \n`)
    if(confirmar === true){
       const novaVaga = { id, nome, desc, data, candidatos:[] }
       console.log(novaVaga)
       listaVagas.push(novaVaga)
    }
}

function visualizarVaga(){
    const query = prompt("Digite o ID da vaga para visualizá-la")
    const idVaga = listaVagas[query].id
    const nomeVaga = listaVagas[query].nome
    const descVaga = listaVagas[query].desc
    const dataVaga = listaVagas[query].data
    const candidatosVaga = listaVagas[query].candidatos.length;

    alert(` Id: ${idVaga}\n Nome da vaga: ${nomeVaga}\n Descrição da vaga: ${descVaga}\n Data limite da vaga: ${dataVaga}\n Número de candidatos da vaga: ${candidatosVaga} \n`)
}

function candidatoVaga(){
    let nomeDoCandidato = prompt('Digite o nome do candidato') 
    let idVaga = parseInt(prompt('Digite a vaga em que o candidato será inscrito')) 
    listaVagas[idVaga].candidatos.push(nomeDoCandidato)

    alert(`O ${nomeDoCandidato} foi inscrito na vaga!`)
}

function excluirVaga(){
    const query = prompt("Digite o ID da vaga que deseja remover")
    const idVaga = listaVagas[query].id
    const nomeVaga = listaVagas[query].nome
    const descVaga = listaVagas[query].desc
    const dataVaga = listaVagas[query].data
    const candidatosVaga = listaVagas[query].candidatos.length;

    confirm(`Confirma que deseja remover essa vaga?\n Id: ${idVaga}\n Nome da vaga: ${nomeVaga}\n Descrição da vaga: ${descVaga}\n Data limite da vaga: ${dataVaga}\n Número de candidatos da vaga: ${candidatosVaga} \n`)

    if(confirm){
        listaVagas.splice(query)
    }
}