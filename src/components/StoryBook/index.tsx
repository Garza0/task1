import React, { useState } from 'react';
import Box from '../Box';
import Button from '../Button';

const StoryBook = () => {

	return (
		<Box pt={1} pl={1} display="flex" flexDirection="column">
			<Box pt={5} mb={1}>
				<Box>
					<Button size="large" variant="contained" color="primary">Sign Up</Button>
					<Button size="medium" variant="contained" color="primary">Sign Up</Button>
					<Button size="small" variant="contained" color="primary">Sign Up</Button>
				</Box>
				<Box>
					<Button size="large" color="default">Sign Up</Button>
					<Button size="medium" color="default">Sign Up</Button>
					<Button size="small" color="default">Sign Up</Button>
				</Box>
				<Box>
					<Button size="large" variant="contained" color="secondary">Sign Up</Button>
					<Button size="medium" variant="contained" color="secondary">Sign Up</Button>
					<Button size="small" variant="contained" color="secondary">Sign Up</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default StoryBook;