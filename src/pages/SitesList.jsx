import React from "react";
import * as api from "../api";
import ErrorPage from '../pages/ErrorPage'
import Loading from '../utils/Loading'
import SiteCard from '../components/SiteCard'



class SitesList extends React.Component {
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


            <div className="SitesList">
                <ul className="SitesList">
                    {this.props.feature ? <h3 className="filterBy">Filtered by: {this.props.feature}</h3> : null}
                    {sites.map(site => {
                        return (
                            <li key={site.id}>
                                <SiteCard
                                    id={site.id}
                                    site={site}
                                />
                            </li>
                        );
                    })}
                </ul>

            </div>


        );
    }
    componentDidMount() {
        this.fetchSites();
    }

    fetchSites = () => {
        const { feature } = this.props

        api
            .getSites(feature)
            .then((sites) => {
                this.setState({ sites, isLoading: false });
            })
            .catch(err => {
                this.setState({ err, isLoading: false });
            });

    };


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.feature !== this.props.feature) {
            this.fetchSites()
        }
    }
};
export default SitesList;