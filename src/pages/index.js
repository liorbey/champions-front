import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Footer from '../components/footer'
import ArticlePreview from '../components/article-preview'
import styles from './all.styles.css'
import heroimg from '../images/5228730.jpg'
import gcpLogo from '../images/GCP-Clinical-Research-1250-e1565278111269.jpeg'
import scientistLogo from '../images/Scientist.png'
import scienceExchangeLogo from '../images/Science_Exchange_logo.png'
import acuLogo from '../images/acu-aaalac1971-logo.png'
import logo from "../images/Champions_Logo_White.svg"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="sect sect--padding-top" style={{ paddingTop: 30 + 'px' }}>
            <div className="container">
              <div className="row" style={{ marginTop: 5 + 'em' }}>
                <div className="col-sm-6" style={{ marginTop: 5 + 'em' }}>
                  <div className="site">
                    <h1 className="site__title">Accelerating Drug Development</h1>
                    <h2 className="site__subtitle">Transforming drug discovery through innovative pharmacology, biomarker,
                    and data platforms.
                    </h2>
                    <div className="site__box-link">
                      <a className="btn btn--width" href="#" style={{ textDecoration: 'none' }}>Lumin Demo</a>
                      <a className="btn btn--revert btn--width" style={{ textDecoration: 'none' }} href="#">Contact</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img src={heroimg} style={{ marginLeft: 2 + 'rem', width: "80%" }} />
                  <br />
                  <a href='https://www.freepik.com/vectors/people'>People vector created by stories - www.freepik.com</a>            </div>
              </div>
            </div>
          </div>
          <div className="slider" style={{ backgroundColor: 'white' }}>
            <div className="slide-track">
            <div className="slide">
                <img src={gcpLogo} alt='gcp logo' style={{ padding: 10 + 'px', height: 100+'px', width: 250 + 'px'}}/>
              </div>
              <div className="slide">
                <img src={acuLogo} alt='acu logo' style={{ padding: 10 + 'px', height: 100+'px', width: 250 + 'px'}}/>
              </div>
              <div className="slide">
              <img src={scientistLogo} alt='scientist logo' style={{ padding: 10 + 'px', height: 100+'px', width: 250 + 'px'}}/>
              </div>
              <div className="slide">
              <img src={scienceExchangeLogo} alt='science exchange logo' style={{ padding: 10 + 'px', height: 100+'px', width: 250 + 'px'}}/>
              </div>
              <div className="slide">
                <img src={gcpLogo} alt='gcp logo' style={{ padding: 10 + 'px', height: 100+'px', width: 250 + 'px'}}/>
              </div>
              <div className="slide">
                <img src={acuLogo} alt='acu logo' style={{ padding: 10 + 'px', height: 100+'px', width: 250 + 'px'}}/>
              </div>
              <div className="slide">
              <img src={scientistLogo} alt='scientist logo' style={{ padding: 10 + 'px', height: 100+'px', width: 250 + 'px'}}/>
              </div>
              <div className="slide">
              <img src={scienceExchangeLogo} alt='science exchange logo' style={{ padding: 10 + 'px', height: 100+'px', width: 250 + 'px'}}/>
              </div>
            </div>
          </div>

          <div className="sect sect--padding-bottom">
            <div className="container">
              <div className="row" style={{ marginBottom: 2 + 'em' }}>
                <h1 className="row__title">
                  SASS offering
            </h1>
              </div>
              <div className="row">
                <div className="col-sm-6" style={{ marginTop: 50 + 'px' }}>
                  <h2 className="price-box__title">
                    Our latest innoation: Lumin
                </h2>
                  <p>
                    Our newest innovation, Lumin Bioinformatics, is highlighted in the video. Lumin is a revolutionary
                    data interpretation software capable of analyzing proteomic, genomic and transcriptomic datasets in
                    real time, providing scientists with novel insights into drug discovery.
                    <br /><br />
                    Champions Oncology is your partner in meeting today's needs and innovating for tomorrow's challenges.
                </p>
                </div>
                <div className="col-sm-6">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/qma6G6-Hj8c"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="sect sect--white sect--no-padding">
    <div className="container">
        <div className="row" style={{ marginBottom: 2 + 'em' }}>
            <h1 className="row__title">
                Technology-enabled Solutions
            </h1>
        </div>
        <div className="row row--center row--margin">
            <div className="col-md-4 col-sm-4 price-box price-box--violet">
                <div className="price-box__wrap">
                    <div className="price-box__img"></div>
                    <h1 className="price-box__title">
                        Enabling Translational Strategies </h1>
                    <p className="price-box__people">
                        Our preeminent translational research platforms utilize computational analytics, superior PDX
                        pharmacology tools, and sophisticated biomarker strategies to gain predictive insights into
                        clinical trial responses and maximize the success of a clinical program.
                    </p>
                    <p className="price-box__feat">
                        Features
                    </p>
                    <ul className="price-box__list">
                        <li className="price-box__list-el">computational analytics</li>
                        <li className="price-box__list-el">superior PDX pharmacology tools</li>
                        <li className="price-box__list-el">sophisticated biomarker strategies</li>
                    </ul>
                </div>
            </div>

            <div className="col-md-4 col-sm-4 price-box price-box--violet">
                <div className="price-box__wrap">
                    <div className="price-box__img"></div>
                    <h1 className="price-box__title">
                        Providing Clinical Insights
                    </h1>
                    <p className="price-box__people">
                        Leveraging a GCLP-compliant laboratory, we excel in the development of custom validated assays
                        to deliver the in-depth understanding of targeted cell populations necessary to optimally
                        support critical decision-making in all phases of drug development.
                    </p>
                    <p className="price-box__feat">
                        Features
                    </p>
                    <ul className="price-box__list">
                        <li className="price-box__list-el">custom validated assays</li>
                    </ul>
                </div>
            </div>

            <div className="col-md-4 col-sm-4 price-box price-box--blue">
                <div className="price-box__wrap">
                    <div className="price-box__img"></div>
                    <h1 className="price-box__title">
                        Establishing Discovery Hypotheses </h1>
                    <p className="price-box__people">
                        Our discovery platforms couple innovative in vivo and ex vivo pharmacology solutions with
                        sophisticated analytical and computational tools to provide a comprehensive view of early stage
                        therapeutic programs. These platforms provide the deep understanding needed to make the critical
                        decisions on the path of a therapeutic program.
                    </p>
                    <p className="price-box__feat">
                        Features
                    </p>
                    <ul className="price-box__list">
                        <li className="price-box__list-el">in vivo and ex vivo pharmacology solutions</li>
                        <li className="price-box__list-el">sophisticated analytical and computational tools</li>
                    </ul>
                </div>
            </div>


        </div>
    </div>
</div>
<div className="sect sect--violet " style={{ backgroundColor: '#056DF7' }}>
    <div className="container">
        <div className="row">
            <h1 className="row__title" style={{ color: 'white' }}>
                AI Focused </h1>
            <h2 className="row__sub" style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
            <div className="row mt-3">
                <div className="col-sm-4" style={{ border: '#2FAB71', padding: 10 + 'px' }}>
                    <div className="card mb-3" style={{maxWidth: 18 + 'rem', color: '#4c5156'}}>
                        <div className="card-header text-center"><i className="fad fa-5x fa-flask"
                                                                style={{color: '#2fab71', margin: 10 + 'px'}}></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4" style={{ border: '#2FAB71', padding: 10 + 'px' }}>
                    <div className="card mb-3" style={{maxWidth: 18 + 'rem', color: '#4c5156'}}>
                        <div className="card-header text-center"><i className="fad fa-5x fa-database"
                                                                style={{color: '#2fab71', margin: 10 + 'px'}}></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4" style={{ border: '#2FAB71', padding: 10 + 'px' }}>
                    <div className="card mb-3" style={{maxWidth: 18 + 'rem', color: '#4c5156'}}>
                        <div className="card-header text-center"><i className="fad fa-5x fa-chart-scatter"
                                                                style={{color: '#2fab71', margin: 10 + 'px'}}></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="sect sect--padding-bottom" id="contact">
    <div className="container">
        <div className="row">
            <h1 className="row__title">
                Contact Us </h1>
            <h2 className="row__sub">If you would like to learn more about Champions Oncology, <br/>speak with us about a
                study, request a quote or partner with us, <br/>we'd love to hear from you, and we will follow up with
                you within 24 hours.</h2>
        </div>
        <div className="row row--margin">
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <div className="contacts">
                    <a href="#" className="contacts__link"><img src={logo}
                                                            width="100px"/></a>

                    <p className="contacts__address">
                        <b>Corporate Headquarters</b><br/>
                        One University Plaza<br/>
                        Suite 307<br/>
                        Hackensack, NJ 07601
                        <br/><br/>
                        <b>Research Headquarters</b><br/>
                        1330 Piccard Drive<br/>
                        Suite 025 & Suite 104<br/>
                        Rockville, MD 20850
                    </p>
                    <a className="btn">Media Inquires</a>
                </div>
            </div>
            <div className="col-md-6">
                <form id="contact" className="form">
                    <div className="form-group">
                        <select className="form__field form__select" placeholder="product">
                            <option value="lumin">Lumin</option>
                            <option value='1'>sdc</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="form__field--half">
                            <input type="text" placeholder="First Name" className="form__field form__text"></input>
                        </div>
                        <div className="form__field--half">
                            <input type="text" placeholder="Last Name" className="form__field form__text"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form__field--half">
                            <input type="text" placeholder="Company Name" className="form__field form__text"></input>
                        </div>
                        <div className="form__field--half">
                            <input type="text" placeholder="Work Email Address" className="form__field form__text"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form__field--half">
                            <input type="text" placeholder="Job Title" className="form__field form__text"></input>
                        </div>
                        <div className="form__field--half">
                            <input type="text" placeholder="Phone Number" className="form__field form__text"></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea type="text" placeholder="Your messsage*"
                                  className="form__field form__textarea"></textarea>
                        <button className="btn btn--up btn--width" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
</div>

        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
