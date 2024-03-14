function verificarNumeroPrimo(n) {
    if (n <= 1) {
      console.log(`O número ${n} não é primo`);
      return;
    }
    if (n % 2 === 0 && n !== 2) {
      console.log(`O número ${n} não é primo`);
      return;
    }
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) {
        console.log(`O número ${n} não é primo`);
        return;
      }
    }
    console.log(`O número ${n} é primo`);
  }

verificarNumeroPrimo(0);
verificarNumeroPrimo(1);
verificarNumeroPrimo(2);
verificarNumeroPrimo(3);
verificarNumeroPrimo(7);
verificarNumeroPrimo(83);
verificarNumeroPrimo(100);
verificarNumeroPrimo(991);
verificarNumeroPrimo(104729);
verificarNumeroPrimo(14348907);

