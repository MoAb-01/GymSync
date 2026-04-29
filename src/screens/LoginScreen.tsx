import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ signIn }: { signIn: (role: 'member' | 'trainer') => void }) {
  const [role, setRole] = useState<'member' | 'trainer'>('member');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-6"
      >
        {/* Logo Area */}
        <View className="items-center mb-10">
          <View className="flex-row items-center justify-center">
            <View className="bg-[#00FF66] p-1.5 rounded-lg mr-3">
              <Ionicons name="barbell" size={24} color="#0F172A" />
            </View>
            <Text className="text-white text-3xl font-bold">GymSync</Text>
          </View>
          <Text className="text-slate-400 mt-3 text-sm">Your fitness, perfectly in sync</Text>
        </View>

        {/* Role Toggle */}
        <View className="flex-row bg-[#1E293B] rounded-xl p-1.5 mb-8">
          <TouchableOpacity 
            onPress={() => setRole('member')}
            className={`flex-1 py-3 rounded-lg items-center ${role === 'member' ? 'bg-[#00FF66]' : 'bg-transparent'}`}
          >
            <Text className={`font-bold ${role === 'member' ? 'text-[#0F172A]' : 'text-slate-400'}`}>I'm a Member</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setRole('trainer')}
            className={`flex-1 py-3 rounded-lg items-center ${role === 'trainer' ? 'bg-[#00FF66]' : 'bg-transparent'}`}
          >
            <Text className={`font-bold ${role === 'trainer' ? 'text-[#0F172A]' : 'text-slate-400'}`}>I'm a Trainer</Text>
          </TouchableOpacity>
        </View>

        {/* Inputs */}
        <View className="mb-2">
          <TextInput
            placeholder="Email address"
            placeholderTextColor="#64748B"
            className="bg-[#1E293B] text-white px-5 py-4 rounded-xl mb-4"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#64748B"
            className="bg-[#1E293B] text-white px-5 py-4 rounded-xl"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity className="items-end mb-8 mt-4">
          <Text className="text-[#00FF66] font-semibold text-sm">Forgot password?</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity 
          onPress={() => signIn(role)}
          className="bg-[#00FF66] py-4 rounded-xl items-center shadow-lg shadow-[#00FF66]/30"
        >
          <Text className="text-[#0F172A] font-bold text-lg">Sign In — My Dashboard</Text>
        </TouchableOpacity>
        
        <Text className="text-slate-500 text-center mt-6 text-xs">
          Demo: click Sign In to explore all screens
        </Text>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
