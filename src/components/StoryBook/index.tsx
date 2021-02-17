import React, { useState } from 'react';
import Box from '../Box';
import Button from '../Button';

const StoryBook = () => {

	return (
		<Box pt={1} pl={1} display="flex" flexDirection="column">
			<Box pt={5} mb={1}>
				<Box>
					<Button size="large" color="default">Sing Up</Button>
					<Button size="medium" color="default">Sing Up</Button>
					<Button size="small" color="default">Sing Up</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default StoryBook;