// import { FlatList, Image, View } from 'react-native';

// export function Carousel() {
//   return (
//     <View className="-mr-6">
//       <FlatList
//         data={slides}
//         keyExtractor={(item) => String(item.id)}
//         renderItem={renderItem}
//         showsHorizontalScrollIndicator={false}
//         snapToInterval={375}
//         horizontal
//         pagingEnabled
//       />

//       <View className="flex-row">
//         {slides.map((slide) => (
//           <View
//             key={slide.id}
//             className={`mx-1 ${slide.id} rounded-full ${slide.id === 1 ? 'bg-white' : 'bg-gray-subtitle'}`}
//           />
//         ))}
//       </View>
//     </View>
//   );
// }

import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Crsl from 'react-native-reanimated-carousel';

const slides = [
  { id: 0, uri: 'https://picsum.photos/500/300' },
  { id: 1, uri: 'https://picsum.photos/500/200' },
  { id: 2, uri: 'https://picsum.photos/500/500' },
  { id: 3, uri: 'https://picsum.photos/500/400' },
];

function renderItem({ uri }: { uri: string }) {
  return <Image source={{ uri }} className="mr-11 h-48 rounded-2xl" resizeMode="cover" />;
}

export function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const width = Dimensions.get('window').width;

  return (
    <View className="mb-8">
      <Crsl
        loop
        width={width}
        height={width / 2}
        autoPlay
        data={slides}
        scrollAnimationDuration={3000}
        onSnapToItem={setCurrentSlide}
        renderItem={({ item }) => renderItem(item)}
      />

      <View className="flex-row items-center self-center">
        {slides.map((slide) => (
          <View
            key={slide.id}
            className={`mx-1 rounded-full ${slide.id === currentSlide ? 'h-3 w-3 bg-white' : 'h-2 w-2 bg-gray-subtitle'} transition-colors`}
          />
        ))}
      </View>
    </View>
  );
}
