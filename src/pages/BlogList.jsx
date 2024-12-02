import React from 'react'
import Header from '../components/Header'
import BlogPostCard from '../components/BlogPostCard'
import ButtonLoadMore from '../components/ButtonLoadMore'

const BlogList = () => {
  return (
    <>
        <h1>BlogList</h1>
        <Header />
        <BlogPostCard />
        <ButtonLoadMore />
    </>
  )
}

export default BlogList