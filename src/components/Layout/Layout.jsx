// import { AppBar } from 'components/AppBar/AppBar';
// import { Box } from '../constans/Box';

// export const Layout = () => {
//   return (
//     <Box display="grid" gridTemplateColumns="200px 1fr">
//       <AppBar />
//     </Box>
//   );
// };

// import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from '../constans/Box';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      {/* <Outlet /> */}
    </Box>
  );
};
