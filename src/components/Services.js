import React from "react";

// images
import i2 from "../2.jpg";
import i3 from "../3.jpg";
// import instr1 from "../instrument1.jpeg";
import i5 from "../5.jpg";
import i7 from "../7.jpg";
import i8 from "../8.jpg";
import i10 from "../41.jpg";
import i11 from "../11.jpg";
import i12 from "../12.jpg";
import i13 from "../13.jpg";
import i14 from "../14.jpg";
import i15 from "../15.jpg";
import i16 from "../16.jpg";
import i18 from "../18.jpg";
import i19 from "../19.jpg";
import i21 from "../21.jpg";
import i22 from "../22.jpg";
import i23 from "../23.jpg";
import i24 from "../24.jpg";
import i25 from "../25.jpg";
import i26 from "../26.jpg";
import i27 from "../27.jpg";
import i28 from "../28.jpg";
import i29 from "../28.jpg";
import i30 from "../30.jpg";
import i31 from "../31.jpg";
import i34 from "../34.jpg";
import i33 from "../33.jpg";
import i32 from "../32.jpg";
import i35 from "../35.jpg";
import i42 from "../42.jpg";
import i46 from "../46.jpg";
import i48 from "../48.jpg";
import consulogo from "../6.svg";
import violinGirl from "../violin-girl.jpg";
import piano from "../piano-raw.jpg";
import sax from "../sax-raw2.jpg";
import exam1 from "../exam1.jpeg";
import exam2 from "../exam2.jpeg";
import theory from "../theory.jpg";
import theory1 from "../theory1.jpg";
import theory2 from "../theory2.jpg";
import lang from "../lang.jpg";
import lang1 from "../lang1.jpg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const OurServices = ({ bgColor }) => {
    return (
        <div id="services" className={` ${bgColor} services-page`}>

            <h2 className="pb-5 pt-5">Our Services</h2>
            <h3 className="pb-1 pt-5 container">Music School</h3>

            <div className="">&nbsp;</div>

            <div class="container">

                <div className="pt-3  pb-3 pr-1 pr-sm-5 pl-sm-5 pl-4 card">
                    <OwlCarousel items={1} autoplayTimeout={1500} autoplayHoverPause={true} autoplay={true} loop>
                        <div class="item">
                            <img src={violinGirl} class="card-img-top text-center carousel_content mr-1 img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={piano} class="text-center carousel_content mr-1card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={sax} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i3} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i2} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                    </OwlCarousel>

                    <div className="card-body">
                        <h3>Graceworths Instrument Class</h3>
                        <p>The programme is packaged for children and young adults.
                            Our lessons are structured for instruments ranging from violin, viola, recorder, flute, clarinet, saxophone, trumpet and guitar to voice training as a peculiar instrument.
                        </p>


                    </div>
                </div>

                <div className="pt-3  pb-3 pr-1 pr-sm-5 pl-sm-5 pl-4 card">
                    <OwlCarousel items={1} autoplayTimeout={1500} autoplayHoverPause={true} autoplay={true} loop>
                        <div class="item">
                            <img src={i24} class="card-img-top text-center carousel_content mr-1 img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i18} class="text-center carousel_content mr-1card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i23} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i19} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i21} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i16} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i22} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                    </OwlCarousel>

                    <div className="card-body">
                        <h3>Vocations- kidstepreneur</h3>
                        <p>
                            Kidstepreneur -
                            21st century kids are at the risk of exposure to social media vices. Kidstepreneur gains back all kids attention and passion
                            into self producing art. The vocational subjects given creates an opportunity for creativity and skill acquisition. It also helps with regards to time management as they make it a habit to become highly productive as well as utilise their creative resources.

                        </p>
                    </div>
                </div>

                <div className="pt-3  pb-3 pr-1 pr-sm-5 pl-sm-5 pl-4 card">
                    <OwlCarousel items={1} autoplayTimeout={1500} autoplayHoverPause={true} autoplay={true} loop>
                        <div class="item">
                            <img src={i42} class="card-img-top text-center carousel_content mr-1 img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i30} class="text-center carousel_content mr-1card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={theory} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={theory1} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={theory2} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                    </OwlCarousel>

                    <div className="card-body">
                        <h3>Graceworths Theory Class</h3>
                        <p>
                            This section of the institution focuses on kids interested in more of the career structure of music.
                            Getting to the nitty-gritty of the theoretical aspects of music.
                        </p>
                    </div>
                </div>

                <div className="pt-3  pb-3 pr-1 pr-sm-5 pl-sm-5 pl-4 card">
                    <OwlCarousel items={1} autoplayTimeout={1500} autoplayHoverPause={true} autoplay={true} loop>
                        <div class="item">
                            <img src={i25} class="card-img-top text-center carousel_content mr-1 img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={exam2} class="text-center carousel_content mr-1card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={exam1} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i31} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>

                    </OwlCarousel>

                    <div className="card-body">
                        <h3>Graceworths Examination Class</h3>
                        <p>The school will have all students of the institution registered for at least one exam in a school calendar year.
                            The type and grade of exams will be determined by the school. However, the Music Society of Nigeria (MUSON) and it's examination will be most preffered.
                            Individuals will sponsor the registration for any of the suggested body of exams.</p>
                    </div>
                </div>

                <div className="pt-3  pb-3 pr-1 pr-sm-5 pl-sm-5 pl-4 card">
                    <OwlCarousel items={1} autoplayTimeout={1500} autoplayHoverPause={true} autoplay={true} loop>
                        <div class="item">
                            <img src={i5} class="card-img-top text-center carousel_content mr-1 img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i7} class="text-center carousel_content mr-1card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i8} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i10} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i46} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i48} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>

                    </OwlCarousel>

                    <div className="card-body">
                        <h3>Graceworths Music Consultants<img style={{ width: '8%' }} src={consulogo} alt="..." /></h3>
                        <p>
                            Our services provide seasoned musical program for children,
                            schools and churches following a well planned curriculum for basic education musical presentations.
                            <br />
                            Performance and presentations too.
                            <br />
                            The following are our major fields of consultancy:
                        </p>
                        <ul>
                            <li>talent hunt shows and competitions.</li>
                            <li>kids private sessions.</li>
                            <li>family training for group performance.</li>
                            <li>kids musical trips and excursions.</li>
                            <li>television and entertainment programs.</li>
                            <li>events-book launch, symposiums, wedding, house warming ceremony, </li>
                            <li>music for all...no age limits.</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-3  pb-3 pr-1 pr-sm-5 pl-sm-5 pl-4 card">
                    <OwlCarousel items={1} autoplayTimeout={1500} autoplayHoverPause={true} autoplay={true} loop>
                        <div class="item">
                            <img src={i11} class="card-img-top text-center carousel_content mr-1 img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i12} class="text-center carousel_content mr-1card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i13} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i14} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i15} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i26} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i28} className="text-center carousel_content card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i29} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>

                    </OwlCarousel>

                    <div class="card-body">
                        <h3>Graceworths Album Creation</h3>
                        <p>
                            This program documents all phases of creativity encouraging more involvement in practical
                            works especially singing and instrumentation-
                            Kids are known to be so energetic and can make great achievements through creativity in any area of Art in little time space.
                            A compilation of such achievements is provided making a very resourceful package of past practical works.
                            This definitely will require lots of trainings on album creation and how to manage studio works.
                        </p>
                    </div>
                </div>

                <div className="pt-3  pb-3 pr-1 pr-sm-5 pl-sm-5 pl-4 card">
                    <OwlCarousel items={1} autoplayTimeout={1500} autoplayHoverPause={true} autoplay={true} loop>
                        <div class="item">
                            <img src={i27} class="card-img-top text-center carousel_content mr-1 img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={lang} class="text-center carousel_content mr-1card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={lang1} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>

                    </OwlCarousel>

                    <div className="card-body">
                        <h3>Graceworths Foreign/local Languages</h3>
                        <p>
                            A program is set aside to help parents face the challenge of the increase of young people who do not understand their different Nigerian languages.
                            Kids can learn all Nigerian languages early enough to speak fluently before the first ten years of life.
                            The first attention is given to the home/local language of a child. Each child can afterwards progress to learning other Nigerian languages as preferred.
                            Nevertheless, programs are obtainable for french language and children whose parents are in love with kids speaking the Queens English(the British accents).
                        </p>
                    </div>
                </div>

                <div className="pt-3  pb-3 pr-1 pr-sm-5 pl-sm-5 pl-4 card">
                    <OwlCarousel items={1} autoplayTimeout={1500} autoplayHoverPause={true} autoplay={true} loop>
                        <div class="item">
                            <img src={i32} class="card-img-top text-center carousel_content mr-1 img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i33} class="text-center carousel_content mr-1card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i34} class="text-center carousel_content mr-1 card-img-top img-fluid" alt="violin" />
                        </div>
                        <div class="item">
                            <img src={i35} class="text-center carousel_content mr-1card-img-top img-fluid" alt="violin" />
                        </div>
                    </OwlCarousel>

                    <div className="card-body">
                        <h3>Sales of Musical Instrument</h3>

                    </div>
                </div>


            </div >
        </div >

    );
};

export default OurServices;
