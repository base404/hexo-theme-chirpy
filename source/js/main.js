document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading Progress Bar
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // 2. Dark / Light Scheme Mode Toggle
  const modeBtn = document.getElementById('mode-toggle');
  if (modeBtn) {
    modeBtn.addEventListener('click', () => {
      const htmlEl = document.documentElement;
      const current = htmlEl.getAttribute('data-scheme');
      const next = current === 'light' ? 'dark' : 'light';
      htmlEl.setAttribute('data-scheme', next);
      localStorage.setItem('chirpy_scheme', next);
    });

    const savedScheme = localStorage.getItem('chirpy_scheme');
    if (savedScheme) {
      document.documentElement.setAttribute('data-scheme', savedScheme);
    }
  }

  // 3. One-click Code Copy Button
  document.querySelectorAll('pre').forEach((pre) => {
    const btn = document.createElement('button');
    btn.className = 'copy-code-btn';
    btn.innerText = '复制';
    pre.appendChild(btn);

    btn.addEventListener('click', () => {
      const code = pre.querySelector('code')?.innerText || pre.innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.innerText = '已复制!';
        setTimeout(() => { btn.innerText = '复制'; }, 2000);
      });
    });
  });

  // 4. Dynamic TOC Highlight on Scroll
  const tocLinks = document.querySelectorAll('.toc-content a');
  if (tocLinks.length > 0) {
    const headings = Array.from(document.querySelectorAll('.post-content h2, .post-content h3, .post-content h4'));
    window.addEventListener('scroll', () => {
      const top = window.scrollY;
      headings.forEach((h) => {
        if (top >= h.offsetTop - 100) {
          tocLinks.forEach((link) => link.classList.remove('active'));
          const activeLink = document.querySelector(`.toc-content a[href="#${encodeURIComponent(h.id)}"]`) ||
                             document.querySelector(`.toc-content a[href="#${h.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    });
  }
});
