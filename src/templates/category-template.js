import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = ({pageContext:{category}, data}) => {
  //console.log('props', props)
  const {allMdx:{nodes}} = data;

  return (<Layout>
    <Hero/>
    <div className={'page-center'}>
      <Posts posts={nodes} title={`Category | ${category}`}/>
    </div>
  </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query getPostsByCategory($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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
