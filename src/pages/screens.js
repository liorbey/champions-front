import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class Screens extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const currentScreens = get(this, 'props.data.allContentfulScreens.edges')
    const caseStudies = get(this, 'props.data.allContentfulScreens.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div class="sect sect--padding-top" style={{ paddingTop: 10 + 'px' }}>
            <div class="container">
              <div class="row" style={{ marginTop: 5 + 'em' }}>
                <div class="col-sm-12">
                  <div class="site">
                    <h1 class="site__title">Screens</h1>
                    
                  </div>
                </div>
              </div>
              <div className="wrapper">
            <h2 className="section-headline">Currently Enrolling</h2>
            <ul className="article-list">
              {currentScreens.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
            <h2 className="section-headline">Past Screens</h2>
            <ul className="article-list">
              {caseStudies.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
            </div>
          </div>          
        </div>
      </Layout>
    )
  }
}

export default Screens

export const pageQuery = graphql`
  query ScreenQuery {
    allContentfulScreens(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
