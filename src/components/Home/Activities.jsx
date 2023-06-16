import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Activities = () => {
    const activites = [
        {
          "name": "Games",
          "description": "Play games that are designed to help campers learn new vocabulary and grammar. For example, you could play charades, Pictionary, or Taboo.",
          "image": "https://www.splashlearn.com/blog/wp-content/uploads/2022/10/best-english-games-to-help-kids-practice-master-the-language-quickly.jpeg"
        },
        {
          "name": "Songs",
          "description": "Sing songs in the target language. This is a great way to learn new vocabulary and practice pronunciation.",
          "image": "https://www.fluentu.com/blog/educator-english/wp-content/uploads/sites/13/2014/11/5-great-songs-for-teaching-esl-to-kids.jpg"
        },
        {
          "name": "Storytelling",
          "description": "Tell stories in the target language. This is a great way to immerse campers in the culture of the target language.",
          "image": "https://www.teachingenglish.org.uk/sites/teacheng/files/images/Screenshot%202019-10-22%20at%2011.53.35.png"
        },
        {
          "name": "Arts and crafts",
          "description": "Create art projects in the target language. This is a great way to express themselves creatively and practice using the language in a fun way.",
          "image": "https://www.teatimemonkeys.com/wp-content/uploads/2017/12/kids-making-crafts-4.jpg"
        },
        {
          "name": "Field trips",
          "description": "Take field trips to places that are relevant to the target language. For example, if you are teaching Spanish, you could take a field trip to a Mexican restaurant or a Spanish-speaking community.",
          "image": "https://naturalstart.org/sites/default/files/styles/home_image_main/public/field_trips_main.jpeg"
        }
      ]
    return (
        <div className='max-w-7xl mx-auto mt-32 px-4'>
            <section className="">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Activities</h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            activites?.map(activity => {
                                const { name, description, image } = activity;
                                return (
                                    <div
                                        className="block bg-gray-800 rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-xl hover:shadow-green-500/50"
                                        href="/services/digital-campaigns"
                                    >
                                        <img src={image} alt="" />

                                        <h2 className="mt-4 text-xl font-bold text-white">{name}</h2>

                                        <p className="mt-1 text-sm text-gray-300">
                                            {description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to={'/classes'}
                            className="inline-block rounded btn btn-primary px-12 py-3 text-sm font-medium"
                        >
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default Activities;