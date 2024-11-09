import { SidebarInset, SidebarProvider } from '@/app/components/ui/sidebar';

export const experimental_ppr = true;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <SidebarProvider defaultOpen={true}>
      {/* <AppSidebar /> */}
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
