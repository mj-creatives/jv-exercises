import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import trainer1 from "../assets/images/trainer.png"
import trainer2 from "../assets/images/trainer1.png"
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-0`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-primary-500 font-bold text-lg`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-lg mt-4 font-bold`;

export default () => {
  const cards = [
    {
      imageSrc:
        trainer2,
      type: "Noemi Wilson",
      pricePerDay: "$75",
      title: "With over 10 years of experience, Noemi can offer extensive, lon-term, and personlaized workout plans for those looking to build muscle and shred down for the summer.",
    },
    {
      imageSrc:
        trainer1,
      type: "Kevin Hernandez",
      pricePerDay: "$95",
      title: "With a PhD in Nutrition and certificate in diet, Kevin can offer what most cant, which is knowledge and results for those needing the help in the kitchen rather than in the gym.",
    }
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn>
            <HeadingInfoContainer>
              <HeadingTitle>Coming Soon</HeadingTitle>
              <HeadingDescription>
                As our team begins to grow we will begin offering personalized workout and meal plans for those looking for that extra push to achieving their dream body.
              </HeadingDescription>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardType>{card.type}</CardType>
                    <CardPrice>
                      <CardPriceAmount>{card.pricePerDay}</CardPriceAmount> per session
                    </CardPrice>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
