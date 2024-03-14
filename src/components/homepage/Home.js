import React from 'react'
import img2 from '../../assets/Images/img2.jpg'
import cust2 from '../../assets/Images/cust2.jpg'
const Home = (props) =>{
    return (<>
        <header>
            <div class="hero-text-box">
                <h1>Welcome to Piggy Bank </h1>
                <a class="btn btn-full" href="#">Dashboard</a>
                <a class="btn btn-ghost" href="#">Know More</a>
            </div>
        </header>
        <section class="section-features" id="section-feat">
            <div class="row">
                <h2 class="cust"> Doing Transactions made easy</h2>
                <p class="long-copy cust" >
                    Empowering your financial journey, one transaction at a time.
                </p>
            </div>
        </section>
        <section class="section-meals" id="section-meal">
            <ul class="meals-showcase clearfix">
                <li>
                    <figure class="meal-photo">
                        <img src={img2} alt="food-image" />

                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                        <img src={img2} alt="food-image" />

                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                        <img src={img2} alt="food-image" />

                    </figure>
                </li>
            </ul>
        </section>
        <section class="section-testimonials" id="section-testi">
            <div class="row">
                <h2 class="cust">Valuable Customer Feedbacks!</h2>
            </div>
            <div class="card-group container" id="about">
                <div class="card" style={{ float: 'left', width: '30%', marginRight: '1%', marginBottom: '0.5em', backgroundColor: 'white' }}>
                    <img src={cust2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Emma Scott</h5>
                        <p class="card-text">
                            The website is easy to use. The information through the website is really helpful, helps in saving a lot of our time
                        </p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card" style={{ float: 'left', width: '30%', marginRight: '1%', marginBottom: '0.5em', backgroundColor: 'white' }}>
                    <img src={cust2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Cassie Geller</h5>
                        <p class="card-text">
                            I am a regular customer and have been using this website for a long time to get allocated items. The website is trustable and really useful.
                        </p>
                        <p class="card-text"><small class="text-muted">Last updated 15 mins ago</small></p>
                    </div>
                </div>
                <div class="card" style={{ float: 'left', width: '30%', marginRight: '1%', marginBottom: '0.5em', backgroundColor: 'white' }}>
                    <img src={cust2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Linda Martin</h5>
                        <p class="card-text">
                            A really helpful website with complete transparency. The best thing about the ShePreneur website is its user friendly with no complicated features.
                        </p>
                        <p class="card-text"><small class="text-muted">Last updated 18 mins ago</small></p>
                    </div>
                </div>
            </div>
        </section>
        <section class="summary" id="summaryy">
            <p>
                <div class="row">
                    <h2 class="cust">Know More</h2>
                </div>
                <div class="cust"> Welcome to Piggy Bank, where your financial well-being is our top priority. As a trusted institution with 5+ years of experience, we are dedicated to providing you with reliable and innovative banking solutions tailored to meet your unique needs. Whether you're saving for your future, planning for retirement, or simply managing your day-to-day finances, we're here to support you every step of the way. With our user-friendly online banking platform, convenient mobile app, and personalized customer service, you can bank with confidence, knowing that your financial goals are within reach. Join us today and discover the difference of banking with Piggy Bank.</div>
            </p>
        </section>
        <div class="footer">
            <span><p class="txt">Created by <a href="/ask"> Team MRCK</a> | <span class="far fa-copyright"></span> 2024 All rights reserved. </p> </span>
        </div>
    </>
    )
}
export default Home;