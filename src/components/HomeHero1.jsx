import img1 from "../assets/Img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import "./HomeHero1.css"; 

const HomeHero1 = () => {
    return (
        <section className="image-text-section py-5 wallpaper-background">
            <div className="container mt-5 pt-5">
                <div className="row align-items-center ">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="image-stack">
                            <div className="styled-frame frame1">
                                <img src={img1} alt="Grass 1" />
                            </div>
                            <div className="styled-frame frame2">
                                <img src={img2} alt="Grass 2" />
                            </div>
                            <div className="styled-frame frame3">
                                <img src={img3} alt="Grass 3" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 text-center text-lg-start hero1-text">
                        <h2 className=" fw-bold mb-3">We Provide the Green That Brings Comfort to Your Space</h2>
                        <p className="hero@text">
                            Santosh Farms & Nursery began with a vision for quality and sustainability. With advanced farming techniques and cutting-edge machinery, we’ve grown into a large-scale operation. Looking ahead, we plan to introduce new grass varieties, expand landscaping projects, and integrate smart farming technologies
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeHero1;
