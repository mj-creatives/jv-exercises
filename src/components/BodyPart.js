import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons";
import { ReactComponent as FilterIcon } from "feather-icons/dist/icons/filter.svg"
import { ReactComponent as InfoIcon } from "feather-icons/dist/icons/info.svg"

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold capitalize`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;
const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <>
  <TextInfo>
    <TitleReviewContainer>
      <Title>{item}</Title>
    </TitleReviewContainer>
    <SecondaryInfoContainer>
      <IconWithText>
        <IconContainer>
          <FilterIcon />
        </IconContainer>
        <Text>Filter Workouts</Text>
      </IconWithText>
      <IconWithText>
        <IconContainer>
          <InfoIcon />
        </IconContainer>
        <Text>Body Part</Text>
      </IconWithText>
    </SecondaryInfoContainer>
    <Description>Click below to view {item} workouts!</Description>
  </TextInfo>
  <PrimaryButton onClick={() => {
    setBodyPart(item);
    window.scrollTo({ top: 950, behavior: 'smooth' });
  } }>
    Filter {item} workouts
  </PrimaryButton>
  </>
);

export default BodyPart;
