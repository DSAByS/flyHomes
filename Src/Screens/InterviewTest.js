import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import GetListingData from '../APIs/GetListingData';
import ListingView from './Components/ListComponents/ListingView';
import MapComponent from './Components/MapComponents/MapComponent';

const ListingScreen = () => {
    const [listItems, setList] = useState([]);
    const [details, setDetails] = useState([]);
    const [showMap, setShouldShowMap] = useState(false);

    useEffect(() => {
        GetListingData(setList, setDetails);
    }, []);
    return (
        <>
            {showMap ? (
                <MapComponent
                    style={styles.ViewStyle}
                    details={details}
                ></MapComponent>
            ) : (
                <ListingView
                    style={styles.ViewStyle}
                    details={details}
                    listItems={listItems}
                ></ListingView>
            )}
            {getPressibleComponent(showMap, setShouldShowMap)}
        </>
    );
};

const getPressibleComponent = (showMap, setShouldShowMap) => {
    return (
        <Pressable
            onPress={() => {
                setShouldShowMap(!showMap);
            }}
            style={styles.toggleButtonStyle}
        >
            <Text style={styles.toggleButtonTitleStyle}>
                {showMap ? 'Go to Listing' : 'Go to Map'}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    ViewStyle: {
        height: '90%',
    },
    toggleButtonStyle: {
        height: 60,
        justifyContent: 'center',
    },
    toggleButtonTitleStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '300',
    },
});

export default ListingScreen;
