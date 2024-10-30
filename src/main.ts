import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <div class="logo">
      <span>⚡</span>
      <span>Visual Studio Code</span>
    </div>
    <nav class="nav-links">
      <a href="#features">Features</a>
      <a href="#docs">Docs</a>
      <a href="#updates">Updates</a>
      <a href="#blog">Blog</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <h1>Code editing.<br>Redefined.</h1>
        <p>Free. Built on open source. Runs everywhere.</p>
        <div class="cta-buttons">
          <a href="#download" class="button button-primary">Download for Windows</a>
          <a href="#other-platforms" class="button button-secondary">Other Platforms</a>
        </div>
      </div>
    </section>

    <section class="features" id="features">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>IntelliSense</h3>
          <p>Go beyond syntax highlighting and autocomplete with IntelliSense.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🐞</div>
          <h3>Run and Debug</h3>
          <p>Debug code right from the editor. Launch or attach to applications.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📦</div>
          <h3>Built-in Git</h3>
          <p>Review diffs, stage files, and make commits right from the editor.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🧩</div>
          <h3>Extensions</h3>
          <p>Extend and customize every feature with a rich ecosystem.</p>
        </div>
      </div>
    </section>
  </main>
`