import { notFound } from 'next/navigation';

// Any unknown path inside a language (/es/anything) renders the 404 page.
export default function CatchAll() {
  notFound();
}
