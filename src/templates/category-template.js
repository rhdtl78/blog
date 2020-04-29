import { graphql } from 'gatsby'
import React from 'react'
import Feed from '../components/Feed'
import Layout from '../components/Layout'
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import Sidebar from '../components/Sidebar'
import { useSiteMetadata } from '../hooks'

const CategoryTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle, keywords } = useSiteMetadata()

  const {
    category,
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
      ? `${category} - Page ${currentPage} - ${siteTitle}`
      : `${category} - ${siteTitle}`

  return (
    <Layout title={pageTitle} description={siteSubtitle} keywords={keywords}>
      <Sidebar />
      <Page title={`Category: ${category}`}>
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
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: {
          category: { eq: $category }
          template: { ne: "page" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            categorySlug
            slug
            tagSlugs
          }
          frontmatter {
            date
            description
            tags
            category
            title
          }
        }
      }
    }
  }
`

export default CategoryTemplate
