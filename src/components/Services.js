import React from "react";

// images
import i1 from "../1.jpg";
import i2 from "../2.jpg";
import i3 from "../3.jpg";
// import instr1 from "../instrument1.jpeg";
import i5 from "../5.jpg";
import i7 from "../7.jpg";
import i8 from "../8.jpg";
import i9 from "../9.jpg";
import i10 from "../41.jpg";
import i11 from "../11.jpg";
import i12 from "../12.jpg";
import i13 from "../13.jpg";
import i14 from "../14.jpg";
import i15 from "../15.jpg";
import i16 from "../16.jpg";
import i19 from "../19.jpg";
import i20 from "../20.jpg";
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
import i47 from "../47.jpg";
import i48 from "../48.jpg";
import consulogo from "../6.svg";





const OurServices = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} services-page`}>

            <h2 className="pb-3 pt-3">Our Services</h2>
            <h3 className="pb-3 container">Music School</h3>

            <div className="">&nbsp;</div>

            <div class="container">
                <div className="row template_item_grid trinity_content justify-content-center align-items-center ">
                    <div className="row g-5">

                        {/* Instrument */}

                        <div className=" col-12 mb-3 mb-0-md">
                            <div className="card p-3">

                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={i1} className="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={i2} className="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={i3} className="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        {/* <div className="carousel-item">
                                            <img src={instr1} class="card-img-top img-fluid" alt="violin" />
                                        </div> */}

                                    </div>
                                </div>

                                <div className="card-body">
                                    <h3>Graceworths Instrument Class</h3>
                                    <p>The programme is packaged for both kids and young adults.
                                    Bringing into play all creativity by developing in beneficiaries a virtuoso mindset in playing any instrumenta at hand.
                                    Our lessons are structured for instruments ranging from Violin, Viola, Recorder, Flute, Clarinet, Saxophone, Trumpet and Guitar to voice training as a peculiar instrument.
                                    </p>


                                </div>
                            </div>
                        </div>



                        <div className=" col-12 mb-3 mb-0-md">
                            <div className="card p-3 ">

                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={i42} className="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={i30} className="card-img-top img-fluid" alt="violin" />
                                        </div>

                                    </div>
                                </div>

                                <div className="card-body">
                                    <h3>Graceworths Theory Class</h3>
                                    <p>
                                        This section of the institution focuses on kids interested in more of the career structure of music.
                                        Getting to the nitty-gritty of the theoretical aspects of music.
                                        </p>
                                </div>
                            </div>
                        </div>


                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={i47} className="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={i31} className="card-img-top img-fluid" alt="violin" />
                                        </div>

                                    </div>

                                    <div className="card-body">
                                        <h3>Graceworths Examination Class</h3>
                                        <p>The school will have all students of the institution registered for at least one exam in a school calendar year.
                                        The type and grade of exams will be determined by the school. However, the nusic society of music and it's examination will be most preffered.
                                            Individuals will sponsor the registrationfor any of the suggested body of exams</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={i5} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i7} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i8} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i9} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i10} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i46} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i47} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i48} class="card-img-top img-fluid" alt="violin" />
                                        </div>

                                    </div>

                                    {/* fix talent hunt */}
                                    <div class="card-body">
                                        <h3>Graceworths Music Consultants<img style={{ width: '8%' }} src={consulogo} alt="..." /></h3>
                                        <p>
                                            Our services provides a seasoned musical program for children,
                                            schools and churches following a well planned curriculum for basic education musical presentations,
                                            kids musical and art competitions, musical compositions for kids and adults. Teenage music education and performances too.
                                        </p>
                                        <ul>
                                            <li>Talent hunt shows and competitions.</li>
                                            <li>Kids private sessions.</li>
                                            <li>Family training for group performance.</li>
                                            <li>Kids musical trips and excursions.</li>
                                            <li>Programs and events entertainers.</li>
                                            <li>Music for all...no age limits.</li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={i11} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i12} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i13} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i14} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i15} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i26} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i28} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i29} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <h3>Graceworths Album Creation</h3>
                                        <p>
                                            Kids are known to be so energetic and can make great achievements through creativity in any area of Art in little time space.
                                            This program documents all phases of creating encourages more involvement in practical
                                            works- A compilation of such heights is provided from resourceful works especially for graduating class or individuals interested in a compilation of his/her works.
                                            This definitely will require lots of trainings on album creation and how to manage studio and present works.
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* Kidstepreneur */}
                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">

                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={i16} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i19} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i20} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i21} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i22} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i23} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i24} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={i25} class="card-img-top img-fluid" alt="violin" />
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <h3>Vocations- kidstepreneur</h3>
                                        <p>
                                            Kidstepreneur(
                                            21st century kids are at the risk of exposure to social media vices. Kidstepreneur gains back all kids attention and passion
                                                into self producing art. The vocational subjects given creates <strike>"I can "</strike> them to better use of self spirit and thinking.
                                                This time management to them becomes a habit highly productive and creative resources.
                                            )
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=" col-12 mb-3 mb-0-md">
                            <div class="card p-3">
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={i25} className="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={i27} className="card-img-top img-fluid" alt="violin" />
                                        </div>

                                    </div>

                                    <div className="card-body">
                                        <h3>Graceworths Foreign/local Languages</h3>
                                        <p>
                                            A program set aside to help parents face the challenge created by the strength given the lingua franca in Nigeria.
                                            Kids can learn all Nigerian languages early enough to speak fluently before the first ten years of life.
                                            The first attention is given to the home/local language of a child. Each child can sfterwards progress to learning other Nigerian languages as preferred.
                                            Nevertheless, program plans are obtainable for french language and children whose parents are in love with kids speaking the Queens english(the british accents).
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className=" col-12 mb-3 mb-0-md">
                            <div className="card p-3">
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={i32} className="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={i33} className="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div className="carousel-item active">
                                            <img src={i34} className="card-img-top img-fluid" alt="violin" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={i35} className="card-img-top img-fluid" alt="violin" />
                                        </div>

                                    </div>

                                    <div className="card-body">
                                        <h3>Sales of Musical Instrument</h3>

                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div >

    );
};

export default OurServices;
