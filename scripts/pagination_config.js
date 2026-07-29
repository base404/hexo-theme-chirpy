/* Hexo Theme Chirpy - Dynamic Pagination Config Injector */
hexo.on('generateBefore', function () {
  const themeConfig = hexo.theme.config || {};
  const perPage =
    (themeConfig.pagination && themeConfig.pagination.per_page) ||
    themeConfig.per_page;

  if (perPage && typeof perPage === 'number' && perPage > 0) {
    hexo.config.per_page = perPage;

    if (!hexo.config.index_generator) hexo.config.index_generator = {};
    hexo.config.index_generator.per_page = perPage;

    if (!hexo.config.archive_generator) hexo.config.archive_generator = {};
    hexo.config.archive_generator.per_page = perPage;

    if (!hexo.config.category_generator) hexo.config.category_generator = {};
    hexo.config.category_generator.per_page = perPage;

    if (!hexo.config.tag_generator) hexo.config.tag_generator = {};
    hexo.config.tag_generator.per_page = perPage;
  }
});
