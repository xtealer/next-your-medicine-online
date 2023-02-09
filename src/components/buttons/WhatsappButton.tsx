import { Link } from "@chakra-ui/react";
import { FC } from "react";
import { RiWhatsappLine } from "react-icons/ri";

interface IProps {
  link: string;
}

const WhatsappButton: FC<IProps> = ({ link }) => {
  return (
    <Link color="#25D366" href={link} isExternal fontSize="3xl">
      <RiWhatsappLine />
    </Link>
  );
};

export default WhatsappButton;
