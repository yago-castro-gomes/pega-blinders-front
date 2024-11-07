'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { useSidebar, Sidebar, SidebarHeader, SidebarMenu, SidebarContent, SidebarGroup, SidebarFooter, SidebarGroupContent } from '../ui/sidebar';
import { BetterTooltip } from '../ui/tooltip';
import { PlusIcon } from './icons';
import { SidebarHistory } from './sidebar-history';
import { SidebarUserNav } from './sidebar-user-nav';


export function AppSidebar() {
  const router = useRouter();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar className="group-data-[side=left]:border-r-0">
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex flex-row justify-between items-center">
            <div
              onClick={() => {
                setOpenMobile(false);
                router.push('/');
                router.refresh();
              }}
              className="flex flex-row gap-3 items-center"
            >
              <span className="text-lg font-semibold px-2 hover:bg-muted rounded-md cursor-pointer">
                Chatbot
              </span>
            </div>
            <BetterTooltip content="New Chat" align="start">
              <Button
                className="p-2 h-fit"
                onClick={() => {
                  setOpenMobile(false);
                  router.push('/');
                  router.refresh();
                }}
              >
                <PlusIcon />
              </Button>
            </BetterTooltip>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarHistory user={''} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="gap-0">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarUserNav user={''} />
            </SidebarGroupContent>
          </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
