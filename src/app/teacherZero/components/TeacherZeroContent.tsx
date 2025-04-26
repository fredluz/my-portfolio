// Mark as Client Component
"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/once-ui/components";
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
  
  return (
    <>
      {/* Vision Section */}
      <section className={`${styles.section} ${styles.vision} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>Uma Nova Visão Para a Educação</h2>
          <p>
           O TeacherZero não é apenas mais uma ferramenta. É o início da tecnologia que
           revoluciona a educação. A nossa missão é clara: 
            libertar educadores de trabalhos entediantes e devolver-lhes o que realmente importa: 
            <strong> tempo para ensinar e inspirar</strong>.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className={`${styles.section} ${styles.problem} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>O Problema Silencioso</h2>
          <p>
            Sabemos que criar fichas, testes e materiais de avaliação consome demasiado tempo. 
            Tempo que podias usar para preparar aulas ou dar atenção cuidada a cada um dos teus alunos. 
            É um trabalho necessário mas entediante, a que não podemos escapar. Como lavar a roupa.
          </p>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className={`${styles.section} ${styles.solution} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>A Solução - Apresentamos o TeacherZero</h2>
          <div className={styles.videoContainer}>
            <div className={styles.videoPlaceholder}>
              <div className={styles.videoComingSoon}>Vídeo de 30s em breve</div>
            </div>
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
            real, o TeacherZero nasceu do respeito e genuína gratidão pelos educadores.
          </p>
          <p>
            Estou onde estou hoje graças a professores extraordinários que investiram em mim. 
            Criei o TeacherZero para os honrar e apoiar a próxima geração de educadores.
          </p>
          <div className={styles.promise}>
            <h3>A Nossa Promessa</h3>
            <p>
              O TeacherZero sempre irá valorizar e enriquecer a tua carreira docente, nunca substituí-la. 
              A nossa missão é fundamentalmente diferente: tornar o teu ensino mais humano, 
              mais gratificante e mais impactante, eliminando as tarefas repetitivas.
            </p>
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
              <h3>Envia o Material</h3>
              <div className={styles.stepVideoPlaceholder}>
                <div className={styles.stepPlaceholderText}>Vídeo rápido</div>
              </div>
              <p>Carrega um PowerPoint, PDF ou outro documento com o tópico a abordar.  O TeacherZero analisa o conteúdo para criar perguntas relevantes</p>
            </div>
            <div className={`${styles.step} ${styles.step2}`}>
              <div className={styles.stepNumber}>2</div>
              <h3>Escolhe e Gera</h3>
              <div className={styles.stepVideoPlaceholder}>
                <div className={styles.stepPlaceholderText}>Vídeo rápido</div>
              </div>
              <p>Seleciona os tipos de perguntas, bem como a sua dificuldade, e clica em gerar. A IA faz o trabalho entediante em segundos.</p>
            </div>
            <div className={`${styles.step} ${styles.step3}`}>
              <div className={styles.stepNumber}>3</div>
              <h3>Refina até à Perfeição</h3>
              <div className={styles.stepVideoPlaceholder}>
                <div className={styles.stepPlaceholderText}>Vídeo rápido</div>
              </div>
              <p>O TeacherZero desbloqueia todo o poder da IA com botões simples e intuitivos. <strong>Tu manténs sempre o controlo</strong> - a IA gera os primeiros 80%, e o teu conhecimento especializado aperfeiçoa os últimos 20%.</p>
            </div>
            <div className={`${styles.step} ${styles.step4}`}>
              <div className={styles.stepNumber}>4</div>
              <h3>Exportação Rápida</h3>
              <div className={styles.stepVideoPlaceholder}>
                <div className={styles.stepPlaceholderText}>Vídeo rápido</div>
              </div>
              <p>Exporta imediatamente em três cliques após refinar a tua ficha. Em 3 cliques, os teus alunos podem começar a escrever.</p>
            </div>
          </div>
        </div>
      </section>{/* Features Section */}
      <section className={`${styles.section} ${styles.features} ${styles.fadeIn}`}>
        <div className={styles.sectionContainer}>
          <h2>O Que Torna o TeacherZero Único?</h2>
          <p> aqui eu devia falar sobre como já há quem tente usar o chatgpt mas não vale a pena porque não é a interface correta e continua a dar imenso trabalho </p>
          <div className={styles.featureCards}>
            <div className={styles.featureColumn}>
              <h3>Interface 100% Intuitiva</h3>
              <div className={styles.featureVideoPlaceholder}>
                <div className={styles.featurePlaceholderText}>Vídeo demonstrativo</div>
              </div>
              <p>Se sabes usar um menu, sabes usar o TeacherZero. Criámos uma interface visual que transforma as tuas necessidades em ações de IA complexas, sem que precises de escrever uma única frase. Foco na facilidade.</p>
            </div>
            <div className={styles.featureColumn}>
              <h3>Velocidade com Qualidade</h3>
              <div className={styles.featureVideoPlaceholder}>
                <div className={styles.featurePlaceholderText}>Vídeo demonstrativo</div>
              </div>
              <p>Gera rascunhos em segundos. Depois, usa botões claros para refinar perguntas específicas rapidamente. A nossa filosofia: IA gera 80%, tu refinas os 20% finais com o conhecimento que só a experiência tem. Controlo e rapidez.</p>
            </div>            
            <div className={styles.featureColumn}>
              <h3>Pesquisa Inteligente de Imagens</h3>
              <div className={styles.featureVideoPlaceholder}>
                <div className={styles.featurePlaceholderText}>Vídeo demonstrativo</div>
              </div>
              <p>Encontra imagens relevantes para as tuas fichas usando pesquisa semântica inteligente, poupando ainda mais tempo na preparação de materiais visualmente atrativos.</p>
            </div>
            <div className={styles.featureColumn}>
              <h3>Rapidez Artificial, Conhecimento Humano</h3>
              <div className={styles.featureVideoPlaceholder}>
                <div className={styles.featurePlaceholderText}>Vídeo demonstrativo</div>
              </div>
              <p>O TeacherZero garante a qualidade pedagógica das fichas criadas, porque toda a informação é fornecida pelo educador, não pelo modelo IA. Ao contrário de alguns outros programas, 'halucinações' não são um problema.</p>
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
          <h2>Junta-te a Nós Nesta Jornada Transformadora</h2>
          <p>
            O TeacherZero está em fase Beta Avançada. Já validámos o enorme 
            interesse e potencial de transformação. Estamos a trabalhar para adicionar 
            suporte para fórmulas matemáticas e mais funcionalidades em breve.
          </p>
          <div className={styles.betaSignup}>
            <h3>Sê Pioneiro da Mudança na Educação</h3>
            <p>
              Estamos a abrir acesso a um número limitado de educadores para o nosso 
              Programa Parceiros Beta. Ajuda-nos a moldar o futuro do ensino e ganha 
              acesso antecipado com condições benéficas e especiais.
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
