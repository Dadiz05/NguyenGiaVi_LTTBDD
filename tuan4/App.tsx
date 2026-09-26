import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './screens/HomeScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { CartScreen } from './screens/CartScreen';
import { CategoryScreen } from './screens/CategoryScreen';
import { TabBar, TabKey } from './components/TabBar';
import { BOOKS, CART_ITEMS } from './data';

export default function App() {
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  const selectedBook = BOOKS.find((b) => b.id === selectedBookId) ?? null;

  const renderContent = () => {
    if (selectedBook) {
      return (
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBookId(null)}
          onAddToCart={() => console.log('Đã thêm vào giỏ')}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomeScreen
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => setSelectedCategory(category)}
            onPressBook={(id) => setSelectedBookId(id)}
          />
        );
      case 'category':
        return (
          <CategoryScreen
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onPressBook={(id) => setSelectedBookId(id)}
          />
        );
      case 'cart':
        return <CartScreen items={CART_ITEMS} />;
      case 'account':
        return null;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        {renderContent()}
        {!selectedBook && <TabBar active={activeTab} onChange={setActiveTab} />}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  body: { flex: 1 },
});
