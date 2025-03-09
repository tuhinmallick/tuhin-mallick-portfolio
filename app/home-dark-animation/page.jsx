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
    console.log('Initializing Chat');

    /* Commenting out n8n chat configuration
    const root = document.documentElement;

    // Set CSS variables
    root.style.setProperty('--chat--color-primary', '#FF9301');
    root.style.setProperty('--chat--color-secondary', '#FF8533');
    root.style.setProperty('--chat--color-dark', '#1A1A1A');
    root.style.setProperty('--chat--color-light', '#FFFFFF');
    root.style.setProperty('--chat--color-typing', '#ffffff');

    root.style.setProperty('--chat--border-radius', '0.75rem');
    root.style.setProperty('--chat--spacing', '0.5rem');
    root.style.setProperty('--chat--textarea--height', '50px');
    root.style.setProperty('--chat--window--width', '400px');
    root.style.setProperty('--chat--window--height', '600px');

    root.style.setProperty('--chat--message--bot--background', '#2C2C2C');
    root.style.setProperty('--chat--message--bot--color', '#FFFFFF');

    root.style.setProperty('--chat--message--user--background', '#FF9301');
    root.style.setProperty('--chat--message--user--color', '#FFFFFF');
    root.style.setProperty('--chat--message--font-size', '0.75rem');

    root.style.setProperty('--chat--header--background', '#000000');
    root.style.setProperty('--chat--header--color', '#FFFFFF');

    // Initialize the chat only once
    const initChat = async () => {
      try {
        await createChat({
          webhookUrl: 'https://n8n.tuhinmallick.com/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
          mode: 'window',
          target: '#n8n-chat-container',
          showWindowCloseButton: false,
          showWelcomeScreen: false,
          defaultLanguage: 'en',
          initialMessages: [
            'Hi there! 👋',
            "I'm Tuhin's AI assistant. How can I help you learn more about Tuhin's work with AI?"
          ],
          i18n: {
            en: {
              title: "Welcome to Tuhin's Portfolio",
              subtitle: "I'm here to answer questions about Tuhin's experience and skills.",
              getStarted: "Start Chatting",
              inputPlaceholder: "Ask me about Tuhin's work...",
              footer: 'Made with ✨',
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
    */

    // Initialize Chatwoot
    const script = document.createElement('script');
    script.innerHTML = `
      (function(d,t) {
        var BASE_URL="https://n8n-chatwoot.xuity6.easypanel.host";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: 'X4Uwojmv5tmZ2UiKML7aY6kk',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
    `;
    document.body.appendChild(script);
  }, []); // Empty dependency array to initialize only once

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
            <div
              className="col-lg-5 col-xl-4 m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>
            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form">
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>
            <div
              className="col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
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

      {/* Commenting out n8n chat container
      <div
        id="n8n-chat-container"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '400px',
          height: '600px',
          zIndex: 999,
          transition: 'all 0.3s ease',
          borderRadius: '0.75rem',
          overflow: 'hidden',
        }}
      ></div>
      */}

      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default HomeOne;
