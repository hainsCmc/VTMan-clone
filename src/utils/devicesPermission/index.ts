import {Alert, Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  openSettings,
  request,
} from 'react-native-permissions';

export const checkCameraPermission = async () => {
  try {
    const permissionStatus = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );
    switch (permissionStatus) {
      case RESULTS.UNAVAILABLE:
        Alert.alert('Thất bại', 'Thiết bị không khả dụng camera');
        break;
      case RESULTS.GRANTED:
        Alert.alert('Thành công', 'Quyền truy cập camera đã được cấp');
        break;
      case RESULTS.DENIED:
        Alert.alert('Thất bại', 'Quyền truy cập camera bị từ chối');
        break;
      case RESULTS.BLOCKED:
        Alert.alert(
          'Thất bại',
          'Quyền truy cập camera đã bị chặn.\nHãy mở cài đặt để cấp quyền',
          [
            {
              text: 'Đóng',
              style: 'cancel',
            },
            {
              text: 'Cài đặt',
              style: 'default',
              onPress: () => openSettings(),
            },
          ],
        );
        break;
      default:
        console.log(
          'checkCameraPermission permissionStatus ',
          permissionStatus,
        );
        break;
    }
  } catch (error) {
    Alert.alert('Lỗi kiểm tra quyền truy cập camera');
    console.error('🚀 ~ file: index.ts:52  ~ checkCameraPermission:', error);
  }
};
