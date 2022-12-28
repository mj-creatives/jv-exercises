import React, { useEffect, useState } from 'react';
import tw from "twin.macro";
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import {Container as ContainerBase } from "components/misc/Layouts.js"
import {PrimaryButton} from "./misc/Buttons.js";

const Container = tw(ContainerBase)`bg-gray-900 -mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const FormColumn = tw.div`mt-12 lg:mt-0 w-full sm:w-auto`

const Form = tw.div`text-sm max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-32 py-4 rounded tracking-wider font-bold border border-white focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-primary-100 transition duration-300 text-gray-900`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-primary-400 text-gray-100 border border-primary-400 hocus:bg-primary-600 hocus:text-gray-300 hocus:border-primary-600`


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 950, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <>
    <Container>
      <Content>
        <Row>
          <FormColumn>
          <Form>
            <Input 
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text" 
            />
            <Button onClick={handleSearch}>Search</Button>
          </Form>
          </FormColumn>
        </Row>
      </Content>
    </Container>
    <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </>
  );
};

export default SearchExercises;
