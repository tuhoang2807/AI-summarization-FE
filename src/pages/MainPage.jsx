import React from 'react';
import Header from "../components/Header";
import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import 'animate.css';

const MainPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Box
      sx={{
        // Gradient background inspired by "Super-Grok"
        background: 'linear-gradient(135deg, #1e1e1e 30%, #2a2a3a 90%)',
        color: 'white',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        // Add a subtle glow effect in the background
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 30%, rgba(50, 50, 100, 0.2), transparent 70%)',
          zIndex: 0,
        },
      }}
    >
      {/* Header ở trên cùng */}
      <Header />

      {/* Nội dung chính với padding để tránh chồng lấn */}
      <Box sx={{ px: { xs: 2, md: 4 }, py: 3, pt: 3, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontFamily: '"Orbitron", sans-serif', // Futuristic font
            letterSpacing: '2px',
            background: 'linear-gradient(90deg, #ffffff, #a0a0ff)', // Gradient text
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'animate__animated animate__fadeInDown animate__slow',
          }}
        >
          Tóm Tắt Nội Dung Thông Minh
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            mb: 4,
            color: '#a0a0ff', // Lighter color for contrast
            fontFamily: '"Roboto", sans-serif',
            animation: 'animate__animated animate__fadeIn animate__delay-1s',
          }}
        >
          Tóm gọn văn bản, tài liệu, bài luận nhanh chóng và hiệu quả
        </Typography>

        {/* Tabs */}
        <Tabs
          value={tabIndex}
          onChange={(e, newValue) => setTabIndex(newValue)}
          centered
          sx={{
            mb: 4,
            '& .MuiTab-root': {
              color: '#a0a0ff',
              fontWeight: 600,
              fontSize: 16,
              textTransform: 'none',
              fontFamily: '"Roboto", sans-serif',
              padding: '12px 24px',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.05)', // Slight scale on hover
              },
            },
            '& .Mui-selected': {
              backgroundColor: '#3e3e5e', // Active tab background
              color: 'white',
              boxShadow: '0 0 15px rgba(160, 160, 255, 0.5)', // Glow effect
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#a0a0ff', // Indicator color
              height: '4px',
              borderRadius: '2px',
            },
          }}
        >
          <Tab label="Tóm tắt văn bản" />
          <Tab label="Tóm tắt nội dung hình ảnh" />
          <Tab label="Tóm tắt nội dung video" />
        </Tabs>

        {/* Main Content */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={4} sx={{ maxWidth: '1200px' }}>
            {/* Left Side - Input */}
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  p: 3,
                  background: 'linear-gradient(145deg, #2e2e2e, #3e3e3e)', // Gradient background
                  borderRadius: '20px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(160, 160, 255, 0.2)', // Glow + shadow
                  animation: 'animate__animated animate__fadeInUp animate__slow',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)', // Lift on hover
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(160, 160, 255, 0.3)',
                  },
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<UploadFileIcon />}
                  sx={{
                    mb: 2,
                    color: '#a0a0ff',
                    borderColor: '#a0a0ff',
                    backgroundColor: 'transparent',
                    fontWeight: 600,
                    borderRadius: '10px',
                    padding: '8px 16px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#ffffff',
                      borderColor: '#ffffff',
                      backgroundColor: 'rgba(160, 160, 255, 0.2)',
                      boxShadow: '0 0 15px rgba(160, 160, 255, 0.5)', // Glow on hover
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Upload Doc
                </Button>

                <TextField
                  fullWidth
                  multiline
                  rows={12}
                  variant="outlined"
                  placeholder="Copy và dán văn bản cần tóm tắt vào ô này"
                  InputProps={{
                    sx: {
                      background: 'linear-gradient(145deg, #3e3e3e, #4e4e5e)', // Gradient input background
                      color: 'white',
                      borderRadius: '15px',
                      padding: '10px',
                      border: '1px solid rgba(160, 160, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(160, 160, 255, 0.7)',
                        boxShadow: '0 0 10px rgba(160, 160, 255, 0.3)',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none', // Remove default border
                      },
                    },
                  }}
                  sx={{
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                />

                {/* Nút Tóm Tắt */}
                <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    sx={{
                      color: 'white',
                      background: 'linear-gradient(90deg, #a0a0ff, #6060ff)', // Gradient button
                      fontWeight: 600,
                      px: 5,
                      py: 1.5,
                      borderRadius: '25px',
                      boxShadow: '0 0 15px rgba(160, 160, 255, 0.5)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #6060ff, #a0a0ff)', // Reverse gradient on hover
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 25px rgba(160, 160, 255, 0.7)',
                      },
                    }}
                  >
                    Tóm Tắt →
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Right Side - Hướng dẫn */}
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 4,
                  background: 'linear-gradient(145deg, #2e2e2e, #3e3e3e)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(160, 160, 255, 0.2)',
                  animation: 'animate__animated animate__zoomIn animate__slow',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(160, 160, 255, 0.3)',
                  },
                }}
              >
                <Box sx={{ color: 'white', fontSize: 16, lineHeight: 2.2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography fontWeight={600} color="#a0a0ff" component="span" sx={{ mr: 1 }}>
                      01.
                    </Typography>
                    <Typography>Nhập dữ liệu hoặc dán dữ liệu vào ô bên trái</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography fontWeight={600} color="#a0a0ff" component="span" sx={{ mr: 1 }}>
                      02.
                    </Typography>
                    <Typography>Chọn tùy chọn: tóm tắt ngắn gọn hay tóm tắt ý chính</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography fontWeight={600} color="#a0a0ff" component="span" sx={{ mr: 1 }}>
                      03.
                    </Typography>
                    <Typography>
                      Bấm nút <b>Tóm Tắt</b> và tận hưởng kết quả
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: 5,
            textAlign: 'center',
            color: '#a0a0ff',
            fontFamily: '"Roboto", sans-serif',
            animation: 'animate__animated animate__fadeIn animate__delay-2s',
          }}
        >
          💡 Nếu bạn cần trợ giúp, liên hệ{' '}
          <a href="https://www.facebook.com/wuaan.0903?locale=vi_VN" style={{ color: '#6060ff', fontWeight: 600 }}>
            Nguyễn Minh Quân
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default MainPage;