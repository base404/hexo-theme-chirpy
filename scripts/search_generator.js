/* Hexo Theme Chirpy - Search Index Generator (search.json) */
hexo.extend.generator.register('search_json', function (site) {
  const root = hexo.config.root || '/';
  const posts = site.posts.sort('-date').map((post) => {
    let postPath = url_for(post.path);
    return {
      title: post.title || '无标题',
      path: postPath,
      date: post.date ? post.date.format('YYYY-MM-DD') : '',
    };
  });

  function url_for(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) return path;
    if (!path.startsWith('/')) path = '/' + path;
    return (root.endsWith('/') ? root.slice(0, -1) : root) + path;
  }

  return {
    path: 'search.json',
    data: JSON.stringify(posts),
  };
});
