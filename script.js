    const LINKS = {
      prototype: "",   // e.g. "https://your-prototype-url.com"
      youtube:   "",   // e.g. "https://youtube.com/watch?v=xxxx"
    };
    // ───────────────────────────────────────────────────────────

    function wireCard(id, url, label) {
      const card = document.getElementById(id);
      if (url) {
        card.href = url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
      } else {
        card.addEventListener("click", (e) => {
          e.preventDefault();
          alert(`${label} link not added yet — set it in the LINKS object in the script.`);
        });
      }
    }

    wireCard("prototype-link", LINKS.prototype, "Prototype");
    wireCard("youtube-link", LINKS.youtube, "Demo video");
