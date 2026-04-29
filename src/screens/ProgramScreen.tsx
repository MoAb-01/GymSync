import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProgramScreen() {
  const exercises = [
    { id: 1, name: 'Bench Press', sets: '4x8', rest: '90s', muscle: 'Chest' },
    { id: 2, name: 'Incline DB Press', sets: '3x10', rest: '60s', muscle: 'Chest' },
    { id: 3, name: 'Cable Fly', sets: '3x12', rest: '45s', muscle: 'Chest' },
    { id: 4, name: 'Tricep Dips', sets: '3x15', rest: '45s', muscle: 'Arms' },
    { id: 5, name: 'Overhead Press', sets: '4x8', rest: '90s', muscle: 'Shoulders' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5 pt-6" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-white text-3xl font-bold">Today's Workout</Text>
          <Text className="text-slate-400 mt-1">Chest & Triceps - Push Day A</Text>
        </View>

        {/* Progress Card */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-6 flex-row items-center">
          <View className="w-14 h-14 rounded-full border-4 border-slate-700 items-center justify-center mr-4">
            <Text className="text-[#00FF66] font-bold text-sm">0/5</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white font-bold text-lg mb-2">5 exercises left</Text>
            <View className="h-2 bg-slate-700 rounded-full w-full" />
          </View>
        </View>

        {/* Exercises List */}
        <View className="space-y-4 mb-6">
          {exercises.map((exercise) => (
            <View key={exercise.id} className="bg-[#1E293B] rounded-2xl p-4 flex-row items-center mb-3">
              {/* Checkbox Placeholder */}
              <TouchableOpacity className="w-6 h-6 rounded-md border-2 border-slate-600 mr-4" />
              
              <View className="flex-1">
                <Text className="text-white font-bold text-base mb-1">{exercise.name}</Text>
                <View className="flex-row items-center">
                  <View className="bg-[#3B82F6]/20 px-2 py-0.5 rounded-md mr-2">
                    <Text className="text-[#3B82F6] text-[10px] font-bold">{exercise.sets}</Text>
                  </View>
                  <Text className="text-slate-500 text-xs">Rest: {exercise.rest}</Text>
                </View>
              </View>
              
              {/* Muscle Badge */}
              <View className="bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                <Text className="text-slate-400 text-[10px] font-semibold">{exercise.muscle}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-3 mb-8">
          <TouchableOpacity className="flex-1 border border-[#00FF66] rounded-xl py-4 flex-row items-center justify-center bg-[#0F172A]">
            <Ionicons name="document-text" size={16} color="#00FF66" className="mr-2" />
            <Text className="text-[#00FF66] font-bold text-sm ml-2">Request New Program</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-1 bg-[#3B82F6] rounded-xl py-4 items-center justify-center shadow-lg shadow-[#3B82F6]/30">
            <Text className="text-white font-bold text-sm">+ Create My Own</Text>
          </TouchableOpacity>
        </View>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}

