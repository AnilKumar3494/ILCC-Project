import React from "react";
import "./upcomingevents.css";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import upcomingEvents from "../data/events.json";

const UpcomingEvents = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="carousel_container"
      >
        <CarouselContent className="carousel_displayed">
          {upcomingEvents.map((upcomingEvent) => (
            <CarouselItem
              key={upcomingEvent.id}
              className="md:basis-1/2 lg:basis-1/3 carousel_item"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-2 carousel_card_content bg-white ">
                    <img
                      src={
                        upcomingEvent.imageSrc
                          ? upcomingEvent.imageSrc
                          : "https://via.placeholder.com/150"
                      }
                      alt={`${upcomingEvent.title}`}
                    />
                    <div className="carousel_text">
                      <h3>{upcomingEvent.title}</h3>
                      <p>{upcomingEvent.description}</p>
                      <p>{`Date: ${upcomingEvent.date}`}</p>
                      {upcomingEvent.time && (
                        <p>{`Time: ${upcomingEvent.time}`}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="carousel_buttons">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
};

export default UpcomingEvents;
