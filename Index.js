class ThemeHookerPlugin {
  start() {
    console.log("ThemeHookerPlugin has started!");
    this.applyTheme();
  }

  stop() {
    console.log("ThemeHookerPlugin has stopped!");
    this.removeTheme();
  }

  applyTheme() {
    const style = document.createElement("style");
    style.id = "themeHookerStyles";
    style.innerText = `
      :root {
        --th-primary: #b21f1f;
        --th-secondary: #1a2a6c;
      }
      .theme-hook {
        background: var(--th-primary);
        color: var(--th-secondary);
      }
      .theme-hook:hover {
        background: var(--th-secondary);
        color: var(--th-primary);
      }
    `;
    document.head.appendChild(style);
  }

  removeTheme() {
    const style = document.getElementById("themeHookerStyles");
    if (style) {
      style.remove();
    }
  }
}

module.exports = ThemeHookerPlugin;
