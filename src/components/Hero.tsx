// components/Hero.tsx
import { AnimatedDiv } from './UI/AnimatedDiv';
import { Phone, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <AnimatedDiv type="slideUp" delay={0.4}>
            <h1 className="text-4xl md:text-6xl font-bold">Deep Ajitbhai Parmar</h1>
          </AnimatedDiv>
          
          <AnimatedDiv type="slideUp" delay={0.6}>
            <h2 className="text-xl md:text-2xl text-gray-400">B.Tech. - Computer Science & Engineering</h2>
          </AnimatedDiv>

          <AnimatedDiv type="slideUp" delay={0.8}>
            <div className="flex gap-4 text-gray-300">
              <Phone className="w-5 h-5" /> +91-9725362234
            </div>
          </AnimatedDiv>

          <AnimatedDiv type="slideUp" delay={1.0}>
            <div className="text-gray-300">depparmar3@gmail.com</div>
          </AnimatedDiv>
        </div>

        <AnimatedDiv type="scale" delay={0.5}>
          <div className="aspect-square rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 overflow-hidden">
            <img 
              src="/assets/vector.png"
              alt="Deep Parmar" 
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};