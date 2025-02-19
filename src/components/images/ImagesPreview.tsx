import useDidHydrate from "@/hooks/useDidHydrate";
import { ImageItem } from "@/types/ImageItem";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";

interface IProps {
  images: ImageItem[];
}

const ImagesPreview: FC<IProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] ?? null);

  const onSelectImage = useCallback((img: ImageItem) => {
    setSelectedImage(img);
  }, []);

  return (
    <Grid
      templateRows="1fr auto"
      justifyContent="center"
      minH="350px"
      w="450px"
      maxW="full"
      gap="2"
    >
      <GridItem
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        border="1px"
        borderColor="gray.200"
      >
        {selectedImage && (
          <Image
            src={selectedImage.url}
            alt={selectedImage.alt}
            objectFit="contain"
          />
        )}
      </GridItem>
      <GridItem
        display="flex"
        minH="50px"
        h="min-content"
        flexDirection="row"
        flexWrap="wrap"
        gap={2}
      >
        {images.map((img) => {
          const onSelect = () => onSelectImage(img);
          return (
            <Image
              src={img.url}
              alt={img.alt}
              key={img.id}
              h="50px"
              w="50px"
              objectFit="cover"
              cursor="pointer"
              borderWidth="2px"
              borderStyle={img?.id === selectedImage?.id ? "solid" : "none"}
              borderColor={
                img?.id === selectedImage?.id ? "primary._" : "transparent"
              }
              onClick={onSelect}
            />
          );
        })}
      </GridItem>
    </Grid>
  );
};

export default ImagesPreview;
