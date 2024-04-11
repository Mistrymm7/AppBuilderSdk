import React from "react";
import { Image, ImageProps, MantineThemeComponent, Paper, useProps, Anchor } from "@mantine/core";
import { AppBuilderContainerTypeEnum, IAppBuilderWidgetPropsAnchor } from "types/shapediver/appbuilder";

interface Props extends IAppBuilderWidgetPropsAnchor{
	/** Type of container */
	containerType?: AppBuilderContainerTypeEnum
}

type SomeImageProps = Pick<ImageProps, "src" | "radius" | "fit">;

const defaultStyleProps : Partial<SomeImageProps> = {
	radius: "md",
	fit: "contain",
};

type AppBuilderImageThemePropsType = Partial<SomeImageProps>;

export function AppBuilderImageThemeProps(props: AppBuilderImageThemePropsType): MantineThemeComponent {
	return {
		defaultProps: props
	};
}

export default function AppBuilderImage(props: SomeImageProps & Props ) {
	const { containerType, anchor, target, ...rest } = props;
	const { radius, fit } = useProps("AppBuilderImage", defaultStyleProps, rest);
	const componentImage = <Image
		{...rest}
		fit={fit}
		radius={radius}
		h={containerType === AppBuilderContainerTypeEnum.Row ? "100%" : undefined}
		w={containerType === AppBuilderContainerTypeEnum.Column ? "100%" : undefined}
	/>;

	return <Paper
		h={containerType === AppBuilderContainerTypeEnum.Row ? "100%" : undefined}
		w={containerType === AppBuilderContainerTypeEnum.Column ? "100%" : undefined}
		radius={radius}
		pt={0}
		pr={0}
		pb={0}
		pl={0}
	>
		{ anchor ? <Anchor href={anchor} target={target}>{componentImage}</Anchor> : componentImage }
	</Paper>;
}
