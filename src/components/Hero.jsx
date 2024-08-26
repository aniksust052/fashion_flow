import React from "react";

const Hero = ( {data} ) => {
    return(
        <div className="cntre hero">
            <div className="celebrity spn2 bg1 disp-grid" style={{backgroundImage : `url(${data.celebrity.img})`}}>
                <div className="styel-con content">
                    <div>
                        <a className="btn" href="#">{data.celebrity.btn1Txt}</a>
                        <a className="btn" href="#">{data.celebrity.btn2Txt}</a>
                    </div>
                    <div className="title ptop20">{data.celebrity.title}</div>
                    <div className="created-by">{data.celebrity.createdBy} <span className="edge"></span> {data.celebrity.time.month} {data.celebrity.time.day} {data.celebrity.time.year}</div>
                </div>
            </div>
            {
                data.menAndWomenWorld.map( (el, i) => {
                    return (
                        <div className="men-women bg1 disp-grid" key={i} style={{backgroundImage : `url(${el.img})`}} >
                            <div className="styel-con content">
                                <a className="btn" href="#">{el.btnTxt}</a>
                                <div className="title2 ptop20">{el.title}</div>
                                <div className="created-by">{el.createdBy} <span className="edge"></span> {el.time.month} {el.time.day} {el.time.year}</div>
                            </div>
                        </div>
                    );
                } )
            }
        </div>
    );
}

export default Hero;