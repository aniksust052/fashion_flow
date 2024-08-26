import React from "react";

const RecentPostFashionGallery = ( {data} ) => {
    return(
        <div className="cntre flx-btwn res-grid ">
            <div>
                <div className="headline2 txt-upper bg-drk">{data.recentPost.headline}</div>
                <div className="grid-gap2 recent-posts ptop20 mrgn-tp">
                    {
                        data.recentPost.items.map( (el, i) => {
                            return(
                                <div className="post res-grid" key={i}>
                                    <img className="img-rad4 set-hw-5 img-fit" src={el.img} alt="image" />
                                    <div className="grid-gap cntre2 set-wth res-m-non">
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
                            );
                        } )
                    }
                </div>
            </div>
            <div className="res-margintop">
                <div className="headline2 txt-upper bg-drk">{data.fashionGallery.headline}</div>
                <div className="grid-gap mrgn-tp">
                    <div className="ptop20 photos flx-btwn-gp flx-wrp res-photos">
                        {
                            data.fashionGallery.photos.map( (el, i) => {
                                return(
                                    <div className="set-hw"><img className="img-fit img-rad4" src={el} alt="image" /></div>
                                );
                            } )
                        }
                    </div>
                    <img className="img-rad4 img-fit res-photos" src={data.fashionGallery.img} alt="image" />
                </div>
            </div>
        </div>
    );
}

export default RecentPostFashionGallery;