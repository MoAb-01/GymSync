import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function GoalsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-[#1E293B]">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#F8FAFC" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">Goals & Targets</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6">
        <Text className="text-slate-400 text-xs font-bold tracking-widest mb-3 ml-1">WEEKLY TARGETS</Text>
        
        <View className="bg-[#1E293B] rounded-2xl p-4 mb-6">
          <View className="mb-4">
            <Text className="text-slate-400 text-xs mb-2">Workouts per week</Text>
            <View className="flex-row items-center justify-between bg-[#0F172A] rounded-xl px-4 py-3 border border-[#334155]">
              <Text className="text-white font-bold text-lg">4 sessions</Text>
              <Ionicons name="pencil" size={20} color="#00FF66" />
            </View>
          </View>
          
          <View>
            <Text className="text-slate-400 text-xs mb-2">Daily Calorie Goal</Text>
            <View className="flex-row items-center justify-between bg-[#0F172A] rounded-xl px-4 py-3 border border-[#334155]">
              <Text className="text-white font-bold text-lg">2,400 kcal</Text>
              <Ionicons name="pencil" size={20} color="#00FF66" />
            </View>
          </View>
        </View>

        <Text className="text-slate-400 text-xs font-bold tracking-widest mb-3 ml-1">MACRO DISTRIBUTION</Text>
        <View className="bg-[#1E293B] rounded-2xl p-4 mb-6">
          <View className="flex-row justify-between mb-4">
            <View className="items-center">
              <Text className="text-slate-400 text-xs mb-1">Protein</Text>
              <Text className="text-[#00FF66] font-bold text-lg">35%</Text>
            </View>
            <View className="items-center">
              <Text className="text-slate-400 text-xs mb-1">Carbs</Text>
              <Text className="text-[#38BDF8] font-bold text-lg">45%</Text>
            </View>
            <View className="items-center">
              <Text className="text-slate-400 text-xs mb-1">Fats</Text>
              <Text className="text-[#F59E0B] font-bold text-lg">20%</Text>
            </View>
          </View>
          <TouchableOpacity className="bg-[#00FF66]/10 py-3 rounded-xl border border-[#00FF66]/20 items-center">
            <Text className="text-[#00FF66] font-bold">Adjust Macros</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
