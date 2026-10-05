'use client';

import { useEffect } from 'react';
import { CollectionsContent } from '@/components/collections/CollectionsContent';
import { useStore } from '@/context/StoreContext';

export default function SilverCollectionsPage() {
  const { setCategory } = useStore();

  useEffect(() => {
    setCategory('silver');
  }, [setCategory]);

  return <CollectionsContent />;
}
