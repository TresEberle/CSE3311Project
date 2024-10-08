import { StatusBar } from 'expo-status-bar';
import {View, Text, ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router';
import { images } from '../constants'
import { CustomButton } from '../components';
import React from 'react';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}> 
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.GamifyLogo2}
            className="w-[300px] h-[120px]"
            //resizeMode='contain'
          />
          <View className="relative mt-4">
            <Text className='text-xl text-white font-bold text-center'>
              Get Stuff Done With Gamify
            </Text>
          </View>

          <CustomButton
            title="Sign In"
            handlePress={() => {router.push('/sign-in')}}
            containerStyles="w-full mt-7"
          />

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#162622' style="light"/>

    </SafeAreaView>
  );
}

