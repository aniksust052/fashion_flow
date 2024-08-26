import React from "react";

const Winter = ( {data} ) => {
    function classTemplate(id){
        let classes = "";
        if(id === 1 || id === 2){
            classes = "men-women bg1 disp-grid spn2 res-spn";
        }
        else{
            classes = "men-women bg1 disp-grid";
        }
        if(id === 1){
            classes += " res-spn-1";
        }
        if(id === 2){
            classes += " res-spn-2";
        }

        return classes + " res-span-last1";
    }

    return(
       <div>
            <div className="cntre">
                <div className="headline txt-upper res-m-ato2 bg-drk">{data.headline}</div>
                <div className="winter-col mrgn-tp">
                    {
                        data.list.map( (el, i) => {
                            return(
                                <div className={classTemplate(el.id)} key={i} style={{backgroundImage : `url(${el.img})`}} >
                                    <div className="styel-con content2">
                                        <a className="btn" href="#">{el.btnTxt}</a>
                                        <div className={(el.id === 1? "title2 ptop20" : "title3 ptop20")}>{el.title}</div>
                                        <div className="created-by">{el.createdBy} <span className="edge"></span> {el.time.month} {el.time.day} {el.time.year}</div>
                                    </div>
                                </div>
                            );
                        } )
                    }
                </div>
            </div>
       </div>
    );
}

export default Winter;