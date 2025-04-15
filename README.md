# FanMix

FanMix is a modern entertainment platform that connects fans across different media types including movies, TV shows, anime, music, podcasts, and more. The platform is designed to help users discover new content and connect with other fans with similar interests.

🌐 **Live Demo**: [FanMix on Netlify](https://fanmix.netlify.app/)

![FanMix Screenshot](https://i.imgur.com/gJAcwS3.jpg)

## Features

- **Multi-media exploration** - Browse movies, TV shows, anime, music, podcasts and more
- **Personalized recommendations** - Discover content based on your interests and viewing history
- **Social interactions** - Connect with other fans, discuss your favorite shows, and share recommendations
- **User collections** - Create custom lists, bookmark content, and track favorites
- **Trending content** - Stay updated with the latest trending and top-rated content
- **Responsive design** - Optimized for all devices from mobile to desktop

## Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components built with [Radix UI](https://www.radix-ui.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://github.com/colinhacks/zod)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Netlify](https://www.netlify.com/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fanmix.git
   cd fanmix
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

```bash
npm run build
# or
yarn build
```

The static output will be generated in the `out` directory.

## Deployment

This project is configured for static site generation and can be deployed to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `out` directory to your hosting service.

### Deploying to Netlify

1. Push your code to a GitHub repository.
2. Sign up for a [Netlify](https://www.netlify.com/) account.
3. Create a new site from Git and select your repository.
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Deploy!

## Project Structure

```
fanmix/
├── app/               # Next.js App Router
├── components/        # Reusable UI components
│   ├── anime/         # Anime-specific components
│   ├── ui/            # Shared UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and API clients
│   ├── api/           # API client and endpoints
├── public/            # Static assets
├── styles/            # Global CSS and Tailwind configuration
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Future Enhancements

- User authentication system
- Real-time notifications
- Advanced search capabilities
- User-generated content and reviews
- Mobile app versions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Netlify](https://www.netlify.com/) for hosting 