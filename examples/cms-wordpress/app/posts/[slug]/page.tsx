import Head from 'next/head'
import Container from '../../../components/container'
import PostBody from '../../../components/post-body'
import MoreStories from '../../../components/more-stories'
import Header from '../../../components/header'
import PostHeader from '../../../components/post-header'
import SectionSeparator from '../../../components/section-separator'
import Layout from '../../../components/layout'
import PostTitle from '../../../components/post-title'
import Tags from '../../../components/tags'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../../lib/api'
import { CMS_NAME } from '../../../lib/constants'
import NotFound from '../../../components/not-found'

export async function generateStaticParams() {
  const allPosts = await getAllPostsWithSlug()

  return allPosts.edges.map(({ node }) => `/posts/${node.slug}`)
}

export default async function Post({ params, preview }) {
  const { post, posts } = await getPostAndMorePosts(
    params?.slug,
    false,
    undefined
  )

  const morePosts = posts?.edges
  if (!false && !post?.slug) {
    return <NotFound />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {false ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const revalidate = 10
export const dynamicParams = true
