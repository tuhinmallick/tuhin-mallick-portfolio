'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

import Header from "@/components/header/Header";
import Slider from "@/components/slider/SliderAnimation";
import About from "@/components/about/AboutAnimation";
import Resume from "@/components/resume/ResumeAnimation";
import Portfolio from "@/components/portfolio/PortfolioAnimation";
import Blog from "@/components/blog/BlogAnimation";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import Footer from "@/components/footer/FooterAnimation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const HomeOne = () => {
  useEffect(() => {
    const root = document.documentElement;

    // Primary and secondary colors
    root.style.setProperty('--chat--color-primary', '#FF6600'); // Orange accent color
    root.style.setProperty('--chat--color-secondary', '#FF8533'); // Slightly lighter orange
    root.style.setProperty('--chat--color-dark', '#1A1A1A');    // Dark background color
    root.style.setProperty('--chat--color-light', '#FFFFFF');   // Light text color

    // Bot message styles
    root.style.setProperty('--chat--message--bot--background', '#2C2C2C'); // Dark gray background
    root.style.setProperty('--chat--message--bot--color', '#FFFFFF');      // White text

    // User message styles
    root.style.setProperty('--chat--message--user--background', '#FF6600'); // Orange background
    root.style.setProperty('--chat--message--user--color', '#FFFFFF');      // White text

    // Header styles
    root.style.setProperty('--chat--header--background', '#000000'); // Black background
    root.style.setProperty('--chat--header--color', '#FFFFFF');      // White text

    // Toggle button styles
    root.style.setProperty('--chat--toggle--background', '#FF6600'); // Orange background
    root.style.setProperty('--chat--toggle--color', '#FFFFFF');      // White icon color

    // Optional: Adjust window size if needed
    root.style.setProperty('--chat--window--width', '400px');
    root.style.setProperty('--chat--window--height', '600px');

    const initChat = async () => {
      try {
        await createChat({
          webhookUrl: 'https://n8n-n8n.xuity6.easypanel.host/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
          mode: 'window',
          target: '#n8n-chat-container',
          showWindowCloseButton: true,
          showWelcomeScreen: true,
          defaultLanguage: 'en',
          initialMessages: [
            'Hi there! 👋',
            "I'm Tuhin's AI assistant. How can I help you learn more about Tuhin's work as an AI Engineer?"
          ],
          i18n: {
            en: {
              title: "Welcome to Tuhin's Portfolio",
              subtitle: "I'm here to answer questions about Tuhin's experience and skills.",
              getStarted: "Start Chatting",
              inputPlaceholder: "Ask me about Tuhin's work...",
            }
          },
          allowFileUploads: true,
          allowedFilesMimeTypes: ['image/jpeg', 'image/png', 'application/pdf'],
          metadata: {
            portfolioOwner: "Tuhin Mallick",
            profession: "Head of AI",
            specialties: ["Data-driven decisions", "Pattern recognition"]
          },
          theme: {
            '--chat--color-primary': '#ff4c60',
            '--chat--color-secondary': '#20b69e',
            '--chat--color-dark': '#101030',
            '--chat--color-light': '#ffffff',
            '--chat--color-medium': '#6c757d',
            '--chat--message--bot--color': '#333333',
            '--chat--message--user--color': '#ffffff',
            '--chat--message--bot--background': '#f0f0f0',
            '--chat--message--user--background': '#ff4c60',
            '--chat--header--background': '#101030',
            '--chat--header--color': '#ffffff',
            '--chat--toggle--background': '#ff4c60',
            '--chat--toggle--color': '#ffffff',
            '--chat--window--width': '350px',
            '--chat--window--height': '500px',
          },
        });
        console.log('Chat initialized successfully');
      } catch (error) {
        console.error('Failed to initialize chat:', error);
      }
    };

    initChat();
  }, []);

  return (
    <div className="main-left theme-dark">
      <Header />
      <Slider />
      <About />
      <Resume />
      <section id="work" className="section theme-light dark-bg scrollSpysection">
        <div className="container text-white">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <Portfolio />
        </div>
      </section>
      <section id="blog" className="section scrollSpysection">
        <div className="container">
          <div className="title">
            <h3>Latest Blog.</h3>
          </div>
          <Blog />
        </div>
      </section>
      <section id="contactus" className="section theme-light dark-bg scrollSpysection">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-4 m-15px-tb" data-aos="fade-right" data-aos-duration="1200">
              <ContactInfo />
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="contact-form">
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>
            <div className="col-12" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
              <Map />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      <div id="n8n-chat-container"></div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default HomeOne;
