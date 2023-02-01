import { Link } from "@chakra-ui/react";
import { FC } from "react";
import { RiWhatsappLine } from "react-icons/ri";

interface IProps {
  link: string;
}

const WhatsappButton: FC<IProps> = ({ link }) => {
  return (
    <Link color="#25D366" href={link} isExternal>
      <RiWhatsappLine fontSize="1.5rem" />
    </Link>
  );
};

export default WhatsappButton;
