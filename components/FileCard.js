import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";

import {
  DocumentIcon,
  EllipsisHorizontalIcon,
} from "react-native-heroicons/outline";

const FileCard = ({ fileName, url }) => {
  const download = async () => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className={
        "mx-3 my-2 items-center space-x-2 flex-row bg-white p-2 py-3 rounded-md shadow"
      }
      onPress={download}
    >
      <DocumentIcon color={"gray"} size={30} />
      <Text
        className={"text-lg"}
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        {fileName.length > 20
          ? `${fileName.slice(0, 15)}...${fileName.slice(-10)}`
          : fileName}
      </Text>
      <View className={"flex-row justify-end"}>
        <TouchableOpacity
          onPress={() => {
            alert("hello");
          }}
        >
          <EllipsisHorizontalIcon size={30} color={"gray"} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FileCard;
