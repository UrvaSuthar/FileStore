import React from 'react';
import { View, Button, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const FileTransferComponent = () => {
  const macAddress = '00:11:22:33:44:55'; // Replace with the actual MAC address
  const serverURL = 'http://192.168.0.107:3000'; // Updated with your server IP

  const handleFileTransfer = async () => {
    console.log('handleFileTransfer function invoked');
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*', multiple: true });

      if (result.type === 'success' && result.uris) {
        for (const uri of result.uris) {
          const fileName = uri.substring(uri.lastIndexOf('/') + 1);
          const targetDirectory = `${FileSystem.documentDirectory}MyDirectory/`;
          const targetUri = `${targetDirectory}${fileName}`;

          await FileSystem.copyAsync({ from: uri, to: targetUri });

          console.log('File transferred to MyDirectory:', fileName);

          const fileContent = await FileSystem.readAsStringAsync(targetUri);
          await syncFileToServer(macAddress, fileName, fileContent);
        }

        Alert.alert('File Transfer', 'Files transferred and synced successfully.');
      } else {
        Alert.alert('File Transfer Error', 'No files selected.');
      }
    } catch (error) {
      console.error('Error transferring files:', error);
      Alert.alert('File Transfer Error', 'An error occurred while transferring the files.');
    }
  };

  const syncFileToServer = async (macAddress, filename, fileContent) => {
    try {
      const response = await fetch(`${serverURL}/sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          macAddress,
          filename,
          fileContent,
        }),
      });

      if (response.ok) {
        console.log(`File ${filename} synced successfully`);
      } else {
        console.error(`File ${filename} sync failed`);
      }
    } catch (error) {
      console.error('Network request failed:', error);
    }
  };

  return (
    <View>
      <Button title="Select and Transfer Files" onPress={handleFileTransfer} />
    </View>
  );
};

export default FileTransferComponent;
