
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react';
  import { FaList } from 'react-icons/fa';
  import { MdCreate, MdViewList, MdExplore, MdAccountCircle } from 'react-icons/md';
  import { useNavigate } from 'react-router-dom';
  
  function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
  
    const handleItemClick = (path) => {
      navigate(path);
      onClose();
    };
  
    return (
      <>
        <Button 
          onClick={onOpen} 
          backgroundColor="gray.800" 
          color="white"
          _hover={{ backgroundColor: 'gray.700' }} 
          _active={{ backgroundColor: 'gray.900' }} 
        >
          <FaList />
        </Button>
        <Drawer 
          placement="left" 
          onClose={onClose} 
          isOpen={isOpen}
          size="xs" 
        >
          <DrawerOverlay />
          <DrawerContent bg="gray.800" color="white">
            <DrawerHeader borderBottomWidth='1px'>Hey User!</DrawerHeader>
            <DrawerBody>
              <List spacing={3}>
                <ListItem>
                  <Button
                    onClick={() => handleItemClick('/Addpost')}
                    variant="ghost"
                    width="100%"
                    justifyContent="flex-start"
                    color="white"
                    _hover={{ backgroundColor: 'gray.700' }}
                  >
                    <ListIcon as={MdCreate} color="white" />
                    Create Post
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={() => handleItemClick('/')}
                    variant="ghost"
                    width="100%"
                    justifyContent="flex-start"
                    color="white"
                    _hover={{ backgroundColor: 'gray.700' }}
                  >
                    <ListIcon as={MdViewList} color="white" />
                    View Posts
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={() => handleItemClick('/explore')}
                    variant="ghost"
                    width="100%"
                    justifyContent="flex-start"
                    color="white"
                    _hover={{ backgroundColor: 'gray.700' }}
                  >
                    <ListIcon as={MdExplore} color="white" />
                    Explore
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={() => handleItemClick('/Profile')}
                    variant="ghost"
                    width="100%"
                    justifyContent="flex-start"
                    color="white"
                    _hover={{ backgroundColor: 'gray.700' }}
                  >
                    <ListIcon as={MdAccountCircle} color="white" />
                    Profile
                  </Button>
                </ListItem>
                {/* Add more ListItems for additional menu items */}
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  export default Sidebar;