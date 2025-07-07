function HomeFeatures({ home, unlock, effort, smart }) {
    return (
        <>
            <div className="disply_flex  phone_grid my-10">
                <div className="home_cont_2 grid_w border_stl ">
                    <img className="my-3" src={home} alt="" />
                    <p>Find Your Dream Home</p>
                </div>
                <div className="home_cont_2 grid_w border_stl ">
                    <img className="my-3" src={unlock} alt="" />
                    <p>Unlock Property Value</p>
                </div>
                <div className="home_cont_2 grid_w border_stl ">
                    <img className="my-3" src={effort} alt="" />
                    <p>Effortless Property Management</p>
                </div>
                <div className="home_cont_2 grid_w border_stl ">
                    <img className="my-3" src={smart} alt="" />{" "}
                    <p>Smart Investments, Informed Decisions</p>
                </div>
            </div>
        </>
    )
}
export default HomeFeatures;