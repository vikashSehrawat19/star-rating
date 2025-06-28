
    const stars = document.querySelectorAll('.star-container');
    const message = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    const responseMessage = document.getElementById('responseMessage');
    let selectedRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        selectedRating = index + 1;
        
        stars.forEach((s, i) => {
          s.classList.toggle('active', i < selectedRating);
        });
        
        message.textContent = `You rated ${selectedRating} star(s)`;
      
        responseMessage.textContent = '';
      });
    });

   
    submitBtn.addEventListener('click', () => {
      if (selectedRating > 0) {
        responseMessage.style.color = 'green';
        responseMessage.textContent = `Thank you! You rated ${selectedRating} star(s).`;
      } else {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Please select a star rating first.';
      }
    });
