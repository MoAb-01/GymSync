import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MembersStackParamList = {
  MembersList: undefined;
  MemberDetail: { memberId: string };
};

export default function MembersScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<MembersStackParamList>>();

  const members = [
    { id: '1', initials: 'KD', name: 'Kıvanç Demir', lastSeen: '2h ago', status: 'Active', daysLeft: '22d left', color: '#00FF66' },
    { id: '2', initials: 'EY', name: 'Ece Yılmaz', lastSeen: '5h ago', status: 'Active', daysLeft: '14d left', color: '#00FF66' },
    { id: '3', initials: 'MK', name: 'Mert Kaya', lastSeen: '1d ago', status: 'Overdue', daysLeft: '3d left', color: '#F59E0B' },
    { id: '4', initials: 'SA', name: 'Selin Arslan', lastSeen: '8d ago', status: 'Expired', daysLeft: '0d left', color: '#EF4444' },
    { id: '5', initials: 'BŞ', name: 'Burak Şahin', lastSeen: '30m ago', status: 'Active', daysLeft: '29d left', color: '#00FF66' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      <View className="px-5 pt-6 flex-1">
        
        {/* Header */}
        <View className="mb-4">
          <Text className="text-white text-3xl font-bold">Members</Text>
          <Text className="text-slate-400 mt-1">5 total · 3 active</Text>
        </View>

        {/* Search */}
        <View className="bg-[#1E293B] rounded-xl flex-row items-center px-4 py-3 mb-4">
          <Ionicons name="search" size={20} color="#64748B" />
          <TextInput 
            placeholder="Search members..." 
            placeholderTextColor="#64748B"
            className="flex-1 text-white ml-2"
          />
        </View>

        {/* Filter Pills */}
        <View className="flex-row gap-2 mb-6">
          <TouchableOpacity className="bg-[#00FF66] px-4 py-1.5 rounded-full">
            <Text className="text-[#0F172A] font-bold text-xs">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-[#00FF66] px-4 py-1.5 rounded-full">
            <Text className="text-[#00FF66] font-bold text-xs">Active (3)</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-[#F59E0B] px-4 py-1.5 rounded-full">
            <Text className="text-[#F59E0B] font-bold text-xs">Overdue (1)</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-[#EF4444] px-4 py-1.5 rounded-full">
            <Text className="text-[#EF4444] font-bold text-xs">Expired (1)</Text>
          </TouchableOpacity>
        </View>

        {/* List */}
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {members.map(member => (
            <TouchableOpacity 
              key={member.id} 
              onPress={() => navigation.navigate('MemberDetail', { memberId: member.id })}
              className="bg-[#1E293B] rounded-2xl p-4 flex-row items-center justify-between mb-3"
            >
              <View className="flex-row items-center">
                <View className="w-12 h-12 rounded-full border items-center justify-center mr-3" style={{ borderColor: member.color }}>
                  <Text className="font-bold text-base" style={{ color: member.color }}>{member.initials}</Text>
                </View>
                <View>
                  <Text className="text-white font-bold text-base">{member.name}</Text>
                  <Text className="text-slate-400 text-xs mt-1">Last seen: {member.lastSeen}</Text>
                </View>
              </View>
              
              <View className="items-end">
                <Text className="font-bold text-xs mb-1" style={{ color: member.color }}>{member.status}</Text>
                <Text className="text-slate-500 text-[10px]">{member.daysLeft}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View className="h-6" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
