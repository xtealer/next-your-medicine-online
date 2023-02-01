import { Link } from "@chakra-ui/react";
import { FC } from "react";
import { RiTwitterFill } from "react-icons/ri";

interface IProps {
  link: string;
}

const TwitterButton: FC<IProps> = ({ link }) => {
  return (
    <Link color="#1DA1F2" href={link} isExternal>
      <RiTwitterFill fontSize="1.5rem" />
    </Link>
  );
};

export default TwitterButton;
