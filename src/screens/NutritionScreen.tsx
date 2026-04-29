import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function NutritionScreen() {
  const meals = [
    {
      id: 1,
      name: 'Breakfast',
      time: '08:00',
      cals: 520,
      macros: { p: '38g', c: '55g', f: '18g' },
      status: 'logged'
    },
    {
      id: 2,
      name: 'Lunch',
      time: '13:00',
      cals: 680,
      macros: { p: '52g', c: '70g', f: '22g' },
      status: 'logged'
    },
    {
      id: 3,
      name: 'Pre-Workout',
      time: '16:30',
      cals: 210,
      macros: { p: '25g', c: '28g', f: '4g' },
      status: 'unlogged'
    },
    {
      id: 4,
      name: 'Dinner',
      time: '20:00',
      cals: 590,
      macros: { p: '45g', c: '50g', f: '20g' },
      status: 'unlogged'
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5 pt-6" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-white text-3xl font-bold">Nutrition</Text>
          <Text className="text-slate-400 mt-1">Tuesday, 31 March 2026</Text>
        </View>

        {/* Daily Totals Card */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-white font-bold text-lg">Daily Totals</Text>
            <View className="bg-[#00FF66]/20 px-2 py-1 rounded-md">
              <Text className="text-[#00FF66] text-xs font-bold">On Track</Text>
            </View>
          </View>
          
          <View className="flex-row justify-between mb-4">
            <View className="items-center">
              <Text className="text-[#00FF66] font-bold text-2xl">1200</Text>
              <Text className="text-slate-400 text-xs mt-1">Calories</Text>
            </View>
            <View className="items-center">
              <Text className="text-[#3B82F6] font-bold text-2xl">90g</Text>
              <Text className="text-slate-400 text-xs mt-1">Protein</Text>
            </View>
            <View className="items-center">
              <Text className="text-[#F59E0B] font-bold text-2xl">2200</Text>
              <Text className="text-slate-400 text-xs mt-1">Goal</Text>
            </View>
          </View>
          
          <View className="h-2 bg-slate-700 rounded-full mb-2 overflow-hidden">
            <View className="h-full bg-[#00FF66] rounded-full w-[55%]" />
          </View>
          <Text className="text-slate-400 text-[10px]">1200 / 2200 kcal logged</Text>
        </View>

        {/* Meals List */}
        <View className="space-y-4 mb-8">
          {meals.map((meal) => (
            <View key={meal.id} className="bg-[#1E293B] rounded-2xl p-5 mb-4">
              {/* Meal Header */}
              <View className="flex-row justify-between items-start mb-5">
                <View>
                  <Text className="text-white font-bold text-base">{meal.name}</Text>
                  <Text className="text-slate-400 text-xs mt-1">{meal.time}</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-[#00FF66] font-bold text-base mr-1">{meal.cals}</Text>
                  <Text className="text-slate-400 text-xs mr-3">kcal</Text>
                  
                  {meal.status === 'logged' ? (
                    <View className="bg-[#00FF66]/20 px-3 py-1.5 rounded-lg">
                      <Text className="text-[#00FF66] text-xs font-bold">Logged</Text>
                    </View>
                  ) : (
                    <TouchableOpacity className="border border-[#00FF66] px-3 py-1.5 rounded-lg flex-row items-center">
                      <Text className="text-[#00FF66] text-xs font-bold">+ Log</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              {/* Macros Row */}
              <View className="flex-row justify-between">
                <View className="bg-slate-800/80 rounded-xl p-3 flex-1 mr-2 items-center">
                  <Text className="text-[#3B82F6] font-bold text-sm mb-1">{meal.macros.p}</Text>
                  <Text className="text-slate-400 text-[10px]">Protein</Text>
                </View>
                <View className="bg-slate-800/80 rounded-xl p-3 flex-1 mx-1 items-center">
                  <Text className="text-[#F59E0B] font-bold text-sm mb-1">{meal.macros.c}</Text>
                  <Text className="text-slate-400 text-[10px]">Carbs</Text>
                </View>
                <View className="bg-slate-800/80 rounded-xl p-3 flex-1 ml-2 items-center">
                  <Text className="text-[#EF4444] font-bold text-sm mb-1">{meal.macros.f}</Text>
                  <Text className="text-slate-400 text-[10px]">Fat</Text>
                </View>
              </View>

              {/* Optional Camera Prompt for Unlogged Meals */}
              {meal.status === 'unlogged' && (
                <TouchableOpacity className="mt-4 flex-row justify-center items-center">
                  <Ionicons name="camera" size={14} color="#94A3B8" className="mr-2" />
                  <Text className="text-slate-400 text-xs ml-2">Tap to upload meal photo</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}

