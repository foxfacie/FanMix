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
    name: "Yūichi Nakamura",
    role: "Satoru Gojo (Voice)",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    name: "Junya Enoki",
    role: "Yuji Itadori (Voice)",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    name: "Yuma Uchida",
    role: "Megumi Fushiguro (Voice)",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    name: "Asami Seto",
    role: "Nobara Kugisaki (Voice)",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    name: "Satoshi Hino",
    role: "Suguru Geto (Voice)",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  }
];

export default function JujutsuKaisenSeason2Page() {
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
            src="https://example.com/jjk-season2-trailer.mp4" // Replace with actual video URL
            poster="https://m.media-amazon.com/images/M/MV5BZjE5YjU5YjE5YjU5YjE5XkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_.jpg"
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
            <AnimeTitle className="text-4xl mb-2">JUJUTSU KAISEN SEASON 2</AnimeTitle>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>2023</span>
              <span>•</span>
              <span>TV-MA</span>
              <span>•</span>
              <span>23 Episodes</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>9.2/10</span>
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
            The second season of Jujutsu Kaisen dives deep into the past of Satoru Gojo and Suguru Geto, exploring their time as students at Jujutsu High. The season masterfully weaves between the past and present, revealing the events that shaped the current state of the jujutsu world. With stunning animation and intense battles, this season delivers an emotional and action-packed story that expands the series' lore while maintaining its signature blend of supernatural action and character-driven drama.
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((episode) => (
              <AnimeCard key={episode} className="rounded-xl overflow-hidden">
                <div className="flex gap-4 p-4">
                  <div className="relative w-40 aspect-video rounded-lg overflow-hidden">
                    <img
                      src={`https://example.com/jjk-s2-ep${episode}.jpg`}
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
                      The story continues with intense battles and revelations about the past, as the jujutsu sorcerers face their greatest challenges yet.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">24 min</Badge>
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