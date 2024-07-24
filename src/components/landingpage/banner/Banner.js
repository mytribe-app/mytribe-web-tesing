import React from 'react';
import { Grid, Box, Container, useMediaQuery } from '@mui/material';
import BannerContent from './BannerContent';

const Banner = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('md'));



  return (
    <Box mb={10} sx={{ overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6} md={8}>
            <BannerContent />
          </Grid>
          {lgUp ? (
            <Grid item xs={12} lg={6} md={4}>
              <Box
                p={3.2}
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.light,
                  minWidth: '2000px',
                  height: 'calc(100vh - 100px)',
                  maxHeight: '790px',
                }}
              >

              </Box>
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
