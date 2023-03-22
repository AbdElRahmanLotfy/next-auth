import { SessionProvider } from "next-auth/react";
import Layout from "@/components/layout/layout";
import "@/styles/globals.scss";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session} basePath="/auth/api/auth">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
