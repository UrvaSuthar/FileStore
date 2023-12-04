import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Keyboard,
} from "react-native";
import React, { useState, useContext, useRef } from "react";
import { auth } from "../firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";


const LogIn = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, user, password)
      .then((user) => {
        console.log(user);
        console.log(user._tokenResponse.email);
        login();
      })
      .catch((err) => alert(err));
  };


  return (
    <SafeAreaView onPress={Keyboard.dismiss}>
      <View className={"flex-col"} onMagicTap={Keyboard.dismiss}>
        <StatusBar animated={true} />
        {/* main */}
        <View className={"mt-10 mb-8 flex items-center"}>
          {/* pfp */}
          <Image
            source={{
              uri: "https://d1mvj2ulps5lli.cloudfront.net/avatars/400x400/291816.png?t=1528988397",
            }}
            className={"w-28 h-28 rounded-full"}
          />
        </View>
        <View className={"mx-5"}>
          <Text className={"text-2xl font-semibold "}>Login</Text>
          <Text className={"my-3 text-gray-500"}>
            Login to continue using the app
          </Text>
          <Text className={"text-xl font-semibold mt-2"}>Email</Text>
          <TextInput
            onChangeText={(newUser) => setUser(newUser)}
            keyboardType="email-address"
            className={
              "w-full bg-gray-200 text-base mt-2 p-3 pb-4 rounded-full"
            }
            placeholder="Enter your email"
          />
          <Text className={"text-xl font-semibold mt-2"}>Password</Text>
          <TextInput
            className={
              "w-full bg-gray-200 text-base mt-2 p-3 pb-4 rounded-full"
            }
            // value={password}
            secureTextEntry={true}
            onChangeText={(newPass) => setPassword(newPass)}
            placeholder="Enter your password"
          />

          <View className={"flex items-end mt-3"}>
            <TouchableOpacity>
              <Text className={"text-gray-500"}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              handleSignIn();
              
            }}
            className={
              "bg-blue-500 w-full mt-6 py-3 rounded-full flex items-center justify-center"
            }
          >
            <Text className={"text-white text-lg font"}>Login</Text>
          </TouchableOpacity>
        </View>
        <View className={"flex-row  mt-7 items-center ml-2"}>
          {/* or part */}
          <View className={"w-1/3 h-0.5 bg-gray-300"} />
          <View className={"mx-4"}>
            <Text>Or Login With</Text>
          </View>
          <View className={"w-1/3 h-0.5 bg-gray-300"} />
        </View>
        <View>
          {/* all buttons */}
          <View
            className={"flex-row mt-7 items-center justify-center space-x-5"}
          >
            <TouchableOpacity
              // onPress={handleSignIn}
              activeOpacity={0.8}
              className={
                "bg-gray-100 border border-gray-300 mt-1 p-3 rounded-full flex items-center justify-center"
              }
            >
              <Image
                className={"w-8 h-8"}
                source={{
                  uri: "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              className={
                "bg-gray-100 border border-gray-300 mt-1 p-3 rounded-full flex items-center justify-center"
              }
            >
              <Image
                className={"w-8 h-8 "}
                source={{
                  uri: "https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              className={
                "bg-gray-100 border border-gray-300 mt-1 p-3 rounded-full flex items-center justify-center"
              }
            >
              <Image
                className={"w-8 h-8"}
                source={{
                  uri: "https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className={"flex-row mt-7 items-center justify-center"}>
          <Text className={"text-gray-500"}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text className={"text-blue-500 ml-2"}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
