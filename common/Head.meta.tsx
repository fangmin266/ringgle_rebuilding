import Head from "next/head";

export interface HeadMataType {
  name: string;
  content: string;
  title: string;
}
export default function HeadMeta({ name, content, title }: HeadMataType) {
  const siteTitle = "sitTitle";
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <meta name={name} content={content} />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />

      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
