import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
const PostsPage = ({data}) => {
  const {allMdx:{nodes:posts}} = data

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={'All Posts'} />
    </Layout>
  )
}

export default PostsPage

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
