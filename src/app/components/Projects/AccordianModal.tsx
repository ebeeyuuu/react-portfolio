"use client"
import React, { useState } from "react";

interface Item {
  image: string;
  header: string;
  text: string;
}

interface AccordionModalProps {
  items: Item[];
}

export const AccordionModal: React.FC<AccordionModalProps> = ({ items }) => {
  const [active, setActive] = useState(0);

  const handleToggle = (index: number) => setActive(index);

  return (
    <section className="image-accordion">
      <style jsx>{`
        .image-accordion {
          display: flex;
          gap: 10px;
          cursor: pointer;
        }

        .image-accordion-item {
          position: relative;
          overflow: hidden;
          width: 100px;
          height: 500px;
          border-radius: 15px;
          display: flex;
          align-items: flex-end;
          opacity: 0.5;
          transition: 0.5s;
        }

        .image-accordion-item:hover {
          opacity: 0.75;
        }

        .image-accordion :is(h2, p) {
          margin: 0;
        }

        .image-accordion-item h2 {
          font-size: 30px;
          font-weight: 650;
          color: rgb(255 255 255 / 96%);
        }

        .image-accordion-item p {
          color: rgb(255 255 255 / 70%);
          margin-top: 10px;
        }

        .image-accordion-item.active {
          width: 500px;
          opacity: 1;
        }

        .image-accordion-item .material-symbols-outlined {
          display: grid;
          place-items: center;
          width: 50px;
          height: 50px;
          color: rgb(0 0 0 / 80%);
          background: rgb(255 255 255 / 70%);
          border-radius: 50%;
          font-size: 28px;
        }

        .image-accordion-item .content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 500px;
          z-index: 1;
          opacity: 0;
          visibility: hidden;
          padding: 100px 0 20px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          background: linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 100%));
          transition: 0.25s;
        }

        .image-accordion-item.active .content {
          opacity: 1;
          visibility: visible;
        }

        .image-accordion-item img {
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
          height: 100%;
          width: 100%;
          object-fit: cover;
          filter: grayscale(0.6);
        }

        @media not all and (min-width: 1024px) {
          .image-accordion {
            gap: 7.5px;
          }
        
          .image-accordion-item {
            width: 75px;
            height: 375px;
          }

          .image-accordion-item.active {
            width: 375px;
          }

          .image-accordion-item .content {
            width: 375px;
          }

          @media not all and (min-width: 770px) {
            .image-accordion {
              gap: 5px;
            }
          
            .image-accordion-item {
              width: 50px;
              height: 250px;
            }

            .image-accordion-item.active {
              width: 250px;
            }

            .image-accordion-item .content {
              width: 250px;
            }  

            .image-accordion-item h2 {
              font-size: 22.5px;
              font-weight: 600;
            }

            .image-accordion-item p {
              margin-top: 7.5px;
              font-size: 12px;
            }
          }
        }
      `}</style>
      {items.map((item, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <div
            key={item.image}
            className={`image-accordion-item ${isActive}`}
            onClick={() => handleToggle(index)}
          >
            <img src={item.image} />
            <div className="content">

              <div>
                <h2>{item.header}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};