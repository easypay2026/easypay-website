import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster 
        position="bottom-right" 
        richColors 
        toastOptions={{
          style: {
            width: "max-content",
            minWidth: "auto",
            paddingLeft: "20px",
            paddingRight: "20px"
          }
        }}
      />
    </>
  );
}
