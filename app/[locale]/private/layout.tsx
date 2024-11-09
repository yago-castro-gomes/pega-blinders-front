import { FloatingNavPrivate } from '@/app/components/ui/FloatingNavPrivate';
import { navItems } from '@/data/NavItems';


export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className='bg-black h-screen w-screen'>
      <div>
        <FloatingNavPrivate navItems={navItems} />
      </div>
      <div className='pt-40'>
        {children}
      </div>
    </div>
  );
}