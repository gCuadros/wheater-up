import { Children, RefObject, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Box, Flex, FlexProps, HStack, IconButton } from "@chakra-ui/react";
import useDraggableHorizontalScroll from "utils/useDraggableHorizontalScroll";
import useScrollPositionX from "utils/useScrollPositionX";

interface Props extends FlexProps {
  showArrows?: boolean;
}

const Carrousel = ({ showArrows, children, ...props }: Props) => {
  const reactChildren = Children.toArray(children);
  const carrouselRef = useRef<HTMLDivElement>(null);

  const { onMouseDown, isGrabbing } =
    useDraggableHorizontalScroll(carrouselRef);

  const carrouselElement = carrouselRef.current;
  const { scrollPosition, maxScrollLeft } =
    useScrollPositionX(carrouselElement);
  const [isPrevTabsButton, setIsPrevTabsButton] = useState(false);
  const [isNextTabsButton, setIsNextTabsButton] = useState(true);

  const tabListScrollToRight = () => {
    carrouselElement?.scrollTo({
      left: scrollPosition + carrouselElement.children[0].clientWidth,
      behavior: "smooth",
    });
  };

  const tabListScrollToLeft = () => {
    carrouselElement?.scrollTo({
      left: scrollPosition - carrouselElement.children[0].clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setIsPrevTabsButton(scrollPosition > 0);
    setIsNextTabsButton(
      maxScrollLeft > 0 && scrollPosition < maxScrollLeft - 1
    );
  }, [scrollPosition, maxScrollLeft]);

  return (
    <Flex
      className="slider"
      maxWidth="100%"
      position="relative"
      direction={"column"}
      gap={"3"}
    >
      <HStack>
        {showArrows && isPrevTabsButton && (
          <IconButton
            aria-label="prev-tabs-button"
            bgColor={"transparent"}
            right={0}
            size="md"
            icon={<HiChevronLeft />}
            onClick={tabListScrollToLeft}
          />
        )}
        <Flex
          className="slides"
          p={"3"}
          paddingInlineStart={"0"}
          gap={"3"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          overflowX="auto"
          position="relative"
          ref={carrouselRef}
          onMouseDown={onMouseDown}
          {...props}
        >
          {reactChildren.map((children, index) => (
            <Box
              key={index}
              pointerEvents={isGrabbing ? "none" : "all"}
              scrollSnapStop={"always"}
            >
              {children}
            </Box>
          ))}
        </Flex>
        {showArrows && isNextTabsButton && (
          <IconButton
            aria-label="nex-tabs-button"
            bgColor={"transparent"}
            right={0}
            size="md"
            icon={<HiChevronRight />}
            onClick={tabListScrollToRight}
          />
        )}
      </HStack>
    </Flex>
  );
};

export default Carrousel;
