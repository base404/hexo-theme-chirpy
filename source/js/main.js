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
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-scheme', next);
      localStorage.setItem('chirpy_scheme', next);
    });

    const savedScheme = localStorage.getItem('chirpy_scheme');
    if (savedScheme) {
      document.documentElement.setAttribute('data-scheme', savedScheme);
    }
  }

  // 3. One-click Code Copy Button (Fixed: No duplicates, top-right placement)
  document.querySelectorAll('figure.highlight, pre:not(.highlight pre)').forEach((block) => {
    if (block.querySelector('.copy-code-btn')) return; // Avoid duplicate injection

    const btn = document.createElement('button');
    btn.className = 'copy-code-btn';
    btn.innerText = '复制';
    block.appendChild(btn);

    btn.addEventListener('click', () => {
      const codeEl = block.querySelector('td.code') || block.querySelector('code') || block;
      let text = codeEl.innerText || '';
      // Strip copy button text if accidentally captured
      text = text.replace(/^复制\n|^已复制!\n/, '').trim();
      navigator.clipboard.writeText(text).then(() => {
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

  // 5. Right Sidebar Live Search Filter
  const searchInput = document.getElementById('sidebar-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const posts = document.querySelectorAll('.posts-list .post-card');
      posts.forEach((card) => {
        const title = card.getAttribute('data-title') || '';
        const content = card.getAttribute('data-content') || '';
        if (!q || title.includes(q) || content.includes(q)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
