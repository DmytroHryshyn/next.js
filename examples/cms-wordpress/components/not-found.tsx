'use client'
import ErrorPage from 'next/error'

const NotFound = () => {
  return <ErrorPage statusCode={404} />
}

export default NotFound
