import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from '@reach/router'
import logo from '../pictures/logo.png'
import * as api from "../api";
import ErrorPage from '../pages/ErrorPage'
import Loading from '../utils/Loading'
import { activitiesArray, pitchesArr } from '../utils/utils'
import SearchForm from './SearchForm'




class Navigation extends React.Component {


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
            <Navbar
                className="navbar"
                expand="lg"
                bg="transparent"
                variant="dark"
                fixed="top"
            >
                <Link to='/'>
                    <Navbar.Brand >
                        <img className="brandImg" src={logo} alt="glamping logo." />
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/sites" className="nav-link"> Sites</Link>
                        <NavDropdown title="By activities:" id="collasible-nav-dropdown">

                            {activitiesArray(sites).map(activity => {
                                return (
                                    <>
                                        <Link to={`/siteslist/${activity}`} key={activity}> {`${activity}`}</Link>
                                        <br />
                                    </>
                                )
                            })}
                        </NavDropdown>


                        <NavDropdown title="By pitches:" id="collasible-nav-dropdown">
                            {pitchesArr(sites).map(pitch => {
                                return (
                                    <>
                                        <Link to={`/siteslist/${pitch}`} key={pitch}> {`${pitch}`}</Link>
                                        <br />
                                    </>
                                )
                            })}


                        </NavDropdown>

                    </Nav>
                    <SearchForm searchBy={this.props.searchBy} />

                </Navbar.Collapse >

            </Navbar >
        );
    }


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


export default Navigation;