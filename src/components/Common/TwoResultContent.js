import { View } from 'react-native';


import CropOriginContent from './CropOriginContent';
import TwoResultRank from './TwoResultRank';
import { useSelector } from 'react-redux';


function TwoResultContent() {

    const totalSimilarity = useSelector(state => state.similarityData.total_similar_faces);
    const landmarkSift = useSelector(state => state.similarityData.landmark_sift_paths);

    console.log('totalSimilarity : ', totalSimilarity);

    /* ================== 데이터 재구성 ================== */
    
    /* 전체 유사도 수치  */
    const selectedImageIndex = useSelector(state => state.compare.selectedImageIndex);
    const sortedTotalSimilarity = [...totalSimilarity].sort((a, b) => a[1] - b[1]);
    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score, celebName]) => ({ path, score, celebName })); // path: Base64 이미지, score: 유사도 수치

    /* 랜드마크 정보 */
    const reformattedLandmarkSift = landmarkSift.map(item => {
        // 비어있을 경우 {} 반환
        if (item.length === 0) {
            return {};
        }

        // 비어있지 않을 경우
        const [name, encPath] = item[0];
        return {name, encPath};
    });

    // console.log('reformattedTotalSimilarity : ', reformattedTotalSimilarity);
    // console.log('reformattedLandmarkSift : ', reformattedLandmarkSift);

    /* ================= 데이터 재구성 끝 ================ */

    /* props 전달 준비 */
    const selectedTotalData = selectedImageIndex !== null ? reformattedTotalSimilarity[selectedImageIndex] : null;
    const selectedLandmarkSiftData = selectedImageIndex !== null ? reformattedLandmarkSift[selectedImageIndex] : null;

    let selectedImageData = null;

    if (selectedTotalData && selectedLandmarkSiftData) {
        selectedImageData = {
            path: selectedTotalData.path,
            score: selectedTotalData.score,
            celebName: selectedTotalData.celebName,
            name: selectedLandmarkSiftData.name,
            encPath: selectedLandmarkSiftData.encPath
        };
    }

    /* selectedImageData에 props들 추가 */
    // console.log('selectedImageData : ', selectedImageData);

    return (
        <View>
            <CropOriginContent />
            {selectedImageData && 
                <TwoResultRank 
                    path={selectedImageData.path} 
                    score={selectedImageData.score}
                    celebName={selectedImageData.celebName}
                    name={selectedImageData.name}
                    encPath={selectedImageData.encPath}
                />}
        </View>
    );
}

export default TwoResultContent;