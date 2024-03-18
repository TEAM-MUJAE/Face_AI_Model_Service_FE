import { StyleSheet, Text, View, Image } from 'react-native';


import { useSelector } from 'react-redux';


import CropOriginContent from '../Common/CropOriginContent';
import OtherResultDetail from './OtherResultDetail';


function OtherResultContent() {
    

    return (
        <View>
            <CropOriginContent />
            <OtherResultDetail />
        </View>
    );
}

export default OtherResultContent;