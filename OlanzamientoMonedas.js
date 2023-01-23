//Opcional Promesas
function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }

    function fiveHeadsaSync() {
        return new Promise((resolve,reject)=>{
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            //console.log(`${result} was fliped`)
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount==5){
                resolve(`Promise resolve: Se resolvio en ${attempts} intentos con ${headsCount} veces cara de seguido`)
            }else if(attempts > 100){// mas de 100 veces
                reject(`Promise reject: Ya se hicieron ${attempts} intentos y aun no se ha conseguido 5 caras seguidas`)
            }
        }
       // return `It took ${attempts} tries to flip five "heads"`;
    })
    }
    fiveHeadsaSync().then(res=> console.log(res)).catch(err => console.log(err))
    console.log("when does this run now") //este corre antes que se consiga el resultado debido a la funcion asincrona que tarda un tiempo
    