import Hero from '@/components/Hero';
import RecentWorks from '@/components/RecentWorks';
import Skills from '@/components/Skills';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Hero />
			<Skills />
			<RecentWorks />
		</>
	);
}
