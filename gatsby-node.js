const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const caseStudy = path.resolve('./src/templates/case-study.js')
    const screenEnroll = path.resolve('./src/templates/screen-enrolls.js')

    //const factSheet = path.resolve('./src/templates/fact-sheet.js')
    //const infographic = path.resolve('./src/templates/infographic.js')
    //const modelSpotlight = path.resolve('./src/templates/model-spotlight.js')
    //const pdxModelCohort = path.resolve('./src/templates/pdx-model-cohort.js')
    //const poster = path.resolve('./src/templates/poster.js')
    //const publication = path.resolve('./src/templates/publication.js')
    //const scientificBlog = path.resolve('./src/templates/scientific-blog.js')
    //const video = path.resolve('./src/templates/video.js')
    //const webinar = path.resolve('./src/templates/webinar.js')
    //const whitePaper = path.resolve('./src/templates/white-paper.js')

    resolve(
      graphql(
        `
        {
          allContentfulBlogPost {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulCaseStudy {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulScreens {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const caseStudies = result.data.allContentfulCaseStudy.edges
        caseStudies.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: caseStudy,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const screenEnrolls = result.data.allContentfulScreens.edges
        screenEnrolls.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: screenEnroll,
            context: {
              slug: post.node.slug,
            },
          })
        })


      })
      
    )
  })
}

/* extragraphql
allContentfulFactSheet {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulInforgraphic {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulModelSpotlights {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulPdxModelCohorts {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulPosters {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulPublications {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulScientificBlogs {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulWebinars {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulVideos {
            edges {
              node {
                title
                slug
              }
            }
          }
          allContentfulWhitePapers {
            edges {
              node {
                title
                slug
              }
            }
          }

          const factSheets = result.data.allContentfulFactSheet.edges
        factSheets.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: factSheet,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const infographics = result.data.allContentfulInforgraphic.edges
        infographics.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: infographic,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const modelSpotlights = result.data.allContentfulModelSpotlights.edges
        modelSpotlights.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: modelSpotlight,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const pdxModelCohorts = result.data.allContentfulPdxModelCohorts.edges
        pdxModelCohorts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: pdxModelCohort,
            context: {
              slug: post.node.slug,
            },
          })
        })
        const posters = result.data.allContentfulPosters.edges
        posters.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: poster,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const publications = result.data.allContentfulPublications.edges
        publications.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: publication,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const scientificBlogs = result.data.allContentfulScientificBlogs.edges
        scientificBlogs.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: scientificBlog,
            context: {
              slug: post.node.slug,
            },
          })
        })
        const videos = result.data.allContentfulVideos.edges
        videos.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: video,
            context: {
              slug: post.node.slug,
            },
          })
        })
        const webinars = result.data.allContentfulWebinars.edges
        webinars.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: webinar,
            context: {
              slug: post.node.slug,
            },
          })
        })
        const whitePapers = result.data.allContentfulWhitePaper.edges
        whitePapers.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: whitePaper,
            context: {
              slug: post.node.slug,
            },
          })
        })
          */