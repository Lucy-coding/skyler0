document.addEventListener('DOMContentLoaded', function() {

//typiing
  const typingText = "Join SKYLER coding club today!";
  let typingIndex = 0;

  const typingTextElement = document.getElementById('typing-text');

  function typeTypingText() {
      if (typingIndex < typingText.length) {
          typingTextElement.textContent += typingText.charAt(typingIndex);
          typingIndex++;
          setTimeout(typeTypingText, 100);
      }
  }

  typeTypingText();

//汉堡菜单
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        event.stopPropagation(); // 阻止事件冒泡
    });
    document.addEventListener("click", function () {
      if(navLinks.style.display === 'flex'){
        navLinks.style.display =  'none';
      }
    });


//报名
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = e.target[0].value;
        const age = e.target[1].value;
        const phone = e.target[2].value;

        const emailBody = `Name: ${name}\nAge: ${age}\nPhone: ${phone}`;
        window.location.href = `mailto:jie164@icloud.com?subject=Student Registration&body=${encodeURIComponent(emailBody)}`;
        signupForm.reset();
    });

//gundong


});
