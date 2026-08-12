function GCD(N1, N2) {
  N1 = (N1);
  N2 = (N2);

  while (N2 !== 0) {
    const remainder = N1 % N2;
    N1 = N2;
    N2 = remainder;
  }

  return N1;
}

console.log(GCD(48, 18));