import "../index.css";
import { FaUserPlus, FaLink, FaShareSquare } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { Avatar, Wrap, WrapItem, Box, AbsoluteCenter, Divider, IconButton, Button, Text, Flex, Heading, Image } from '@chakra-ui/react';
import { IoMenu } from "react-icons/io5";
import { BsChatLeftDots } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { useState, useEffect } from "react";
const accessKey = 'uJ3pQvlC6jF5UGt_yKG0r2407uHED9NMctW4b-dB8ZU';

function Profile() {
  const [userDataList, setUserDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=80`
        );
        const data = await response.json();

        const newDataList = data.map(item => ({
          username: item.user.username,
          profileImage: item.user.profile_image.medium,
          description: item.alt_description,
          postImage: item.urls.regular,
          liked: false, // Initialize liked state
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
    <div className="Profile">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="brand-icon-text">
              <FaUserPlus size={40} /> Sam774
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <CiSquarePlus size={30} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaLink size={30} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <CgDetailsMore size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="avatar-and-table">
        <div className="avatar">
          <Wrap>
            <WrapItem>
              <Avatar size='3xl' name='Sam' src='https://bit.ly/dan-abramov' />
            </WrapItem>
          </Wrap>
        </div>
        <div className="table-container">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Followers</th>
                <th>Following</th>
                <th>Posts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>360</td>
                <td>150</td>
                <td>80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Box position='relative' padding='5'>
        <Divider color={"white"} />
        <AbsoluteCenter bg='white' color='black' px='4' fontSize='25px' fontFamily='Poppins, sans-serif' borderRadius='5px'>
          Posts
        </AbsoluteCenter>
      </Box>

      <Flex flexWrap='wrap' justifyContent='center' mt={4}>
        {userDataList.map((userData, index) => (
          <Card key={index} maxW='md' bg='white' m={4}>
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name={userData.username} src={userData.profileImage} />
                  <Box>
                    <Heading size='sm'>{userData.username}</Heading>
                    <Text>{userData.description}</Text>
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
              alt='Post image'
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
              <Button
                flex='1'
                variant='ghost'
                leftIcon={userData.liked ? <FcLike /> : <GoHeart />}
                onClick={() => toggleLike(index)}
              >
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

export default Profile;