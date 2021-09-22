import React, { useContext } from "react";
import Link from "next/link";

import { Flex, Text, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { MdMenu, MdShoppingCart } from "react-icons/md";

// import { ShopContext } from "../context/shopContext";

const NavBar = () => {
  // const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      borderBottom="0.25pt #ccc solid"
      backgroundColor="#fff"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon
        fill="#aaa"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
        // onClick={() => openMenu()}
      />

      <Link href="/">
        <a>
          <Image src="#" w={50} h={50} />
        </a>
      </Link>

      <Box>
        <Icon
          fill="#aaa"
          cursor="pointer"
          as={MdShoppingCart}
          w={30}
          h={30}
          // onClick={() => openCart()}
        />
        <Badge backgroundColor="#ff38bd" borderRadius="50%">
          {/* {checkout.lineItems?.length} */}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
