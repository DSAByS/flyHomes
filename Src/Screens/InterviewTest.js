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
            {getPressibleComponent(showMap, setShouldShowMap)}
            {showMap ? (
                <MapComponent details={details}></MapComponent>
            ) : (
                <ListingView
                    details={details}
                    listItems={listItems}
                ></ListingView>
            )}
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
                {showMap ? 'Go To Listing' : 'Go to mapView'}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    flatListStyle: {
        marginHorizontal: '2%',
    },
    toggleButtonStyle: {
        borderColor: 'red',
        borderWidth: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleButtonTitleStyle: {
        fontWeight: '300',
        fontSize: 20,
    },
});

export default ListingScreen;
