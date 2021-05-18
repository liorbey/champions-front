import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Footer from '../components/footer'
import ArticlePreview from '../components/article-preview'
import styles from './all.styles.css'

class Screens extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')

        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }}>
                    <Helmet title={siteTitle} />
                    <div class="sect sect--padding-top" style={{ paddingTop: 10 + 'px' }}>
                        <div class="container">
                            <div class="row" style={{ marginTop: 5 + 'em' }}>
                                <div class="col-sm-6">
                                    <div class="site">
                                        <h1 class="site__title">About Champions Oncology</h1>
                                        <h2 class="site__subtitle">At Champions Oncology, we are passionate about aiding the pharmaceutical industry in developing the innovative treatments of today and the cures for tomorrow. We provide end-to-end research and development solutions throughout the drug development lifecycle.

                                        From screens using commercially-available and custom cell lines, to studies leveraging syngeneic or traditional patient-derived studies xenograft (PDX) models, and modeling treatment response in the clinic, Champions Oncology is your partner in meeting today’s needs and innovating for tomorrow’s challenges.
                    </h2>

                                    </div>
                                </div>
                                <div class="col-sm-6 ">
                                    <a class="btn btn--width" href="#history" style={{ textDecoration: 'none', position: 'relative', top: '50%', left: '50%' }}>Our History</a>
                                </div>
                            </div>
                            <div class="row" style={{ marginTop: 5 + 'em' }}>
                                <div class="col-sm-6" style={{ marginTop: 5 + 'rem' }}>
                                    <img src="https://www.championsoncology.com/hs-fs/hubfs/CO_Infographic%204_JMv3-1.jpg?width=3123&amp;height=1041&amp;name=CO_Infographic%204_JMv3-1.jpg" class="hs-image-widget " width="3123" height="1041" style={{maxWidth:'100%', height: 'auto'}} alt="CO_Infographic 4_JMv3-1" title="CO_Infographic 4_JMv3-1" srcset="https://www.championsoncology.com/hs-fs/hubfs/CO_Infographic%204_JMv3-1.jpg?width=1562&amp;height=521&amp;name=CO_Infographic%204_JMv3-1.jpg 1562w, https://www.championsoncology.com/hs-fs/hubfs/CO_Infographic%204_JMv3-1.jpg?width=3123&amp;height=1041&amp;name=CO_Infographic%204_JMv3-1.jpg 3123w, https://www.championsoncology.com/hs-fs/hubfs/CO_Infographic%204_JMv3-1.jpg?width=4685&amp;height=1562&amp;name=CO_Infographic%204_JMv3-1.jpg 4685w, https://www.championsoncology.com/hs-fs/hubfs/CO_Infographic%204_JMv3-1.jpg?width=6246&amp;height=2082&amp;name=CO_Infographic%204_JMv3-1.jpg 6246w, https://www.championsoncology.com/hs-fs/hubfs/CO_Infographic%204_JMv3-1.jpg?width=7808&amp;height=2603&amp;name=CO_Infographic%204_JMv3-1.jpg 7808w, https://www.championsoncology.com/hs-fs/hubfs/CO_Infographic%204_JMv3-1.jpg?width=9369&amp;height=3123&amp;name=CO_Infographic%204_JMv3-1.jpg 9369w" sizes="(max-width: 3123px) 100vw, 3123px" />
                                </div>
                                <div class="col-sm-6">
                                    <h2 class="site__subtitle">Champions Oncology was founded in 2007 with the goal of utilizing ground breaking, well-characterized Patient-derived Xenograft Models (PDX Models) to test targeted therapies to identify potential therapeutic options for cancer patients. With clinical sites and laboratories strategically localized around the globe, Champions Oncology is able to obtain samples, coordinate studies worldwide and in turn, generate therapeutic testing results faster. We pride ourselves on becoming part of your scientific team and focus on providing high-quality data to you, on time, every time.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sect sect--padding-bottom" id="history">
                        <div class="container">
                            <div class="row" style={{ marginBottom: 2 + 'em' }}>
                                <h1 class="row__title">
                                    Our History
                                        </h1>
                            </div>
                            <div class="row" style={{ marginTop: 2 + 'em' }}>
                                <div class="col-sm-6" >
                                    Champions Oncology, founded in 2007, has grown from a company with a single service platform to a full-service CRO, offering services in the preclinical through clinical stages of drug development. The company has strategically grown over the last decade by anticipating the needs of the pharmaceutical and biotechnology industries that we partner with every day, and building service platforms that can predict efficacy of their therapeutics in the clinic. As the company continues to grow in the future, we continue to innovate solutions that add value for our customers and ultimately benefit patients.            </div>
                                <div class="col-sm-6" >
                                    <img src="https://www.championsoncology.com/hubfs/About%20Section/Champions%20History%20Photo_28Jan2020.png" class="hs-image-widget " style={{maxWidth:'100%', height: 'auto'}}  alt="Champions History Photo_28Jan2020" title="Champions History Photo_28Jan2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sect sect--padding-bottom" id="missionStatement">
                        <div class="container">
                            <div class="row" style={{ marginBottom: 2 + 'em' }}>
                                <h1 class="row__title">
                                    Our Mission Statement & Values
            </h1>
                            </div>
                            <div class="row" style={{ marginTop: 2 + 'em' }}>
                                <div class="col-sm-6">
                                    Through scientific excellence, we focus on meeting the challenges of cancer drug development by providing innovative solutions that ultimately improve patients’ lives.
            </div>
                                <div class="col-sm-6">
                                    <ul class="list-group">
                                        <li class="list-group-item text-center" style={{border: 'none'}}><i class="fad fa-star-christmas" style={{color:'#2fab71', marginRight:5 + 'px'}}></i> Scientific Excellence</li>
                                        <li class="list-group-item text-center" style={{border: 'none'}}><i class="fad fa-integral" style={{color:'#2fab71', marginRight:5 + 'px'}}></i>Integrity</li>
                                        <li class="list-group-item text-center" style={{border: 'none'}}><i class="fad fa-handshake" style={{color:'#2fab71', marginRight:5 + 'px'}}></i>Respect</li>
                                        <li class="list-group-item text-center" style={{border: 'none'}}><i class="fad fa-users" style={{color:'#2fab71', marginRight:5 + 'px'}}></i>Team Work</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sect sect--padding-bottom" id="corporateCitizenship">
                        <div class="container">
                            <div class="row" style={{ marginBottom: 2 + 'em' }}>
                                <h1 class="row__title">
                                    Corporate Citizenship
            </h1>
                            </div>
                            <div class="row" style={{ marginTop: 2 + 'em' }}>
                                <div class="col-sm-12">
                                    As a company whose goals are focused on giving patients a better quality of life and enabling pharmaceutical and biotechnology companies to bring new therapies and potential cures to market faster, we are also dedicated to the cause.

                                    Patients suffering from oncologic diseases have grown dramatically over the last 10 years, despite the innovation and novel immunotherapies that have recently been introduced in the marketplace. Therefore, Champions Oncology is dedicated to providing scientific excellence in the work that we do each day as well as donating to worldwide oncology associations. Together, we will work to find a cure.
            </div>
                            </div>
                        </div>
                    </div>
                    <div class="sect sect--padding-bottom" id="corporateCitizenship">
                    
                        <div class="container">
                            <div class="row" style={{ marginBottom: 2 + 'em' }}>
                                <h1 class="row__title">
                                    Capabilities
            </h1>
                            </div>
                            <div class="row" style={{ marginTop: 2 + 'em' }}>
                                <div class="col-sm-6">
                                    Champions Oncology provides end-to-end innovative solutions, from preclinical throughout clinical drug development to our clients in the pharmaceutical and biotechnology sectors as well as academic institutions. At the core of our services is the Champions TumorGraft® platform, a highly characterized, comprehensive and unique set of PDX tumor models, which preserve the biological characteristics of human tumors and are highly predictive of clinical outcomes.

                                    Champions Oncology also has the ability to model disease phenotypes through novel Ex Vivo Platforms. Clinical Flow Cytometry and GCLP-Compliant Analytical Platforms allow clients to test innovative therapeutics preclinically and then move directly into the clinic with the same confidence, integrity and scientific excellence, that Champions Oncology provides.

               As our services and capabilities span the full scope of the drug development process, Champions Oncology is your partner throughout the lifecycle of your therapeutic. Each model, assay and panel can be customized for your drug – giving you custom services that meet your needs.</div>
                                <div class="col-sm-6"><img src="https://www.championsoncology.com/hubfs/Graphic-for-Capabilities-Page_31Jan2020.jpg" class="hs-image-widget " style={{maxWidth:'100%', height: 'auto'}} alt="Graphic-for-Capabilities-Page_31Jan2020" title="Graphic-for-Capabilities-Page_31Jan2020"/></div>
                                </div>
                            </div>
                        </div>
                        <div class="sect sect--padding-bottom" id="corporateCitizenship">
                            <div class="container">
                                <div class="row" style={{ marginBottom: 2 + 'em' }}>
                                    <h1 class="row__title">
                                        Capabilities
            </h1>
                                </div>
                                <div class="row" style={{ marginTop: 2 + 'em' }}>
                                    <div class="col-sm-6">
                                    </div>
                                    <div class="col-sm-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      </Layout>
    )
  }
}

export default Screens

