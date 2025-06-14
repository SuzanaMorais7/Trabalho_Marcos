# Trabalho_Marcos
explicação da do trabalho e do que foi realizado nos arquivos HTML e dos scripts JavaScript (Script da fase 2 e Script da fase 3)usados em cada fase do projeto "Perfil do Aluno":

Fase 1: perfil_aluno.html
HTML:
Estrutura básica.
 Utiliza HTML e CSS embutido.
Imagens são mostradas sem interatividade,apenas quatro <img> fixos.
A tabela apresenta os dados do aluno, incluindo nome, RA, curso, endereço, etc.
Sem recursos dinâmicos, edição ou interação.

Propósito:
Primeira versão da página.Serve como estrutura inicial e exibição visual básica.

Fase 2 — `perfil_aluno_fase_2.html` com `Script da fase 2
**HTML**:
Foi introduzido um **carrossel de imagens** com botões:
 Botões de navegação: ❮ e ❯.
 Três botões de seleção (indicadores) para cada imagem.
  A tabela continua exibindo os dados pessoais e acadêmicos. Um arquivo JS externo é carregado com `<script src="Script.js"></script>` (que corresponde ao `Script da fase 2`). Introdução de **CSS externo** (`style.css`) para organização visual.

JavaScript (`Script da fase 2`):
Cria um carrossel que troca as imagens a cada 10 segundos.
 Funções:proximaImagem() / voltarImagem() / mudarImagem() — controle de imagem manual.
reiniciarTemporizador() — evita troca automática após navegação manual.
 Atualização visual dos botões de indicador ativo om classList.add('active').
**Melhorias em relação à Fase 1**:
 Página se torna **interativa**
 Uso de JavaScript para melhorar a experiência visual com carrossel.

Fase 3 — `perfil_aluno_fase_3.html` com`Script da fase 3
**HTML**:
 Mantém o carrossel da Fase 2.
 Adiciona:Campo de CPF com validação utomática via onblur.
 Campo para adicionar informações extras do perfil pessoal.
Botão para adicionar **UCs manualmente**.
Utiliza `<tbody id="lista-ucs"></tbody>` para listar dinamicamente as UCs via JS.

**JavaScript (`Script da fase 3`)**:
 Mantém todas as funções do `Script da fase 2`, com melhorias:
 Usa `classList.toggle('active', i === indiceAtual)` — mais conciso.
**Novas funcionalidades**:
  1. **UCs Dinâmicas**:
Lista de UCs salva no `localStorage`. Botões para mover, excluir ou adicionar novas UCs.
  2. **Validação de CPF**:
Verifica o formato com RegEx.
 Salva e exibe o CPF ou permite removê-lo.
  3. **Informações adicionais**:
   Permite inserir múltiplas descrições no perfil pessoal.
 Salvamento e recuperação do conteúdo pelo `localStorage`.
**Melhorias em relação à Fase 2**:
 A página evolui de apenas visual para formulário interativo e configurável
Persistência de dados entre sessões (com `localStorage`).
 Aumenta a usabilidade, tornando a experiência mais rica e personalizada.
