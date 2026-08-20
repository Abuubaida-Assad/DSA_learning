function GCD(A, B) {
  A = (A);
  B = (B);

  while (B !== 0) {
    const remainder = A % B;

    A = B;
    B = remainder;
  }

  return A;
}

console.log(GCD(48, 18));

module.exports = { 
 //param A : integer
 //param B : integer
 //return an integer
	gcd : function(A, B){
    A = (A);
    B = (B);

    while (B !== 0) {
      const remainder = A % B;
      A = B;
      B = remainder;
    }

    return A; 

	}
};
console.log(GCD(48, 18));

