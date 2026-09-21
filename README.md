# Professional Web Development Portfolio

A modern, premium web development agency website built with Next.js, TypeScript, and Tailwind CSS. This site positions you as a professional full-stack developer and digital solutions provider.

## Features

- **Hero Section**: Premium visual with clear value proposition and CTAs
- **About Section**: Establishes credibility with Computer Science background
- **Services Section**: Professional service categories (Business Websites, E-Commerce, Custom Applications, etc.)
- **Portfolio Section**: Real project cards with technology stacks
- **Technology Stack**: Clean display of frontend, backend, database, and infrastructure technologies
- **Why Work With Me**: Client-focused benefits section
- **Development Process**: Clear 4-step process visualization
- **Project Request Form**: Comprehensive form with validation
- **Email Integration**: Resend API for sending project inquiries
- **Anti-Spam Protection**: Rate limiting, honeypot field, input validation
- **Responsive Design**: Mobile-first approach with excellent UX
- **SEO Optimized**: Metadata, Open Graph, and Twitter cards

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Resend
- **Hosting**: Vercel (recommended)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory (this file is already in `.gitignore`):

```env
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=kipkoechkevin611@gmail.com
```

**Important**: 
- Replace `your_resend_api_key_here` with your actual Resend API key
- Replace `yourdomain.com` with your verified domain in Resend
- The receiving email is already set to kipkoechkevin611@gmail.com

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Customization

### Update Personal Information

Update the following files with your information:

1. **Contact Links** - Update in these components:
   - `components/Contact.tsx` - WhatsApp number, email, GitHub, LinkedIn
   - `components/Footer.tsx` - GitHub, LinkedIn, WhatsApp, email
   - `components/Navbar.tsx` - Brand name

2. **Projects** - Update in `components/Projects.tsx`:
   - Add your real projects
   - Update project URLs
   - Modify technology stacks

3. **SEO Metadata** - Update in `app/page.tsx`:
   - Title
   - Description
   - Keywords

### Resend Email Setup

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain in Resend settings
3. Update `FROM_EMAIL` with your verified domain
4. Update `TO_EMAIL` with your receiving email address

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`
4. Deploy

### Environment Variables for Production

Add these in your hosting platform's environment settings:

```env
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=kipkoechkevin611@gmail.com
```

## Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # API route for form submission
│   ├── page.tsx               # Main page with SEO metadata
│   └── layout.tsx             # Root layout
├── components/
│   ├── Navbar.tsx             # Responsive navigation
│   ├── Hero.tsx               # Hero section
│   ├── About.tsx              # About section
│   ├── Services.tsx           # Services section
│   ├── Projects.tsx           # Portfolio section
│   ├── Technology.tsx        # Technology stack
│   ├── WhyWorkWithMe.tsx      # Benefits section
│   ├── Process.tsx            # Development process
│   ├── ContactForm.tsx        # Project request form
│   ├── Contact.tsx            # Contact section
│   └── Footer.tsx             # Footer
├── lib/                       # Utility functions (future)
├── public/
│   └── projects/              # Project images
├── .env.local                 # Environment variables (not in git)
└── env-template.txt           # Environment variables template
```

## Security Features

- **Honeypot Field**: Hidden field to detect bots
- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Server-side validation for all fields
- **Email Validation**: Regex-based email verification
- **HTML Escaping**: Prevents XSS attacks in email content
- **Length Limits**: Maximum character limits for inputs

## Performance Optimization

- Next.js Image optimization (when adding images)
- Server components where appropriate
- Optimized fonts
- Code splitting
- Lazy loading

## Future Enhancements

The architecture is ready for:
- MongoDB/Supabase integration
- CRM integration
- Google Sheets/Notion integration
- Analytics
- Authentication
- Client dashboards

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Resend Documentation](https://resend.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
