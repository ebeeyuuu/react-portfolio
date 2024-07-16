"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll('.image-accordion-item img');
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setImagesLoaded(true);
      }
    };

    images.forEach((image) => {
      const img = image as HTMLImageElement; // Type assertion to HTMLImageElement
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    return () => {
      images.forEach((image) => {
        const img = image as HTMLImageElement; // Type assertion to HTMLImageElement
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);

  const handleToggle = (index: number) => setActive(index);

  return (
    <section className="image-accordion flex justify-center">
      <style jsx>{`
        .image-accordion {
          display: flex;
          gap: 10px;
          cursor: pointer;
        }

        .image-accordion-item {
          position: relative;
          overflow: hidden;
          width: 100px; /* Initial width, adjust as needed */
          height: 500px; /* Initial height, adjust as needed */
          border-radius: 15px;
          display: flex;
          align-items: flex-end;
          opacity: ${imagesLoaded ? 1 : 0}; /* Hide images until loaded */
          transition: opacity 0.5s ease; /* Smooth transition */
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
          color: rgba(255, 255, 255, 0.96);
        }

        .image-accordion-item p {
          color: rgba(255, 255, 255, 0.7);
          margin-top: 10px;
        }

        .image-accordion-item.active {
          width: 500px; /* Expanded width when active, adjust as needed */
          opacity: 1;
        }

        .image-accordion-item .material-symbols-outlined {
          display: grid;
          place-items: center;
          width: 50px;
          height: 50px;
          color: rgba(0, 0, 0, 0.8);
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          font-size: 28px;
        }

        .image-accordion-item .content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 500px; /* Adjust width for active state */
          z-index: 1;
          opacity: 0;
          visibility: hidden;
          padding: 100px 0 20px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
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
          transform: translate(-50%, -50%);
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
            width: 375px; /* Adjust width for active state */
          }

          .image-accordion-item .content {
            width: 375px; /* Adjust width for active state */
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
              width: 250px; /* Adjust width for active state */
            }

            .image-accordion-item .content {
              width: 250px; /* Adjust width for active state */
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

          @media not all and (min-width: 600px) {
            .image-accordion {
              gap: 4px;
            }
          
            .image-accordion-item {
              width: 40px;
              height: 200px;
            }

            .image-accordion-item.active {
              width: 200px; /* Adjust width for active state */
            }

            .image-accordion-item .content {
              width: 200px; /* Adjust width for active state */
            }  

            .image-accordion-item h2 {
              font-size: 15.5px;
              font-weight: 600;
            }

            .image-accordion-item p {
              margin-top: 2.5px;
              font-size: 10px;
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
            <Image
              src={item.image}
              alt={item.header}
              fill
              style={{ objectFit: "cover" }}
              className="image-accordion-item-img"
              loading="eager"
              placeholder="blur"
              blurDataURL={item.image}
            />
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
