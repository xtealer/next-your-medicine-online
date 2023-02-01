import { Link } from "@chakra-ui/react";
import { FC } from "react";
import { RiFacebookCircleFill } from "react-icons/ri";

interface IProps {
  link: string;
}

const FacebookButton: FC<IProps> = ({ link }) => {
  return (
    <Link color="#4267B2" href={link} isExternal>
      <RiFacebookCircleFill fontSize="1.5rem" />
    </Link>
  );
};

export default FacebookButton;
