import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Santiago Monteiro</Text>
          <Text color="gray.300" fontSize="small">
            santiago.a.monteiro@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Santiago Monteiro"
        src="https://github.com/santiagoMonteiro.png"
      />
    </Flex>
  );
}
