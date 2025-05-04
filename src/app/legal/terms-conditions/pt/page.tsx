import React from "react";
import Link from "next/link";

export default function TermsPT() {
  const lastUpdatedDate = "4 de Maio de 2025"; // Atualize esta data quando forem feitas alterações

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>Termos e Condições</h1>
      <p>
        <strong>Última Atualização:</strong> {lastUpdatedDate}
      </p>
      <p>
        Por favor, leia estes Termos e Condições ("Termos") cuidadosamente antes
        de usar o serviço Beta do TeacherZero ("Serviço"). O seu acesso e uso do
        Serviço estão condicionados à sua aceitação e conformidade com estes
        Termos.
      </p>

      <h2>1. Serviço Beta</h2>
      <p>
        Reconhece que o Serviço é uma versão Beta e pode conter bugs, erros e
        outros problemas. É fornecido para fins de teste e feedback.
      </p>

      <h2>2. Uso do Serviço</h2>
      <ul>
        <li>
          Concorda em usar o Serviço apenas para fins legais e de acordo com
          estes Termos.
        </li>
        <li>
          Concorda em não usar o Serviço:
          <ul>
            <li>
              De qualquer forma que viole qualquer lei ou regulamento local,
              nacional ou internacional aplicável.
            </li>
            <li>
              Para se fazer passar ou tentar fazer-se passar por Frederico Luz, um
              funcionário de Frederico Luz, outro utilizador ou qualquer outra
              pessoa ou entidade.
            </li>
            <li>
              Para se envolver em qualquer outra conduta que restrinja ou iniba
              o uso ou gozo do Serviço por qualquer pessoa, ou que, conforme
              determinado por nós, possa prejudicar Frederico Luz ou os
              utilizadores do Serviço ou expô-los a responsabilidade.
            </li>
          </ul>
        </li>
      </ul>

      <h2>3. Propriedade Intelectual</h2>
      <p>
        O Serviço e o seu conteúdo original, características e funcionalidade
        são e permanecerão propriedade exclusiva de Frederico Luz e dos seus
        licenciadores. As nossas marcas não podem ser
        usadas em conexão com qualquer produto ou serviço sem o consentimento
        prévio por escrito de Frederico Luz.
      </p>

      <h2>4. Exoneração de Garantias</h2>
      <p>
        O SERVIÇO É FORNECIDO "COMO ESTÁ" E "CONFORME DISPONÍVEL", SEM QUAISQUER
        GARANTIAS DE QUALQUER TIPO, SEJAM EXPRESSAS OU IMPLÍCITAS, INCLUINDO,
        MAS NÃO SE LIMITANDO A, GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO,
        ADEQUAÇÃO A UM FIM ESPECÍFICO OU NÃO INFRAÇÃO. FREDERICO LUZ NÃO
        GARANTE QUE O SERVIÇO SERÁ ININTERRUPTO, SEGURO OU LIVRE DE ERROS, QUE
        OS DEFEITOS SERÃO CORRIGIDOS, OU QUE O SERVIÇO OU O SERVIDOR QUE O
        DISPONIBILIZA ESTÃO LIVRES DE VÍRUS OU OUTROS COMPONENTES PREJUDICIAIS.
      </p>

      <h2>5. Limitação de Responsabilidade</h2>
      <p>
        EM NENHUM CASO FREDERICO LUZ, NEM OS SEUS DIRETORES, FUNCIONÁRIOS,
        PARCEIROS, AGENTES, FORNECEDORES OU AFILIADOS, SERÃO RESPONSÁVEIS POR
        QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU
        PUNITIVOS, INCLUINDO, SEM LIMITAÇÃO, PERDA DE LUCROS, DADOS, USO, BOA
        VONTADE OU OUTRAS PERDAS INTANGÍVEIS, RESULTANTES DE (I) O SEU ACESSO OU
        USO OU INCAPACIDADE DE ACEDER OU USAR O SERVIÇO; (II) QUALQUER CONDUTA
        OU CONTEÚDO DE QUALQUER TERCEIRO NO SERVIÇO; (III) QUALQUER CONTEÚDO
        OBTIDO DO SERVIÇO; E (IV) ACESSO NÃO AUTORIZADO, USO OU ALTERAÇÃO DAS
        SUAS TRANSMISSÕES OU CONTEÚDO, SEJA BASEADO EM GARANTIA, CONTRATO, ATO
        ILÍCITO (INCLUINDO NEGLIGÊNCIA) OU QUALQUER OUTRA TEORIA LEGAL, TENHAMOS
        OU NÃO SIDO INFORMADOS DA POSSIBILIDADE DE TAIS DANOS, E MESMO QUE UMA
        SOLUÇÃO AQUI ESTABELECIDA SEJA CONSIDERADA COMO TENDO FALHADO NO SEU
        PROPÓSITO ESSENCIAL. O SEU USO DO SERVIÇO É POR SUA CONTA E RISCO.
      </p>

      <h2>6. Lei Aplicável</h2>
      <p>
        Estes Termos serão regidos e interpretados de acordo com as leis de
        Portugal, sem consideração às suas disposições sobre conflito de leis.
        Em caso de conflito entre as versões linguísticas, a versão inglesa
        prevalecerá.
      </p>

      <h2>7. Alterações</h2>
      <p>
        Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou
        substituir estes Termos a qualquer momento.
      </p>

      <h2>8. Contacte-nos</h2>
      <p>
        Se tiver alguma dúvida sobre estes Termos, por favor contacte-nos em
        fredericorodrigues2000@gmail.com.
      </p>

      <hr style={{ margin: "2rem 0" }} />
      <p>
        <Link href="/legal/terms-conditions">View in English</Link>
      </p>
    </main>
  );
}
