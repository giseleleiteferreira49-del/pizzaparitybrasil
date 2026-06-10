=== Pizza Party Brasil — Tema WordPress ===

Tema personalizado para o site Pizza Party Brasil.

== Como instalar ==

1. Compacte a pasta `pizzaparty` em um arquivo ZIP (pizzaparty.zip).
2. No painel do WordPress, vá em Aparência > Temas > Adicionar novo > Enviar tema.
3. Selecione o ZIP e clique em "Instalar agora".
4. Ative o tema.

== Estrutura ==

pizzaparty/
├── style.css            (obrigatório - cabeçalho do tema + CSS)
├── functions.php        (registros, menus, widgets, helpers)
├── header.php           (cabeçalho HTML + nav)
├── footer.php           (rodapé + botão flutuante WhatsApp)
├── index.php            (fallback de listagem)
├── front-page.php       (landing page da home)
├── page.php             (template padrão de página)
├── single.php           (post individual)
├── page-pacote.php      (template para páginas de pacote)
├── 404.php              (página não encontrada)
├── searchform.php       (formulário de busca)
└── assets/js/main.js    (menu mobile + smooth scroll)

== Configuração ==

1. Aparência > Personalizar > Identidade do site: envie o logo.
2. Aparência > Menus: crie um menu e atribua à localização "Menu Principal".
3. Configurações > Leitura: defina "Uma página estática" e selecione a página
   que será a home (o template front-page.php será usado automaticamente).

== WhatsApp ==

O número do WhatsApp está em functions.php (função `pizzaparty_whatsapp_number`).
Edite o valor padrão '5511999999999' OU adicione no seu wp-config.php:

    define( 'WHATSAPP_NUMBER', '5511999999999' );

== Páginas de Pacote ==

Para criar um pacote (Prata, Ouro, Experience):

1. Páginas > Adicionar nova.
2. No painel lateral "Atributos da página", em "Modelo", escolha "Página de Pacote".
3. Defina imagem destacada, título e conteúdo.
4. A página aparecerá automaticamente na seção "Nossos Pacotes" da home.

== Suporte a Gutenberg ==

O tema suporta blocos largos (.alignwide) e fullwidth (.alignfull).
Você pode editar todas as páginas livremente com o editor de blocos.
