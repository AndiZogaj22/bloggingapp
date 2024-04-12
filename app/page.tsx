import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'
import Hero from '@/components/Hero'



export default function Home() {
  const blogDir  = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs =  files.map(filename =>{
    
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')


    const {data: frontMatter} = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }

  })
  return (
    <div className=" absolute inset-0 -z-10 bg-inherit bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] h-full overflow-y-auto">
    <main className="wrapper mx-auto h-screen w-9/12">
  <Hero />

    <section className='py-10'>
    <div className="flex justify-center py-4"> <ModeToggle /></div>

    <h2 className='text-4xl pb-7 font-bold  mt-2 mb-5 flex justify-center bg-inherit'>
          Latest Blogs
        </h2>
       
    <div className='py-2 '>
      {blogs.map(blog =>(
        <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
          <div className='py-2 flex justify-between align-middle gap-2'>
            <div>
              <h3 className='text-lg font-blod'>
                {blog.meta.title}
              </h3>
              <div>
              
                <p className='text-gray-400'>{blog.meta.description}</p>
              </div>
              <div className='my-auto text-gray-400'>
                <p>{blog.meta.date}</p>
              </div>
             </div> 
          </div>
        </Link>
      ))}
    </div>
    </section>
    <div>
        <div className="my-4 flex justify-center p-12">
          <p className="text-sm text-gray-500">All rights reserved &copy; 2024</p>
        </div>
      </div>
   </main>
   </div>
  )
}
