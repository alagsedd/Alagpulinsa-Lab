import { Stack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Stack
        m={1}
        align={"center"}
        justifyContent={"flex-end"}
        direction={"row"}
      >
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          size="md"
        />
        <Text>Dark mode </Text>
      </Stack>
    </>
  );
};

export default ColorModeSwitch;
