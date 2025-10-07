// Email form handler for TROCS landing page

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email-input");
  const emailSubmitBtn = document.getElementById("email-submit");

  if (!emailInput || !emailSubmitBtn) return;

  // Email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async () => {
    const email = emailInput.value.trim();

    if (!email) {
      alert("Entre ton email pour être alerté du lancement !");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Vérifie ton email, il semble incorrect 😅");
      return;
    }

    // Disable button during submission
    emailSubmitBtn.disabled = true;
    emailSubmitBtn.style.opacity = "0.5";

    try {
      // Call the Vercel API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success feedback
        alert("C'est bon ! On te prévient dès que TROCS est dispo. Vérifie ta boîte mail pour la confirmation ! 🚀");
        emailInput.value = "";
      } else {
        // Error feedback
        alert(data.error || "Une erreur s'est produite. Réessaie plus tard 😅");
      }
    } catch (error) {
      console.error("Erreur d'inscription:", error);
      alert("Impossible de se connecter au serveur. Vérifie ta connexion internet.");
    } finally {
      // Re-enable button
      emailSubmitBtn.disabled = false;
      emailSubmitBtn.style.opacity = "1";
    }
  };

  // Event listeners
  emailSubmitBtn.addEventListener("click", handleSubmit);

  emailInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  });
});
