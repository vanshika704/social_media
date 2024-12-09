import React, { useState } from 'react';
import {
  Button,
  Box,
  FormLabel,
  Input,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'; // Import useDisclosure from Chakra UI
import {FaGoogle, FaPlus } from 'react-icons/fa'; // Import FaPlus icon for Signup and FaGoogle icon for Google login

function Signup() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Initialize useDisclosure
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);

  const firstField = React.useRef();

  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    console.log('Logging in with Google...');
  };

  const handleSubmit = () => {
    // Validate email
    if (email === '') {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
      // Perform form submission logic here (e.g., API call)
      console.log('Submitting form:', { name, userId, email, password });
      // Close the drawer after submission
      onClose();
    }
  };

  return (
    <>
      <Button
        leftIcon={<FaPlus/>}
        fontSize="sm"
        colorScheme="green" 
        variant="filled"
        onClick={onOpen}
         color="white" 
      >
        Signup
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Please enter user name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="userid">User ID</FormLabel>
                <Input
                  id="userid"
                  placeholder="Please enter user ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </Box>

              <Box>
                <FormControl isInvalid={isEmailError}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Please enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {isEmailError ? (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      Enter  email 
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>

              <Box>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="Please enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="filled" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="yellow" onClick={handleSubmit}>
              Submit
            </Button>
          </DrawerFooter>

          {/* Google Login Button */}
          <Button
            leftIcon={<FaGoogle />}
            mt={4}
            colorScheme="red" // You can choose appropriate colorScheme for Google
            variant="outline"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Signup;