import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "reducers/Store";
import { RecentItem } from "types/types";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")({
  padding: "15px",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "auto",
  height: "150",
});

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Recent = styled(Box)`
  padding: 15px;
`;

const Text = styled(Typography)`
  font-size: 14px;
`;

const RecentSlide: React.FC = () => {
  const recentItems = useSelector(
    (state: RootState) => state.recentItems.recentlyViewed
  );
  return (
    <>
      <Component>
        <Recent>
          <Typography>Recently Viewed</Typography>
        </Recent>
        <Divider />
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={false}
          autoPlay={false}
          keyBoardControl={true}
          centerMode={true}
        >
          {recentItems.map((item: RecentItem) => (
            <Box key={item.id} textAlign="center" sx={{ padding: "25px 15px" }}>
              <Image src={item?.image} alt="image1" />
              <Text sx={{ fontWeight: 600, color: "#212121" }}>
                {item.name}
              </Text>
              <Text sx={{ color: "green" }}>{item.discount}% off</Text>
              <Text sx={{ color: "#212121", opacity: ".6" }}>tagline</Text>
            </Box>
          ))}
        </Carousel>
      </Component>
    </>
  );
};
export default RecentSlide;
