import { useState } from "react";
import ChatSideBar from "../Components/chat/chatSidebar";

function Podcast() {
  const [isOpen, setIsOpen] = useState(false);
  const podcasts = [
    {
      link_to_audio_file:
        "https://www.listennotes.com/e/p/bc30fc52923f464ab7b275d7cefc6cfc/",
      podcast_image:
        "https://production.listennotes.com/podcasts/my-favorite-theorem-kevin-knudson-evelyn-lamb-e-iFCoVA5sz-cuhIjM9sF0Z.300x300.jpg",
      link_to_audio_on_listenotes:
        "https://www.listennotes.com/e/bc30fc52923f464ab7b275d7cefc6cfc/",
      podcast_title: "Episode 48 - Sophie Carr",
      podcast_channel_title: "My Favorite Theorem",
    },
    {
      link_to_audio_file:
        "https://www.listennotes.com/e/p/8c5af08e28b94ae7bfceca2b49fb8deb/",
      podcast_image:
        "https://production.listennotes.com/podcasts/breaking-math-podcast-breaking-math-8yRS5pFHVLx-uPOilXLZIqA.300x300.jpg",
      link_to_audio_on_listenotes:
        "https://www.listennotes.com/e/8c5af08e28b94ae7bfceca2b49fb8deb/",
      podcast_title: "42: Maybe? (Probability and Statistics)",
      podcast_channel_title: "Breaking Math Podcast",
    },
    {
      link_to_audio_file:
        "https://www.listennotes.com/e/p/ad897da94a8c4dfcb61c377e9c4c5328/",
      podcast_image:
        "https://production.listennotes.com/podcasts/the-michael-shermer-show-michael-shermer-1AjnuLMK4EZ-uNErdBU9mb3.300x300.jpg",
      link_to_audio_on_listenotes:
        "https://www.listennotes.com/e/ad897da94a8c4dfcb61c377e9c4c5328/",
      podcast_title:
        "76. William Poundstone — The Doomsday Calculation: How an Equation that Predicts the Future is Transforming Everything We Know About Life and the Universe",
      podcast_channel_title: "The Michael Shermer Show",
    },
  ];

  return (
    <>
      <ChatSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="lg:ml-[309px]">
        <h1 className=" text-center my-12">Podcasts</h1>
        <div className="mx-auto flex flex-wrap justify-center h-[100vh]">
          {podcasts &&
            podcasts.map((podcast, index) => {
              return (
                <div key={index}>
                  <div className="podcast-cards flex-center flex-col text-center">
                    <img src={podcast.podcast_image} alt="" />
                    <div className="text-center  p-8 text-white bg-pry-col">
                      <span>{podcast.podcast_channel_title}</span>
                      <h3 className="text-white py-3">
                        {podcast.podcast_title}
                      </h3>
                      <div className="flex flex-col">
                        <a
                          href={podcast.link_to_audio_file}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Audio File
                        </a>
                        <a
                          href={podcast.link_to_audio_on_listenotes}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Listen on Listen notes
                        </a>
                      </div>
                      {/* <p>{}</p> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}

export default Podcast;
