import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	// When this is set to 'false', the title is properly displayed on the page.
	// When it's set to 'true', the title is missing (along with any other metadata that gets defined in this layout)
	const enableBug = true;
	return enableBug ? <div>Not returning children</div> : children;
}

export function generateMetadata() {
	return {
		title: "This title should always be shown"
	};
}
