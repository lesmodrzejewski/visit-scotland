const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post

  const postResult = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (postResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      postResult.errors
    )
    return
  }

  const posts = postResult.data.allContentfulBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

  // Define a template for trivia

  const triviaResult = await graphql(
    `
      {
        allContentfulTrivia {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (triviaResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      triviaResult.errors
    )
    return
  }

  const triviaPosts = triviaResult.data.allContentfulTrivia.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (triviaPosts.length > 0) {
    triviaPosts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : triviaPosts[index - 1].slug
      const nextPostSlug =
        index === triviaPosts.length - 1 ? null : triviaPosts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: path.resolve('./src/templates/trivia.js'),
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
