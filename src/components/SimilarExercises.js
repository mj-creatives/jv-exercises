import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import Loader from './Loader';
const Heading = tw(SectionHeading)``;
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
      <>
      <Heading>Similar Target Muscle Group</Heading>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      <Heading>Similar Equipment Used</Heading>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </>
);

export default SimilarExercises;
