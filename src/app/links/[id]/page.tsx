import { Metadata } from 'next';
import PageClient_Links from '../../_pages/links-page';
import { navigationConfig } from '@/components/_config';

export const metadata: Metadata = {
    title: "Links"
}

export default function Page({ params }: { params: { id: string } }) {

    return (
        <PageClient_Links id={params.id}/>
    )
}