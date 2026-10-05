'use client';

import { useEffect } from 'react';
import { CollectionsContent } from '@/components/collections/CollectionsContent';
import { useStore } from '@/context/StoreContext';

export default function GoldCollectionsPage() {
  const { setCategory } = useStore();

  useEffect(() => {
    setCategory('gold');
  }, [setCategory]);

  return <CollectionsContent />;
}
