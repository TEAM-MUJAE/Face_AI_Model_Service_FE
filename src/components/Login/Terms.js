import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';



function Terms() {

    return (
            <ScrollView style={styles.termsContainer}>
                <Text style={styles.termsText}>
                    {`AlGo 서비스 이용약관
제1조 (목적)
이 약관은 AlGo 서비스(이하 "서비스")의 이용과 관련하여 서비스 제공자(이하 "회사")와 이용자 간의 권리, 의무, 책임사항 및 서비스 이용조건과 절차에 관한 사항을 규정함을 목적으로 합니다.

제2조 (정의)
"이용자"란 회사의 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
"회원"이라 함은 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
"비회원"이라 함은 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.
                    
제3조 (서비스 내용 및 변경)
회사는 다음과 같은 업무를 수행합니다.
    검색 서비스
    콘텐츠 공유 서비스
    기타 회사가 정하는 업무
    회사는 필요한 경우 서비스의 내용을 추가 또는 변경할 수 있으며, 이에 대해 사전에 공지합니다.
                    
제4조 (서비스의 중단)
회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.
제1항에 의한 서비스 중단의 경우에는 회사는 이용자에게 사전에 공지합니다. 단, 불가항력적인 사유가 있는 경우 사후에 공지할 수 있습니다.
                    
제5조 (이용자의 의무)
이용자는 회사의 서비스 이용과 관련하여 다음 각 호에 해당하는 행위를 해서는 안 됩니다.
법률, 공서양속 또는 사회질서에 반하는 행위
타인의 명예를 손상시키거나 불이익을 주는 행위
회사의 운영에 방해가 되는 행위
회사, 다른 이용자 또는 제3자의 지적재산권을 침해하는 행위
이용자는 본 약관에서 규정하는 사항과 기타 회사가 정한 제반 규정, 공지사항 등 회사가 공지하는 사항을 준수하여야 합니다. 

                    `}
                </Text>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    checkAndTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    termsContainer: {
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        height: 150,
    },
    termsText: {
        fontSize: 12,
        color: 'black',
    },
});

export default Terms;