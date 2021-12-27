// q1

const criaArrayValores = (tamanho, parametro) => {
    let array = [];

    for (let i = 0; i < tamanho; i++) {
        array.push(parametro);
    }
    return array;
};

criaArrayValores(3, 'a');

// q2

const inverteArray = entrada => {
    let invertido = [];

    for (let i = entrada.length - 1; i>=0; i--) {
        invertido.push(entrada[i]);
    }
    return invertido;
};

inverteArray([1,2,3,4]);

// q3

const limpaArray = entrada => {
    let novoArray = [];

    for (let i = 0; i < entrada.length; i++) {
        if (entrada[i]) {
            novoArray.push(entrada[i]);
        }
    }

    return novoArray;
};

limpaArray([1, 2, "", undefined]);

// q4

const converteEmObjeto = entrada => {
    let objeto = {};

    for (let i = 0; i < entrada.length; i++) {
        for (let j = 0; j < entrada.length; j++) {
            objeto[i] = entrada[i][j];
        }
    }

    // let parametros = objeto;
    //
    // Object.keys(parametros).forEach(chave => {
    //     let novaChave = parametros[chave];
    //     objeto[novaChave] = objeto[chave];
    //     delete objeto[chave];
    // });


    return objeto;
};

console.log(converteEmObjeto([['c', 2], ['d', 4]]));

// q5

const removeIgualParametro = (entrada, parametro1, parametro2) => {
    let novoArray = [];

    for (let i = 0; i < entrada.length; i++) {
        if (entrada[i] !== parametro1 && parametro2){
            novoArray.push(entrada[i]);
        }
    }
    return novoArray;
};

removeIgualParametro([5,4,3,2,5], 5, 3);

// q6 - TERMINAR, TÁ ERRADA

const removeDuplicado = entrada => {

    for (let i = 0; i < entrada.length; i++) {
        let comparador = entrada[i];
        let contador = 0;
        for (let j = entrada.length; j > 0; j--) {
            if (comparador === entrada[j]) {
                contador++;
                if (contador > 1) {
                    contador--;
                    entrada.splice(entrada.indexOf(entrada[j]), 1);
                }
            }
        }
    }

    return entrada;
}

removeDuplicado([1,2,3,3,2,4,5,4,7,3]);

// q7

const comparaArrays = (entrada1, entrada2) => {
    let cont = 0;

    for (let i = 0; i < entrada1.length; i++) {
        for (let j = 0; j < entrada2.length; j++) {
            if (entrada1[i] === entrada2[j]){
                cont++;
            }
        }
    }

    if (cont === entrada1.length && entrada2.length) {
        return true;
    }
    return false;
};

comparaArrays([1,2,3,4], [1,2,3,4]);

// q10

const valorComum = (entrada1, entrada2) => {
    let novoArray = [];

    for (let i = 0; i < entrada1.length; i++) {
        for (let j = 0; j < entrada2.length; j++) {
            if (entrada1[i] === entrada2[j]){
                novoArray.push(entrada1[i]);
            }
        }
    }
    return novoArray;
};

valorComum([6,8], [6, 8]);
