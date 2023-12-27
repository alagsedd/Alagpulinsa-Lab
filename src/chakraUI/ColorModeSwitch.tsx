import { Stack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Stack align={"center"} direction={"row"}>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          size="md"
        />
        <Text>Dark </Text>
      </Stack>
    </>
  );
};

export default ColorModeSwitch;
