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
  document.querySelectorAll('figure.highlight:not(.mermaid), pre:not(.highlight pre):not(.mermaid)').forEach((block) => {
    if (block.querySelector('.copy-code-btn')) return; // Avoid duplicate injection

    const btn = document.createElement('button');
    btn.className = 'copy-code-btn';
    btn.innerText = '复制';
    block.appendChild(btn);

    btn.addEventListener('click', () => {
      const codeEl = block.querySelector('td.code') || block.querySelector('code') || block;
      let text = codeEl.innerText || '';
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

  // 6. Interactive Mermaid Diagram Scaling & Control Bar (Default 70% Scale)
  const mermaidBlocks = document.querySelectorAll('figure.highlight.mermaid, code.language-mermaid, pre.mermaid, .mermaid');

  if (mermaidBlocks.length > 0) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
    script.onload = () => {
      const isDark = document.documentElement.getAttribute('data-scheme') === 'dark';
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose'
      });

      mermaidBlocks.forEach((block, index) => {
        const codeText = block.innerText || block.textContent || '';
        if (!codeText.trim()) return;

        const container = document.createElement('div');
        container.className = 'mermaid-control-wrapper';

        const toolbar = document.createElement('div');
        toolbar.className = 'mermaid-toolbar';
        toolbar.innerHTML = `
          <button class="mermaid-btn btn-zoom-in" title="放大"><i class="fa-solid fa-magnifying-glass-plus"></i></button>
          <button class="mermaid-btn btn-zoom-out" title="缩小"><i class="fa-solid fa-magnifying-glass-minus"></i></button>
          <button class="mermaid-btn btn-reset" title="重置比例 (70%)"><i class="fa-solid fa-rotate-left"></i> 70%</button>
          <button class="mermaid-btn btn-fullscreen" title="全屏查看"><i class="fa-solid fa-expand"></i> 全屏</button>
        `;

        const svgBox = document.createElement('div');
        svgBox.className = 'mermaid-svg-box';

        container.appendChild(toolbar);
        container.appendChild(svgBox);

        block.replaceWith(container);

        const id = `mermaid-id-${index}-${Date.now()}`;
        mermaid.render(id, codeText).then(({ svg }) => {
          svgBox.innerHTML = svg;

          // Default 70% scale reduction as requested
          let currentScale = 0.7;
          const updateTransform = () => {
            const svgEl = svgBox.querySelector('svg');
            if (svgEl) {
              svgEl.style.transform = `scale(${currentScale})`;
              svgEl.style.transformOrigin = 'top center';
              svgEl.style.transition = 'transform 0.2s ease-out';
            }
          };

          updateTransform();

          // Control toolbar listeners
          toolbar.querySelector('.btn-zoom-in')?.addEventListener('click', () => {
            currentScale = Math.min(2.0, currentScale + 0.15);
            updateTransform();
          });

          toolbar.querySelector('.btn-zoom-out')?.addEventListener('click', () => {
            currentScale = Math.max(0.2, currentScale - 0.15);
            updateTransform();
          });

          toolbar.querySelector('.btn-reset')?.addEventListener('click', () => {
            currentScale = 0.7;
            updateTransform();
          });

          toolbar.querySelector('.btn-fullscreen')?.addEventListener('click', () => {
            openMermaidModal(svg);
          });
        }).catch(() => {});
      });
    };
    document.head.appendChild(script);
  }

  // Fullscreen Modal for Mermaid SVG
  function openMermaidModal(svgHtml) {
    let modal = document.getElementById('mermaid-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'mermaid-modal';
      modal.className = 'mermaid-modal';
      modal.innerHTML = `
        <div class="mermaid-modal-backdrop"></div>
        <div class="mermaid-modal-content">
          <button class="mermaid-modal-close" title="关闭"><i class="fa-solid fa-xmark"></i></button>
          <div class="mermaid-modal-body"></div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector('.mermaid-modal-backdrop')?.addEventListener('click', closeModal);
      modal.querySelector('.mermaid-modal-close')?.addEventListener('click', closeModal);
    }

    function closeModal() {
      modal.classList.remove('active');
    }

    const modalBody = modal.querySelector('.mermaid-modal-body');
    if (modalBody) {
      modalBody.innerHTML = svgHtml;
      const svgEl = modalBody.querySelector('svg');
      if (svgEl) {
        svgEl.style.maxWidth = '90vw';
        svgEl.style.maxHeight = '85vh';
        svgEl.style.width = 'auto';
        svgEl.style.height = 'auto';
        svgEl.style.transform = 'none';
      }
    }

    modal.classList.add('active');
  }
});
