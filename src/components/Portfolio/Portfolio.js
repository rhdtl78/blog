import { Col, Divider, Layout, Row, Tag } from 'antd'
import { Link } from 'gatsby'
import React from 'react'
import getCategoryColor from '../../utils/get-category-color'
import Content from './Content'
import Images from './Images'
import Tags from './Tags'

const AntContent = Layout.Content

const Portfolio = ({ post, allCategories }) => {
  const { html } = post
  const { tagSlugs, categorySlug, images } = post.fields
  const { tags, title, date, category } = post.frontmatter

  const categoryColor = getCategoryColor({ allCategories, category })

  return (
    <AntContent className="p-10">
      <Link className="" to="/">
        ← All Articles
      </Link>

      <Row>
        <Col lg={12} xl={12}>
          <Content body={html} title={title} date={date} />
        </Col>
        <Col lg={12} xl={12}>
          <Images images={images} />
        </Col>
      </Row>

      <div className="">
        <Link to={categorySlug} className="">
          <Tag
            className={`bg-${categoryColor} text-white border-transparent cursor-pointer`}
          >
            {category}
          </Tag>
        </Link>
        <Divider type="vertical" />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Divider type="vertical" />
      </div>
    </AntContent>
  )
}

export default Portfolio
