import Link from "next/link"
export default function BlockPage(){
    return <main>
        <h1>The Blog</h1>
        <p><Link href="blog/post-1">post 1</Link></p>
        <p><Link href="blog/post-2">post 2</Link></p>
        <p></p>
    </main>
}