import { Children, RefObject, useEffect, useRef, useState } from "react";

import useDraggableHorizontalScroll from "utils/useDraggableHorizontalScroll";
import useScrollPositionX from "utils/useScrollPositionX";

import { Box, Flex, FlexProps, HStack, IconButton } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import Dot from "./Dot";

interface Props extends FlexProps {
  showDots?: boolean;
  showArrows?: boolean;
}

const useScrollActiveElement = (
  ref: RefObject<HTMLDivElement>,
  length: number
) => {
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const carrousel = ref.current;
    const onScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carrousel;
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
      const item = Math.round(scrollPercentage * (length - 1));
      setActiveItem(item);
    };
    carrousel.addEventListener("scroll", onScroll);
    return () => {
      carrousel.removeEventListener("scroll", onScroll);
    };
  }, [length, ref]);

  const handleDotsClick = (index: number) => {
    if (!ref.current) return;
    setActiveItem(index);
    ref.current.scrollTo({
      left: ref.current.clientWidth * index,
      behavior: "smooth",
    });
  };

  return { activeItem, handleDotsClick };
};

const Carrousel = ({ showDots, showArrows, children, ...props }: Props) => {
  const reactChildren = Children.toArray(children);
  const carrouselRef = useRef<HTMLDivElement>(null);
  const { activeItem, handleDotsClick } = useScrollActiveElement(
    carrouselRef,
    reactChildren?.length
  );
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
            bgColor={"white"}
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
            bgColor={"white"}
            right={0}
            size="md"
            icon={<HiChevronRight />}
            onClick={tabListScrollToRight}
          />
        )}
      </HStack>
      {showDots && (
        <HStack pt="4" mx="auto" spacing="2">
          {reactChildren.map((_, index) => (
            <Dot
              key={index}
              index={index}
              isActive={index === activeItem}
              handleClick={handleDotsClick}
            />
          ))}
        </HStack>
      )}
    </Flex>
  );
};

export default Carrousel;
