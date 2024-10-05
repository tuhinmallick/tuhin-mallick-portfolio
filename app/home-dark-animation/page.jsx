'use client';

import { useState, useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';  // Icons for fullscreen and compress

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
  const [chatMode, setChatMode] = useState('window');  // State to track fullscreen or window mode
  const [icon, setIcon] = useState(faExpand);  // Default icon for fullscreen

  useEffect(() => {
    console.log('Rendering Chat Mode:', chatMode); // Debug log

    const root = document.documentElement;

    // Primary and secondary colors
    root.style.setProperty('--chat--color-primary', '#FF9301');
    root.style.setProperty('--chat--color-secondary', '#FF8533');
    root.style.setProperty('--chat--color-dark', '#1A1A1A');
    root.style.setProperty('--chat--color-light', '#FFFFFF');
    root.style.setProperty('--chat--color-typing', '#ffffff'); // Added typing color

    // Chat container styles
    root.style.setProperty('--chat--border-radius', '0.75rem');
    root.style.setProperty('--chat--spacing', '0.5rem');
    root.style.setProperty('--chat--textarea--height', '50px');
    root.style.setProperty('--chat--window--width', '400px');
    root.style.setProperty('--chat--window--height', '600px');

    // Bot message styles
    root.style.setProperty('--chat--message--bot--background', '#2C2C2C');
    root.style.setProperty('--chat--message--bot--color', '#FFFFFF');

    // User message styles
    root.style.setProperty('--chat--message--user--background', '#FF9301');
    root.style.setProperty('--chat--message--user--color', '#FFFFFF');
    root.style.setProperty('--chat--message--font-size', '0.75rem');

    // Header styles
    root.style.setProperty('--chat--header--background', '#000000');
    root.style.setProperty('--chat--header--color', '#FFFFFF');

    // Optional: Adjust window size for default mode
    root.style.setProperty('--chat--window--width', '400px');
    root.style.setProperty('--chat--window--height', '600px');

    const initChat = async () => {
      try {
        await createChat({
          webhookUrl: 'https://n8n-n8n.xuity6.easypanel.host/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
          mode: chatMode,  // Toggle between 'fullscreen' and 'window' mode
          target: '#n8n-chat-container',
          showWindowCloseButton: false,
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
        });
        console.log('Chat initialized successfully');
      } catch (error) {
        console.error('Failed to initialize chat:', error);
      }
    };

    initChat();
  }, [chatMode]);  // Reinitialize chat on mode change

  // Toggle chat mode and update the button icon
  const toggleChatMode = () => {
    if (chatMode === 'window') {
      setChatMode('fullscreen');
      setIcon(faCompress);  // Change icon to compress
      console.log('Switched to fullscreen mode');
    } else {
      setChatMode('window');
      setIcon(faExpand);  // Change icon to expand
      console.log('Switched to window mode');
    }
  };

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

      {/* Ensure the button is inside the correct container */}
      <div id="n8n-chat-container">
        {/* Chat Toggle Button */}
        <button
          id="toggleButton"
          onClick={toggleChatMode}
          style={{
            position: 'absolute', // Changed to absolute so it is aligned within the container
            bottom: '20px',
            right: '20px',
            padding: '10px',
            backgroundColor: '#FF6600',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 1000, // Ensures the button is visible over other elements
          }}
          aria-label="Toggle chat window mode"
        >
          <FontAwesomeIcon icon={icon} size="lg" />
        </button>
      </div>

      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default HomeOne;
