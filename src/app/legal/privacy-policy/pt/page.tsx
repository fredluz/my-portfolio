import React from "react";
import Link from "next/link";

// IMPORTANTE: Este texto foi gerado por IA com base na entrada do utilizador e requer revisão por um profissional jurídico.
// A tradução automática também requer revisão cuidadosa.
export default function PrivacyPolicyPT() {
  const lastUpdatedDate = "4 de Maio de 2025"; // Atualize esta data quando forem feitas alterações

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>Política de Privacidade</h1>
      <p>
        <strong>Última Atualização:</strong> {lastUpdatedDate}
      </p>
      <p>
        Bem-vindo ao TeacherZero! Esta Política de Privacidade explica como
        recolhemos, usamos e protegemos as suas informações quando utiliza o
        nosso serviço Beta.
      </p>

      <h2>1. Informações que Recolhemos</h2>
      <ul>
        <li>
          <strong>Endereço de Email:</strong> Recolhemos o seu endereço de email
          quando se regista para acesso Beta. Usamos isto exclusivamente para
          comunicação relativa ao programa Beta, atualizações e informações
          relacionadas.
        </li>
        <li>
          <strong>Dados de Utilização:</strong> Recolhemos dados
          sobre como utilizadores interagem com o serviço para nos ajudar a melhorar
          a sua funcionalidade e experiência do utilizador. Isto inclui o
          rastreamento de padrões de utilização, envolvimento com
          funcionalidades e métricas de desempenho.
        </li>
        <li>
          <strong>Dados das Fichas:</strong> Os dados que insere na aplicação ou gera usando a aplicação 
          são processados para
          fornecer a funcionalidade do serviço.
        </li>
      </ul>

      <h2>2. Como Usamos as Suas Informações</h2>
      <ul>
        <li>
          Para fornecer acesso Beta e comunicar consigo sobre o serviço.
        </li>
        <li>
          Para analisar padrões de utilização e melhorar o serviço.
        </li>
        <li>Para operar e manter o serviço.</li>
      </ul>

      <h2>3. Armazenamento e Processamento de Dados</h2>
      <ul>
        <li>
          Usamos serviços de terceiros para alojamento e infraestrutura de
          backend, especificamente <strong>Supabase</strong> e{" "}
          <strong>Google Cloud Platform</strong>. Os seus dados podem ser
          armazenados e processados nos servidores deles.
        </li>
        <li>
          Os <strong>dados das fichas de trabalho</strong> que fornece podem ser
          processados em servidores localizados nos{" "}
          <strong>Estados Unidos</strong>.
        </li>
      </ul>

      <h2>4. Partilha e Venda de Dados</h2>
      <ul>
        <li>
          <strong>
            Não venderemos os seus dados pessoais (como o seu endereço de email)
            a terceiros.
          </strong>
        </li>
        <li>
          Podemos partilhar dados de utilização anónimos e agregados com
          terceiros para fins de análise ou melhoria do serviço.
        </li>
        <li>
          Podemos partilhar dados se exigido por lei ou para proteger os nossos
          direitos.
        </li>
      </ul>

      <h2>5. Segurança dos Dados</h2>
      <p>
        Implementamos medidas razoáveis para proteger as suas informações, mas
        nenhum sistema é completamente seguro.
      </p>

      <h2>6. As Suas Escolhas</h2>
      <p>
        Pode solicitar a eliminação da sua conta e endereço de email associado
        contactando-nos em fredericorodrigues2000@gmail.com.
      </p>

      <h2>7. Alterações a Esta Política</h2>
      <p>
        Podemos atualizar esta política ocasionalmente. Notificá-lo-emos sobre
        alterações significativas.
      </p>

      <h2>8. Contacte-nos</h2>
      <p>
        Se tiver dúvidas, por favor contacte-nos em
        fredericorodrigues2000@gmail.com.
      </p>

      <hr style={{ margin: "2rem 0" }} />
      <p>
        <Link href="/legal/privacy-policy">View in English</Link>
      </p>
    </main>
  );
}
