import React from 'react';
import { Grommet, grommet, Box, Text, Heading, InfiniteScroll, Image, Carousel, Video } from 'grommet';
import { AppBar, Toolbar, IconButton, Typography, Paper, TextField, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

function App() {
  return (
    <Grommet full theme={grommet}>
      <Box fill="horizontal" >
        <AppBar position="static">
          <Toolbar>
            <Box fill="horizontal" direction="row" align="center"  >
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Material and Grommet UI Example Application
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box pad="medium" align="center" justify="center" >
        <Heading>
          I really like Material UI but I also really like Grommet so why not combine them both?
        </Heading>
        <Text>
          Am I hip enough yet Mom? My Mom is pretty cool she rides a sticker
          covered fixie bike and drinks Oat Milk lattes. She also writes Web Applications
          with Ruby on Rails and insists my use of Node.js and Golang are too "Mainstream".
        </Text>
        <Box pad="medium" direction="row" >
          <TextField style={{ alignSelf: "flex-start" }} placeholder="I will never be" id="standard-basic" />
          <TextField style={{ alignSelf: "center" }} placeholder="as hip or cool" id="filled-basic" variant="filled" />
          <TextField style={{ marginTop: "3vh", alignSelf: "flex-end" }} placeholder="as my Mom." id="outlined-basic" variant="outlined" />
          <Button  onClick={() => {
            alert('This website packs more logic in it than most websites in the early 2000s')
          }} style={{ marginLeft: "1vw", marginTop: "4vh", alignSelf: "flex-end" }} variant="contained" color="primary">
            Her name is Berenice.
          </Button>
        </Box>
        <Text>
          There is some pretty neat styling going on here there is use of flexbox,
          margins and padding properties all packed into one.
        </Text>
        <Box fill="horizontal" pad="medium" height="large" overflow="hidden">
          <Carousel fill>
            <Image
              fit="cover"
              src="https://images.unsplash.com/photo-1442560203426-76d17f20aa42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            />
            <Image fit="cover" src="https://images.unsplash.com/photo-1558906018-ff9aca108795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" />
            <Image fit="cover" src="https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
          </Carousel>
        </Box>
      </Box>
      <Box pad="medium" align="center" justify="center">
        <Heading>
          Be Careful there are 1000 posts of the same content below here
          I'm just testing the InfiniteScroll components.
          </Heading>
      </Box>
      <Box overflow="auto" pad="medium" align="center" justify="center" >
        <InfiniteScroll items={[...Array(1000).keys()].map(i => ({
          heading: "Lorem ipsum dolor sit amet",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar ac urna tempus ultricies. Maecenas ac arcu suscipit, aliquet diam sed, molestie nibh. Etiam mollis feugiat tellus, sed iaculis velit iaculis non. Nullam aliquet condimentum auctor. Etiam rutrum condimentum odio, sit amet placerat ante porttitor in. Morbi sit amet ex vel justo blandit imperdiet eget sit amet diam. Nunc sed justo justo. In hac habitasse platea dictumst. Fusce ac pretium diam. In et mollis urna, nec ornare erat. Donec congue, libero vitae finibus dictum, risus ex tempus elit, vitae cursus nisl nisi in libero. Donec eu posuere enim, a blandit arcu. Integer nisi orci, rhoncus in leo sit amet, laoreet ullamcorper purus. Aenean dolor tortor, egestas at est sit amet, facilisis viverra risus",
        }))} >
          {(item, i) => (
            <Box key={i} pad="small" >
              <Paper style={{ padding: "2vw" }} >
                <Heading size="small" >{item.heading}</Heading>
                <Text>{item.text}</Text>
              </Paper>
            </Box>
          )}
        </InfiniteScroll>
      </Box>
    </Grommet>
  );
}

export default App;
