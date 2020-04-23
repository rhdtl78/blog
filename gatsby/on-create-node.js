const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const fs = require('fs')
const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug
      })
    } else {
      const value = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: 'slug',
        value
      })
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(tag => `/tag/${tag}`)
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }

    if (node.frontmatter.category) {
      const categorySlug = `/category/${node.frontmatter.category}`
      createNodeField({ node, name: 'categorySlug', value: categorySlug })
    }

    if (node.frontmatter.images) {
      const { images } = node.frontmatter
      const mediaDir = 'static/media/portfolio'

      const imageFiles = fs
        .readdirSync([mediaDir, images].join('/'))
        .map(file => ['/media/portfolio/' + images, file].join('/'))
      createNodeField({ node, name: 'images', value: imageFiles })
    }
  }
}

module.exports = onCreateNode
