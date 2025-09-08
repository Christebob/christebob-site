import "./../styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christebob — Big feelings. Bigger heart.",
  description: "Stories, shorts and sounds that help brilliant, bendy brains feel seen.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}