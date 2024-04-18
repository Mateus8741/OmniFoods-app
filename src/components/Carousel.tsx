import { FlatList, Image, View } from 'react-native';

const slides = [
  { id: 1, uri: 'https://picsum.photos/500/300' },
  { id: 2, uri: 'https://picsum.photos/500/200' },
  { id: 3, uri: 'https://picsum.photos/500/500' },
  { id: 4, uri: 'https://picsum.photos/500/400' },
];

function renderItem() {
  return (
    <Image
      source={{ uri: 'https://picsum.photos/500/300' }}
      className="mr-6 h-44 w-72 rounded-2xl"
    />
  );
}

export function Carousel() {
  return (
    <View className="-mr-6">
      <FlatList
        data={slides}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        snapToInterval={375}
        horizontal
        pagingEnabled
      />

      <View className="flex-row">
        {slides.map((slide) => (
          <View
            key={slide.id}
            className={`mx-1 ${slide.id} rounded-full ${slide.id === 1 ? 'bg-white' : 'bg-gray-subtitle'}`}
          />
        ))}
      </View>
    </View>
  );
}
