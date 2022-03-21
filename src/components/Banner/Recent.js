import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Title from './Title'

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 4) {
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

const Recent = () => {
  const {allMdx:{nodes:posts}} = useStaticQuery(query);

  return (
    <Wrapper>
      <Title title={'Recent'}/>
      {
        posts.map(({frontmatter:post}, index) => {
          return <Link to={`/posts/${post.slug}`} key={index} className={'post'}>
            <GatsbyImage alt={post.title} image={getImage(post.image)} className={'img'}/>
            <div>
              <h5>{post.title}</h5>
              <p>{post.date}</p>
            </div>

          </Link>
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .post {
    display: grid;
    grid-template-columns: 75px 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .img {
    border-radius: var(--radius);
  }
  h5 {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    letter-spacing: 0;
    line-height: 1.2;
    color: var(--clr-grey-1);
  }
  p {
    font-size: 0.6rem;
    margin-bottom: 0;
    color: var(--clr-grey-5);
  }
  .post:hover {
    h5 {
      color: var(--clr-primary-5);
    }
  }
`

export default Recent
