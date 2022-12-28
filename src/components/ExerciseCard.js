import React from 'react';
import { Link } from 'react-router-dom';
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";

const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-56 sm:w-64 h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);
const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;
const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;


const ExerciseCard = ({ exercise }) => (
  <Link to={`/exercise/${exercise.id}`}>
    <CardImage imageSrc={exercise.gifUrl} style={{"objectFit": "cover"}}/>
    <TextInfo>
    <TitleReviewContainer>
      <Title>{exercise.name}</Title>
    </TitleReviewContainer>
    <SecondaryInfoContainer>
      <IconWithText>
        <IconContainer>
          <LocationIcon />
        </IconContainer>
        <Text>{exercise.bodyPart}</Text>
      </IconWithText>
      <IconWithText>
        <IconContainer>
          <PriceIcon />
        </IconContainer>
        <Text>{exercise.target}</Text>
      </IconWithText>
    </SecondaryInfoContainer>
  </TextInfo>
  </Link>
);

export default ExerciseCard;
