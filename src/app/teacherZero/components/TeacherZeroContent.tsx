// Mark as Client Component
"use client";

import { useEffect, useRef, useState } from "react";
import { Card, Logo } from "@/once-ui/components";
import styles from "../page.module.scss";

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

export function TeacherZeroContent() {
  useIntersectionObserver();
  
  const [showRefinementButtons, setShowRefinementButtons] = useState(false);
  const [isRegenerateMode, setIsRegenerateMode] = useState(false);
  const [showPromptInput, setShowPromptInput] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(
    'Qual é a principal função da mitocôndria na célula?'
  );

  const handleMainButtonClick = () => {
    if (!isRegenerateMode) {
      setShowRefinementButtons(true);
      setIsRegenerateMode(true);
    } else {
      // Simulate regeneration
      setCurrentQuestion('Descreva o papel da mitocôndria na produção de energia celular.');
      setShowRefinementButtons(false);
      setIsRegenerateMode(false);
    }
  };

  const handleRefinementClick = (type: 'harder' | 'easier' | 'different') => {
    // Simulate different refinements
    const refinements = {
      harder: 'Analise como as disfunções mitocondriais afetam o metabolismo celular e relacione com doenças metabólicas.',
      easier: 'Liste três características principais da mitocôndria e explique porque ela é chamada de "central energética" da célula.',
      different: 'Compare o processo de produção de energia nas mitocôndrias com a fotossíntese nos cloroplastos.'
    };

    setCurrentQuestion(refinements[type]);
    setShowRefinementButtons(false);
    setIsRegenerateMode(false);
  };
  
  return (
    <>
      {/* Vision Section */}
      <section className={`${styles.section} ${styles.vision}`}>
        <div className={styles.sectionContainer}>
          <h2>Uma Nova Visão Para a Educação</h2>
          <p>
           O início da tecnologia que revoluciona a pedagogia. A nossa missão é clara: 
            libertar educadores de trabalhos entediantes e monótonos, devolvendo-lhes o que realmente importa: 
            <strong> tempo para ensinar e inspirar</strong>.
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className={`${styles.section} ${styles.logo} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.logoContainer}>
            <img src="/trademark/TZLogo.png" alt="TeacherZero Icon" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={`${styles.section} ${styles.problem} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>O Problema Silencioso</h2>
          <p>
            Sabemos que criar fichas, testes e outros materiais de avaliação consome demasiado tempo. 
            Tempo que podias usar para preparar aulas ou dar atenção cuidada a cada um dos teus alunos. 
            É um trabalho necessário mas entediante, a que não podemos escapar. Como lavar a roupa.
          </p>
          <div className={styles.eyeCatchingLine}>
            Mas connosco podes recuperar os teus domingos
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className={`${styles.section} ${styles.solution} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>A Solução - Apresentamos o TeacherZero</h2>
          <div className={styles.videoContainer}>
            <video 
              controls
              className={styles.video}
              playsInline
              preload="metadata"
            >
              <source src="/images/TZ_landing/demo_geral.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>
            TeacherZero é um Agente de Inteligência Artificial revolucionário para educadores, 
            concebido não para te substituir, mas para <strong>amplificar o teu talento</strong>. 
            A nossa missão: devolver-te horas de trabalho, permitindo criares 
            materiais didáticos de alta qualidade não em horas, mas em minutos. 
          </p>
          <p className={styles.highlight}>
            <strong>Isto não é sobre automatizar o ensino. É sobre potenciar o teu impacto como educador.</strong>
          </p>
        </div>
      </section>
      {/* Teacher First Philosophy */}
      <section className={`${styles.section} ${styles.teacherFirst} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>IA Ética: Professores Primeiro</h2>
          <p>
            Ao contrário das gigantes Big Tech que criam ferramentas sem considerar o seu impacto 
            real, o TeacherZero <strong> nasceu do respeito e genuína gratidão pelos educadores</strong>.
            Estou onde estou hoje graças a professores extraordinários que investiram em mim. 
            Criei o TeacherZero para os honrar e apoiar a próxima geração de educadores.
          </p>
          <div className={styles.promise}>
            <h3>A Nossa Promessa</h3>
            <p>
              O TeacherZero sempre irá valorizar e enriquecer a tua carreira docente, nunca substituí-la. 
              A nossa missão é fundamentalmente diferente: tornar o ensino mais impactante, 
              mais gratificante e <strong>mais humano</strong>, eliminando as tarefas repetitivas.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={`${styles.section} ${styles.comparison} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>Comparação entre métodos</h2>
          <div className={styles.grid}>
            <div className={styles.header}>Métodos</div>
            <div className={styles.header}>Métodos Tradicionais</div>
            <div className={styles.header}>ChatGPT & Outras IA Genéricas</div>
            <div className={`${styles.header} ${styles.highlight}`}>TeacherZero</div>

            <div className={styles.cell}>Tempo para criar uma ficha</div>
            <div className={styles.cell}>1-3 horas</div>
            <div className={styles.cell}>20-40 minutos</div>
            <div className={`${styles.cell} ${styles.highlight}`}>2-5 minutos</div>

            <div className={styles.cell}>Conhecimento técnico necessário</div>
            <div className={styles.cell}>Básico</div>
            <div className={styles.cell}>Avançado (prompts complexos)</div>
            <div className={`${styles.cell} ${styles.highlight}`}>Nenhum (interface No-Prompt)</div>

            <div className={styles.cell}>Qualidade pedagógica</div>
            <div className={styles.cell}>Alta</div>
            <div className={styles.cell}>Baixa</div>
            <div className={`${styles.cell} ${styles.highlight}`}>Augmentada</div>

            <div className={styles.cell}>Adaptado ao teu currículo</div>
            <div className={styles.cell}>Sim</div>
            <div className={styles.cell}>Não</div>
            <div className={`${styles.cell} ${styles.highlight}`}>Sempre</div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className={`${styles.section} ${styles.howItWorks} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>Como Funciona? Simples, Rápido e Poderoso.</h2>
          <div className={styles.steps}>
            <div className={`${styles.step} ${styles.step1}`}>
              <div className={styles.stepNumber}>1</div>
              <h3>Carrega o teu Material</h3>
              <div className={styles.stepVideoPlaceholder}>
                <img 
                  src="/images/TZ_landing/filetypes.png"
                  alt="Question types"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p>Um PowerPoint, PDF ou simplesmente cola texto com os tópicos a abordar.  O TeacherZero<strong> analisa o conteúdo </strong>para criar perguntas relevantes</p>
            </div>
            <div className={`${styles.step} ${styles.step2}`}>
              <div className={styles.stepNumber}>2</div>
              <h3>Escolhe e Gera</h3>
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
              <p>Seleciona os tipos de perguntas, bem como a sua dificuldade, e clica em gerar. <strong>A IA faz o trabalho entediante em segundos</strong>.</p>
            </div>
            <div className={`${styles.step} ${styles.step3}`}>
              <div className={styles.stepNumber}>3</div>
              <h3>Refina até à Perfeição</h3>
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
              <p>O TeacherZero desbloqueia todo o poder da IA com botões simples e intuitivos. <strong> Tu manténs sempre o controlo </strong> - a IA gera os primeiros 80%, e o teu conhecimento especializado aperfeiçoa os últimos 20%.</p>
            </div>
            <div className={`${styles.step} ${styles.step4}`}>
              <div className={styles.stepNumber}>4</div>
              <h3>Exportação Rápida</h3>
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
              <p>Exporta imediatamente após refinar a tua ficha.  <strong>Em 3 cliques</strong>, os teus alunos podem começar a escrever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Demo Section */}
      <section className={`${styles.section} ${styles.spatialMenu} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>Motor de Melhoria: IA ao Alcance de Todos</h2>
          <p className={styles.featureIntro}>
          O nosso <strong>Motor de Melhoria</strong> revoluciona a forma como interages com a IA, transformando um processo trabalhoso num menu intuitivo de refinamento pedagógico.
          </p>
          <div className={styles.featureVideo}>
            <video 
              loop 
              autoPlay
              muted 
              playsInline
              controls
            >
              <source src="/images/TZ_landing/MotorMelhoria.mp4" type="video/mp4" />
            </video>
          </div>

          <p className={styles.demoIntro}>
            Experimenta por ti próprio. A demo interativa abaixo permite-te sentir 
            a <strong>fluidez da interface</strong> que torna o refinamento de questões tão intuitivo.
          </p>
          
          <div className={styles.demoContainer}>
            <div className={styles.questionHeader}>
              <div className={styles.questionTitleRow}>
                <span
                  className={styles.typeIcon}
                  title="Resposta Curta"
                >
                  ✎
                </span>
                <h3 className={styles.questionTitle}>Questão 1</h3>
              </div>
            </div>

            <div className={styles.questionContent}>
              {currentQuestion}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className={styles.refinementEngine}>
                <button 
                  className={`${styles.editLlmButton} ${isRegenerateMode ? styles.regenerateMode : ''}`}
                  title={isRegenerateMode ? "Regenerar questão" : "Clica para começar a refinar"}
                  onClick={handleMainButtonClick}
                >
                  {isRegenerateMode ? '↻' : '❈'}
                </button>

                {showRefinementButtons && (
                  <>
                    <button
                      className={`${styles.refineButton} ${styles.refineButtonUp}`}
                      title="Mais Difícil"
                      onClick={() => handleRefinementClick('harder')}
                    >
                      ↑
                    </button>
                    <button
                      className={`${styles.refineButton} ${styles.refineButtonDown}`}
                      title="Mais Fácil"
                      onClick={() => handleRefinementClick('easier')}
                    >
                      ↓
                    </button>
                    <button
                      className={`${styles.refineButton} ${styles.refineButtonLeft}`}
                      title="Tópico Diferente"
                      onClick={() => handleRefinementClick('different')}
                    >
                      ↜
                    </button>
                  </>
                )}

                {showPromptInput && (
                  <input 
                    type="text"
                    className={styles.llmPromptInput}
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Como gostarias de refinar esta questão?"
                    autoFocus
                  />
                )}
              </div>
            </div>
          </div>
        </div>
         <p className={styles.featureSubDetails}>
            O TeacherZero é mais que uma interface - é um <strong>co-piloto pedagógico</strong> que entende o contexto educacional e te ajuda a criar questões que verdadeiramente desafiam e desenvolvem o conhecimento dos alunos.
          </p>
          
      </section>

      {/* Features Section */}
      <section className={`${styles.section} ${styles.features} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>O Que Torna o TeacherZero Especial?</h2>
          <div className={styles.featureCards}>
            <div className={styles.featureColumn}>
              <h3>Interface 100% Intuitiva</h3>
              <p>Se sabes usar um menu, sabes usar o TeacherZero. Criámos uma interface visual No-Prompt que transforma as tuas intenções em ações de IA complexas, <strong> sem que precises de escrever uma única frase. </strong>  Foco na facilidade.</p>
            </div>
            <div className={styles.featureColumn}>
              <h3>Rapidez Artificial, Conhecimento Humano</h3>
              <p>Gera rascunhos em segundos. Depois, usa botões claros para refinar perguntas específicas rapidamente. A nossa filosofia: <strong>IA gera 80%, tu refinas os 20% finais </strong> com o conhecimento que só a experiência tem.</p>
            </div>            
            <div className={styles.featureColumn}>
              <h3>Pesquisa Inteligente de Imagens</h3>
              <p>Usando pesquisa semântica inteligente, o TeacherZero procura <strong>imagens relevantes para as tuas fichas com base numa simples descrição</strong>, poupando ainda mais tempo na preparação de materiais visualmente atrativos.</p>
            </div>
            <div className={styles.featureColumn}>
              <h3>O Educador tem o Comando</h3>
              <p>O TeacherZero garante a qualidade pedagógica das fichas criadas, <strong>porque toda a informação é fornecida pelo educador, não pelo modelo IA.</strong> Ao contrário de IA genérica, 'alucinações' não são um problema.</p>
            </div>
            <div className={styles.featureColumn}>
              <h3>Todos os Tipos de Perguntas</h3>
              <p> Até agora, software de criação de avaliações só conseguia criar perguntas de escolha múltipla e V/F. Mas a tecnologia avançada do TeacherZero permite a criação de <strong> 6 tipos de pergunta, incluindo resposta livre, </strong> com mais a caminho. </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.section} ${styles.about} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>Criado por Gratidão</h2>
          <div className={styles.creatorContainer}>
            <div className={styles.creatorInfo}>
              <p>
                O TeacherZero nasceu de uma conversa com um professor amigo e da minha profunda gratidão 
                pelos educadores que moldaram o meu caminho. Sou o Fred Luz, developer focado em criar IA 
                que serve pessoas reais, não apenas métricas corporativas. 
              </p>
              <p>
                Estou a construir o TeacherZero para ser a ferramenta que os meus próprios professores extraordinários 
                - como a Professora Sandra, a Stora Filomena, e o Professor Balinho - 
                mereciam ter tido. A dedicação deles inspirou-me a criar algo que realmente faz diferença.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className={`${styles.section} ${styles.future} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>A Nossa Visão de Futuro</h2>
          <p>
            O TeacherZero é apenas o começo. Estamos a construir um ecossistema completo para te apoiar:
          </p>
          <div className={styles.roadmap}>

            <div className={styles.roadmapItem}>
              <h3>Criação Colaborativa</h3>
              <p>Guarda e partilha as fichas entre os teus colegas, criando materiais coesos em conjunto</p>
            </div>
            <div className={styles.roadmapItem}>
              <h3>Geração à Base de Vídeo</h3>
              <p>Insere um link do YouTube para o TeacherZero analisar e tornar numa avaliação coerente e relevante</p>
            </div>
             <div className={styles.roadmapItem}>
              <h3>Exportação para LMS</h3>
              <p>Envia as fichas completas para o Moodle, o Classroom ou o Blackboard para os teus alunos as realizarem na hora</p>
            </div>
            <div className={styles.roadmapItem}>
              <h3>App para Smartphone</h3>
              <p>Cria os materiais de avaliação enquanto esperas pelo autocarro, recorrendo à nossa interface intuitiva No-Prompt</p>
            </div>
            <div className={styles.roadmapItem}>
              <h3>TeacherOne</h3>
              <p>Correção assistida por IA que te ajuda a fornecer feedback mais significativo em menos tempo</p>
            </div>
            <div className={styles.roadmapItem}>
              <h3>Análise de Dados</h3>
              <p>IA poderosa analisa dados anonimizados para entender exatamente onde os teus alunos precisam de mais ajuda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Access Section */}
      <section className={`${styles.section} ${styles.beta} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>Programa Exclusivo: Junta-te a Nós</h2>
          <p>
            O TeacherZero está em fase Beta Avançada. Já validámos o 
            interesse e potencial de transformação na rotina dos educadores. <strong> Mas queremos ir ainda mais longe.</strong>
          </p>
          <div className={styles.betaSignup}>
            <h3>Sê Pioneiro da Mudança na Educação</h3>
            <p>
              Estamos a abrir acesso a <strong>100</strong> educadores para o nosso 
              Programa Parceiros Beta. Candidata-te e habilita-te a ganhar 
              acesso antecipado ao futuro.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSea_BzP21b7JB2ekIgCU--FN-qkrcLRQkoc71VIs02ctv-TRg/viewform?usp=dialog" 
              className={styles.ctaButton}
            >
              Junta-te à Mudança - Acesso Beta
            </a>
          </div>
        </div>
      </section>
      
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} TeacherZero · Todos os direitos reservados</p>
      </footer>
    </>
  );
}
