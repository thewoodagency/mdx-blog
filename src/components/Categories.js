import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const Categories = () => {
  const {
    allMdx: { nodes: categories },
  } = useStaticQuery(query)
  console.log(categories)
  const categoryList = {}
  categories.forEach(({ frontmatter }) => {
    if (categoryList[frontmatter.category]) {
      categoryList[frontmatter.category]++
    } else {
      categoryList[frontmatter.category] = 1
    }
  })
  console.log('category list', categoryList);
  const sortedCategories = Object.entries(categoryList).sort((a, b) => {
    return a[0].localeCompare(b[0])
  })

  console.log('list', sortedCategories)

  return (
    <ul className={'categories'}>
      {sortedCategories.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/categories/${category[0]}`} className={'category'}>
              {category[0].toUpperCase()}({category[1]})
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          category
        }
      }
    }
  }
`
