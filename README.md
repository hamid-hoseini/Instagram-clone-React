### in progress...

# Instagram clone with REACT
  A copy of the Instagram app to learn and improve coding skills with the React platform.
  (Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil)
  
  Setting up Tailwind CSS in a Next.js v10+ project:

  ```bash
  yarn create next-app --example with-tailwindcss with-tailwindcss-app
  
  # Run the application:
  npm run dev
  ```

## What I have learned in this project are:

  1. Define `images.domains` config in `next.config.js` if any pages that leverages the next/image component and we passed a src value that uses a hostname in the URL. <sub>[Read more...](https://nextjs.org/docs/messages/next-image-unconfigured-host)</sub>
  2. Adding custom styles to Tailwind and using CSS and `@layer` <sub>[Read more...](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)</sub>
  3. Using **Faker-js** to generate massive amounts of fake (but realistic) data for testing and development. <sub>[Read more...](https://github.com/faker-js/faker)</sub>
  4. Build a custom authentication screen using **NextAuth** <sub>[Read more...](https://next-auth.js.org/getting-started/example)</sub>
  5. Using **SessionProvider**, we have to wrap entire application to allow us to keep our session state. <sub>[Read more...](https://next-auth.js.org/getting-started/upgrade-v4#sessionprovider)</sub>
  6. **Recoil** A state management library for React. <sub>[Read more...](https://recoiljs.org/)</sub>

## Dependencies
  - Tailwind React Native Classnames [link](https://github.com/tailwindlabs/heroicons)
  - @faker-js/faker [link](https://github.com/faker-js/faker)
  - Tailwind Scrollbar [link](https://www.npmjs.com/package/tailwind-scrollbar)
  - Tailwind Scrollbar Hide [link](https://www.npmjs.com/package/tailwind-scrollbar-hide)
  - Next Auth [link](https://next-auth.js.org/getting-started/example)
  - Firebase [link](https://console.firebase.google.com/)
  - @headlessui/react [link](https://headlessui.com/)
  - React Moment [link](https://www.npmjs.com/package/react-moment/)
  - Moment module 

> Use `SessionProvider` to wrap entire application and we have to wrap any part of our application using `useSession` in this provider.
```tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (

    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </SessionProvider>

  )
}

export default MyApp
```

> How to use Recoil 
  1. In _app.tsx, we need to wrap entire code with `RecoilRoot`
  ```tsx
  ...
  import { RecoilRoot } from 'recoil';

  ...
  <SessionProvider session={session} refetchInterval={5 * 60}>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </SessionProvider>
  ...
  ```

  2. Need to create Atoms contain the source of truth for our application state. like: `/atoms/modalAtoms.js`

  We give our atom a unique key and set the default value to any required values
  ```tsx
  import { atom } from "recoil";

  export const modalState = atom({
    key: "modalState",
    default: false
  });
  ```

  3. To read the contents of this atom, we can use the `useRecoilValue()` or `useRecoilState()` hook in our TodoList component:
  ```tsx
  ...
  import { useRecoilState } from 'recoil';
  import { modalState} from '../atoms/modalAtom';
  
  export default function Header() {

    const [open, setOpen] = useRecoilState(modalState);
    
    return (
      ...
      <div onClick={() => setOpen(true)}>
      ...
    )
  }
  ```
  
#### DISCLAIMER: 

This code is developed for learning purposes only. Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” of this code for education purposes.