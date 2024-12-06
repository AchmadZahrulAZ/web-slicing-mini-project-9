import React from 'react'
import Header from '../components/BlogList/Header'
import BlogPostCard from '../components/BlogList/BlogPostCard'
import ButtonLoadMore from '../components/BlogList/ButtonLoadMore'

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