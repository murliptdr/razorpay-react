import React from 'react'
import { useParams } from 'react-router-dom'

export default function Home() {
    const {url} = useParams();
  return (
    <a href={(url)?.replaceAll("=","/")}>Home</a>
  )
}
