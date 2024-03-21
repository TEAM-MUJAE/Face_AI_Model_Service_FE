import { StyleSheet, Text, View,ScrollView } from 'react-native';


import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import CelebResultBanner from './CelebResultBanner';
import BackWithTextButton from '../../static/Svg/BackWithTextButton';
import TwoResultContent from '../Common/TwoResultContent';
import ScreenTitle from '../Common/ScreenTitle';



function CompareCelebResponse() {

  const celebData = useSelector(state => state.similarityData);
  const navigation = useNavigation();

  /* store에 응답데이터가 들어왔을때만 TwoResultContent 컴포넌트가 렌더링 되도록 설정 */
  const shouldRenderTwoResultContent = Object.keys(celebData).length > 0;

  const goHomeScreenPressHandler = () => {
    console.log('Go To Home Screen Button clicked!');
    navigation.navigate('Home');
  }

  return (
    <ScrollView>
      <ScreenTitle title={'닮은꼴 결과'} />
      <Text style={styles.descriptionText}>유사한 인물과 어떻게 닮았는지 알려드릴게요!</Text>
      {shouldRenderTwoResultContent && <TwoResultContent />}
      <BackWithTextButton key="goHomeScreen" onPress={ goHomeScreenPressHandler } />
      {shouldRenderTwoResultContent && <CelebResultBanner />}
    </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#FFFFFF', // A light background color
    },
    descriptionText: {
      fontSize: 15,
      color: '#6F50F8', // Slightly lighter text for the description
      textAlign: 'center', // Center align description
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 10,
    },
    button: {
      marginTop: 20,
      backgroundColor: '#007BFF', // A blue color for the button
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25, // Rounded corners
      shadowColor: '#000', // Shadow for depth
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
      fontSize: 18,
      color: '#FFFFFF', // White text on the button
      textAlign: 'center',
    },
  });

  export default CompareCelebResponse;