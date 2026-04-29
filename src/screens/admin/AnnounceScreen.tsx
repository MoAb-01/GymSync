import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AnnounceScreen() {
  const templates = [
    { id: 1, title: 'New Equipment', desc: "We've added new equipment to the gym! Come check i...", icon: 'sparkles' },
    { id: 2, title: 'Holiday Hours', desc: "Special hours this weekend: Open 9am-3pm Saturday ...", icon: 'time' },
    { id: 3, title: 'Challenge Launch', desc: "Join our 30-Day Transformation Challenge — sign up...", icon: 'fitness' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5 pt-6" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-white text-3xl font-bold">Announcement Studio</Text>
          <Text className="text-slate-400 mt-1">Push notifications to your members</Text>
        </View>

        {/* Target Audience */}
        <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-3 ml-1">TARGET AUDIENCE</Text>
        <View className="flex-row justify-between mb-8">
          <TouchableOpacity className="bg-[#00FF66]/10 border border-[#00FF66] rounded-xl p-3 flex-1 mr-1.5 items-center">
            <View className="flex-row items-center mb-1">
              <Ionicons name="people" size={12} color="#00FF66" className="mr-1" />
              <Text className="text-[#00FF66] text-[10px] font-bold">All Members</Text>
            </View>
            <Text className="text-[#00FF66] font-bold text-xl">145</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-[#1E293B] rounded-xl p-3 flex-1 mx-1.5 items-center">
            <View className="flex-row items-center mb-1">
              <Ionicons name="checkmark-circle" size={12} color="#00FF66" className="mr-1" />
              <Text className="text-slate-400 text-[10px] font-bold">Active</Text>
            </View>
            <Text className="text-white font-bold text-xl">127</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#1E293B] rounded-xl p-3 flex-1 mx-1.5 items-center">
            <View className="flex-row items-center mb-1">
              <Ionicons name="warning" size={12} color="#F59E0B" className="mr-1" />
              <Text className="text-slate-400 text-[10px] font-bold">Overdue</Text>
            </View>
            <Text className="text-white font-bold text-xl">11</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#1E293B] rounded-xl p-3 flex-1 ml-1.5 items-center">
            <View className="flex-row items-center mb-1">
              <Ionicons name="close-circle" size={12} color="#EF4444" className="mr-1" />
              <Text className="text-slate-400 text-[10px] font-bold">Expired</Text>
            </View>
            <Text className="text-white font-bold text-xl">18</Text>
          </TouchableOpacity>
        </View>

        {/* Message Area */}
        <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-3 ml-1">MESSAGE</Text>
        <View className="mb-8">
          <TextInput
            placeholder="Notification title..."
            placeholderTextColor="#64748B"
            className="bg-[#1E293B] text-white px-5 py-4 rounded-xl mb-4 font-semibold"
          />
          <TextInput
            placeholder="Write your announcement..."
            placeholderTextColor="#64748B"
            className="bg-[#1E293B] text-white px-5 py-4 rounded-xl h-32 text-left"
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* Quick Templates */}
        <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-3 ml-1">QUICK TEMPLATES</Text>
        <View className="space-y-3 mb-8">
          {templates.map(template => (
            <TouchableOpacity key={template.id} className="bg-[#1E293B] rounded-2xl p-4 flex-row items-center mb-3">
              <View className="w-10 h-10 rounded-full bg-[#0F172A] items-center justify-center mr-3">
                <Ionicons name={template.icon as any} size={20} color="#F59E0B" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold text-sm mb-1">{template.title}</Text>
                <Text className="text-slate-400 text-xs" numberOfLines={1}>{template.desc}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Action Button */}
        <TouchableOpacity className="bg-[#00FF66] py-4 rounded-xl items-center shadow-lg shadow-[#00FF66]/30 flex-row justify-center mb-8">
          <Ionicons name="megaphone" size={20} color="#0F172A" className="mr-2" />
          <Text className="text-[#0F172A] font-bold text-base ml-2">Send to All 145 Members</Text>
        </TouchableOpacity>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}
