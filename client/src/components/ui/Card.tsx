import type { ReactNode } from 'react';

// @uxid client/src/components/ui/Card::Card
export function Card({ children }: { children: ReactNode }) {
  return <div className="card">{children}</div>;
}
