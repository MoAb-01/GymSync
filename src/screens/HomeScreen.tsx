import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type MainTabParamList = {
  Home: undefined;
  Program: undefined;
  Nutrition: undefined;
  Profile: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View className="flex-row justify-between items-center mt-6 mb-8">
          <View className="flex-row items-center">
            <View className="w-12 h-12 rounded-full border-2 border-[#00FF66] items-center justify-center mr-3 bg-[#0F172A]">
              <Text className="text-[#00FF66] font-bold text-lg">KD</Text>
            </View>
            <View>
              <Text className="text-slate-400 text-sm">Good morning,</Text>
              <Text className="text-white text-xl font-bold">Kıvanç 💪</Text>
            </View>
          </View>
          <View className="flex-row gap-2">
            <View className="bg-[#1E293B] px-3 py-1.5 rounded-lg">
              <Text className="text-[#00FF66] font-semibold text-xs">88 kg</Text>
            </View>
            <View className="bg-[#1E293B] px-3 py-1.5 rounded-lg">
              <Text className="text-[#3B82F6] font-semibold text-xs">18% BF</Text>
            </View>
          </View>
        </View>

        {/* Gym Busyness Card */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-4">
          <View className="flex-row justify-between items-center mb-1">
            <View className="flex-row items-center">
              <Ionicons name="people" size={18} color="#F59E0B" />
              <Text className="text-white font-bold text-base ml-2">Gym Busyness</Text>
            </View>
            <View className="bg-[#F59E0B]/20 px-2 py-1 rounded-md">
              <Text className="text-[#F59E0B] text-xs font-bold">Moderate</Text>
            </View>
          </View>
          <Text className="text-slate-400 text-xs mb-5">Live · Updated just now</Text>

          <View className="h-2 bg-slate-700 rounded-full mb-2">
            <View className="h-full bg-[#F59E0B] rounded-full w-[62%]" />
          </View>

          <View className="flex-row justify-between">
            <Text className="text-slate-400 text-[10px]">0 people</Text>
            <Text className="text-white font-bold text-xs">93 / 150</Text>
            <Text className="text-slate-400 text-[10px]">150 capacity</Text>
          </View>
        </View>

        {/* Membership Plan Card */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-4">
          <View className="flex-row justify-between items-center mb-5">
            <View>
              <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-1">MEMBERSHIP</Text>
              <Text className="text-white font-bold text-lg">Premium Plan</Text>
              <Text className="text-slate-400 text-xs mt-1">Last payment: Mar 1, 2026</Text>
            </View>
            {/* Mock Circular Progress Indicator */}
            <View className="w-16 h-16 rounded-full border-4 border-slate-700 items-center justify-center relative">
              <View className="absolute w-16 h-16 rounded-full border-4 border-[#00FF66] border-t-transparent border-r-transparent rotate-45" />
              <Text className="text-white font-bold text-lg leading-tight mt-1">22</Text>
              <Text className="text-[#00FF66] text-[10px]">days</Text>
            </View>
          </View>

          <View className="h-1 bg-slate-700 rounded-full mb-3">
            <View className="h-full bg-[#00FF66] rounded-full w-[70%]" />
          </View>
          <Text className="text-slate-400 text-xs">22 days remaining • Renews Apr 30</Text>
        </View>

        {/* Weight Progress Card */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-6">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-white font-bold text-base">Weight Progress</Text>
              <Text className="text-slate-400 text-xs mt-1">Last 10 entries</Text>
            </View>
            <View className="items-end">
              <Text className="text-[#00FF66] font-bold text-xl">85.0 <Text className="text-sm">kg</Text></Text>
              <Text className="text-[#00FF66] text-xs mt-1">▼ 3.0 kg lost</Text>
            </View>
          </View>

          {/* Graph Placeholder */}
          <View className="h-20 items-center justify-center border border-slate-700 border-dashed rounded-xl mt-2">
            <Ionicons name="trending-down" size={24} color="#00FF66" className="opacity-50" />
            <Text className="text-slate-500 text-xs mt-2">Graph visualization placeholder</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-3 ml-1">QUICK ACTIONS</Text>
        <View className="flex-row justify-between mb-8">
          <TouchableOpacity 
            onPress={() => navigation.navigate('Program')}
            className="bg-[#1E293B] rounded-2xl p-4 items-center justify-center flex-1 mr-2"
          >
            <View className="mb-2">
              <Ionicons name="barbell" size={28} color="#00FF66" />
            </View>
            <Text className="text-[#00FF66] text-xs font-bold text-center">My{'\n'}Workout</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => navigation.navigate('Nutrition')}
            className="bg-[#1E293B] rounded-2xl p-4 items-center justify-center flex-1 mx-1"
          >
            <View className="mb-2">
              <Ionicons name="nutrition" size={28} color="#3B82F6" />
            </View>
            <Text className="text-[#3B82F6] text-xs font-bold text-center">Nutrition{'\n'}Plan</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#1E293B] rounded-2xl p-4 items-center justify-center flex-1 ml-2">
            <View className="mb-2">
              <Ionicons name="document-text" size={28} color="#F59E0B" />
            </View>
            <Text className="text-[#F59E0B] text-xs font-bold text-center">Request{'\n'}Program</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Activity */}
        <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-3 ml-1">TODAY'S ACTIVITY</Text>
        <View className="flex-row justify-between mb-8">
          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1 mr-2">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-2">CALORIES</Text>
            <Text className="text-[#F59E0B] font-bold text-xl">1,410</Text>
            <Text className="text-slate-400 text-[10px] mt-1">/ 2,200 goal</Text>
          </View>

          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1 mx-1">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-2">PROTEIN</Text>
            <Text className="text-[#3B82F6] font-bold text-xl">115g</Text>
            <Text className="text-slate-400 text-[10px] mt-1">/ 180g goal</Text>
          </View>

          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1 ml-2">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-2">WATER</Text>
            <Text className="text-[#00FF66] font-bold text-xl">2.1L</Text>
            <Text className="text-slate-400 text-[10px] mt-1">/ 3L goal</Text>
          </View>
        </View>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}

