import react from 'react';

const GetListingData = async (setList, setDetails) => {
    try {
        const response = await fetch(
            'https://gist.githubusercontent.com/vivekverma1993/29379139e49f61c55d0e28a888ccaa0d/raw/6dbf62c815e1890919ddb3a904e202add6bd5fb7/test.json'
        );
        const json = await response.json();
        setList(json.listings);
        setDetails(json.details);
    } catch (error) {
        console.error(error);
    }
};

export default GetListingData;
