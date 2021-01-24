import React from 'react'
import { Link } from 'gatsby'
import { Divider, Layout, Tag } from 'antd'
import Comments from './Comments'
import Content from './Content'
import Tags from './Tags'
import getCategoryColor from '../../utils/get-category-color'

const AntContent = Layout.Content

const Post = ({ post, allCategories }) => {
  const { html } = post
  const { tagSlugs, slug, categorySlug } = post.fields
  const { tags, title, date, category } = post.frontmatter

  const categoryColor = getCategoryColor({ allCategories, category })

  return (
    <AntContent className="p-10">
      <Link className="" to="/">
        ← All Articles
      </Link>

      <div className="">
        <Content body={html} title={title} date={date} />
      </div>

      <hr />
      <div className="mt-2 mb-2">
        <span style={{
          fontWeight: 'bold'
        }}>쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.</span>
        <div
          dangerouslySetInnerHTML={{ __html: `<script src="https://ads-partners.coupang.com/g.js"></script><script>new PartnersCoupang.G({"id":400629,"template":"carousel","trackingCode":"AF8809335","width":"100%","height":"100%"});</script>` }} />
      </div>
      <hr />

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

      <div className="mt-10">
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </AntContent>
  )
}

export default Post
