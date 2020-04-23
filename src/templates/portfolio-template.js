import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio/Portfolio'
import Sidebar from '../components/Sidebar'
import { useSiteMetadata } from '../hooks'

const PortfolioTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle, keywords } = useSiteMetadata()
  const {
    title: postTitle,
    description: postDescription
  } = data.markdownRemark.frontmatter
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      keywords={keywords}
    >
      <Sidebar hideMobile={true} />
      <Portfolio post={data.markdownRemark} allCategories={pageContext.allCategories} />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
        categorySlug
        images
      }
      frontmatter {
        date
        description
        category
        tags
        title
      }
    }
  }
`

export default PortfolioTemplate
