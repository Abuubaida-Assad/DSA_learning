    // const form = document.querySelector('.form');
    //   form.addEventListener('submit', (event) => {
    //     event.preventDefault();


    //     document.querySelector('.name').textContent = `Name: ${form.name.value}`;


    //     document.querySelector('.email').textContent = `Email: ${form.email.value}`;

    //     document.querySelector('.password').textContent = `Password: ${form.password.value}`;
    //   });

  function reverseNumber (n){
      let reverse = 0;
      for(let i=1; n>0; i++){
          let digit = n%10;
          reverse = reverse * 10 + digit;
          n=(n/10)|0;
      }
      return reverse;
  }
  
  console.log(reverseNumber(12345));
