document.addEventListener("DOMContentLoaded", function() {
  const profileForm = document.getElementById("profileForm");
  const phase1 = document.getElementById("phase1");
  const phase2 = document.getElementById("phase2");
  const nextPhaseButton = document.getElementById("nextPhase");
  const submitButton = document.getElementById("submitProfile");

  nextPhaseButton.addEventListener("click", function() {
    // Validate phase 1 fields here if needed
    // For simplicity, we'll just check if influencer name and email are filled
    const influencerName = document.getElementById("influencerName").value;
    const email = document.getElementById("email").value;
    if (!influencerName || !email) {
      alert("Please fill in all fields.");
      return;
    }

    // Hide phase 1 and show phase 2
    phase1.classList.add("hidden");
    phase2.classList.remove("hidden");
  });

  submitButton.addEventListener("click", function() {
    // Submit influencer profile data or perform further validation
    // For simplicity, we'll just display an alert with the collected data
    const influencerName = document.getElementById("influencerName").value;
    const email = document.getElementById("email").value;
    // Get additional details from phase 2 if needed

    alert("Influencer profile created successfully!\nName: " + influencerName + "\nEmail: " + email);
  });
});
