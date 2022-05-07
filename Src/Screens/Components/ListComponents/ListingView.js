import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Constants from '../../../Common/Constants';
import RenderListItem from './RenderListItem';

const json = Constants.imageArr.flat(1);
const ListingView = ({ details, listItems }) => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.flatListStyle}
            data={details}
            keyExtractor={(detail) => detail.id}
            renderItem={(item) => {
                let uri = json[item.index % json.length];
                let info = item.item;
                let address = listItems[item.index].addr;
                let stateCity = info.city + ' ' + info.state;
                return (
                    <RenderListItem
                        uri={uri}
                        id={info.id.toString()}
                        price={info.price}
                        address={address}
                        stateCity={stateCity}
                    ></RenderListItem>
                );
            }}
        ></FlatList>
    );
};

const styles = StyleSheet.create({
    flatListStyle: {
        marginHorizontal: '2%',
    },
});

export default ListingView;
