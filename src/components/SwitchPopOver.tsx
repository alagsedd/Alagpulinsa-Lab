import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import ColorModeSwitch from "../chakraUI/ColorModeSwitch";

const SwitchPopOver = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<IoMdArrowDropdown />}
          >
            Background Color Mode
          </MenuButton>
          <MenuList>
            <MenuItem>
              <ColorModeSwitch />
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SwitchPopOver;
