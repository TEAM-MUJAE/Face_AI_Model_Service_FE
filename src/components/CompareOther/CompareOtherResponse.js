import { StyleSheet, Text, View,ScrollView } from 'react-native';


import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import BackWithTextButton from '../../static/Svg/BackWithTextButton';
import OtherResultContent from './OtherResultContent';
import ScreenTitle from '../Common/ScreenTitle';



function CompareOtherResponse() {

  const celebData = useSelector(state => state.similarityData);
  const navigation = useNavigation();

  /* store에 응답데이터가 들어왔을때만 OtherResultContent 컴포넌트가 렌더링 되도록 설정 */
  const shouldRenderOtherResultContent = Object.keys(celebData).length > 0;

  const goHomeScreenPressHandler = () => {
    console.log('Go To Home Screen Button clicked!');
    navigation.navigate('Home');
  }

  return (
    <ScrollView>
      <ScreenTitle title={'얼굴 비교결과'} />
      <Text style={styles.stepTitle} >두 사람과 어떻게 닮았는지 알려드릴게요!</Text>
      {shouldRenderOtherResultContent && <OtherResultContent />}
      <BackWithTextButton key="goHomeScreen" onPress={ goHomeScreenPressHandler } />
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
    stepTitle: {
      fontSize: 15,
      color: '#6F50F8', // Slightly lighter text for the description
      textAlign: 'center', // Center align description
      fontWeight: 'bold',
      marginBottom: 10,
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

  export default CompareOtherResponse;