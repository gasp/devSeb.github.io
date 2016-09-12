import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
//
//import {Gmaps} from '../../../../../node_modules/react-gmaps/dist';
//import MapEvents from '../../../../../node_modules/react-gmaps/dist//events/map';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

/** Reducer Action**/
//import * as labsActions from '../../redux/actions/labsActions';

/** State **/
const mapStateToProps = (state) => ({
    //display: state.reduceLabs.display
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    //labsActions: bindActionCreators(labsActions, dispatch)
});

class MapLabs extends Component {

    static propTypes = {
        point: PropTypes.array
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            lat: null,
            lng: null
        }
    }

    componentDidMount() {
        //require('./MapLabs.css');
        require('./MapLabs.less');
    }

    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    }

    onDragEnd(e) {
        console.log('onDragEnd', e);
    }

    onCloseClick() {
        console.log('onCloseClick');
    }

    onClick(e) {
        console.log('onClick', e);
    }

    loadDistantFile(url) {

        let promiseMap = new Promise( function ( resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onload = function (event) {
                resolve(xhr.responseText); // Si la requête réussit, on résout la promesse en indiquant le contenu du fichier
            };

            xhr.onerror = function (err) {
                reject(err); // Si la requête échoue, on rejette la promesse en envoyant les infos de l'erreur
            };

            xhr.open('GET', url, true);
            xhr.send(null);
            console.log("end xhr");
        });
        return promiseMap;


        //return new Promise(function (resolve, reject) {
        //    var xhr = new XMLHttpRequest();
        //
        //    xhr.onload = function (event) {
        //        resolve(xhr.responseText); // Si la requête réussit, on résout la promesse en indiquant le contenu du fichier
        //    };
        //
        //    xhr.onerror = function (err) {
        //        reject(err); // Si la requête échoue, on rejette la promesse en envoyant les infos de l'erreur
        //    }
        //
        //    xhr.open('GET', url, true);
        //    xhr.send(null);
        //    console.log("end xhr");
        //});


    }


    render() {
        console.log("render Map");
        var self = this;
        //console.log("point", self.props.point);
        //console.log("state", self.state);

        /**
         * <InfoWindow
         lat={coords.lat}
         lng={coords.lng}
         content={null}
         onCloseClick={this.onCloseClick}
         />
         * <Circle
         lat={coords.lat}
         lng={coords.lng}
         radius={500}
         onClick={this.onClick} />
         */
        let country = self.props.point[0].country;
        let city = self.props.point[0].city;
        let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "," + country + "&key=AIzaSyDveCKvIdrLJBgpYF1_rTduxtcxXg8CYLs";

        if (this.state.lat === null && this.state.lng === null) {
            this.loadDistantFile(url).then(function (content) {
                //console.info('Fichier chargé !');
                //console.log("res = ", content);
                let obj = JSON.parse(content);
                //console.log("obj =", obj);
                //self.setState({lat: 51.5258541, lng: -0.08040660000006028});

                self.setState(
                    {   lat: obj.results[0].geometry.location.lat,
                        lng: obj.results[0].geometry.location.lng }
                );
            }).catch(function (err) {
                console.error('Erreur !');
                console.log(err);
            });
        }

        return (
            <div className="labs-map">
                <div className="col-sm-12">
                    <Gmaps
                        width={'col-sm-10'}
                        height={'200px'}
                        lat={self.state.lat}
                        lng={self.state.lng}
                        zoom={12}
                        loadingMessage={'Be happy'}
                        params={{v: '3.exp', key: 'AIzaSyDveCKvIdrLJBgpYF1_rTduxtcxXg8CYLs'}}
                        onMapCreated={this.onMapCreated}>
                        <Marker
                            lat={self.state.lat}
                            lng={self.state.lng}
                            draggable={true}
                            onDragEnd={this.onDragEnd}/>
                    </Gmaps>
                    <br/>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (MapLabs);
