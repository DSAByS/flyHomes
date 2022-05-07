import react from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Markers from './Markers';

const MapComponent = ({ details }) => {
    return (
        <MapView
            style={styles.map}
            //specify our coordinates.
            initialRegion={{
                latitude: details[0].latitude,
                longitude: details[0].longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {getMarkers(details)}
        </MapView>
    );
};

const getMarkers = (details) => {
    mapMarkers = () => {
        return details.map((report) => (
            <Marker
                key={report.id}
                coordinate={{
                    latitude: report.latitude,
                    longitude: report.longitude,
                }}
                title={report.price.toString()}
            ></Marker>
        ));
    };
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '90%',
    },
});

export default MapComponent;
