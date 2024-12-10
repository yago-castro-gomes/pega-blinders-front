import { FloatingNavPrivate } from '@/app/components/ui/FloatingNavPrivate';
import { navItemsPrivate } from '@/data/NavItemsPrivate';


export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className='bg-black h-screen w-screen'>
      <div>
        <FloatingNavPrivate navItems={navItemsPrivate} />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}