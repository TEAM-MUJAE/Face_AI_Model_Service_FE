import { View } from 'react-native';


import CropOriginContent from '../Common/CropOriginContent';
import PeopleResultDetail from './PeopleResultDetail';


function PeopleResultContent() {
    

    return (
        <View>
            <CropOriginContent />
            <PeopleResultDetail />
        </View>
    );
}

export default PeopleResultContent;