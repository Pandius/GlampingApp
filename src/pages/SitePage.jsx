import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import Loading from "../utils/Loading";
import * as api from "../api";
import Dates from '../components/Dates'
import { Link } from "@reach/router";
import { dateFormat } from '../utils/utils'




import ErrorPage from "../pages/ErrorPage";

class SitePage extends Component {
    state = {
        site: null,
        isLoading: true,
        err: false
    };
    render() {
        const { site, isLoading, err } = this.state;

        if (err) return <ErrorPage err={err} />;
        if (isLoading) return <Loading text="Loading the site" />;
        return (
            <Jumbotron class="SitePage">
                <Link to={"/siteslist"}>
                    <h2>{site.area}</h2>
                </Link>
                <a href={`https://maps.google.com/maps?q=${site.postCode}`} className="postCode">POSTCODE :{site.postCode} </a>


                <img
                    className="sitePageImg"
                    src={site.siteImg}
                    alt="campsite area"
                />
                <h3>DESCRIPTION</h3>
                <h4>{site.description}</h4>

                <h3 className="activities">Activities:</h3>
                {site.activities.map(activity => {
                    return (

                        <h4>{activity}</h4>


                    );
                })}

                <h3 className="pitches">Pitches:</h3>
                {site.pitches.map(pitch => {
                    return (

                        <h4>{pitch}</h4>


                    );
                })}

                <br />
                <h3 class="calendar">Dates available</h3>
                <h3> open: {dateFormat(site.bookingsOpen)}</h3>
                <h3> close: {dateFormat(site.bookingsClose)}</h3>

                <Dates open={site.bookingsOpen} />






            </Jumbotron >
        );
    }
    componentDidMount() {
        this.fetchSiteById();
    }

    fetchSiteById = () => {
        const { id } = this.props;
        api
            .getSingleSite(id)
            .then((site) => {
                this.setState({ site, isLoading: false });
            })
            .catch(err => {
                this.setState({ err, isLoading: false });
            });
    };




}

export default SitePage;