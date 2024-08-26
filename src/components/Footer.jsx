import React from "react";

const Footer = ( {data} ) => {
    return(
        <div className="footer">
            <div className="cntre4 cntre3 bg-c-pink img-rad4 ptop-btm news-letter mrgn-zero">
                <div className="set-wth2 grid-gap cntre2">
                    <div className="title">{data.newsletterForm.headline}</div>
                    <div className="title-16">{data.newsletterForm.subHeadLine}</div>
                    <div className="brdr-fx img-rad4 flx-btwn">
                        <input className="flx-grw col-outline bg-c-pink p-all-11" type="text" placeholder={data.newsletterForm.placeHolderText} />
                        <button type="submit" className="ptop-btm2 bg-c-w brdr-fx btn-txt" href="#">{data.newsletterForm.buttonText}</button>
                    </div>
                </div>
            </div>
            <div className="bg-c-pink-l bg-drk">
                <div className="cntre ptop-btm3 flx-btwn flx-wrp">
                    <div className="set-wth4  grid-gap3">
                        <div className="title4 bg-drk">{data.aboutUs.title}</div>
                        <div className="grid-gap5">
                            <a href="#"><img src={data.aboutUs.logo} alt="Fashion Flow" /></a>
                            <div className="grid-gap6 txt-ft">
                                <div>{data.aboutUs.para1}</div>
                                <div>{data.aboutUs.para2}</div>
                                <div>
                                    <div>{data.aboutUs.contact.header}</div>
                                    <div><span className="pink-col">Email:</span> {data.aboutUs.contact.email}</div>
                                    <div><span className="pink-col">Phone:</span> {data.aboutUs.contact.phone}</div>
                                </div>
                            </div>
                            <div className="flx-gp-36">
                                {
                                    data.aboutUs.logos.map( (el, i) => {
                                        return(
                                            <a href="#"><img className="set-hw-4" src={el} alt="icon" key={i}/></a>
                                        );
                                    } )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flx-btwn-gp-36 flx-wrp res-margintop">
                        {
                            data.recentAndMostPopular.map( (el, i) => {
                                return(
                                    <div className="set-wth5 grid-gap3" key={i}>
                                        <div className="title4 bg-drk">{el.headline}</div>
                                        <div className="grid-gap4">
                                            {
                                                el.items.map( (item, j) => {
                                                    return(
                                                        <div className="flx-btwn-gp" key={j}>
                                                            <div><img className="img-rad4" src={item.img} alt="image" /></div>
                                                            <div className="cntre2">
                                                                <div className="txt-ft-16 bg-drk">{item.title}</div>
                                                                <div className="created-by created-by-b bg-drk">{item.createdBy} <span className="edge edgeb"></span> {item.time.month} {item.time.day} {item.time.year}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                } )
                                            }
                                        </div>
                                    </div>
                                );
                            } )
                        }
                    </div>
                </div>
            </div>
            <div className="cntre flx-btwn res-flx-wrp-gp">
                <div className="txt-ft-16-400 bg-drk">{data.copyrightTxt} <a className="f-wt pink-col" href="#">{data.copyrightBy}</a></div>
                <ul className="flx-gp-32 flx-wrp">
                    {
                        data.menuList.map( (el, i) => {
                            return(
                                <li key={i}>
                                    <a className={(el === 'Home'? "txt-upper pink-col f-wt" : "u-list-item txt-upper bg-drk")} href="#">{el}</a>
                                </li>
                            )
                        } )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Footer;