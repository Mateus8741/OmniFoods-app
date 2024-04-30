import { SectionList, Text } from 'react-native';

import { Products } from './Products';

import { Product } from '@/models/ProductModel';

type MenuProductsProps = {
  MENU: {
    title: string;
    data: {
      id: string;
      title: string;
      price: number;
      description: string;
      cover: any;
      thumbnail: any;
      ingredients: string;
    }[];
  }[];
  sectionListRef: React.RefObject<SectionList<any>>;
  onProductPress: (product: Product) => void;
};

export function MenuProducts({ MENU, sectionListRef, onProductPress }: MenuProductsProps) {
  return (
    <SectionList
      ref={sectionListRef}
      sections={MENU}
      keyExtractor={(item) => item.id}
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Products data={item} onPress={() => onProductPress(item)} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text className="mb-3 mt-8 font-heading text-xl text-white">{title}</Text>
      )}
      className="flex-1 p-5"
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  );
}
