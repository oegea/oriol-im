import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/markdown'
import { config } from '@/lib/config'
import { stripHtml } from '@/lib/utils'

export async function GET() {
  try {
    // Fetch latest posts (limit to 20 for RSS)
    const allPosts = getAllPosts()
    const posts = allPosts.slice(0, 20)
    
    const rssItems = posts.map(post => {
      const content = post.excerpt || ''
      const description = stripHtml(content).substring(0, 300) + (content.length > 300 ? '...' : '')
      
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${config.site.url}/${post.slug}</link>
      <guid>${config.site.url}/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${description}]]></description>
    </item>`
    }).join('')

    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${config.site.title}</title>
    <link>${config.site.url}</link>
    <description>${config.site.description}</description>
    <language>es-ES</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${config.site.url}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`

    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      },
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new NextResponse('Error generating RSS feed', { status: 500 })
  }
}