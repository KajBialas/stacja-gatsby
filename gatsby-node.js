exports.onCreatePage = ({page, actions: { createPage, deletePage}}) => {
  const frontmatter = page.context.frontmatter;

  console.log(frontmatter);

  if (frontmatter && frontmatter.type === 'post'){
    deletePage(page);
    createPage({
      ...page,
      path: `/blog/${frontmatter.category}${page.path}`
    })
  }
};