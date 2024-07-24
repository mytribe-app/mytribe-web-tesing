import React, { useState } from 'react';
import { Box, Button, Divider, Grid, styled, Paper } from '@mui/material';
import { IconChevronDown } from '@tabler/icons';
import AppLinks from 'src/layouts/full/vertical/header/AppLinks';
import QuickLinks from 'src/layouts/full/vertical/header/QuickLinks';


const Navigations = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    color: theme.palette.text.secondary,
  }));


  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <>

      <Box>
        <StyledButton
          color="inherit"
          variant="text"
          onMouseEnter={handleOpen2}
          onMouseLeave={handleClose2}
          sx={{
            color: open2 ? 'primary.main' : (theme) => theme.palette.text.secondary,
          }}
          endIcon={<IconChevronDown size="15" style={{ marginLeft: '-5px', marginTop: '2px' }} />}
        >
          Pages
        </StyledButton>
        {open2 && (
          <Paper
            onMouseEnter={handleOpen2}
            onMouseLeave={handleClose2}
            sx={{
              position: 'absolute',
              left: '0',
              right: '0',
              top: '55px',
              width: '850px',
              margin: '0 auto',
            }}
            elevation={9}
          >
            <Grid container>
              <Grid item sm={8} display="flex">
                <Box p={4} pr={0} pb={3}>
                  <AppLinks />
                </Box>
                <Divider orientation="vertical" />
              </Grid>
              <Grid item sm={4}>
                <Box p={4}>
                  <QuickLinks />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Box>

      <Button color="primary" target="_blank" variant="contained" href="#">
        Buy Now
      </Button>
    </>
  );
};

export default Navigations;
