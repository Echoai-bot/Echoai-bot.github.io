const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navbtn = document.getElementById('navbtn');
const mobilemenu = document.getElementById('mobilemenu');
if (navbtn && mobilemenu) {
  navbtn.addEventListener('click', () => {
    const expanded = navbtn.getAttribute('aria-expanded') === 'true';
    navbtn.setAttribute('aria-expanded', String(!expanded));
    mobilemenu.hidden = expanded;
  });

  mobilemenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobilemenu.hidden = true;
      navbtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const type = data.get('type') || '';
    const goal = data.get('goal') || '';

    const subject = encodeURIComponent('Demande — ECHOA.I (Early Adopter)');
    const body = encodeURIComponent(
`Bonjour,

Je veux réserver une place ECHOA.I.

Nom: ${name}
Email: ${email}
Type: ${type}

Objectif principal:
${goal}

Merci !`
    );

    // TODO: remplace l'email ci-dessous par ton email pro
    const to = 'tonemail@domaine.com';
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
