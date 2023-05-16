import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { changeMood } from "../redux/features/darkMood";
export function DarkMood() {
  const mood = useSelector((state) => state.mood.mood);
  const dispatch = useDispatch();
  return (
    <Group position="center" my="xl">
      <SegmentedControl
        value={mood}
        onChange={(value) => dispatch(changeMood(value))}
        data={[
          {
            value: "light",
            label: (
              <Center>
                <IconSun size="1rem" stroke={1.5} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <IconMoon size="1rem" stroke={1.5} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
