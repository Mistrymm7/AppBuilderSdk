import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/charts/styles.css";
import { MantineProvider } from "@mantine/core";
import React, { useEffect } from "react";
import * as ShapeDiverViewer from "@shapediver/viewer";
import AppBuilderPage from "shared/pages/appbuilder/AppBuilderPage";
import { useCustomTheme } from "shared/hooks/ui/useCustomTheme";
import packagejson from "../package.json";
import { Notifications } from "@mantine/notifications";
import "AppBuilderBase.css";
import NotificationWrapper from "shared/components/ui/NotificationWrapper";

console.log(`ShapeDiver App Builder SDK v${packagejson.version}`);

declare global {
	interface Window {
		SDV: typeof ShapeDiverViewer,
	}
}

export default function AppBuilderBase() {

	useEffect(() => {
		window.SDV = ShapeDiverViewer;
	}, []);

	const { theme, resolver } = useCustomTheme();

	return (
		<MantineProvider 
			defaultColorScheme="auto" 
			forceColorScheme={theme.other?.forceColorScheme} 
			theme={theme} 
			cssVariablesResolver={resolver}
		>
			<Notifications />
			<NotificationWrapper>
				<AppBuilderPage />
			</NotificationWrapper>
		</MantineProvider>
	);
}
