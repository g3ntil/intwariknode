import { Toaster as Sonner, ToasterProps } from 'sonner';

// A simpler version of the Toaster component that doesn't depend on next-themes
const Toaster = (props: ToasterProps) => {
  return (
    <Sonner
      position="top-right"
      toastOptions={{
        style: {
          background: '#0A4A4A',
          color: '#fff',
          border: '1px solid #2C7873',
        },
      }}
      {...props}
    />
  );
};

export default Toaster;
