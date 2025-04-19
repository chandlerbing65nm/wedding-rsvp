function submitRSVP(response) {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
  
    if (!firstName || !lastName) {
      alert("Please enter both your first and last name.");
      return;
    }
  
    const message = `Thank you, ${firstName} ${lastName}, for your response: ${response === 'Yes' ? "Can't wait to see you there!" : "Sorry you can't make it."}`;
    document.getElementById("responseMessage").innerText = message;
  
    // Optionally, log or store this data somewhere.
    console.log({ firstName, lastName, response });
  }
  
