 
    
    function signup() {
      const username = document.getElementById("signupUsername").value.trim();
      const password = document.getElementById("signupPassword").value.trim();
      const signupMsg = document.getElementById("signupMessage");

      if (!username || !password) {
        signupMsg.innerText = "Please enter";
        return;
      }

      let users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[username]) {
        signupMsg.innerText = "Username already exists!";
        return;
      }

      
      users[username] = password;
      localStorage.setItem("users", JSON.stringify(users));
      signupMsg.style.color = "green";
      signupMsg.innerText = "Sign up successful! You can now log in.";
      
   
      document.getElementById("signupUsername").value = "";
      document.getElementById("signupPassword").value = "";
    }
