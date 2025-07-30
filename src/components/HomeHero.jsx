
import "./HomeHero.css";
import blog_img from "../assets/loop-plant.jpg"

const HomeHero = () => {
    return (
        <>
        <section className="home-hero py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="main-title">Santosh Farm's</h1>
                        <h4 className="lead">Premium Grass for Beautiful and Lush Landscapes</h4>
                        <p className="lead">
                            Welcome to <strong>Santhosh Farms & Nursery</strong>, a leader in premium grass and plant cultivation.
                            From 2 acres in 2004 to 250 acres today, we’ve set industry benchmarks in innovation, sustainability, and quality.
                            Trusted by landscapers, builders, and homeowners, we bring nature closer—one green patch at a time.
                        </p>
                        <a href="#contact" className="btn btn-success btn-lg mt-3">
                            Explore Now
                        </a>
                    </div>

                    <div className="col-lg-5 mt-4 mt-lg-0 text-center">
                        <div className="circle-wrapper mx-auto">
                            <img
                                src={blog_img}
                                alt="Lush Grass"
                                className="img-fluid circle-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

        </>
    );
};

export default HomeHero;
