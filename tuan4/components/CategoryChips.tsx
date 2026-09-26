import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data';

export function CategoryChips({
  selectedCategory,
  onSelect,
}: {
  selectedCategory: string;
  onSelect: (category: string) => void;
}) {
  return (
    <View style={styles.wrap}>
      {CATEGORIES.map((name) => {
        const isActive = selectedCategory === name;

        return (
          <Pressable
            key={name}
            style={[styles.chip, isActive && styles.chipActive]}
            onPress={() => onSelect(name)}
          >
            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#6366F1',
    backgroundColor: '#FFFFFF',
  },
  chipActive: {
    backgroundColor: '#4338CA',
    borderColor: '#4338CA',
  },
  chipText: {
    color: '#4338CA',
    fontSize: 13,
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
});
