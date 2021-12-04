import Head from 'next/head'
import VideoList from '../components/VideoList'

export async function getStaticProps() {
  const response = await fetch('https://www.scorebat.com/video-api/v3/')
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

export default function Home({ data }) {
  // console.log(data);
  return (
    <div className="bg-gray-400">
      <Head>
        <title>FutWorld!</title>
        <meta name="description" content="Get football scores and odds" />
      </Head>
      <div className="container m-auto pt-12">
        <h1 className="text-3xl font-bold py-12 px-3">Recent Highlights</h1>
        <VideoList data={data} />
      </div>
    </div>
  )
}