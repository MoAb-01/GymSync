import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SupportScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-[#1E293B]">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#F8FAFC" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">Support</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6">
        <View className="items-center mb-8 mt-4">
          <View className="w-20 h-20 bg-[#1E293B] rounded-full items-center justify-center mb-4">
            <Ionicons name="help-buoy" size={40} color="#38BDF8" />
          </View>
          <Text className="text-white text-xl font-bold mb-2">How can we help?</Text>
          <Text className="text-slate-400 text-center">We're here to help you with any issues or questions about GymSync.</Text>
        </View>

        <Text className="text-slate-400 text-xs font-bold tracking-widest mb-3 ml-1">CONTACT US</Text>
        <View className="bg-[#1E293B] rounded-2xl mb-6 overflow-hidden">
          <TouchableOpacity className="p-4 border-b border-[#334155] flex-row items-center">
            <Ionicons name="chatbubbles" size={24} color="#00FF66" className="mr-3" />
            <View className="ml-3">
              <Text className="text-white font-semibold text-base mb-1">Live Chat</Text>
              <Text className="text-slate-400 text-xs">Usually replies in 5 minutes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 border-b border-[#334155] flex-row items-center">
            <Ionicons name="mail" size={24} color="#38BDF8" className="mr-3" />
            <View className="ml-3">
              <Text className="text-white font-semibold text-base mb-1">Email Support</Text>
              <Text className="text-slate-400 text-xs">support@gymsync.com</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text className="text-slate-400 text-xs font-bold tracking-widest mb-3 ml-1">RESOURCES</Text>
        <View className="bg-[#1E293B] rounded-2xl overflow-hidden mb-6">
          <TouchableOpacity className="p-4 border-b border-[#334155] flex-row justify-between items-center">
            <Text className="text-white font-semibold">FAQ</Text>
            <Ionicons name="chevron-forward" size={20} color="#64748B" />
          </TouchableOpacity>
          <TouchableOpacity className="p-4 border-b border-[#334155] flex-row justify-between items-center">
            <Text className="text-white font-semibold">Terms of Service</Text>
            <Ionicons name="chevron-forward" size={20} color="#64748B" />
          </TouchableOpacity>
          <TouchableOpacity className="p-4 flex-row justify-between items-center">
            <Text className="text-white font-semibold">Privacy Policy</Text>
            <Ionicons name="chevron-forward" size={20} color="#64748B" />
          </TouchableOpacity>
        </View>
        
        <Text className="text-slate-500 text-center text-xs mb-8">GymSync App Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
