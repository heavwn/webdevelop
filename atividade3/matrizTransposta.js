function transporMatriz(A) {
    function imprimirMatriz(matriz) {
        for (let linha of matriz) {
            console.log(linha.join(' ')); 
        }
        console.log();
    }

    console.log("Matriz original:");
    imprimirMatriz(A);

    console.log("Matriz transposta:");
    const transposta = [];
    const linhas = A.length;
    const colunas = A[0].length;

    for (let i = 0; i < colunas; i++) {
        transposta.push([]);
    }

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            transposta[j][i] = A[i][j];
        }
    }

    imprimirMatriz(transposta);
}

const matriz = [
    [1, 2],
    [3, 4],
    [5, 6],
];

transporMatriz(matriz);