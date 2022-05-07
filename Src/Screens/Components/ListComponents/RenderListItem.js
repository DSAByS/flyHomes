import CachedImage from 'expo-cached-image';
import { Text, StyleSheet } from 'react-native';

const RenderListItem = ({ uri, id, price, address, stateCity }) => {
    return (
        <>
            <CachedImage
                style={styles.imageStyle}
                source={{ uri: uri }}
                cacheKey={id}
            ></CachedImage>
            <Text style={styles.titleStyle}>
                {price ? price : 'Not Applicable'}
            </Text>
            <Text>{address}</Text>
            <Text>{stateCity}</Text>
        </>
    );
};
const styles = StyleSheet.create({
    imageStyle: {
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 0.5,
        width: '100%',
        height: 200,
        marginVertical: '2%',
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: '1%',
    },
});

export default RenderListItem;
