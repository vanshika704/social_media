import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, Stack } from "@chakra-ui/react";

function AddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="black"
      p="6"
    >
      <Box
        width="100%"
        maxWidth="900px"
        maxHeight="900px"
        p="6"
        borderWidth="5px"
        borderRadius="lg"
        backgroundColor="black"
        color="white"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="post-title">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                color="white"
                borderColor="white"
                _placeholder={{ color: 'gray.500' }}
              />
            </FormControl>

            <FormControl id="post-body">
              <FormLabel>Body</FormLabel>
              <Textarea
                placeholder="Enter post content"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={6}
                color="white"
                borderColor="white"
                _placeholder={{ color: 'gray.500' }}
              />
            </FormControl>

            <Button colorScheme="teal" type="submit">
              Add Post
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default AddPost;