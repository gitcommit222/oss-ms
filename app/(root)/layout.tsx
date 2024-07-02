import Sidebar from "@/components/Sidebar";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex gap-2">
			<Sidebar />
			<section className="p-5">{children}</section>
		</main>
	);
}
