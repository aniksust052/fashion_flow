import React from "react";

const EditorsPick = ( {data} ) => {
    return(
        <div className="cntre">
            <div className="headline2 txt-upper bg-drk">{data.headline}</div>
            <div className="set-grid ptop20 mrgn-tp">
                {
                    data.items.map( (el, i) => {
                        return(
                            <div className="">
                                <div className="set-hw-2"><img className="img-fit img-rad4" src={el.img} alt="" /></div>
                                <div className="grid-gap set-wth ptop20">
                                    <div>
                                        <a className="btn btnb bg-drk" href="#">{el.btn1Txt}</a>
                                        <a className="btn btnb bg-drk" href="#">{el.btn2Txt}</a>
                                    </div>
                                    <div className="title-20 bg-drk">{el.title}</div>
                                    <div className="crt-by bg-drk">
                                        <img src={el.hIcon} alt="icon" /> {el.createdBy}
                                        <img src={el.bIcon} alt="icon" /> {el.time.month} {el.time.day} {el.time.year}
                                    </div>
                                    <div className="txt">{el.txt}</div>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
            <div className="cntre cntre3">
                <a className="load-more-btn img-rad4 title3 bg-c-pink" href="#">{data.btnTxt}</a>
            </div>
        </div>
    );
}

export default EditorsPick;