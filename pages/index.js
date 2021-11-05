import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/Gallery/layout'
import { getAllBracelets } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import Navbar from '@/components/Global/navbar'
import LandingHero from '@/components/Landing/hero-landing'
export default function Index({ allBracelets }) {
  const bracelets = allBracelets.bracelets
  // console.log(bracelets[0].CoverImages[0].formats.large.url)
  return (
    <>
    <Layout>
      <Navbar ></Navbar>
      <LandingHero />
    </Layout>
      {/* <p>test</p>
      <Layout>
        <Head>
          <title>Dylan Reed Site Built By Olisa Obiora</title>
        </Head>
        <Container>
          <Intro />
          {bracelets[0] && (
            <HeroPost
              title={bracelets[0].Name}
              excerpt={bracelets[0].Build}
              coverImage={bracelets[0].CoverImages[0].formats.large}
              
              
            />
          )}
        </Container>
      </Layout>
      {/* <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout> */} 
    </>
  )
}

export async function getStaticProps() {
  const allBracelets = (await getAllBracelets()) || []
  return {
    props: { allBracelets },
  }
}
