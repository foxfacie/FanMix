"use client";

import { VideoPlayer } from "@/components/video-player";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Plus, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { 
  AnimeThemeStyles, 
  withAnimeTheme, 
  AnimeGradientText, 
  AnimeTitle, 
  AnimeCard, 
  AnimeButton 
} from "@/components/anime-theme";
import { cn } from "@/lib/utils";

const cast = [
  {
    name: "Iñaki Godoy",
    role: "Monkey D. Luffy",
    image: "https://m.media-amazon.com/images/M/MV5BZTY0YjU0OTUtYjE5MC00YzM0LThkYzYtYzU5YjE5YzU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    name: "Emily Rudd",
    role: "Nami",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    name: "Mackenyu",
    role: "Roronoa Zoro",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    name: "Jacob Romero Gibson",
    role: "Usopp",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    name: "Taz Skylar",
    role: "Sanji",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  }
];

export default function OnePieceLiveActionPage() {
  return (
    <div className={withAnimeTheme("min-h-screen bg-gradient-to-br from-background via-background to-background/95")}>
      <AnimeThemeStyles />
      <div className="p-6 space-y-8">
        {/* Hero Section with Video Player */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="relative"
        >
          <VideoPlayer 
            src="https://example.com/one-piece-trailer.mp4" // Replace with actual video URL
            poster="https://m.media-amazon.com/images/M/MV5BODRkYzA4MGItODE2MC00ZjkwLWI0NDUtYTRmZDVhMDlmN2MxXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_.jpg"
            className="h-[600px]"
          />
        </motion.section>

        {/* Title and Actions */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
          }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <AnimeTitle className="text-4xl mb-2">ONE PIECE LIVE ACTION</AnimeTitle>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>2023</span>
              <span>•</span>
              <span>TV-14</span>
              <span>•</span>
              <span>8 Episodes</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>8.5/10</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <AnimeButton>
              <Button className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Now
              </Button>
            </AnimeButton>
            <Button variant="outline" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Bookmark className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </motion.section>

        {/* Description */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
          }}
        >
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            The live-action adaptation of Eiichiro Oda's beloved manga series follows the adventures of Monkey D. Luffy and his pirate crew as they explore the Grand Line in search of the world's ultimate treasure, the One Piece. With a perfect blend of action, comedy, and heart, this series brings the iconic characters and their world to life in a way that honors the original while creating something new and exciting for fans and newcomers alike.
          </p>
        </motion.section>

        {/* Cast */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Cast</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cast.map((person) => (
              <AnimeCard key={person.name} className="rounded-xl overflow-hidden">
                <div className="relative aspect-[2/3]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 p-4">
                      <h3 className="font-semibold">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                    </div>
                  </div>
                </div>
              </AnimeCard>
            ))}
          </div>
        </motion.section>

        {/* Episodes */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Episodes</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((episode) => (
              <AnimeCard key={episode} className="rounded-xl overflow-hidden">
                <div className="flex gap-4 p-4">
                  <div className="relative w-40 aspect-video rounded-lg overflow-hidden">
                    <img
                      src={`https://example.com/one-piece-ep${episode}.jpg`}
                      alt={`Episode ${episode}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Episode {episode}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      The Straw Hat Pirates continue their journey, facing new challenges and making new allies along the way.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">45 min</Badge>
                      <Badge variant="outline">HD</Badge>
                    </div>
                  </div>
                </div>
              </AnimeCard>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
} 