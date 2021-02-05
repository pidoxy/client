import React from "react";
import violin from "../violin.svg";
import drum from "../drum.svg";
import drum2 from "../pic.svg";

const OurServices = ({ bgColor }) => {
    console.log(violin);
    return (
        <div className={` ${bgColor} services-page mb-3`}>
            <h2 className="pb-3">Our Services</h2>
            <div className="">&nbsp;</div>

            <div class="container">
                <div class="row template_item_grid trinity_content justify-content-center align-items-center ">
                    <div class="row g-5">
                        <div className="col-md-6 col-lg-4 col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <a href="/qualifications/music/diplomas"><img src={drum} class="card-img-top img-fluid" alt="violin" /></a>
                                <div class="card-body">
                                    <a href="/qualifications/music/diplomas"><h3>Vocation</h3></a>
                                    <p>Our diplomas (ATCL, LTCL and FTCL) are for those looking to take their professional development to the next level in music performance, teaching or theory.</p>                                                </div>


                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <a href="/qualifications/music/grade-exams/theory"><img src={drum} alt="violin" class="card-img-top" /></a>
                                <div class="card-body">
                                    <a href="/qualifications/music/grade-exams/theory"><h3>Theory of Music Grades</h3></a>
                                    <p>Our Theory of Music scheme corresponds to modern teaching and learning styles, with workbooks presenting the study of musical theory in bright and practical formats.</p>                                                </div>


                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <a href="/qualifications/music/digital-music-grades"><img src={drum} class="card-img-top img-fluid" alt="violin" /></a>
                                <div class="card-body">
                                    <a href="/qualifications/music/digital-music-grades"><h3>Graceworths Voice and Album</h3></a>
                                    <p>Digital Grades and Diplomas sit alongside our face-to-face exams, providing even more choice and flexibility in how a regulated graded qualification can be achieved.</p>                                                </div>


                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <a href="/qualifications/music/music-certificate-exams"><img src={drum2} class="card-img-top img-fluid" alt="violin" /></a>
                                <div class="card-body">
                                    <a href="/qualifications/music/music-certificate-exams"><h3>Music Certificate Exams</h3></a>
                                    <p>Certificate exams offer a performance-only alternative to graded exams for solo performers or groups, at Foundation, Intermediate and Advanced level.</p>                                                </div>


                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <a href="/qualifications/music/digital-music-diplomas"><img src={drum2} class="card-img-top img-fluid" alt="violin" /></a>
                                <div class="card-body">
                                    <a href="/qualifications/music/digital-music-diplomas"><h3>Digital Music Diplomas</h3></a>
                                    <p>Digital Grades and Diplomas sit alongside our face-to-face exams, providing even more choice and flexibility in how a regulated graded qualification can be achieved.</p>                                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-12 mb-3 mb-0-md">
                            <div class="card p-3 ">

                                <a href="/qualifications/music/grade-exams"><img src={drum2} class="card-img-top img-fluid" alt="violin" /></a>
                                <div class="card-body">
                                    <a href="/qualifications/music/grade-exams"><h3>Graceworths Musical School</h3></a>
                                    <p>
                                        <span>Our graded exams from Initial to Grade 8 allow learners</span> to perform to their strengths; the flexible structure enables learners to gain recognition for their own unique skills as performers.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-4 col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <a href="/qualifications/music/rock-and-pop"><img src={drum2} class="card-img-top img-fluid" alt="violin" /></a>
                                <div class="card-body">
                                    <a href="/qualifications/music/rock-and-pop"><h3>Graceworths Local/International Languages</h3></a>
                                    <p>Real songs, real skills, real progress. With our huge range of hit songs spanning all contemporary styles, you get to play the music you love, while developing the huge range of skills that professional musicians need.</p>                                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
