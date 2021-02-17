import React, {FC, ReactElement} from 'react';
import {Button as ButtonBase} from '@material-ui/core';

interface ButtonProps {
	size: 'large' | 'medium' | 'small';
	color: 'default' | 'primary' | 'secondary';
	children: string;
}

const Button: FC<ButtonProps> = (props) => {

	const {
		size = 'medium',
		color = 'default',
		children
	} = props;

	return (
		<ButtonBase
			size={size}
			color={color}
		>
			{children}
		</ButtonBase>
	)
}

export default Button;