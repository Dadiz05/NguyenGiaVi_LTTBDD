import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { CategoryChips } from '../components/CategoryChips';
import { BookGrid } from '../components/BookGrid';
import { BOOKS } from '../data';

export function CategoryScreen({
  selectedCategory,
  onSelectCategory,
  onPressBook,
}: {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onPressBook: (id: number) => void;
}) {
  const filteredBooks =
    selectedCategory === 'Tất cả'
      ? BOOKS
      : BOOKS.filter((book) => book.category === selectedCategory);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Danh mục</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CategoryChips selectedCategory={selectedCategory} onSelect={onSelectCategory} />

        <Text style={styles.sectionTitle}>
          {selectedCategory === 'Tất cả' ? 'Tất cả sách' : selectedCategory}
        </Text>

        <BookGrid books={filteredBooks} onPressBook={onPressBook} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 120,
  },
  sectionTitle: {
    marginTop: 18,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
});
