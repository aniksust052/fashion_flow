import React from "react";

const Recent = ( {data} ) => {
    return (
        <div className="cntre grid-gap recent">
            <div className="headline txt-upper res-m-ato2 bg-drk">{data.headline}</div>
            <ul className="list flx-wrp mrgn-tp">
                {
                    data.list.map( (el, i) => {
                        return (
                            <li className="list-item res-m-ato2" key={i}>
                                <a href="#"><img className="img-rad4" src={el.img} alt="image" /></a> 
                                <a href="#"><div className="list-title bg-drk">{el.title}</div></a> 
                                <div className="created-by-2 bg-drk">{el.createdBy} <span className="edge bg-drk"></span> {el.time.month} {el.time.day} {el.time.year}</div>
                            </li>
                        );
                    } )
                }
            </ul>
        </div>
    );
}

export default Recent;