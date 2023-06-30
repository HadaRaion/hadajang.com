import Hero from '@/components/Hero';
import RecentWorks from '@/components/RecentWorks';
import Skills from '@/components/Skills';
import GA from '@/components/GA';

export default function Home() {
	return (
		<>
			<GA />
			<Hero />
			<Skills />
			<RecentWorks />
		</>
	);
}
