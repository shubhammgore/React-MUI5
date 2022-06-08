import { Typography } from '@mui/material';

const MuiTypography = () => {
	return (
		<div>
			<Typography variant='h1'>h1 Heading</Typography>
			<Typography variant='h2'>h2 Heading</Typography>
			<Typography variant='h3' component='h1' gutterBottom>
				h3 Heading
			</Typography>
			<Typography variant='h4'>h4 Heading</Typography>
			<Typography variant='h5'>h5 Heading</Typography>
			<Typography variant='h6'>h6 Heading</Typography>

			<Typography variant='subtitle1'>sub title 1</Typography>
			<Typography variant='subtitle2'>sub title 2</Typography>

			<Typography variant='body1'>
				{' '}
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
				aspernatur.
			</Typography>
			<Typography variant='body2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem
				ipsum iure mollitia porro voluptatum provident fugit sed accusamus
				doloribus.
			</Typography>
		</div>
	);
};

export default MuiTypography;
