import React, { useState } from 'react';
import Header from "../components/headers/light";
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import tw from "twin.macro";
const Container = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const ExcercisesPage = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <>
    <Container>
      <Header />
    </Container>
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </>
  );
};

export default ExcercisesPage;
