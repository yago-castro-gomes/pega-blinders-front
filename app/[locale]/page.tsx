import { navItems } from '@/data/NavItems';
import Hero from '../components/Hero';
import { FloatingNav } from '../components/ui/FloatingNavNav';
import FirstSection from '../components/FirstSection';
 
export default function HomePage() {
  return (
    <div className='bg-black'><FloatingNav navItems={navItems} /><Hero /><FirstSection /><FirstSection /></div>
  );
}