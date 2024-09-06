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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 carousel_item"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-2 carousel_card_content">
                    <img
                      src="https://th.bing.com/th/id/R.e1edb02ec50549b76413c2f18f63d110?rik=0OBp0k8jNoFPzw&pid=ImgRaw&r=0"
                      alt={`Img goes here ${index + 1}`}
                    />
                    <div className="carousel_text">
                      <h2>{`Event heading ${index + 1}`}</h2>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quasi, tempore?
                      </p>
                      <p>Date:</p>
                      <p>Time:</p>
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
