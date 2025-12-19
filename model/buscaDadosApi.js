async function fetchRecitas() {
    try {
        let receitas = await fetch("https://api-receitas-pi.vercel.app/receitas/todas")
        let dadosReceitas = await receitas.json()
        console.log(dadosReceitas);
        for(let valor of Object.values(dadosReceitas)){

            console.log(Object.values(valor.ingredientes));
        }
        
    } catch (error) {
        console.error(error)
    }
}

fetchRecitas()

//modulo.export = dadosReceitas;
