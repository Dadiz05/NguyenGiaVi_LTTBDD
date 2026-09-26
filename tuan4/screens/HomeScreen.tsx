import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { CategoryChips } from '../components/CategoryChips';
import { BookGrid } from '../components/BookGrid';
import { BOOKS } from '../data';

export function HomeScreen({
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
      <Header />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Danh mục</Text>
        <CategoryChips selectedCategory={selectedCategory} onSelect={onSelectCategory} />

        <Text style={styles.sectionTitle}>Sách nổi bật</Text>
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 120,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
    marginTop: 4,
  },
});
