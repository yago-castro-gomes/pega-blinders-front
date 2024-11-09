import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { Chat } from '@/app/components/custom/chat';

export default async function Page(props: { params: Promise<any> }) {
  const params = await props.params;
  const { id } = params;


  const cookieStore = await cookies();
  const modelIdFromCookie = cookieStore.get('model-id')?.value;

  return (
    <Chat
      id={id} selectedModelId={''}    />
  );
}
