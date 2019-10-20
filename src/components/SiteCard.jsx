import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "@reach/router";
// import { datePrettier } from "da../utils/utils";

const SiteCard = props => {
    const { site } = props;

    return (
        <Card style={{ width: "22rem", height: "34rem" }} className="card">
            <Card.Body>

                <Card.Title>
                    {site.area.length > 50
                        ? site.area.slice(0, 60) + " ..."
                        : site.area}
                </Card.Title>

                <img
                    className="siteImg"
                    src={site.siteImg}
                    alt="campsite area"
                />



                <Card.Text>
                    {site.description.length > 100
                        ? site.description.slice(0, 100) + " ..."
                        : site.description}
                </Card.Text>
                <Card.Subtitle className="postCode">
                    <a href={`https://maps.google.com/maps?q=${site.postCode}`}>POSTCODE :{site.postCode} </a>
                </Card.Subtitle>

                <Link className="card-link" id={site.id} to={`/sites/${site.id}`}>
                    Read more...
        </Link>
            </Card.Body>
        </Card>
    );
};

export default SiteCard;