"use client"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import urlfor from "../lib/urlFor"
import ClientSideRoute from "./ClientSideRoute"


type Props = {
    posts: Post[]
}

function BlogList({posts}: Props) {
  return (
    <div>
        <hr className="border-[#f7aboa] mb-10"/>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 gap-y-16 pb-24">
        {posts.map(post => (
            <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`} >
            <div  className="flex flex-col group cursor-pointer" >
                    <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image className="object-cover object-left lg:object-center"
                     src={urlfor(post.mainImage).url()} alt={'image'} fill
                         />

                      <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                        <p className="font-bold">{post.title}</p>
                        <p>{new Date(post._createdAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })
                        }</p>
                      </div>

                      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 py-1 rounded-full text-sm font-semibold">
                            {post.categories.map((category) => (
                                <div key={category._id} className="bg-[#f7aboa] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                                    <p>category.title</p>
                                </div>
                            ))}
                            
                      </div>
                </div>

                            <div className="mt-5 flex-1">
                                <p className="underline text">{post.title}</p>
                                {/* <p className="line-clamp-2 text-gray-500">{post.description}</p> */}
                            </div>
                            <p className="mt-5 font-bold items-center group-hover:underline  flex">
                                Read Post
                                <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
                            </p>
            </div>
            </ClientSideRoute>
        ))}
            </div>
             </div>
  )
}

export default BlogList

