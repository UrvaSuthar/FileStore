import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, {useState} from "react";
import {  auth } from "../firebase";
import {  createUserWithEmailAndPassword } from "firebase/auth";



const Register= ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignup= ()=>{
    if(email&&password){
      createUserWithEmailAndPassword(auth,email,password).then(user=>{
        console.log(user);
        navigation.replace("Home");
      }).catch(err=>{
        alert(err)
      });
    }

  }

  return (
    <SafeAreaView>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View className={"flex-col "}>
          {/* main */}
          <View className={"mt-5 mb-8 flex items-center"}>
            {/* pfp */}
            <Image
              source={{
                uri: "https://d1mvj2ulps5lli.cloudfront.net/avatars/400x400/291816.png?t=1528988397",
              }}
              className={"w-28 h-28 rounded-full"}
            />
          </View>
          <View className={"mx-5"}>
            <Text className={"text-2xl font-semibold "}>Register</Text>
            <Text className={"my-3 text-gray-500"}>
              Enter your personal information
            </Text>
            <View className={"flex-row justify-start"}>
              <View className={"flex-col w-1/2 "}>
                <Text className={"text-xl font-semibold mt-2"}>First Name</Text>
                <TextInput
                  className={
                    "w-full bg-gray-200 text-base mt-2 p-3 pb-4 rounded-full"
                  }
                  placeholder="First name"
                />
              </View>
              <View className={"flex-col w-1/2"}>
                <Text className={"text-xl font-semibold mt-2"}>Last Name</Text>
                <TextInput
                  className={
                    "w-full bg-gray-200 text-base mt-2 p-3 pb-4 rounded-full"
                  }
                  placeholder="Second name"
                />
              </View>
            </View>
            <Text className={"text-xl font-semibold mt-2"}>Email</Text>
            <TextInput
              keyboardType="email-address"
              className={
                "w-full bg-gray-200 text-base mt-2 p-3 pb-4 rounded-full"
              }
              placeholder="Enter your email"
              onChangeText={(value)=>setEmail(value)}
            />
            <Text className={"text-xl font-semibold mt-2"}>Password</Text>
            <TextInput
              className={
                "w-full bg-gray-200 text-base mt-2 p-3 pb-4 rounded-full"
              }
              secureTextEntry={true}
              placeholder="Enter your password"
              onChangeText={(value)=>setPassword(value)}
            />
            <Text className={"text-xl font-semibold mt-2"}>
              Conform Password
            </Text>
            <TextInput
            secureTextEntry={true}
              className={
                "w-full bg-gray-200 text-base mt-2 p-3 pb-4 rounded-full"
              }
              placeholder="Re-enter your password"
            />

            <TouchableOpacity
            onPress={()=>{
              navigation.replace("Home");
              handleSignup;
            }}
              activeOpacity={0.8}
                          //  onPress={() => { navigation.navigate('Home')}}
              className={
                "bg-blue-500 w-full mt-6 py-3 rounded-full flex items-center justify-center"
              }
            >
              <Text className={"text-white text-lg font"}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className={"flex-row mt-7 items-center justify-center mb-2"}>
          <Text className={"text-gray-500"}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text className={"text-blue-500 ml-2"}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
