import Script from 'next/script';

import Hero from '@/components/Hero';
import RecentWorks from '@/components/RecentWorks';
import Skills from '@/components/Skills';

export default function Home() {
	return (
		<>
			<Script
				src={`
          https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}
        `}
			/>
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_TRACKING_ID}');
        `}
			</Script>
			<Hero />
			<Skills />
			<RecentWorks />
		</>
	);
}
