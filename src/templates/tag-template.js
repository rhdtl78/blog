import { graphql } from 'gatsby'
import React from 'react'
import Feed from '../components/Feed'
import Layout from '../components/Layout'
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import Sidebar from '../components/Sidebar'
import { useSiteMetadata } from '../hooks'

const TagTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle, keywords } = useSiteMetadata()

  const {
    tag,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
    allCategories
  } = pageContext

  const { edges } = data.allMarkdownRemark
  const pageTitle =
    currentPage > 0
      ? `All Posts tagged as "${tag}" - Page ${currentPage} - ${siteTitle}`
      : `All Posts tagged as "${tag}" - ${siteTitle}`

  return (
    <Layout title={pageTitle} description={siteSubtitle} keywords={keywords}>
      <Sidebar />
      <Page title={`Tag: ${tag}`}>
        <Feed edges={edges} allCategories={allCategories} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          template: { ne: "page" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
            tagSlugs
          }
          frontmatter {
            title
            date
            tags
            category
            description
          }
        }
      }
    }
  }
`

export default TagTemplate
