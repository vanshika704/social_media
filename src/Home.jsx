import TabBar from './components/Appbar'; 
import Footer from './components/footer';


import { Avatar,  Box,  IconButton, Button, Text, Flex, Heading, Image } from '@chakra-ui/react';
import { IoMenu } from "react-icons/io5";
import { BsChatLeftDots } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaShareSquare } from "react-icons/fa";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import { GoHeart } from 'react-icons/go';
const accessKey = 'uJ3pQvlC6jF5UGt_yKG0r2407uHED9NMctW4b-dB8ZU';
function Home() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <TabBar />
      <div className="content flex-grow-1">
        <div className="container mt-3">
          <div className='bodyhome'>
           <Posts/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
//added like optio\n

function Posts() {
  const [userDataList, setUserDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`
        );
        const data = await response.json();

        const newDataList = data.map(item => ({
          username: item.user.username,
          profileImage: item.user.profile_image.medium,
          description: item.alt_description,
          postImage: item.urls.regular,
        }));

        setUserDataList(newDataList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const toggleLike = (index) => {
    setUserDataList((prevUserDataList) =>
      prevUserDataList.map((userData, i) =>
        i === index ? { ...userData, liked: !userData.liked } : userData
      )
    );
  };
  return (
   <div>
      

     

      <Flex flexWrap='wrap' justifyContent='center' mt={4}>
        {userDataList.map((userData, index) => (
          <Card key={index} maxW='md' bg='white' m={4}>
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name={userData.username} src={userData.profileImage} />
                  <Box>
                    <Heading size='sm'>{userData.username}</Heading>
                    
                  </Box>
                </Flex>
                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                  icon={<IoMenu />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{userData.description}</Text>
            </CardBody>
            <Image
              objectFit='cover'
              src={userData.postImage}
              alt='Chakra UI'
              height={200}
            />
            <CardFooter
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Button flex='1' variant='ghost' leftIcon={userData.liked ?<FcLike /> : <GoHeart/>} onClick={() => toggleLike(index)}>

                Like
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BsChatLeftDots />}>
                Comment
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<FaShareSquare />}>
                Share
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </div>
  );
}