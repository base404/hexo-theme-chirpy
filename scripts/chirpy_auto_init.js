/* global hexo */
const fs = require('hexo-fs');
const path = require('path');

/**
 * Chirpy Classic Theme Zero-CLI Auto-Init Script v2.0
 * 自动配置与虚拟路由扩展：无需用户手动配置根 _config.yml，也无需手动新建 md 文件
 */

// 1. 自动排除 Mermaid 代码高亮转义 (无需手动修改根 _config.yml)
hexo.on('generateBefore', function () {
  if (hexo.config.highlight) {
    hexo.config.highlight.exclude_languages = hexo.config.highlight.exclude_languages || [];
    if (!hexo.config.highlight.exclude_languages.includes('mermaid')) {
      hexo.config.highlight.exclude_languages.push('mermaid');
    }
  }
  if (hexo.config.prismjs) {
    hexo.config.prismjs.exclude_languages = hexo.config.prismjs.exclude_languages || [];
    if (!hexo.config.prismjs.exclude_languages.includes('mermaid')) {
      hexo.config.prismjs.exclude_languages.push('mermaid');
    }
  }
});

// 2. 自动生成零配置虚拟页面路由 (/categories/, /tags/, /about/, /links/)
hexo.extend.generator.register('chirpy_auto_pages', function (locals) {
  const pages = [
    { path: 'categories/index.html', layout: 'categories', title: '分类' },
    { path: 'tags/index.html', layout: 'tags', title: '标签' },
    { path: 'about/index.html', layout: 'about', title: '关于' },
    { path: 'links/index.html', layout: 'links', title: '友情链接' }
  ];

  // 检查用户是否在 source/ 目录下物理创建了对应 markdown 页面
  const hasPhysicalSourceFile = (pagePath) => {
    try {
      const mdPath = path.join(hexo.source_dir, pagePath.replace(/\.html$/, '.md'));
      const htmlPath = path.join(hexo.source_dir, pagePath);
      return fs.existsSync(mdPath) || fs.existsSync(htmlPath);
    } catch (e) {
      return false;
    }
  };

  return pages
    .filter(p => !hasPhysicalSourceFile(p.path))
    .map(p => ({
      path: p.path,
      data: {
        title: p.title,
        layout: p.layout,
        content: '',
        comments: p.layout === 'about' || p.layout === 'links'
      },
      layout: [p.layout, 'page']
    }));
});
