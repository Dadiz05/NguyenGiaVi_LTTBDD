import React from 'react';
import { View, ScrollView, Text, Pressable, StyleSheet, Image } from 'react-native';
import { CartItem } from '../data';

export function CartScreen({ items }: { items: CartItem[] }) {
  const total = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Giỏ hàng</Text>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {items.map((item) => (
          <View key={item.book.id} style={styles.itemRow}>
            <Image source={{ uri: item.book.cover }} style={styles.cover} />

            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.book.title}</Text>
              <Text style={styles.itemMeta}>
                {item.quantity} x {item.book.price.toLocaleString()} đ
              </Text>
            </View>

            <Text style={styles.itemTotal}>{(item.book.price * item.quantity).toLocaleString()} đ</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalBar}>
        <View>
          <Text style={styles.totalLabel}>Tổng cộng</Text>
          <Text style={styles.totalValue}>{total.toLocaleString()} đ</Text>
        </View>
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    fontSize: 18,
    fontWeight: '800',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 16 },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    gap: 12,
  },
  cover: {
    width: 56,
    height: 72,
    borderRadius: 8,
    backgroundColor: '#EEF2F7',
  },
  itemInfo: {
    flex: 1,
    paddingRight: 8,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  itemMeta: {
    fontSize: 12,
    color: '#5B6B7F',
    marginTop: 4,
  },
  itemTotal: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E1B4B',
  },
  totalBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    marginBottom: 64,
  },
  totalLabel: { fontSize: 12, color: '#5B6B7F' },
  totalValue: { fontSize: 18, fontWeight: '800', color: '#1E1B4B' },
  checkoutButton: {
    backgroundColor: '#4338CA',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  checkoutText: { color: '#FFFFFF', fontWeight: '700' },
});
