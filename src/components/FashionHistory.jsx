import React from "react";

const FashionHistory = ( {data} ) => {
    return(
        <div className="cntre ptop">
            <div className="headline txt-upper bg-drk">{data.headline}</div>
            <div className="grid-gap ptop20 flx-btwn mrgn-tp res-grid-1">
                <div className="history-grid">
                    {
                        data.histories.map( (el, i) => {
                            return(
                                <div className="grid-item" key={i}>
                                    <img className="img-rad4 grid-img" src={el.img} alt="image" />
                                    <div className="grid-gap ptop20">
                                        <div>
                                            <a className="btn btnb bg-drk" href="#">{data.btn1Txt}</a>
                                            <a className="btn btnb bg-drk" href="#">{data.btn2Txt}</a>
                                        </div>
                                        <div className="title-20 ptop20 bg-drk">{el.title}</div>
                                        <div className="crt-by bg-drk">
                                            <img src={data.hIcon} className="bg-drk" alt="icon" /> {data.createdBy}
                                            <img src={data.bIcon} className="bg-drk" alt="icon" /> {data.time.month} {data.time.day} {data.time.year}
                                        </div>
                                        <div className="txt">{el.txt}</div>
                                    </div>
                                </div>
                            );
                        } )
                    }
                </div>
                <div className="categories grid-gap res-m-ato">
                    <div className="cat-title cntre2 txt-upper">{data.catTitle}</div>
                    {
                        data.categories.map( (el, i) => {
                            return(
                                <div className="cat-item txt-ft-16-400 bg-drk hov">
                                    <div>{el.category} </div> 
                                    <span className="edge edgeb flx-grw"></span>
                                    <div>{el.numOfPost}</div> 
                                </div>
                            );
                        } )
                    }
                </div>
            </div>
        </div>
    );
}

export default FashionHistory;