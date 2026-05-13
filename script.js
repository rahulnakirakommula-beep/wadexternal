
document
  .getElementById("registerForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    let name =
      document.getElementById("regName").value.trim();

    let email =
      document.getElementById("regEmail").value.trim();

    let password =
      document.getElementById("regPassword").value.trim();


    if(name === ""){
      alert("Name is required");
      return;
    }

    if(!validateEmail(email)){
      alert("Enter valid email");
      return;
    }

    if(password.length < 6){
      alert("Password must contain at least 6 characters");
      return;
    }

    // Save user details
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration Successful!");

    document.getElementById("registerForm").reset();

  });



// ==========================
// Login Validation
// ==========================
document
  .getElementById("loginForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    let email =
      document.getElementById("loginEmail").value.trim();

    let password =
      document.getElementById("loginPassword").value.trim();

    let savedEmail =
      localStorage.getItem("userEmail");

    let savedPassword =
      localStorage.getItem("userPassword");


    if(email === savedEmail &&
       password === savedPassword){

      alert("Login Successful!");

      // Show Catalog
      document.getElementById("catalog")
        .style.display = "block";

      // Show Navbar Links
      document.getElementById("catalogNav")
        .style.display = "block";

      document.getElementById("cartNav")
        .style.display = "block";

      // Scroll to catalog
      document.getElementById("catalog")
        .scrollIntoView({
          behavior:"smooth"
        });

    }
    else{

      alert("Invalid Email or Password");

    }

  });




function validateEmail(email){

  let pattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  return email.match(pattern);

}




function addToCart(product,price){

  let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

  cart.push({
    product:product,
    price:price
  });

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert(product + " added to cart");

}