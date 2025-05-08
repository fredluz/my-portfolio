// Mark as Client Component
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// import { Card, Logo } from "@/once-ui/components"; // Card and Logo not used directly here
import styles from "../page.module.scss"; // Path remains correct relative to this new file location
import { LanguageSwitcher } from "./LanguageSwitcher"; // Import the switcher

// Performance optimization: Fade-in animation using Intersection Observer
function useIntersectionObserver() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.current?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      const elements = document.querySelectorAll(`.${styles.fadeIn}`);
      elements.forEach(el => observer.current?.observe(el));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
}

// Renamed function for the English version
export function TeacherZeroENContent() {
  useIntersectionObserver();

  const [showRefinementButtons, setShowRefinementButtons] = useState(false);
  const [isRegenerateMode, setIsRegenerateMode] = useState(false);
  const [showPromptInput, setShowPromptInput] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(
    'Why is the mitochondria known as "the powerhouse of the cell"?' 
  );
  // Add states for tracking animation states
  const [isThinking, setIsThinking] = useState(false);
  const [clickedButton, setClickedButton] = useState<'harder' | 'easier' | 'different' | null>(null);
  const [showSavedTime, setShowSavedTime] = useState(false);
  // Add state to track if refinements have been used
  const [hasUsedRefinements, setHasUsedRefinements] = useState(false);

  const handleMainButtonClick = () => {
    if (!isRegenerateMode) {
      // Only show refinement buttons if they haven't been used yet
      if (!hasUsedRefinements) {
        setShowRefinementButtons(true);
        setIsRegenerateMode(true);
      }
    } else {
      // Set thinking state and click state for animation
      setIsThinking(true);
      setClickedButton(null);

      // Simulate regeneration with a delay to show animation
      setTimeout(() => {
        setCurrentQuestion('Explain the connection between the high energy demands of cells like neurons and their high number of mitochondria.'); // Placeholder
        setShowRefinementButtons(false);
        setIsRegenerateMode(false);
        setIsThinking(false);
        setClickedButton(null);
        setShowSavedTime(true); // Show the saved time message
        setHasUsedRefinements(true); // Mark refinements as used
      }, 1500);
    }
  };

  const handleRefinementClick = (type: 'harder' | 'easier' | 'different') => {
    // Set which button was clicked for animation
    setClickedButton(type);
    setIsThinking(true);

    // Simulate different refinements after a delay
    const refinements = {
  harder: 'Analyze how the internal structure of the mitochondria is directly related to the production of ATP through cellular respiration.', // Placeholder
  easier: 'What energy rich molecule is produced by mitochondria?',
  different: 'Compare the production of energy in mitochondria to the production of energy in chloroplasts.' // Placeholder
};
      setTimeout(() => {
        setCurrentQuestion(refinements[type]);
        setShowRefinementButtons(false);
        setIsRegenerateMode(false);
        setIsThinking(false);
        setClickedButton(null);
        setShowSavedTime(true); // Show the saved time message
        setHasUsedRefinements(true); // Mark refinements as used permanently
      }, 1500);
  };

  return (
    <>
      {/* Vision Section */}
      <section className={`${styles.section} ${styles.vision}`}>
        <div className={styles.sectionContainer}>
          <LanguageSwitcher /> {/* Add switcher here */}
          <h2>A New Vision For Education</h2>
          <p>
            The dawn of technology that revolutionizes pedagogy. Our mission is
            to free educators from tedious and monotonous tasks, giving them back what truly matters:
            <strong> time to teach and inspire</strong>.
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className={`${styles.section} ${styles.logo} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.logoContainer}>
            <img src="images/TZ_landing/TZLogo.png" alt="TeacherZero Icon" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={`${styles.section} ${styles.problem} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>The Silent Problem</h2>
          <p>
            We know that creating worksheets, tests, and assessment materials consumes too much time.
            Time you could spend preparing engaging lessons or giving personalized attention to each student.
            It's tedious but necessary work that we can't escape from - like doing laundry.
          </p>
          <div className={styles.eyeCatchingLine}>
            But with us, you can take back your Sundays
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={`${styles.section} ${styles.solution} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>The Solution - TeacherZero</h2>
          <div className={styles.videoContainer}>
            <video
              controls
              className={styles.video}
              playsInline
              preload="metadata"
            >
              <source src="/images/TZ_landing/TZ_quick_Demop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>
            TeacherZero is a revolutionary AI Assistant for educators,
            designed not to replace you, but to <strong>amplify your talent</strong>.
            Our mission: give you back hours of work by enabling you to create
            high-quality assessment materials not in hours, but in minutes.
          </p>
          <p className={styles.highlight}>
            <strong>This isn't about automating teaching. It's about empowering your impact as an educator.</strong>
          </p>
        </div>
      </section>
      {/* Teacher First Philosophy */}
    <section className={`${styles.section} ${styles.teacherFirst} ${styles.fadeIn}`}>
      <div className={styles.sectionContainer}>
        <h2>Ethical AI: Teachers First</h2>
        <p>
        Unlike Big Tech giants that create tools without considering their real-world 
        impact, TeacherZero <strong>was born from genuine respect and gratitude for educators</strong>.
        I am who I am today thanks to extraordinary teachers who invested in me.
        I created TeacherZero to honor them and empower the next generation of educators.
        </p>
        <div className={styles.promise}>
        <h3>Our Promise</h3>
        <p>
          TeacherZero will always enhance and enrich your teaching career, never replace it.
          Our mission is fundamentally different: to make teaching more impactful,
          more rewarding and <strong>more human</strong>, by eliminating repetitive, brain-numbing tasks.
        </p>
        </div>
      </div>
    </section>

      {/* Comparison Section */}
    <section className={`${styles.section} ${styles.comparison} ${styles.fadeIn}`}>
      <div className={styles.sectionContainer}>
        <h2>Method Comparison</h2>
        <div className={styles.grid}>
        <div className={styles.header}>Methods</div>
        <div className={styles.header}>Traditional Methods</div>
        <div className={styles.header}>ChatGPT & Other Generic AI</div>
        <div className={`${styles.header} ${styles.highlight}`}>TeacherZero</div>

        <div className={styles.cell}>Time to create a worksheet</div>
        <div className={styles.cell}>1-3 hours</div>
        <div className={styles.cell}>20-40 minutes</div>
        <div className={`${styles.cell} ${styles.highlight}`}>2-5 minutes</div>

        <div className={styles.cell}>Technical knowledge required</div>
        <div className={styles.cell}>Basic</div>
        <div className={styles.cell}>Advanced (complex prompts)</div>
        <div className={`${styles.cell} ${styles.highlight}`}>None (No-Prompt interface)</div>

        <div className={styles.cell}>Pedagogical quality</div>
        <div className={styles.cell}>High</div>
        <div className={styles.cell}>Variable</div>
        <div className={`${styles.cell} ${styles.highlight}`}>Augmented</div>

        <div className={styles.cell}>Adapted to your curriculum</div>
        <div className={styles.cell}>Yes</div>
        <div className={styles.cell}>No</div>
        <div className={`${styles.cell} ${styles.highlight}`}>Always</div>
        </div>
      </div>
    </section>

      {/* How it Works Section */}
    <section className={`${styles.section} ${styles.howItWorks} ${styles.fadeIn}`}>
      <div className={styles.sectionContainer}>
        <h2>How It Works: Simple, Fast, and Powerful</h2>
        <div className={styles.steps}>
        <div className={`${styles.step} ${styles.step1}`}>
          <div className={styles.stepNumber}>1</div>
          <h3>Upload Your Material</h3>
          <div className={styles.stepVideoPlaceholder}>
            <img
            src="/images/TZ_landing/filetypes.png"
            alt="Question types"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <p>PowerPoint, PDF, or just paste your text. TeacherZero <strong>analyzes your content</strong> to create relevant questions that match your teaching goals.</p>
        </div>
        <div className={`${styles.step} ${styles.step2}`}>
          <div className={styles.stepNumber}>2</div>
          <h3>Choose and Generate</h3>
          <div className={styles.stepVideoPlaceholder}>
            <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
            <source src="/images/TZ_landing/questiontypes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
          <p>Select question types and difficulty levels, then click generate. <strong>AI handles the tedious work in seconds</strong>, not hours.</p>
        </div>
        <div className={`${styles.step} ${styles.step3}`}>
          <div className={styles.stepNumber}>3</div>
          <h3>Refine to Perfection</h3>
          <div className={styles.stepVideoPlaceholder}>
           <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
            <source src="/images/TZ_landing/editmanual.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
          <p>TeacherZero unlocks AI's full potential through simple, intuitive buttons. <strong>You maintain complete control</strong> - AI generates the first 80%, your expertise perfects the final 20%.</p>
        </div>
        <div className={`${styles.step} ${styles.step4}`}>
          <div className={styles.stepNumber}>4</div>
          <h3>Quick Export</h3>
          <div className={styles.stepVideoPlaceholder}>
            <video
            autoPlay
            loop
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            playsInline
            preload="metadata">
            <source src="/images/TZ_landing/export.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
          <p>Export instantly after refining your worksheet. <strong>In just 3 clicks</strong>, your students can start writing.</p>
        </div>
        </div>
      </div>
    </section>

      {/* Interactive Menu Demo Section */}
    <section className={`${styles.section} ${styles.spatialMenu} ${styles.fadeIn}`}>
      <div className={styles.sectionContainer}>
        <h2>The Enhancement Engine: Powerful AI for Everyone</h2>
        <p className={styles.featureIntro}>
        Our <strong>Enhancement Engine</strong> revolutionizes how you interact with AI, transforming the complex technical process of prompt engineering into an intuitive menu for pedagogical refinement.
        </p>
        <div className={styles.featureVideo}>
        <video
          loop
          autoPlay
          muted
          playsInline
          controls
        >
          <source src="/images/TZ_landing/question_refinement.mp4" type="video/mp4" />
        </video>
        </div>

        <p className={styles.demoIntro}>
        Experience it yourself. The interactive demo below lets you feel 
        the <strong>seamless interface</strong> that makes question refinement truly intuitive.
        </p>

          <div className={styles.demoContainer}>
            <div className={styles.questionHeader}>
              <div className={styles.questionTitleRow}>
                <span
                  className={styles.typeIcon}
                  title="Short Answer"
                >
                  ✎
                </span>
                <h3 className={styles.questionTitle}>Question 1</h3>
              </div>
            </div>

            <div className={styles.questionContent}>
              {currentQuestion}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className={styles.refinementEngine}>
                {(showSavedTime || hasUsedRefinements) && (
                  <div className={`${styles.savedTime} ${styles.visible}`}>
                    How much time did you save?
                  </div>
                )}
                {/* Main button - only shown when refinements haven't been used yet */}
                {!hasUsedRefinements && (
                  <button
                    className={`${styles.editLlmButton} ${isRegenerateMode ? styles.regenerateMode : ''} ${isThinking && isRegenerateMode ? styles.thinking : ''}`}
                    title={isRegenerateMode ? "Regenerate Question" : "Click to Refine"}
                    onClick={handleMainButtonClick}
                    disabled={isThinking && isRegenerateMode}
                  >
                    {isRegenerateMode ? '↻' : '❈'}
                  </button>
                )}

                {showRefinementButtons && !isThinking && !clickedButton && !hasUsedRefinements && (
                  <>
                    <button
                      className={`${styles.refineButton} ${styles.refineButtonUp} ${styles.visible}`}
                      title="Harder" 
                      onClick={() => handleRefinementClick('harder')}
                    >
                      ↑
                    </button>
                    <button
                      className={`${styles.refineButton} ${styles.refineButtonDown} ${styles.visible}`}
                      title="Easier"
                      onClick={() => handleRefinementClick('easier')}
                    >
                      ↓
                    </button>
                    <button
                      className={`${styles.refineButton} ${styles.refineButtonLeft} ${styles.visible}`}
                      title="Change Topic" 
                      onClick={() => handleRefinementClick('different')}
                    >
                      ↜
                    </button>
                  </>
                )}
                {isThinking && clickedButton && (
                  <button
                    className={`${styles.refineButton} ${styles.visible} ${styles.clicked} ${styles.thinking} ${
                      clickedButton === 'harder' ? styles.refineButtonUp :
                      clickedButton === 'easier' ? styles.refineButtonDown :
                      styles.refineButtonLeft
                    }`}
                    disabled
                  >
                    {clickedButton === 'harder' ? '↑' : clickedButton === 'easier' ? '↓' : '↜'}
                  </button>
                )}

                {showPromptInput && (
                  <input
                    type="text"
                    className={styles.llmPromptInput}
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="How would you like to refine this question?" 
                    autoFocus
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <p className={styles.featureSubDetails}>
            TeacherZero is more than an interface - it's a <strong><em>pedagogical co-pilot</em></strong> that understands your teaching context and helps you craft questions that truly challenge your students and develop their knowledge.
        </p>
      </section>

      {/* Features Section */}
      <section className={`${styles.section} ${styles.features} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>What Makes TeacherZero Special?</h2>
          <div className={styles.featureCards}>
            <div className={styles.featureColumn}>
              <h3>Truly Intuitive Interface</h3>
              <p>If you can click a button, you can use TeacherZero. We built a visual No-Prompt interface that translates your intentions into complex AI actions, <strong>without you needing to write a single prompt.</strong> Built for ease-of-use.</p>
            </div>
            <div className={styles.featureColumn}>
              <h3>Artificial Speed, Human Expertise</h3>
              <p>Generate drafts in seconds. Then, use simple buttons to quickly refine specific questions. Our philosophy: <strong>AI generates 80%, you refine the final 20%</strong> with the expert touch only experience provides.</p>
            </div>
            <div className={styles.featureColumn}>
              <h3>Intelligent Image Search</h3>
              <p>Using smart semantic search, TeacherZero finds <strong>relevant images for your worksheets based on a simple description</strong>, saving even more time while preparing visually engaging materials.</p>
            </div>
            <div className={styles.featureColumn}>
              <h3>The Educator in Command</h3>
              <p>TeacherZero ensures pedagogical quality <strong>because all context comes from you, the educator, not the AI model.</strong> Unlike generic AI, 'hallucinations' aren't an issue.</p>
            </div>
            <div className={styles.featureColumn}>
              <h3>All Question Types</h3>
              <p> Until now, assessment tools were often limited to multiple-choice and T/F. But TeacherZero's advanced tech supports <strong> 6 question types, including open response, </strong> with more on the way. </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/*
      <section className={`${styles.section} ${styles.about} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>Built By Gratitude</h2>
          <div className={styles.creatorContainer}>
            <div className={styles.creatorInfo}>
              <p>
                TeacherZero started with a conversation with a teacher friend and my deep gratitude
                for the educators who shaped my path. I'm Fred Luz, a developer from Portugal, focused on building AI
                for real people, not just corporate metrics.
              </p>
              <p>
                I'm building TeacherZero to be the tool my own extraordinary teachers
                — like Professora Sandra, Stora Filomena, and Professor Balinho —
                deserved to have. Their dedication inspired me to create something that truly makes a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Future Vision */}
      <section className={`${styles.section} ${styles.future} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>Our Vision for the Future</h2>
          <p>
            TeacherZero is just in it's beginning. We're building a complete ecosystem to support you:
          </p>
          <div className={styles.roadmap}>

            <div className={styles.roadmapItem}>
              <h3>Collaborative Creation</h3>
              <p>Save and share worksheets with colleagues, building cohesive materials together.</p>
            </div>
            <div className={styles.roadmapItem}>
              <h3>Video-Based Generation</h3>
              <p>Input a YouTube link, and TeacherZero analyzes it to create relevant assessments.</p>
            </div>
             <div className={styles.roadmapItem}>
              <h3>LMS Export</h3>
              <p>Send complete worksheets directly to Moodle, Google Classroom, or others for immediate student access.</p>
            </div>
            <div className={styles.roadmapItem}>
              <h3>Mobile App</h3>
              <p>Create assessment materials on the go using our intuitive No-Prompt interface.</p>
            </div>
            <div className={styles.roadmapItem}>
              <h3>Data Analytics</h3>
              <p>Powerful AI analyzes anonymized data to pinpoint exactly where your students need more support.</p>
            </div>
            <div className={styles.roadmapItem}>
              <h3>TeacherOne</h3>
              <p>AI-assisted grading that helps you provide more meaningful feedback in less time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Access Section */}
      <section className={`${styles.section} ${styles.beta} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>Exclusive Program: Join Us</h2>
          <p>
            TeacherZero is launching it's Beta program. We've already validated its
            potential to save time with assessment creation. <strong> But we want to go further.</strong>
          </p>
          <div className={styles.betaSignup}>
              {/* Klaviyo Form Embed */}
              <div className="klaviyo-form-Tv7V5D"></div>
            </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <p>© {new Date().getFullYear()} TeacherZero · All rights reserved</p>
          <Link href="/teacherZero/legal" className={styles.legalLink}>Legal Information</Link>
        </div>
      </footer>
    </>
  );
}
