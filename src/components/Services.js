import React from "react";
import violin from "../violin.jpg";
import sax from "../sax.jpg";
import guitar from "../guitar.jpg";
import another from "../another.jpg";
import piano from "../piano.jpg";
import drum from "../drum.jpg";

const OurServices = ({ bgColor }) => {
    console.log(violin);
    return (
        <div className={` ${bgColor} services-page`}>
            <h2 className="pb-3">Our Services</h2>
            <div className="">&nbsp;</div>

            <div class="container">
                <div class="row template_item_grid trinity_content justify-content-center align-items-center ">
                    <div class="row g-5">
                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <a href="/qualifications/music/diplomas"><img src={sax} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={sax} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={sax} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <a href="/qualifications/music/diplomas"><h3>Vocation</h3></a>
                                    <p>Our diplomas (ATCL, LTCL and FTCL) are for those looking to take their professional development to the next level in music performance, teaching or theory.</p>
                                </div>
                            </div>
                        </div>

                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3 ">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <a href="/qualifications/music/diplomas"><img src={piano} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={piano} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={piano} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <a href="/qualifications/music/grade-exams"><h3>Graceworths Musical School</h3></a>
                                        <p>
                                            <span>Our graded exams from Initial to Grade 8 allow learners</span> to perform to their strengths; the flexible structure enables learners to gain recognition for their own unique skills as performers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <a href="/qualifications/music/diplomas"><img src={guitar} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={guitar} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={guitar} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <a href="/qualifications/music/digital-music-grades"><h3>Graceworths Voice and Album</h3></a>
                                        <p>Digital Grades and Diplomas sit alongside our face-to-face exams, providing even more choice and flexibility in how a regulated graded qualification can be achieved.</p>                                                </div>


                                </div>
                            </div>
                        </div>


                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <a href="/qualifications/music/diplomas"><img src={another} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={another} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={another} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <a href="/qualifications/music/grade-exams/theory"><h3>Theory of Music Grades</h3></a>
                                        <p>Our Theory of Music scheme corresponds to modern teaching and learning styles, with workbooks presenting the study of musical theory in bright and practical formats.</p>                                                </div>


                                </div>
                            </div>
                        </div>


                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <a href="/qualifications/music/diplomas"><img src={violin} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={violin} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={violin} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <a href="/qualifications/music/music-certificate-exams"><h3>Music Certificate Exams</h3></a>
                                        <p>Certificate exams offer a performance-only alternative to graded exams for solo performers or groups, at Foundation, Intermediate and Advanced level. Digital Grades and Diplomas sit alongside our face-to-face exams, providing even more choice and flexibility in how a regulated graded qualification can be achieved.</p>                                                </div>


                                </div>
                            </div>
                        </div>


                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <a href="/qualifications/music/diplomas"><img src={drum} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={drum} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                        <div class="carousel-item">
                                            <a href="/qualifications/music/diplomas"><img src={drum} class="card-img-top img-fluid" alt="violin" /></a>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <a href="/qualifications/music/rock-and-pop"><h3>Graceworths Local/International Languages</h3></a>
                                        <p>Real songs, real skills, real progress. With our huge range of hit local air and international songs spanning all contemporary styles, you get to play/sing the music you love, while developing the huge range of skills that professional musicians need.</p>                                                </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </div>
        
    );
};

export default OurServices;
