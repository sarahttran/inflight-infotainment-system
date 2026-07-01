window.mediaData = {

  movies: [
    {
      id: 1,
      title: "Jurassic Park",
      genre: "Action",
      year: 1993,
      runtime: "2 hr 7 min",
      rating: "PG-13",
      poster: "./assets/jurassic-park.jpg",
      cast: [
        "Sam Neill",
        "Laura Dern",
        "Jeff Goldblum",
        "Richard Attenborough"
      ],
      description:
        "A group of scientists and visitors tour a revolutionary theme park populated by cloned dinosaurs. When the park's security systems fail, the dinosaurs escape and the visitors must fight to survive."
    },
    {
      id: 2,
      title: "Top Gun: Maverick",
      genre: "Action",
      year: 2022,
      runtime: "2 hr 11 min",
      rating: "PG-13",
      poster: "./assets/top-gun-maverick.jpg",
      cast: [
        "Tom Cruise",
        "Miles Teller",
        "Jennifer Connelly"
      ],
      description:
        "Captain Pete 'Maverick' Mitchell returns to train a new generation of Navy pilots for one final mission."
    },
    {
      id: 3,
      title: "Toy Story",
      genre: "Family",
      year: 1995,
      runtime: "1 hr 21 min",
      rating: "G",
      poster: "./assets/toy-story.jpg",
      cast: [
        "Tom Hanks",
        "Tim Allen"
      ],
      description:
        "A cowboy doll and a space ranger learn to work together after becoming rivals."
    },
    {
      id: 4,
      title: "Rush Hour",
      genre: "Comedy",
      year: 1998,
      runtime: "1 hr 38 min",
      rating: "PG-13",
      poster: "./assets/rush-hour.jpg",
      cast: [
        "Jackie Chan",
        "Chris Tucker"
      ],
      description:
        "A Hong Kong detective and an LAPD detective team up to rescue a kidnapped girl."
    },
    {
      id: 5,
      title: "The Conjuring",
      genre: "Horror",
      year: 2013,
      runtime: "1 hr 52 min",
      rating: "R",
      poster: "./assets/the-conjuring.jpg",
      cast: [
        "Patrick Wilson",
        "Vera Farmiga"
      ],
      description:
        "Paranormal investigators help a family terrorized by a supernatural presence."
    }
  ],

  shows: [
    {
      id: 101,
      title: "Breaking Bad",
      genre: "Action",
      poster: "./assets/breaking-bad.jpg",
      seasons: [
        {
          season: 1,
          episodes: [
            "Pilot",
            "Cat's in the Bag...",
            "...And the Bag's in the River"
          ]
        },
        {
          season: 2,
          episodes: [
            "Seven Thirty-Seven",
            "Grilled",
            "Bit by a Dead Bee"
          ]
        }
      ]
    },
    {
      id: 102,
      title: "Modern Family",
      genre: "Family",
      poster: "./assets/modern-family.jpg",
      seasons: [
        {
          season: 1,
          episodes: [
            "Pilot",
            "The Bicycle Thief",
            "Come Fly With Me"
          ]
        },
        {
          season: 2,
          episodes: [
            "The Kiss",
            "Earthquake",
            "Strangers on a Treadmill"
          ]
        }
      ]
    },
    {
      id: 103,
      title: "The Office",
      genre: "Comedy",
      poster: "./assets/the-office.jpg",
      seasons: [
        {
          season: 1,
          episodes: [
            "Pilot",
            "Diversity Day",
            "Health Care"
          ]
        }
      ]
    },
    {
      id: 104,
      title: "The Walking Dead",
      genre: "Horror",
      poster: "./assets/walking-dead.jpg",
      seasons: [
        {
          season: 1,
          episodes: [
            "Days Gone Bye",
            "Guts",
            "Tell It to the Frogs"
          ]
        }
      ]
    }
  ],

  music: [
    {
      id: 201,
      album: "Thriller",
      artist: "Michael Jackson",
      cover: "./assets/thriller.jpg",
      tracks: [
        "Thriller",
        "Beat It",
        "Billie Jean",
        "Human Nature"
      ]
    },
    {
      id: 202,
      album: "1989",
      artist: "Taylor Swift",
      cover: "./assets/1989.png",
      tracks: [
        "Welcome to New York",
        "Blank Space",
        "Style",
        "Shake It Off"
      ]
    },
    {
      id: 203,
      album: "After Hours",
      artist: "The Weeknd",
      cover: "./assets/after-hours.jpg",
      tracks: [
        "Alone Again",
        "Blinding Lights",
        "In Your Eyes",
        "Save Your Tears"
      ]
    },
    {
      id: 204,
      album: "Random Access Memories",
      artist: "Daft Punk",
      cover: "./assets/random-access-memories.jpg",
      tracks: [
        "Give Life Back to Music",
        "Get Lucky",
        "Instant Crush",
        "Contact"
      ]
    }
  ],

  locations: [
    {
      id: 1,
      city: "Los Angeles",
      image: "./assets/los-angeles.webp",
      attractions: [
        {
          name: "Hollywood Walk of Fame",
          image: "./assets/hollywood-walk-of-fame.jpg",
          description: "Explore the famous stars honoring actors, musicians, and entertainers along Hollywood Boulevard."
        },
        {
          name: "Universal Studios Hollywood",
          image: "./assets/universal-studios-hollywood.jpg",
          description: "A working movie studio and theme park featuring rides, attractions, and behind-the-scenes experiences."
        },
        {
          name: "Santa Monica Pier",
          image: "./assets/santa-monica-pier.jpg",
          description: "A historic oceanfront pier with an amusement park, restaurants, shopping, and beautiful beach views."
        },
        {
          name: "Griffith Observatory",
          image: "./assets/griffith-observatory.jpg",
          description: "Enjoy panoramic views of Los Angeles, astronomy exhibits, and the iconic Hollywood Sign."
        }
      ]
    },

    {
      id: 2,
      city: "Baltimore",
      image: "./assets/baltimore.jpg",
      attractions: [
        {
          name: "Inner Harbor",
          image: "./assets/inner-harbor.jpg",
          description: "Baltimore's waterfront destination featuring shops, restaurants, museums, and harbor cruises."
        },
        {
          name: "National Aquarium",
          image: "./assets/national-aquarium.avif",
          description: "Home to thousands of marine animals, interactive exhibits, and immersive aquatic experiences."
        },
        {
          name: "Fort McHenry",
          image: "./assets/fort-mchenry.jpg",
          description: "Historic fort known as the birthplace of the Star-Spangled Banner during the War of 1812."
        },
        {
          name: "Camden Yards",
          image: "./assets/camden-yards.jpg",
          description: "Watch the Baltimore Orioles at one of America's most iconic Major League Baseball stadiums."
        }
      ]
    },

    {
      id: 3,
      city: "New York",
      image: "./assets/new-york.jpg",
      attractions: [
        {
          name: "Times Square",
          image: "./assets/times-square.jpg",
          description: "The heart of New York City featuring bright billboards, Broadway theaters, shopping, and restaurants."
        },
        {
          name: "Central Park",
          image: "./assets/central-park.jpg",
          description: "An 843-acre urban park offering walking trails, lakes, gardens, and outdoor recreation."
        },
        {
          name: "Statue of Liberty",
          image: "./assets/statue-of-liberty.webp",
          description: "One of America's most famous landmarks and a symbol of freedom located in New York Harbor."
        },
        {
          name: "Empire State Building",
          image: "./assets/empire-state-building.jpg",
          description: "A world-famous skyscraper offering breathtaking panoramic views from its observation decks."
        }
      ]
    },

    {
      id: 4,
      city: "Chicago",
      image: "./assets/chicago.jpg",
      attractions: [
        {
          name: "Millennium Park",
          image: "./assets/millennium-park.jpg",
          description: "Home to Cloud Gate ('The Bean'), public art installations, concerts, and beautiful green spaces."
        },
        {
          name: "Navy Pier",
          image: "./assets/navy-pier.webp",
          description: "A lakeside entertainment destination with restaurants, rides, shopping, cruises, and a Ferris wheel."
        },
        {
          name: "Willis Tower Skydeck",
          image: "./assets/willis-tower.jpg",
          description: "Experience spectacular city views from one of the tallest buildings in the United States."
        },
        {
          name: "Art Institute of Chicago",
          image: "./assets/art-institute-chicago.jpg",
          description: "One of the world's premier art museums featuring masterpieces spanning thousands of years."
        }
      ]
    }
  ]

};