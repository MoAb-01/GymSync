import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemberDetailScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5 pt-4" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="flex-row items-center mb-8">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="bg-[#1E293B] px-3 py-2 rounded-lg flex-row items-center mr-4"
          >
            <Ionicons name="arrow-back" size={16} color="#94A3B8" />
            <Text className="text-slate-300 ml-1 font-semibold text-sm">Back</Text>
          </TouchableOpacity>
          <View>
            <Text className="text-white text-2xl font-bold">Mert Kaya</Text>
            <View className="bg-[#F59E0B]/20 self-start px-2 py-0.5 rounded-md mt-1">
              <Text className="text-[#F59E0B] text-[10px] font-bold">Overdue</Text>
            </View>
          </View>
        </View>

        {/* Top Stats */}
        <View className="flex-row justify-between mb-6">
          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1 items-center mr-2">
            <Text className="text-[#3B82F6] font-bold text-2xl mb-1">178</Text>
            <Text className="text-slate-500 text-[10px]">Height (cm)</Text>
          </View>
          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1 items-center mx-1">
            <Text className="text-[#00FF66] font-bold text-2xl mb-1">95</Text>
            <Text className="text-slate-500 text-[10px]">Weight (kg)</Text>
          </View>
          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1 items-center ml-2">
            <Text className="text-[#EF4444] font-bold text-2xl mb-1">30</Text>
            <Text className="text-slate-500 text-[10px]">BMI</Text>
          </View>
        </View>

        {/* Sub-nav */}
        <View className="flex-row mb-6 bg-[#1E293B] rounded-xl p-1">
          <TouchableOpacity className="flex-1 bg-[#00FF66] py-2 rounded-lg items-center">
            <Text className="text-[#0F172A] font-bold text-xs">Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-2 rounded-lg items-center">
            <Text className="text-slate-400 font-bold text-xs">Program</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-2 rounded-lg items-center">
            <Text className="text-slate-400 font-bold text-xs">Messages</Text>
          </TouchableOpacity>
        </View>

        {/* Body Comp Card */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-6">
          <Text className="text-white font-bold text-lg mb-6">Body Composition</Text>
          
          <View className="mb-6">
            <View className="flex-row justify-between mb-2">
              <Text className="text-slate-400 text-xs">Body Fat</Text>
              <Text className="text-white font-bold text-base">28%</Text>
            </View>
            <View className="h-2 bg-slate-700 rounded-full w-full">
              <View className="h-full bg-[#F59E0B] rounded-full w-[28%]" />
            </View>
          </View>

          <View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-slate-400 text-xs">Membership Days Left</Text>
              <Text className="text-white font-bold text-base">3d</Text>
            </View>
            <View className="h-2 bg-slate-700 rounded-full w-full">
              <View className="h-full bg-[#EF4444] rounded-full w-[10%]" />
            </View>
          </View>
        </View>

        {/* Weight History Placeholder */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-8 overflow-hidden relative">
           <View className="h-20 justify-center items-center opacity-50 relative">
             <View className="w-full h-px bg-[#00FF66] -rotate-6 absolute top-10" />
             <View className="w-full h-10 bg-[#00FF66]/10 absolute bottom-0" />
           </View>
           <Text className="text-slate-500 text-xs mt-2">Weight history placeholder</Text>
        </View>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}
