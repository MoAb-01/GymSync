import { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProgramScreen() {
  const [completed, setCompleted] = useState<number[]>([]);
  const [exercisesList, setExercisesList] = useState<any[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [newSets, setNewSets] = useState('');
  const [newRest, setNewRest] = useState('');
  const [newMuscle, setNewMuscle] = useState('');

  const toggleExercise = (id: number) => {
    setCompleted((prev) => 
      prev.includes(id) ? prev.filter(eId => eId !== id) : [...prev, id]
    );
  };

  const handleCreateTask = () => {
    if (!newTaskName.trim()) return;
    
    const newTask = {
      id: Date.now(),
      name: newTaskName,
      sets: newSets || '3x10',
      rest: newRest || '60s',
      muscle: newMuscle || 'Custom'
    };
    
    setExercisesList([...exercisesList, newTask]);
    setModalVisible(false);
    
    setNewTaskName('');
    setNewSets('');
    setNewRest('');
    setNewMuscle('');
  };

  const progress = completed.length;
  const total = exercisesList.length;
  const progressPercent = total === 0 ? 0 : (progress / total) * 100;

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      {/* Add Task Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/70">
          <View className="bg-[#1E293B] rounded-t-3xl p-6">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-white text-xl font-bold">Create New Task</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#64748B" />
              </TouchableOpacity>
            </View>

            <View className="space-y-4 mb-6">
              <View>
                <Text className="text-slate-400 text-xs mb-2 ml-1 font-bold">TASK NAME</Text>
                <TextInput
                  className="bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155]"
                  placeholder="e.g. Pull-ups"
                  placeholderTextColor="#64748B"
                  value={newTaskName}
                  onChangeText={setNewTaskName}
                />
              </View>

              <View className="flex-row gap-3">
                <View className="flex-1">
                  <Text className="text-slate-400 text-xs mb-2 ml-1 font-bold">SETS & REPS</Text>
                  <TextInput
                    className="bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155]"
                    placeholder="e.g. 4x10"
                    placeholderTextColor="#64748B"
                    value={newSets}
                    onChangeText={setNewSets}
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-slate-400 text-xs mb-2 ml-1 font-bold">REST</Text>
                  <TextInput
                    className="bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155]"
                    placeholder="e.g. 90s"
                    placeholderTextColor="#64748B"
                    value={newRest}
                    onChangeText={setNewRest}
                  />
                </View>
              </View>

              <View>
                <Text className="text-slate-400 text-xs mb-2 ml-1 font-bold">MUSCLE GROUP</Text>
                <TextInput
                  className="bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155]"
                  placeholder="e.g. Back"
                  placeholderTextColor="#64748B"
                  value={newMuscle}
                  onChangeText={setNewMuscle}
                />
              </View>
            </View>

            <TouchableOpacity 
              onPress={handleCreateTask}
              className="bg-[#00FF66] rounded-xl py-4 items-center shadow-lg shadow-[#00FF66]/30"
            >
              <Text className="text-[#0F172A] font-bold text-lg">Add to Workout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView className="flex-1 px-5 pt-6" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-white text-3xl font-bold">Today's Workout</Text>
          <Text className="text-slate-400 mt-1">Chest & Triceps - Push Day A</Text>
        </View>

        {/* Progress Card */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-6 flex-row items-center">
          <View className="w-14 h-14 rounded-full border-4 border-slate-700 items-center justify-center mr-4 relative">
            <View 
              className="absolute w-14 h-14 rounded-full border-4 border-[#00FF66] border-t-transparent border-r-transparent rotate-45"
              style={{ opacity: progress > 0 ? 1 : 0 }} 
            />
            <Text className="text-[#00FF66] font-bold text-sm">{progress}/{total}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white font-bold text-lg mb-2">{total - progress} exercises left</Text>
            <View className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
              <View 
                className="h-full bg-[#3B82F6] rounded-full" 
                style={{ width: `${progressPercent}%` }} 
              />
            </View>
          </View>
        </View>

        {/* Exercises List */}
        <View className="space-y-4 mb-6">
          {exercisesList.map((exercise) => {
            const isDone = completed.includes(exercise.id);
            return (
              <View key={exercise.id} className="bg-[#1E293B] rounded-2xl p-4 flex-row items-center mb-3">
                <TouchableOpacity 
                  onPress={() => toggleExercise(exercise.id)}
                  className={`w-7 h-7 rounded-md border-2 items-center justify-center mr-4 ${isDone ? 'bg-[#00FF66] border-[#00FF66]' : 'border-slate-600'}`}
                >
                  {isDone && <Ionicons name="checkmark" size={18} color="#0F172A" />}
                </TouchableOpacity>
                
                <View className="flex-1">
                  <Text className={`font-bold text-base mb-1 ${isDone ? 'text-slate-400 line-through' : 'text-white'}`}>
                    {exercise.name}
                  </Text>
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
            );
          })}
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-3 mb-8">
          <TouchableOpacity className="flex-1 border border-[#00FF66] rounded-xl py-3 px-2 flex-row items-center justify-center bg-[#0F172A] gap-2">
            <Ionicons name="document-text" size={16} color="#00FF66" />
            <Text className="text-[#00FF66] font-bold text-xs text-center leading-tight">Request New{'\n'}Program</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => setModalVisible(true)}
            className="flex-1 bg-[#3B82F6] rounded-xl py-3 items-center justify-center shadow-lg shadow-[#3B82F6]/30"
          >
            <Text className="text-white font-bold text-sm">+ Create My Own</Text>
          </TouchableOpacity>
        </View>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}

