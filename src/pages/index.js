import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
const IndexPage = ({data}) => {
  console.log('data', data.allMdx.nodes);
  const {nodes:posts} = data.allMdx
  return (
    <Layout>
      <Hero  showPerson />
      <Posts posts={posts} title={'Latest Posts'} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      nodes {
        frontmatter {
          category
          date(fromNow: true, formatString: "MMMM Do YYYY")
          slug
          title
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
          readTime
        }
        excerpt
      }
    }
  }
`
