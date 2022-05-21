const randomItem = ()=>{
    const random = list=> list[Math.floor((Math.random()*list.length))];
    const items=[]
    let time = Math.floor(Math.random() * 15) +1
    let qtd = Math.floor(Math.random() * 20) + 1
    let item = random(["Alhos", "Cebolas", "Gengibres", "Leiteiras de reforço", "Pimentas"])
    return `${time} minutos pra comer ${qtd} ${item}`
}

module.exports = randomItem