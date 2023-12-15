"use client";

import { Button, Flex, Text } from "@tremor/react";
import { Avatar } from "@/components";

interface ProfileItemProps {
  src: string;
  alt: string;
  name: string;
  description: string;
  onClick: () => void;
}

const ProfileItem = ({
  src,
  alt,
  name,
  description,
  onClick = () => {},
}: ProfileItemProps) => {
  return (
    <Flex>
      <Flex className="justify-start">
        <Avatar src={src} width={48} height={48} alt={alt} />
        <div className="font-medium dark:text-white pl-4">
          <Text className="text-sm text-[#344767] font-semibold">{name}</Text>
          <Text className="text-xs text-[#7b809a] font-light">
            {description}
          </Text>
        </div>
      </Flex>
      <Button
        className="min-w-[64px] m-0 border-0 hover:bg-[none] text-xs text-center font-bold uppercase bg-transparent text-[#344767]"
        onClick={onClick}
        data-testid="click-button">
        Reply
      </Button>
    </Flex>
  );
};

export default ProfileItem;
