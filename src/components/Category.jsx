import React from "react";

const Category = ( {data} ) => {
    return(
        <div className="cntre flx-btwn res-grid-1">
            <div className="grid-gap">
                <div className="headline txt-upper res-m-ato2 bg-drk">{data.headline}</div>
                <ul className="menu-list flx-wrp ">
                    {
                        data.menuList.map( (el, i) => {
                            return(
                                <li>
                                    <a className={(el === 'All'? "txt-upper pink-col f-wt" : "u-list-item txt-upper bg-drk")} href="#">{el}</a>
                                </li>
                            );
                        } )
                    }
                </ul>
                <div className="main-grid">
                    <div className="bg1 disp-grid poster" style={{backgroundImage : `url(${data.img})`}}>
                        <div className="styel-con con">
                            <a className="btn" href="#">{data.btnTxt}</a>
                            <div className="title3 ptop20">{data.title}</div>
                            <div className="created-by">{data.createdBy} <span className="edge"></span> {data.time.month} {data.time.day} {data.time.year}</div>
                        </div>
                    </div>
                    {
                        data.list.map( (el, i) => {
                            return(
                                <div className="cat-list" key={i}>
                                    <img className="img-rad4 res-set-wth" src={el.img} alt="image" />
                                    <div className="list-con">
                                        <a className="btn btnb bg-drk" href="#">{el.btnTxt}</a>
                                        <div className="txt-ft-16 ptop20 bg-drk">{el.title}</div>
                                        <div className="created-by created-by-b bg-drk">{data.createdBy} <span className="edge edgeb"></span> {data.time.month} {data.time.day} {data.time.year}</div>
                                    </div>
                                </div>
                            );
                        } )
                    }
                </div>
            </div>
            <img className="ptop banner-w res-m-ato2" src={data.bannerImg} alt="Banner" />
        </div>
    );
}

export default Category;