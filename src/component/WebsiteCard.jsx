import WebsiteDetail from '../data/content.json'
import * as PropTypes from "prop-types";
import '../css/card.css';

function ContentDetails(props) {
    return <div className={"row fw-semibold fs-5"}>
        <div className={"col-2 text-end fs-4"}>
            *
        </div>
        <div className={"col-9 text-start fst-italic"}>
            {props.contentDetail}
        </div>
    </div>;
}

ContentDetails.propTypes = {contentDetail: PropTypes.any};

export const WebsiteCard = () => {
    return (<>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {WebsiteDetail.map((detail, index) => {
                    return (<a className={"text-decoration-none"} href={detail.website}>
                            <div className="col">
                                <div className={"card rounded-3 h-100 mb-5 mt-2 " + detail.css_card_color}
                                     key={detail.id}>
                                    <div className="card-body ">
                                        <h1 className={"fw-semibold"}>{detail.name}</h1>

                                        <div className={"card mt-5 " + detail.inner_card_color}>
                                            <div className="card-body ">

                                                {detail.content.map((content_detail, index) => {
                                                    return (

                                                        <ContentDetails contentDetail={content_detail}/>)

                                                })}


                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </a>)
                })}

            </div>
        </>)
}


export default WebsiteCard