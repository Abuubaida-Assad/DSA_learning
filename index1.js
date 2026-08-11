    const form = document.querySelector('.form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();


        document.querySelector('.name').textContent = `Name: ${form.name.value}`;


        document.querySelector('.email').textContent = `Email: ${form.email.value}`;

        document.querySelector('.password').textContent = `Password: ${form.password.value}`;
      });

