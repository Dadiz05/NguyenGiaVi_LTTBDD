import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function DiscountBadge({
  discountPercent,
  isNew,
}: {
  discountPercent?: number;
  isNew?: boolean;
}) {
  const label = isNew ? 'Mới' : discountPercent ? `-${discountPercent}%` : '';

  if (!label) return null;

  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#DC2626',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '700',
  },
});
