import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function UnitsScreen() {
  const navigation = useNavigation();
  const [weightUnit, setWeightUnit] = useState('kg');
  const [distanceUnit, setDistanceUnit] = useState('km');

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-[#1E293B]">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#F8FAFC" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">Units & Preferences</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6">
        <Text className="text-slate-400 text-xs font-bold tracking-widest mb-3 ml-1">MEASUREMENTS</Text>
        <View className="bg-[#1E293B] rounded-2xl mb-6 overflow-hidden">
          <View className="p-4 border-b border-[#334155] flex-row justify-between items-center">
            <Text className="text-white font-semibold text-base">Weight</Text>
            <View className="flex-row bg-[#0F172A] rounded-lg p-1">
              <TouchableOpacity 
                onPress={() => setWeightUnit('kg')}
                className={`px-4 py-2 rounded-md ${weightUnit === 'kg' ? 'bg-[#38BDF8]' : ''}`}
              >
                <Text className={weightUnit === 'kg' ? 'text-white font-bold' : 'text-slate-400'}>kg</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setWeightUnit('lbs')}
                className={`px-4 py-2 rounded-md ${weightUnit === 'lbs' ? 'bg-[#38BDF8]' : ''}`}
              >
                <Text className={weightUnit === 'lbs' ? 'text-white font-bold' : 'text-slate-400'}>lbs</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View className="p-4 flex-row justify-between items-center">
            <Text className="text-white font-semibold text-base">Distance</Text>
            <View className="flex-row bg-[#0F172A] rounded-lg p-1">
              <TouchableOpacity 
                onPress={() => setDistanceUnit('km')}
                className={`px-4 py-2 rounded-md ${distanceUnit === 'km' ? 'bg-[#38BDF8]' : ''}`}
              >
                <Text className={distanceUnit === 'km' ? 'text-white font-bold' : 'text-slate-400'}>km</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setDistanceUnit('mi')}
                className={`px-4 py-2 rounded-md ${distanceUnit === 'mi' ? 'bg-[#38BDF8]' : ''}`}
              >
                <Text className={distanceUnit === 'mi' ? 'text-white font-bold' : 'text-slate-400'}>mi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
