'use client'

import dynamic from 'next/dynamic'
const DynamicExamplePluginComponent = dynamic(async () => {
  const comp = await import("@/components/ExamplePluginComponent")
  return comp.ExamplePluginComponent
}, {
  ssr: false
});

export default function Home() {
  return (
    <div>
      <DynamicExamplePluginComponent/>
    </div>
  );
}
