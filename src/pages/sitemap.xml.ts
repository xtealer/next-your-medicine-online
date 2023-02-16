//pages/sitemap.xml.js

/*
<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.yourmedicine.online/#store</loc>
     </url>
     <url>
       <loc>https://www.yourmedicine.online/products/ozempic</loc>
     </url>
     /*
		 ${data
				.map(({ id }) => {
					return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
				})
				.join('')}
   </urlset>
*/

function generateSiteMap(data: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.yourmedicine.online/</loc>
     </url>
     <url>
       <loc>https://www.yourmedicine.online/faq</loc>
     </url>
     <url>
       <loc>https://www.yourmedicine.online/blog</loc>
     </url>
     <url>
       <loc>https://www.yourmedicine.online/products/ozempic</loc>
     </url>
     <url>
       <loc>https://www.yourmedicine.online/privacy-policy</loc>
     </url>
     <url>
       <loc>https://www.yourmedicine.online/terms-of-service</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  // const request = await fetch(EXTERNAL_DATA_URL);
  // const posts = await request.json();
  const data = [] as any[];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
