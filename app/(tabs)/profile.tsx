import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className='w-full justify-center min-h-[82vh] px-2 my-6'> 
        <Text className='text-2xl justify-center text-white text-semibold mt-7 font-psemibold'>
           PROFILE
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile