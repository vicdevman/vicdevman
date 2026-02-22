import { NextResponse } from "next/server";
import { projects } from "@/app/data/projects.data";

const getSiteUrl = () => {
  return process.env.SITE_URL || "https://vicdevman.dev";
};

function formatDate(date = new Date()) {
  return date.toISOString().split("T")[0];
}

export async function GET() {
  const siteUrl = getSiteUrl().replace(/\/$/, "")
  const today = formatDate();

  const urls = [
    { loc: `${siteUrl}/`, changefreq: "daily", priority: "1.0" },
    { loc: `${siteUrl}/projects`, changefreq: "weekly", priority: "0.8" },
  ];

  projects.forEach((p) => {
    urls.push({ loc: `${siteUrl}/projects/${p.id}`, changefreq: "monthly", priority: "0.7" });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join("\n")}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
