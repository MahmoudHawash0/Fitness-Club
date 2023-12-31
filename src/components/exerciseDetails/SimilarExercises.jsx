import React from 'react'
import { Typography, Box, Stack } from '@mui/material';
import { HorizontalScrollbar } from '../home/HorizontalScrollbar';
import { Loader } from '../../components/loader/Loader';

export const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
            <Typography sx={{
                fontSize: { lg: '44px', xs: '25px' },
                textAlign: 'center'
            }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#1460e5', textTransform: 'capitalize' }}>
                    Target Muscle</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {
                    targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> :
                        <Loader />
                }
            </Stack>
            <Typography sx={{
                fontSize: { lg: '44px', xs: '25px' }, textAlign: 'center',
                mt: { lg: '100px', xs: '60px' }
            }} fontWeight={700} color="#000" mb="33px">
                Similar <span style={{ color: '#1460e5', textTransform: 'capitalize' }}>
                    Equipment</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {
                    equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> :
                        <Loader />
                }
            </Stack>
        </Box>
    )
}
