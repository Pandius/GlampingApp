import React from "react";
import { Carousel } from 'react-bootstrap'
import * as api from "../api";
import ErrorPage from '../pages/ErrorPage'
import Loading from '../utils/Loading'
import { Link } from '@reach/router'




class Sites extends React.Component {

    state = {
        isLoading: true,
        err: false,
        sites: null

    }

    render() {
        const { sites, isLoading, err, } = this.state;
        if (err) return <ErrorPage err={err} />;
        if (isLoading) return <Loading text="Loading the sites..." />;

        return (

            <div className="Sites">
                <Link to="/siteslist" className="nav-link" >

                    <h2>Glamping Sites</h2> </Link >
                <Carousel>

                    {sites.map(site => {
                        return (
                            <Carousel.Item key={site.id}>
                                <img
                                    className="d-block w-50 h-40"
                                    src={site.siteImg}
                                    alt="campsite area"
                                />
                                <Carousel.Caption>
                                    <Link to="/siteslist" className="nav-link"><h3 className="hide">{site.area.toUpperCase()}</h3></Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div >
        )

    };


    componentDidMount() {
        this.fetchAllSites();
    }

    fetchAllSites = () => {
        api
            .getSites()
            .then((sites) => {
                this.setState({ sites, isLoading: false });
            })
            .catch(err => {
                this.setState({ err, isLoading: false });
            });
    };
}



export default Sites;