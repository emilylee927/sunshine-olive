import React, { Component } from "react";
import "./Footer.scss";
import loadGoogleMapsApi from "load-google-maps-api";
const { REACT_APP_GOOGLE_API_KEY } = process.env;

class Footer extends Component {
    componentDidMount() {
        loadGoogleMapsApi({ key: REACT_APP_GOOGLE_API_KEY })
            .then(function(googleMaps) {
                const mapElement = document.getElementById("map");
                const mapOptions = {
                    zoom: 17,
                    center: new googleMaps.LatLng(32.77759, -96.79578), // DevMountain Dallas
                    styles: [
                        {
                            featureType: "all",
                            elementType: "labels.text.fill",
                            stylers: [
                                {
                                    saturation: 36
                                },
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 40
                                }
                            ]
                        },
                        {
                            featureType: "all",
                            elementType: "labels.text.stroke",
                            stylers: [
                                {
                                    visibility: "on"
                                },
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 16
                                }
                            ]
                        },
                        {
                            featureType: "all",
                            elementType: "labels.icon",
                            stylers: [
                                {
                                    visibility: "off"
                                }
                            ]
                        },
                        {
                            featureType: "administrative",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 20
                                }
                            ]
                        },
                        {
                            featureType: "administrative",
                            elementType: "geometry.stroke",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 17
                                },
                                {
                                    weight: 1.2
                                }
                            ]
                        },
                        {
                            featureType: "landscape",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 20
                                }
                            ]
                        },
                        {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 21
                                }
                            ]
                        },
                        {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 17
                                }
                            ]
                        },
                        {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 29
                                },
                                {
                                    weight: 0.2
                                }
                            ]
                        },
                        {
                            featureType: "road.arterial",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 18
                                }
                            ]
                        },
                        {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 16
                                }
                            ]
                        },
                        {
                            featureType: "transit",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 19
                                }
                            ]
                        },
                        {
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [
                                {
                                    color: "#000000"
                                },
                                {
                                    lightness: 17
                                }
                            ]
                        }
                    ]
                };
                const map = new googleMaps.Map(mapElement, mapOptions);
                const marker = new googleMaps.Marker({
                    position: new googleMaps.LatLng(32.77759, -96.79578), // DevMountain Dallas
                    map: map,
                    title: "Sunshine Olive Shop"
                });
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    render() {
        return (
            <>
                <footer className="footer">
                    <div className="contact">
                        <h4>Hours</h4>
                        <h5>M-F 9am-6pm</h5>
                        <h5>Sat-Sun 11am-4pm</h5>
                    </div>
                    <div className="location">
                        <h4>Our Store</h4>
                    </div>
                    <div className="subscribe">
                        <h4>Subscribe to our newletter</h4>
                    </div>
                    <div className="address">
                        <h5>
                            <a
                                className="mailto"
                                href="mailto:sunshineolive3@gmail.com"
                            >
                                Email: sunshineolive3@gmail.com
                            </a>
                        </h5>
                        <h5>
                            <a className="cellcall" href="tel:8143211416">
                                Phone: 814-321-1416
                            </a>
                        </h5>

                        <h5>Address: 500 S Ervay St #101, Dallas, TX-75202</h5>
                    </div>
                    <div className="email">
                        <input
                            className="signUp"
                            placeholder="Email address"
                        ></input>
                        <button className="cta">Subscribe Now</button>
                    </div>
                </footer>
                <div id="map">
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5547893742314!2d-96.79796968498472!3d32.777545980971794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992200285d3b%3A0xd33e5192aa05ee73!2sDevMountain%20%7C%20Dallas!5e0!3m2!1sen!2sus!4v1573143756266!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                    ></iframe>

                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1sbrnCcBxDRy-uORGphrrwDAm9ndxbjaQ&hl=en"
                        width="100%"
                        height="480"
                    ></iframe>
                    */}
                </div>
                <p className="copyright">
                    {" "}
                    &#169; 2019 by Sunshine Olive Shop LLC{" "}
                </p>
            </>
        );
    }
}

export default Footer;
