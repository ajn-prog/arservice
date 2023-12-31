import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { DateProvider } from './DateProvider';

import '@/styles/globals.css';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import 'swiper/css';

const theme: MantineThemeOverride = {
  fontFamily: 'Roboto, sans-serif',
  headings: {
    fontFamily: 'Roboto, sans-serif',
  },
  colors: {
    primary: [
      '#f4f7fa',
      '#e5ebf4',
      '#d1deec',
      '#b1c8df',
      '#8cacce',
      '#7091c1',
      '#5d7ab3',
      '#576faa',
      '#475886',
      '#3d4a6b',
    ],
  },
  primaryColor: 'primary',
  components: {
    Button: {
      classNames: {
        label: 'font-normal',
      },
    },
    Modal: {
      styles: {
        title: {
          fontWeight: 'bold',
        },
      },
    },
  },
};

type Props = {
  children: React.ReactNode;
};

export const StyleProvider: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById('root');
    root?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MantineProvider theme={theme}>
      <DateProvider>
        <ModalsProvider labels={{ confirm: 'Konfirmasi', cancel: 'Batal' }}>
          {children}
        </ModalsProvider>
        <Notifications />
      </DateProvider>
    </MantineProvider>
  );
};
