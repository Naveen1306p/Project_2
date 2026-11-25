const roles = {
  trainer: {
    name: "Trainer",
    description: "Sign in to manage your sessions and guide learner progress.",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 7h8M8 11h6"/></svg>`,
  },
  student: {
    name: "Student",
    description: "Sign in to check your learning progress and next steps.",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 11.2V16c2.8 2.4 7.2 2.4 10 0v-4.8M21 9v6"/></svg>`,
  },
  admin: {
    name: "Admin",
    description: "Sign in to oversee people, programs, and activity.",
    icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3 19 6v5c0 4.7-3 8.3-7 10-4-1.7-7-5.3-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
};

const homeView = document.querySelector("#home-view");
const loginView = document.querySelector("#login-view");
const loginIcon = document.querySelector("#login-icon");
const loginEyebrow = document.querySelector("#login-eyebrow");
const loginTitle = document.querySelector("#login-title");
const loginCopy = document.querySelector("#login-copy");
const submitLabel = document.querySelector("#submit-label");
const loginForm = document.querySelector("#login-form");
const formMessage = document.querySelector("#form-message");
const emailInput = document.querySelector("#email");

function showHome() {
  loginView.hidden = true;
  homeView.hidden = false;
  loginForm.reset();
  formMessage.textContent = "";
  document.title = "RBS Tracker | Learning, in sync";
}

function showLogin(roleKey) {
  const role = roles[roleKey];
  if (!role) return;

  homeView.hidden = true;
  loginView.hidden = false;
  loginIcon.dataset.role = roleKey;
  loginIcon.innerHTML = role.icon;
  loginEyebrow.textContent = `${role.name.toUpperCase()} PORTAL`;
  loginTitle.textContent = `Welcome, ${role.name.toLowerCase()}.`;
  loginCopy.textContent = role.description;
  submitLabel.textContent = `Sign in to ${role.name.toLowerCase()} portal`;
  formMessage.textContent = "";
  document.title = `RBS Tracker | ${role.name} sign in`;
  emailInput.focus();
}

document.querySelectorAll("button[data-role]").forEach((button) => {
  button.addEventListener("click", () => showLogin(button.dataset.role));
});

document.querySelectorAll("[data-back], [data-home-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showHome();
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "This demo is not connected to authentication yet. Ask your administrator to set up sign-in.";
});
