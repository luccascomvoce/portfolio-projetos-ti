/**
 * Articles Carousel & In-Place Reader Engine
 * Provides smooth touch-enabled carousel navigation and FLIP modal reader for technical articles
 */

import { ARTICLES_DATA } from '../data/articlesData.js';
import { applyTiltEffect, setTiltEnabled } from './tilt.js';
import { soundEngine } from './audio.js';
import { i18n } from '../i18n/i18n.js';

// Pre-compiled full article contents with local asset references
const ARTICLE_CONTENTS = {
  "telegram-ou-telegrams": `
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/02b5ea31d0d4110b32fcb.jpg" alt="Telegram ou Telegrams?" loading="lazy">
    </figure>

    <p>Você já deve ter ouvido falar no Telegram: um mensageiro multiuso com foco em velocidade e segurança, que já é usado por mais de <a href="https://www.mobiletime.com.br/noticias/14/08/2023/telegram-chega-a-800-milhoes-de-usuarios-e-lanca-o-seu-stories/" target="_blank" rel="noopener noreferrer">800 milhões de pessoas</a>.</p>

    <p>Mas o que você pode não saber é que, na verdade, há vários "Telegrams" no mercado. E não, eles não são <strong>mods</strong> ou cópias <strong>pirata</strong> para roubar seus dados! São apps alternativos legítimos cuja criação e desenvolvimento são aprovados e até incentivados pelo Telegram "original".</p>

    <h3>O que são clientes?</h3>

    <p>Se você olhar com atenção para a sua loja de apps, vai perceber que alguns aplicativos têm uma versão "lite", mais econômica que o aplicativo principal. Exemplos disso são o Facebook e Facebook Lite, Uber e Uber Lite e outros.</p>

    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/cff7ed4926d90ab6a3d44.jpg" alt="Google Maps e Go" loading="lazy">
      <figcaption>O Google Maps é um dos apps que possuem versões menores, com foco em dispositivos com hardware limitado</figcaption>
    </figure>

    <p>Esse app alternativo (e o principal também) é o que chamamos de "cliente" e pode ser oficial ou não. O X/Twitter, por exemplo, exibe o cliente que o usuário estava utilizando quando postou algo.</p>

    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/19feb7889de52594e9674.png" alt="Clientes do Twitter" loading="lazy">
      <figcaption>O X/Twitter tem vários clientes para várias plataformas</figcaption>
    </figure>

    <p>São vários aplicativos com a mesma função: se conectar aos serviços do Twitter. Portanto, são clientes do Twitter.</p>

    <blockquote>Cliente é um aplicativo, oficial ou não, que pode acessar um servidor.</blockquote>

    <p>Deu pra entender? Um aplicativo é um cliente. E não necessariamente ele deve ser o único ou o melhor para você. Muitas pessoas que utilizam o WhatsApp, por exemplo, preferem instalar versões modificadas dele (como GB WhatsApp) para usufruir de recursos adicionais que o WhatsApp oficial não possui. Mas isso é assunto para mais tarde...</p>

    <h3>Quando usar um cliente alternativo?</h3>

    <p>Bom, a resposta mais coerente é: quando houver necessidade. Se você está usando o aplicativo oficial e não sente falta de nada, então está tudo certo. Fique onde está. Agora, pode ser uma boa ideia experimentar soluções alternativas se você precisa:</p>

    <ol>
      <li>De um app mais leve;</li>
      <li>De mais funções e configurações;</li>
      <li>Utilizar outra plataforma.</li>
    </ol>

    <h3>Os clientes do Telegram</h3>

    <p>No <a href="https://telegram.org/apps" target="_blank" rel="noopener noreferrer">site oficial</a> do mensageiro podemos encontrar clientes oficiais para diversas plataformas, como para smartphones Android, iPhones e iPads, Windows, Linux, clientes web, entre outras.</p>

    <p>No entanto, os clientes listados lá não são os únicos. O Telegram incentiva a criação de apps alternativos baseados no seu código e até a <a href="https://www.sammobile.com/2015/09/15/samsung-launches-socializer-messenger-app-for-android-that-is-based-on-telegram/amp/" target="_blank" rel="noopener noreferrer">Samsung</a> já fez seu próprio "telegram".</p>

    <p>A grande vantagem desse modelo é que muitas funções interessantes podem ser adicionadas. Você pode decidir fazer um "telegram" inspirado em unicórnios coloridos para a comunicação interna da sua empresa, customizando com funções dedicadas e ações automatizadas. Na aparência, ele será exclusivo. Mas nos bastidores estará usando a infraestrutura do Telegram para funcionar.</p>

    <h4>Telegram (Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/cec55a45c45bfee33fc0c.jpg" alt="Telegram Android" loading="lazy">
    </figure>
    <p>Certamente é o mais famoso de todos, junto com o Telegram para iOS. Quem sabe só não seja mais famoso que o velho ZapZap (<em>sim, o ZapZap era um "telegram" brasileiro</em>), muito popular um tempo atrás. É o principal resultado das buscas e o que todos instalam na primeira vez.</p>
    <blockquote>É oficial? <strong>Sim</strong> | Tem código aberto? <a href="https://github.com/DrKLO/Telegram" target="_blank" rel="noopener noreferrer">Sim</a></blockquote>

    <h4>Telegram (iOS)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/232eac324eed8536d6c35.jpg" alt="Telegram iOS" loading="lazy">
    </figure>
    <p>O Telegram para iOS que temos hoje é uma criação recente, o Challegram, resultado de um concurso para desenvolvedores. Durante algum tempo os dois apps estavam disponíveis para download, até que o código do original foi substituído pelo do Challegram.</p>
    <blockquote>É oficial? <strong>Sim</strong> | Tem código aberto? <a href="https://github.com/TelegramMessenger/Telegram-iOS" target="_blank" rel="noopener noreferrer">Sim</a></blockquote>

    <h4>Telegram X (Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/805e96e38c7bb6a05af48.jpg" alt="Telegram X" loading="lazy">
    </figure>
    <p>Foi o vencedor de um concurso para desenvolvedores, escrito do zero (usando a recém lançada TDLib) com o objetivo de ser mais rápido e eficiente, uma espécie de "Telegram Lite". De fato, é o app Android com maiores velocidades de download e upload.</p>
    <blockquote>É oficial? <strong>Sim</strong> | Tem código aberto? <a href="https://github.com/TGX-Android/Telegram-X" target="_blank" rel="noopener noreferrer">Sim</a></blockquote>

    <h4>Plus Messenger (Android)</h4>
    <p>Primeiro cliente não oficial da nossa lista, é um dos mais populares no Android, com temas próprios e um bom conjunto de ajustes. Costuma ser a melhor escolha para marinheiros de primeira viagem em clientes alternativos.</p>
    <blockquote>É oficial? <strong>Não</strong> | Tem código aberto? <strong>Não</strong> | <a href="https://play.google.com/store/apps/details?id=org.telegram.plus" target="_blank" rel="noopener noreferrer">Ver na Play Store</a></blockquote>

    <h4>Nicegram (iOS e Android)</h4>
    <p>Hoje é um dos únicos clientes não oficiais funcionando nos iPhones, com ferramentas dedicadas e interface refinada.</p>
    <blockquote>É oficial? <strong>Não</strong> | Tem código aberto? <strong>Não</strong> | <a href="https://apps.apple.com/br/app/nicegram/id1457369322" target="_blank" rel="noopener noreferrer">Ver na App Store</a></blockquote>

    <h4>Vidogram (iOS e Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/ef672783ffa4210522268.jpg" alt="Vidogram" loading="lazy">
    </figure>
    <p>Primeiro cliente a oferecer IPTV, lives e chamadas de vídeo em grupo (antes mesmo do Telegram oficial). Tem seus próprios jogos e recursos de streaming.</p>
    <blockquote>É oficial? <strong>Não</strong> | Tem código aberto? <strong>Não</strong> | <a href="https://play.google.com/store/apps/details?id=org.vidogram.messenger" target="_blank" rel="noopener noreferrer">Ver na Play Store</a></blockquote>

    <h4>Unigram (Windows 10/11, Xbox)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/8dea2522e8c95b840f33a.jpg" alt="Unigram" loading="lazy">
      <figcaption>Unigram leva para o desktop todos os principais recursos do Telegram mobile, como chats secretos.</figcaption>
    </figure>
    <p>Baseado na TDLib, a experiência é projetada para se encaixar perfeitamente no Windows 11, inclusive sendo escolhido pelo Windows Center como o melhor app social da Microsoft Store.</p>
    <blockquote>É oficial? <strong>(Ainda) Não</strong> | Tem código aberto? <a href="https://github.com/UnigramDev/Unigram" target="_blank" rel="noopener noreferrer">Sim</a> | <a href="https://www.microsoft.com/store/apps/9n97zckpd60q" target="_blank" rel="noopener noreferrer">Ver na Microsoft Store</a></blockquote>

    <h4>iMe Messenger (Android, iOS e Desktop)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/ad127aa20f60f4359636e.jpg" alt="iMe Messenger" loading="lazy">
    </figure>
    <p>Poderoso cliente multiplataforma com ferramentas focadas em Inteligência Artificial, tradução em tempo real e recursos integrados de carteira digital, disponível para Android, iOS e Desktop.</p>
    <blockquote>É oficial? <strong>Não</strong> | Tem código aberto? <a href="https://github.com/imemessenger/" target="_blank" rel="noopener noreferrer">Sim</a> | <a href="https://imem.app/" target="_blank" rel="noopener noreferrer">Site Oficial</a></blockquote>

    <h4>TurboTel (Android)</h4>
    <figure>
      <img src="assets/images/artigos/telegram-ou-telegrams/c736375f4c681b6bf062a.jpg" alt="TurboTel" loading="lazy">
      <figcaption>Capturas de tela do TurboTel</figcaption>
    </figure>
    <p>Um dos clientes mais avançados no Android em termos de configurações granulares, downloads turbinados e gerenciador de abas.</p>
    <blockquote>É oficial? <strong>Não</strong> | Tem código aberto? <strong>Não</strong> | <a href="https://play.google.com/store/apps/details?id=ellipi.messenger" target="_blank" rel="noopener noreferrer">Ver na Play Store</a></blockquote>

    <h4>Nanogram (watchOS)</h4>
    <p>O Telegram tem uma versão oficial para Apple Watch, mas ela precisa do iPhone por perto. O Nanogram é um cliente independente que resolve esse problema e funciona de forma autônoma no relógio!</p>
    <blockquote>É oficial? <strong>Não</strong> | Tem código aberto? <strong>Não</strong> | <a href="https://apps.apple.com/br/app/nanogram-messenger-for-watch/id1574130405" target="_blank" rel="noopener noreferrer">Ver na App Store</a></blockquote>

    <hr>

    <h3>Lista Rápida dos Principais Clientes</h3>
    <ul>
      <li><strong>Desktop:</strong> <a href="https://desktop.telegram.org/" target="_blank" rel="noopener noreferrer">Telegram Desktop (Oficial)</a>, <a href="https://macos.telegram.org/" target="_blank" rel="noopener noreferrer">Telegram macOS (Oficial)</a>, <a href="https://github.com/UnigramDev/Unigram" target="_blank" rel="noopener noreferrer">Unigram</a>, <a href="http://imem.app/desktop" target="_blank" rel="noopener noreferrer">iMe Desktop</a>, <a href="https://t.me/kotatogram" target="_blank" rel="noopener noreferrer">Kotatogram</a>.</li>
      <li><strong>Android:</strong> <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger" target="_blank" rel="noopener noreferrer">Telegram (Oficial)</a>, <a href="https://play.google.com/store/apps/details?id=org.thunderdog.challegram" target="_blank" rel="noopener noreferrer">Telegram X (Oficial)</a>, <a href="https://play.google.com/store/apps/details?id=org.telegram.plus" target="_blank" rel="noopener noreferrer">Plus Messenger</a>, <a href="https://play.google.com/store/apps/details?id=tw.nekomimi.nekogram" target="_blank" rel="noopener noreferrer">Nekogram</a>, <a href="https://play.google.com/store/apps/details?id=ellipi.messenger" target="_blank" rel="noopener noreferrer">TurboTel</a>, <a href="https://play.google.com/store/apps/details?id=org.vidogram.messenger" target="_blank" rel="noopener noreferrer">Vidogram</a>.</li>
      <li><strong>iOS:</strong> <a href="https://apps.apple.com/br/app/telegram-messenger/id686449807" target="_blank" rel="noopener noreferrer">Telegram iOS (Oficial)</a>, <a href="https://apps.apple.com/br/app/nicegram/id1457369322" target="_blank" rel="noopener noreferrer">Nicegram</a>, <a href="https://apps.apple.com/us/app/ime-messenger-crypto-wallet/id1450480822" target="_blank" rel="noopener noreferrer">iMe iOS</a>, <a href="https://apps.apple.com/ae/app/vidogram/id1528004676" target="_blank" rel="noopener noreferrer">Vidogram iOS</a>.</li>
      <li><strong>Web:</strong> <a href="https://web.telegram.org/k" target="_blank" rel="noopener noreferrer">Telegram Web K</a>, <a href="https://web.telegram.org/z" target="_blank" rel="noopener noreferrer">Telegram Web Z</a>.</li>
    </ul>

    <h3>Observações e Segurança</h3>
    <p>Mesmo que a grande maioria dos clientes para o Telegram seja madura e respeitável, nunca confie em apps de procedência desconhecida. Prefira sempre clientes de código aberto auditáveis ou as opções oficiais disponibilizadas no site do mensageiro.</p>
  `,
  "apps-torrent": `<figure><img src="assets/images/artigos/apps-torrent/f9997ce24f0075e56374b.jpg" alt="Imagem" loading="lazy"></figure><p>Torrents fazem parte do dia a dia de muitas pessoas há décadas. Criado em 2001, o protocolo bittorrent é usado até hoje para o download e upload dos mais diversos tipos de arquivos. Conheça agora alguns aplicativos para aproveitar os benefícios dessa tecnologia.</p><blockquote>Torrent é um arquivo que possui os metadados usados pelo protocolo bittorrent para possibilitar o compartilhamento descentralizado de arquivos. </blockquote><hr><p><br></p><h3>uTorrent, a pior opção possível</h3><figure><img src="assets/images/artigos/apps-torrent/80536c017dc3aa0651a3e.jpg" alt="Interface principal do uTorrent na versão 3.4.9 no Windows, com anúncios no canto inferior esquerdo e na parte superior" loading="lazy"><figcaption>Interface principal do uTorrent na versão 3.4.9 no Windows, com anúncios no canto inferior esquerdo e na parte superior</figcaption></figure><blockquote>🟢 É gratuito
🔴 Tem código fechado
🔴 Possui anúncios
🌐 Disponível <a href="https://www.utorrent.com/" target="_blank" rel="noopener noreferrer">aqui</a> para Windows, macOS, GNU/Linux e Android</blockquote><p>Lançado em 2005, é possivelmente o mais famoso dessa lista, por seu passado glorioso como um dos melhores clientes bittorrent. Hoje, passa longe de ser a melhor opção. Há poucos anos, foi flagrado se aproveitando do hardware dos usuários para minerar criptomoedas.</p><blockquote><a href="https://www.tecmundo.com.br/torrent/76100-malandragem-utorrent-usando-pc-minerar-bitcoins.htm" target="_blank" rel="noopener noreferrer">Malandragem! uTorrent se aproveita do hardware dos usuários para minerar criptomoeda</a></blockquote><p>Já durante a instalação, o uTorrent não esconde que é um aplicativo abusivo, induzindo o usuário a instalar software indesejado. Por isso, caso queira experimentar o app, tenha atenção redobrada às minúcias para não instalar nada que não queira. Ao finalizar a instalação, o uTorrent abre duas abas do navegador para exibir publicidade, dando início a uma experiência recheada de anúncios irritantes. Inclusive, essa característica já foi explorada para instalar vírus no computador dos usuários.</p><blockquote><a href="https://www.tecmundo.com.br/torrent/116787-alerta-voce-precisa-desinstalar-utorrent-computador.htm" target="_blank" rel="noopener noreferrer">uTorrent está utilizando um exploit flash via propagandas para instalar malwares em computadores</a></blockquote><p>Sendo assim, o uTorrent não tem um bom histórico no que se refere a transparência e respeito ao usuário, já que foi usado para hackear o computador dos usuários e até já se aproveitou do hardware dos usuários para minerar criptomoeda. </p><blockquote><a href="https://www.techtudo.com.br/noticias/2018/02/utorrent-tem-falha-grave-e-permite-que-hacker-assuma-o-controle-do-pc.ghtml" target="_blank" rel="noopener noreferrer">uTorrent tem falha grave e permite que hacker assuma o controle do PC</a></blockquote><p>Além disso, por ser um app de código fechado e índole duvidosa, não é recomendado nessa lista.</p><p></p><hr><p><br></p><h3>BitTorrent, o uTorrent 2</h3><figure><img src="assets/images/artigos/apps-torrent/f39862098d55fb3b44817.jpg" alt="Interface principal do BitTorrent 7.10.5 no Windows. É o mesmo uTorrent, mas com outro nome." loading="lazy"><figcaption>Interface principal do BitTorrent 7.10.5 no Windows. É o mesmo uTorrent, mas com outro nome.</figcaption></figure><blockquote>🟢 É gratuito
🔴 Tem código fechado
🔴 Possui anúncios 
🌐 Disponível aqui para Windows, macOS, GNU/Linux e Android</blockquote><p></p><p>Criado em 2001 pelo próprio criador do protocolo (<a href="https://en.m.wikipedia.org/wiki/BitTorrent_(software)" target="_blank" rel="noopener noreferrer">Bram Cohen</a>), o BitTorrent foi naturalmente o primeiro aplicativo a implementar essa tecnologia. Até a versão 5.30, é conhecido como BitTorrent Mainline por ter se mantido como um projeto de código aberto. Em 2004 Bram Cohen criou a empresa Bit Torrent Inc. Em 2006, essa empresa comprou o uTorrent por um preço não divulgado. E em 2007, na prática, o aplicativo BitTorrent original foi abandonado e passou a ser apenas uma versão renomeada do uTorrent. Com isso, passou a ter o código fechado. </p><figure><img src="assets/images/artigos/apps-torrent/76a882d3236eb035ceb60.jpg" alt="A mesma empresa mantém os dois aplicativos" loading="lazy"><figcaption>A mesma empresa mantém os dois aplicativos</figcaption></figure><p>Hoje, o BitTorrent tem um token utilitário (BTT) baseado na blockchain Tron. Esse token é a base de um mercado colaborativo que visa expandir as possibilidades de uso do protocolo. Entretanto, o funcionamento desse ecossistema é obscuro e pouco transparente, recomendado apenas para os mais bisbilhoteiros e curiosos compulsivos.</p><blockquote>BitTorrent, hoje, é o mesmo uTorrent, mas com outro nome. Na prática, são a mesma coisa, controlados pela mesma empresa.</blockquote><p><br></p><hr><p><br></p><h3>BitComet, o veterano </h3><figure><img src="assets/images/artigos/apps-torrent/f3a7f3be75452cda24670.jpg" alt="Interface principal do BitComet 1.98 no Windows" loading="lazy"><figcaption>Interface principal do BitComet 1.98 no Windows</figcaption></figure><blockquote>🟢 É gratuito
🔴 Tem código fechado
🟢 Não possui anúncios 
🌐 Disponível <a href="https://www.bitcomet.com/en/downloads" target="_blank" rel="noopener noreferrer">aqui</a> para Windows, macOS e Android.</blockquote><p></p><p>Com a primeira versão tendo sido lançada em 2003, ele está na lista em respeito por ser um dos clientes bittorrent mais antigos do mercado. Infelizmente, de forma similar ao uTorrent, já durante a instalação, o BitComet induz o usuário a instalar software indesejado. Mantido por um grupo chinês de desenvolvedores, o ponto positivo é que não possui anúncios dentro do aplicativo e oferece um grande conjunto de ferramentas. </p><p>Definitivamente NÃO é nossa melhor recomendação. O BitComet nunca teve uma fama muito boa por causa de certos problemas encontrados no aplicativo. Certas ações da equipe de desenvolvedores também fizeram com que o app perdesse o respeito da comunidade.</p><p></p><hr><p><br></p><h3>Deluge, o vovô </h3><figure><img src="assets/images/artigos/apps-torrent/fac9cdfb86e767fce8801.jpg" alt="Interface principal do Deluge no Windows" loading="lazy"><figcaption>Interface principal do Deluge no Windows</figcaption></figure><blockquote>🟢 É gratuito
🟢 Tem código aberto
🟢 Não possui anúncios 
🌐 Disponível <a href="https://www.deluge-torrent.org/" target="_blank" rel="noopener noreferrer">aqui</a> para Windows, macOS e GNU/Linux</blockquote><p></p><p>Esse é outro veterano da área, o que já fica evidente ao acessar o site. Não seria surpresa se o site fosse o mesmo de 2007, ano em que o Deluge foi lançado. Mas, se você conseguir superar o trauma gerado por essa primeira impressão, o design do aplicativo é impressionantemente limpo. Mesmo assim, tem um bom conjunto de configurações. Uma pena não ter suporte ao idioma português. Deve agradar usuários hardcore que gostam de terminais e linhas de comando.</p><p></p><hr><p><br></p><h3>Vuze, o cheiro de maçã </h3><figure><img src="assets/images/artigos/apps-torrent/df13dd36b4cd164ceb575.jpg" alt="Interface principal do Vuze no Windows" loading="lazy"><figcaption>Interface principal do Vuze no Windows</figcaption></figure><blockquote>🟢 É gratuito
🔴 Tem código fechado
🔴 Possui anúncios 
🌐 Disponível <a href="https://www.vuze.com/download.php" target="_blank" rel="noopener noreferrer">aqui</a> para Windows, macOS, GNU/Linux e Android</blockquote><p></p><p>Gratuito e com interface inspirada no macOS, durante a instalação o Vuze oferece alguns componentes, como integração com o iTunes. Todos os complementos vêm marcados por padrão, mas com um pouco de atenção e alguns cliques é possível evitar a instalação deles. O aplicativo também exibe anúncios, embora de maneira bem mais sutil do que uTorrent e BitTorrent.</p><p>O diferencial aqui parece estar na possibilidade de descobrir conteúdo dentro do próprio aplicativo, o que não deve convencer a grande maioria dos usuários que já sabem o que querem baixar.</p><p></p><hr><p><br></p><h3>Web Torrent, o minimalista</h3><figure><img src="assets/images/artigos/apps-torrent/e173081a7a048d4331016.jpg" alt="Interface principal do Web Torrent 0.24.0 no Windows" loading="lazy"><figcaption>Interface principal do Web Torrent 0.24.0 no Windows</figcaption></figure><blockquote>🟢 É gratuito
🟢 Tem código aberto
🟢 Não possui anúncios 
🌐 Disponível <a href="https://webtorrent.io/desktop/" target="_blank" rel="noopener noreferrer">aqui</a> para Windows, macOS e GNU/Linux</blockquote><p></p><p>É o app mais simples e minimalista possível, sem anúncios, com código aberto e até já vem embutido em certos navegadores, como o Brave, o que dispensa qualquer instalação ou preocupação. É um aplicativo focado em usuários comuns e possui uma abordagem radicalmente minimalista: basta arrastar e soltar um torrent dentro da janela do app e pronto. Já está baixando. E se isso for muito difícil, um CTRL + C e CTRL + V também já resolve. Não tem configurações avançadas, possibilidades mirabolantes e ajustes técnicos. É simples, vai direto ao ponto e faz o que tem que fazer. Por essa razão, é muito fácil de usar e é o mais recomendado para leigos.</p><p></p><hr><p><br></p><h3>Transmission, o descomplicado</h3><figure><img src="assets/images/artigos/apps-torrent/3817592cef0cff324996c.jpg" alt="Interface principal do Transmission 4.0.0 no Windows" loading="lazy"><figcaption>Interface principal do Transmission 4.0.0 no Windows</figcaption></figure><blockquote>🟢 É gratuito
🟢 Tem código aberto
🟢 Não possui anúncios 
🌐 Disponível <a href="https://transmissionbt.com/download" target="_blank" rel="noopener noreferrer">aqui</a> para Windows, macOS e GNU/Linux</blockquote><p></p><p>Transmission é um aplicativo modesto e, como eles próprios afirmam, rápido e descomplicado. Possui uma interface simples e com algumas possibilidades de ajustes. Mesmo longe de ser um cliente bittorrent poderoso, é competente para usuários comuns. A interface foi pensada especialmente para cada sistema operacional compatível, a fim de proporcionar a melhor experiência possível. Tanto que é o cliente bittorrent padrão de vários sistemas operacionais.</p><p></p><hr><p><br></p><h3>LibreTorrent, na palma da mão</h3><figure><img src="assets/images/artigos/apps-torrent/8c3911a614455de0a3b8d.jpg" alt="Capturas de tela do LibreTorrent 3.4 no Android 12" loading="lazy"><figcaption>Capturas de tela do LibreTorrent 3.4 no Android 12</figcaption></figure><blockquote>🟢 É gratuito
🟢 Tem código aberto 
🟢 Não possui anúncios 
🌐 Disponível <a href="https://play.google.com/store/apps/details?id=org.proninyaroslav.libretorrent" target="_blank" rel="noopener noreferrer">aqui</a> para Android</blockquote><p></p><p>Aqui está um belo aplicativo para baixar torrents no seu Android. Com a interface em português, baseada no Material Design e com um bom conjunto de configurações, o LibreTorrent se mantém com código aberto e sem anúncios.</p><p></p><hr><p><br></p><h3>qBittorrent, o melhor</h3><figure><img src="assets/images/artigos/apps-torrent/cf494567e9edd74e633ed.jpg" alt="Interface principal do qBittorrent no Windows" loading="lazy"><figcaption>Interface principal do qBittorrent no Windows</figcaption></figure><blockquote>🟢 É gratuito
🟢 Tem código aberto 
🟢 Não possuí anúncios
🌐 Disponível <a href="https://www.qbittorrent.org/download.php" target="_blank" rel="noopener noreferrer">aqui</a> para Windows, macOS, GNU/Linux, e FreeBSD</blockquote><p></p><p>Aqui temos a melhor recomendação da nossa lista: um dos aplicativos mais poderosos do mercado, que começou sua história em 2006. O visual aqui não tem nenhum segredo e já é familiar porque é muito parecido com o uTorrent. Como todo bom aplicativo de código aberto, o qBittorrent é gratuito, seguro e sem anúncios. E diferentemente do uTorrent, BitTorrent e BitComet, não tenta ludibriar o usuário para instalar penduricalhos. </p><p>O qBittorrent vai direto ao ponto na instalação e é incrivelmente poderoso na hora de usar. E se tudo que ele oferece não for suficiente, ainda possui suporte a plugins que acrescentam ainda mais possibilidades. </p><p></p><hr><p><br></p><h3>CONCLUSÃO</h3><ul><li><li>Melhor aplicativo para usuários experientes: qBitTorrent</li></li><li><li>Melhor aplicativo para usuários comuns que só querem baixar algum arquivo específico de vez em quando: Web Torrent ou Transmission</li></li><li><li>Melhor aplicativo para baixar torrent no Android: LibreTorrent</li></li></ul><p></p><hr><p></p><h4>Outros artigos que podem te interessar</h4><p><a href="/Telegram-caiu-foi-banido-ou-bloqueado-Fure-a-censura-sem-precisar-instalar-nada-a-menos-que-voc%C3%AA-queira-01-20" target="_blank" rel="noopener noreferrer">Telegram caiu, foi banido ou bloqueado? Fure a censura sem precisar instalar nada (a menos que você queira)</a></p><p><a href="/Telegram-ou-Telegrams-07-11" target="_blank" rel="noopener noreferrer">Clientes do Telegram: o que são, onde vivem, do quê se alimentam?</a></p><p><a href="/Relembre-a-hist%C3%B3ria-do-WhatsApp-03-27" target="_blank" rel="noopener noreferrer">Linha do tempo: relembre a história (não contada) do WhatsApp</a></p><p><a href="/Principais-obras-e-autores-de-cada-estado-do-Brasil-05-20" target="_blank" rel="noopener noreferrer">Roteiro de leitura: literatura nacional</a></p><p></p><hr><p><br></p><p>Atualizado em 27/12/2022. Este artigo está sendo elaborado e expandido aos poucos. Para informar algum erro ou enviar sugestões, entre no canal <a href="https://t.me/blumenaunews" target="_blank" rel="noopener noreferrer">Blumenau News</a> e comente no post fixado.</p><p><br></p>`,
  "historia-whatsapp": `<figure><img src="assets/images/artigos/historia-whatsapp/f9a3b1fb6ce076f059cfa.jpg" alt="Imagem" loading="lazy"></figure><p>Desde sempre o WhatsApp teve uma história interessante. Se você não conhece, veja os melhores momentos abaixo.</p><h4>2009</h4><p>🎉 WhatsApp é lançado por Jan Koum e Brian Acton. 🎉</p><h4>2012</h4><p>Até 2012 as mensagens trocadas pelo aplicativo NÃO recebiam qualquer tipo de criptografia. <a href="https://web.archive.org/web/20150108072201/http://fileperms.org/whatsapp-is-broken-really-broken.html" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><h4>2013</h4><p>Um jogo foi removido da Play Store porque coletava o histórico de mensagens do WhatsApp. <a href="https://www.techtudo.com.br/noticias/noticia/2013/12/jogo-para-android-esta-roubando-historico-de-conversas-no-whatsapp.html" target="_blank" rel="noopener noreferrer">Veja aqui</a>. </p><h4>2014</h4><p>Uma falha permite travar o aplicativo com 1 única mensagem. <a href="https://www.techtudo.com.br/noticias/noticia/2014/12/whatsapp-tem-falha-que-trava-app-com-uma-unica-mensagem-saiba-fugir.amp" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><figure><img src="assets/images/artigos/historia-whatsapp/88a18f0eef01e2a3a0f52.jpg" alt="Imagem" loading="lazy"></figure><p>Facebook compra o WhatsApp por US$22 bilhões. <a href="http://g1.globo.com/economia/negocios/noticia/2014/10/preco-de-compra-do-whatsapp-pelo-facebook-sobe-us-22-bilhoes.html" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><h4>2015</h4><p>Vaza uma forma de hackear o WhatsApp apenas enviando um contato. <a href="https://www.bbc.com/news/technology-34192117" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p>Bélgica leva o Facebook a tribunal por violações de privacidade. <a href="https://www.theguardian.com/technology/2015/jun/15/belgium-facebook-court-privacy-breaches-ads" target="_blank" rel="noopener noreferrer">Veja aqui</a>. </p><h4>2016</h4><p>Criptografia de ponta a ponta é definitiva e completamente implementada, mas toda bugada... <a href="http://www.h-online.com/security/news/item/Sniffer-tool-displays-other-people-s-WhatsApp-messages-1574382.html" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p>Facebook trabalha em ferramenta de censura para tentar operar no mercado Chinês. <a href="https://www.nytimes.com/2016/11/22/technology/facebook-censorship-tool-china.html?_r=0" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p>União Europeia pede que WhatsApp pare de enviar informações pessoais de seus usuários para os serviços do Facebook. <a href="https://www.theguardian.com/technology/2016/oct/28/whatsapp-pause-sharing-user-data-facebook-european-privacy-regulators-yahoo" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p>Alemanha ordena que o Facebook pare de coletar dados do usuário do WhatsApp. <a href="https://www.theguardian.com/technology/2016/sep/27/germany-orders-facebook-stop-collecting-whatsapp-phone-numbers-user-data" target="_blank" rel="noopener noreferrer">Veja aqui</a>. </p><h4>2017</h4><p>Vaza uma forma de hackear o WhatsApp com apenas 1 foto. <a href="https://www.forbes.com/sites/thomasbrewster/2017/03/15/whatsapp-telegram-hacked-with-single-image-check-point-research/#41fd78a23be2" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p>Criptografia de ponta a ponta do whatsApp não funciona como deveria e tem falha que permite recebimento e leitura de mensagens por terceiros. <a href="https://www.theguardian.com/technology/2017/jan/13/whatsapp-design-feature-encrypted-messages" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p>Facebook oficialmente pode até não entregar seus dados do WhatsApp para autoridades, mas os metadados ele entrega fácil, fácil e não nega. <a href="https://www.forbes.com/sites/thomasbrewster/2017/01/22/whatsapp-facebook-backdoor-government-data-request/#5951a9ce1030" target="_blank" rel="noopener noreferrer">Veja aqui</a> e <a href="https://iphone.appleinsider.com/articles/17/01/13/whatsapp-backdoor-defeats-end-to-end-encryption-potentially-allows-facebook-to-read-messages" target="_blank" rel="noopener noreferrer">aqui também</a>.</p><p>Brian Acton, co-fundador do WhatsApp deixa o Facebook. <a href="https://www.vox.com/2017/9/12/16298092/whatsapp-founder-brian-acton-leaving-facebook-foundation" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p>Facebook é multado pela França por violações de privacidade. <a href="https://www.theguardian.com/technology/2017/may/16/facebook-facing-privacy-actions-across-europe-as-france-fines-firm-150k" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><h4>2018</h4><p>Brian Acton, co-fundador do WhatsApp, desabafa que "vendeu a privacidade dos usuários" e faz campanha <a href="#deleteFacebook" target="_blank" rel="noopener noreferrer">#deleteFacebook</a>. <a href="https://www.cnet.com/news/whatsapp-cofounder-i-sold-my-users-privacy-with-facebook-acquisition/" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><figure><img src="assets/images/artigos/historia-whatsapp/21b85da9823605b6e29ef.jpg" alt="Imagem" loading="lazy"></figure><p>Jan Koum, o outro co-fundador do WhatsApp, também deixa o Facebook, após divergência sobre a privacidade dos usuários e criptografia do app. <a href="https://www.theverge.com/2018/4/30/17304792/whatsapp-jan-koum-facebook-data-privacy-encryption" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><h4>2019</h4><p><em>Maio</em></p><p>Vaza forma de hackear WhatsApp apenas com uma chamada de áudio (e a vítima nem precisa atender para ser hackeada). <a href="https://noticias.uol.com.br/tecnologia/noticias/redacao/2019/05/14/falha-de-seguranca-no-whatsapp-e-gravissima-dizem-especialistas.htm" target="_blank" rel="noopener noreferrer">Veja aqui</a>. <a href="https://olhardigital.com.br/fique_seguro/noticia/whatsapp-foi-usado-para-espionar-jornalistas-e-ativistas-indianos/92355" target="_blank" rel="noopener noreferrer">Aqui também</a>. <a href="https://olhardigital.com.br/fique_seguro/noticia/entenda-tudo-sobre-a-grave-brecha-no-whatsapp-e-saiba-se-proteger/85776" target="_blank" rel="noopener noreferrer">Aqui também</a>.</p><p><em>Junho</em></p><p>Vaza forma de hackear WhatsApp apenas com 1 chamada de vídeo. Veja <a href="/Falha-no-WhatsApp-permitiu-invas%C3%A3o-de-hackers-a-contas-por-chamada-de-v%C3%ADdeo-diz-m%C3%ADdia-06-12" target="_blank" rel="noopener noreferrer">aqui</a>.</p><p><em>Agosto</em></p><p>Mensagens podem ser lidas e até alteradas por hackers. <a href="https://olhardigital.com.br/video/novas-falhas-de-seguranca-no-whatsapp/89127" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p><em>Outubro</em></p><p>Vaza forma de hackear WhatsApp apenas com 1 gif. <a href="https://tecnoblog.net/309879/vulnerabilidade-whatsapp-android-gif/" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p><em>Novembro</em></p><p>Vaza forma de hackear WhatsApp apenas com 1 vídeo. <a href="https://olhardigital.com.br/noticia/falha-no-whatsapp-permite-invasao-do-celular-com-videos-mp4/93090" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p><em>Dezembro</em></p><p>Falha pode inutilizar o app de todos os participantes de um grupo e torná-lo inacessível para sempre. <a href="https://olhardigital.com.br/fique_seguro/noticia/novo-bug-pode-travar-whatsapp-e-destruir-grupos-de-conversa/94467" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><h4>2020</h4><p><em>Fevereiro</em></p><p>Vaza forma de hackear o WhatsApp apenas com um link. <a href="https://tecnoblog.net/323843/whatsapp-desktop-falha-permite-acessar-arquivos-windows-macos/" target="_blank" rel="noopener noreferrer">Veja aqui</a>, <a href="https://www.perimeterx.com/tech-blog/2020/whatsapp-fs-read-vuln-disclosure/" target="_blank" rel="noopener noreferrer">aqui também</a> e <a href="https://www.metrojornal.com.br/estilo-vida/2020/02/20/atualizacao-recente-whatsapp-corrige-grave-vulnerabilidade-de-seguranca.html" target="_blank" rel="noopener noreferrer">aqui também</a>.</p><h4>2022</h4><p><em>Outubro</em></p><p>Vaza forma de obter acesso a todos os dados do dispositivo usando apenas uma chamada via WhatsApp ou um vídeo enviado pelo WhatsApp. Veja <a href="https://thehackernews.com/2022/09/critical-whatsapp-bugs-could-have-let.html?m=1" target="_blank" rel="noopener noreferrer">aqui</a> a notícia em inglês e <a href="https://www.whatsapp.com/security/advisories/2022/" target="_blank" rel="noopener noreferrer">aqui</a> o anúncio do próprio WhatsApp.</p><h4>2024</h4><p><em>Setembro</em></p><p>Bug no WhatsApp permite capturar a tela de mensagens de visualização única. <a href="https://macmagazine.com.br/post/2024/09/10/bug-no-whatsapp-permite-capturar-a-tela-de-mensagens-de-visualizacao-unica/" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><h4>2025</h4><p><em>Janeiro</em></p><p>Bug no WhatsApp permite burlar recurso de visualização única no iOS. <a href="https://macmagazine.com.br/post/2025/01/15/bug-no-whatsapp-permite-burlar-recurso-de-visualizacao-unica-no-ios/" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p><em>Abril</em></p><p>Bug no WhatsApp para Windows permite a execução de código arbitrário ao invés de apenas abrir o anexo. <a href="https://www.tecmundo.com.br/seguranca/403859-atualize-ja-falha-no-whatsapp-para-windows-facilita-o-envio-de-anexos-maliciosos.htm" target="_blank" rel="noopener noreferrer">Veja aqui.</a></p><p><em>Agosto</em></p><p>Bug no WhatsApp no iOS e no macOS permite roubar dados do dispositivo sem qualquer interação do usuário, bastando receber uma imagem infectada. Bug foi explorado desde, pelo menos, o mês de maio. <a href="https://pplware.sapo.pt/apple/hora-de-atualizar-o-iphone-e-o-mac-falha-perigosa-no-whatsapp-foi-explorada/" target="_blank" rel="noopener noreferrer">Veja aqui</a>.</p><p></p><h4>Conclusão</h4><p>Como pode-se perceber, falhas, vulnerabilidades e uma proposital despreocupação com a privacidade do usuário fazem parte da história do WhatsApp. E, para fechar com chave de ouro, mesmo se ele não tivesse falhas, o fato de ser dependente de apps terceiros o torna mais vulnerável. Por exemplo:</p><p>1. Para criar e adicionar figurinhas ao WhatsApp é necessário usar um app de terceiros, que pode comprometer o WhatsApp e o celular inteiro;</p><p>2. Para usar serviços de proxy e/ou VPN para contornar um eventual bloqueio no país é necessário usar um app de terceiros porque o próprio WhatsApp não tem essa função, o que pode comprometer o WhatsApp e o celular inteiro;</p><p>3. Para não perder suas conversas é necessário fazer o backup na nuvem de terceiros.</p>`,
  "vagas-blumenau": `<figure><img src="assets/images/artigos/vagas-blumenau/fcc857feee1c48e9ce760.jpg" alt="Imagem" loading="lazy"></figure><p>Esta é a lista de vagas mantida pelo grupo <a href="http://t.me/vilagermanica" target="_blank" rel="noopener noreferrer">@vilagermanica</a>, no Telegram! As melhores empresas, contatos e agências da cidade estão aqui. Vagas pontuais ou temporárias são enviadas diretamente no grupo. </p><blockquote>Seguindo essa lista é praticamente IMPOSSÍVEL não conseguir um emprego. Boa sorte!</blockquote><h3><a href="https://www.rhgenial.com.br/vaga?area=&regiao=1&nome=" target="_blank" rel="noopener noreferrer">RH Genial</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/1f16d8aab1ba412e0653e.jpg" alt="Imagem" loading="lazy"></figure><p>O propósito da <a href="https://www.rhgenial.com.br/vaga?area=&regiao=1&nome=" target="_blank" rel="noopener noreferrer">RH Genial</a> é auxiliar talentos e empresas de Blumenau e região a se conectarem através do recrutamento digital. É meu site favorito para vagas e você pode acompanhar pelo <a href="https://www.linkedin.com/company/rh-genial/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/rhgenial/" target="_blank" rel="noopener noreferrer">Facebook</a> e <a href="https://www.instagram.com/rhgenial/" target="_blank" rel="noopener noreferrer">Instagram</a>. É quase uma agência de empregos, mas não é. Para mim, é muito melhor.</p><blockquote>É de Blumenau? Sim.
Acesse: <a href="https://www.rhgenial.com.br/vaga?area=&regiao=1&nome=" target="_blank" rel="noopener noreferrer">Portal de vagas</a>, <a href="https://www.linkedin.com/company/rh-genial/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/rhgenial/" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/rhgenial/" target="_blank" rel="noopener noreferrer">Instagram</a> </blockquote><p><br></p><h3><a href="https://gruposelecionar.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">Selecionar Talentos</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/866a6a645b3df59e866b6.png" alt="Imagem" loading="lazy"></figure><p>A <a href="https://gruposelecionar.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">Selecionar Talentos</a> têm parcerias com grandes empresas da cidade, como Serasa e Viacredi e uma estrutura bem bacana. Você pode acompanhar no <a href="https://www.facebook.com/selecionartalentos" target="_blank" rel="noopener noreferrer">Facebook</a> e <a href="https://www.instagram.com/gruposelecionar/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p><blockquote>É de Blumenau? Sim.
Acesse: <a href="https://gruposelecionar.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">Portal de vagas</a>, <a href="https://www.linkedin.com/company/grupo-selecionar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.instagram.com/gruposelecionar/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.facebook.com/selecionartalentos" target="_blank" rel="noopener noreferrer">Facebook</a> </blockquote><p><br></p><h3><a href="http://recrutarrh.com.br/vagas.php?seq=&cidade=BLUMENAU&categoria=&funcao=" target="_blank" rel="noopener noreferrer">Recrutar RH</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/2b5950b3065490fc46dcf.png" alt="Imagem" loading="lazy"></figure><p>Não tive uma boa experiência com a <a href="http://recrutarrh.com.br/vagas.php?seq=&cidade=BLUMENAU&categoria=&funcao=" target="_blank" rel="noopener noreferrer">Recrutar RH</a>, mas sempre há muitas vagas abertas. Disseram que as empresas que anunciam com eles chamam apenas candidatos que já tem pelo menos 1 ano de carteira assinada na cidade. Se você veio de fora há pouco tempo nem adianta tentar... Eles estão no <a href="http://instagram.com/Recrutar_rh" target="_blank" rel="noopener noreferrer">Instagram</a>, no <a href="https://twitter.com/RhRecrutar" target="_blank" rel="noopener noreferrer">Twitter</a> (que não é atualizado desde 2016, mas o perfil é oficial...) e no <a href="http://br.linkedin.com/pub/recrutar-recursos-humanos/33/915/6a5" target="_blank" rel="noopener noreferrer">LinkedIn</a> (o link é inválido, mas está certo, é oficial...). </p><blockquote>É de Blumenau? Sim.
Acesse: <a href="http://recrutarrh.com.br/vagas.php?seq=&cidade=BLUMENAU&categoria=&funcao=" target="_blank" rel="noopener noreferrer">Portal de vagas</a>, <a href="https://twitter.com/RhRecrutar" target="_blank" rel="noopener noreferrer">Twitter</a> (é oficial mas não é atualizado desde 2016), <a href="http://instagram.com/Recrutar_rh" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://br.linkedin.com/pub/recrutar-recursos-humanos/33/915/6a5" target="_blank" rel="noopener noreferrer">LinkedIn</a> (o link é oficial mas não funciona)</blockquote><p><br></p><h3><a href="https://dprhempregos.tweezer.jobs/candidato/vaga/buscar_vaga/" target="_blank" rel="noopener noreferrer">DPRH</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/75393e45ebc7b57400b0f.png" alt="Imagem" loading="lazy"></figure><p>A <a href="https://dprhempregos.tweezer.jobs/candidato/vaga/buscar_vaga/" target="_blank" rel="noopener noreferrer">DPRH</a> é uma agência bem forte também, há várias vagas e eles também têm parcerias grandes, como Oktoberfest. Tem presença no <a href="https://www.facebook.com/DPRHempregos" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.linkedin.com/company/dprh-empregos/" target="_blank" rel="noopener noreferrer">LinkedIn</a> e <a href="https://www.instagram.com/dprhempregos/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p><blockquote>É de Blumenau? Sim.
Acesse: <a href="https://dprhempregos.tweezer.jobs/candidato/vaga/buscar_vaga/" target="_blank" rel="noopener noreferrer">Portal de vagas</a>, <a href="https://www.linkedin.com/company/dprh-empregos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/DPRHempregos" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/dprhempregos/" target="_blank" rel="noopener noreferrer">Instagram</a> </blockquote><p><br></p><h3><a href="http://www.degraudosucesso.com.br/busca-avancada.php?cidade=Blumenau&funcao=" target="_blank" rel="noopener noreferrer">Degrau do Sucesso</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/33ff50195d13836cd23ad.png" alt="Imagem" loading="lazy"></figure><p>A <a href="http://www.degraudosucesso.com.br/busca-avancada.php?cidade=Blumenau&funcao=" target="_blank" rel="noopener noreferrer">Degrau do Sucesso</a> tem várias vagas e parece ser uma boa agência. O site é fraco, mas pessoalmente dizem que é melhor. Então é melhor ir pessoalmente até lá para ter alguma chance. Tem perfil ativo no <a href="https://www.facebook.com/degraudosucesso/" target="_blank" rel="noopener noreferrer">Facebook</a> e no <a href="https://www.instagram.com/degrauempregos/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p><blockquote>É de Blumenau? Sim.
Acesse: <a href="http://www.degraudosucesso.com.br/busca-avancada.php?cidade=Blumenau&funcao=" target="_blank" rel="noopener noreferrer">Portal de vagas</a>, <a href="https://www.facebook.com/degraudosucesso/" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/degrauempregos/" target="_blank" rel="noopener noreferrer">Instagram</a> </blockquote><p><br></p><h3><a href="https://linktalentos.com.br/vagas/?buscar=&cidade=8138" target="_blank" rel="noopener noreferrer">Link</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/4168473c45487bfcd9933.png" alt="Imagem" loading="lazy"></figure><p>A <a href="https://linktalentos.com.br/vagas/?buscar=&cidade=8138" target="_blank" rel="noopener noreferrer">Link</a> é muito bem conceituada e bem avaliada pela comunidade. Parece ser especializada em oportunidades relacionadas a tecnologia e, talvez por isso, tem uma presença muito ampla nas redes sociais (a maior desta lista), podendo ser encontrada no <a href="https://www.periscope.tv/linktalentos" target="_blank" rel="noopener noreferrer">Periscope</a>, <a href="https://www.facebook.com/pages/Link-Talentos/106641139394311?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/linktalentos/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://www.linkedin.com/company/link-talentos" target="_blank" rel="noopener noreferrer">LinkedIn</a> e <a href="https://www.youtube.com/channel/UCUluAqk0kaw1qEhk-5seoDQ" target="_blank" rel="noopener noreferrer">Youtube</a>. </p><blockquote>É de Blumenau? Sim.
Acesse: <a href="https://linktalentos.com.br/vagas/?buscar=&cidade=8138" target="_blank" rel="noopener noreferrer">Portal de vagas</a>, <a href="https://www.periscope.tv/linktalentos" target="_blank" rel="noopener noreferrer">Periscope</a>, <a href="https://www.facebook.com/pages/Link-Talentos/106641139394311?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/linktalentos/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="http://www.linkedin.com/company/link-talentos" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.youtube.com/channel/UCUluAqk0kaw1qEhk-5seoDQ" target="_blank" rel="noopener noreferrer">Youtube</a></blockquote><h3><br></h3><h3><a href="https://vagas.keeptalent.com.br/vaga/lista/inicio" target="_blank" rel="noopener noreferrer">Keep Talent</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/317a22199a082358ecc32.jpg" alt="Imagem" loading="lazy"></figure><p>Desde 2008, com vagas para Blumenau e região, é uma agência sólida com boa reputação e bastante atividade no LinkedIn.</p><blockquote>É de Blumenau? Sim.
Acesse: <a href="https://vagas.keeptalent.com.br/vaga/lista/inicio" target="_blank" rel="noopener noreferrer">Portal de vagas</a>, <a href="https://www.instagram.com/keeptalent/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.linkedin.com/company/keeptalent" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://www.facebook.com/keeptalentrh" target="_blank" rel="noopener noreferrer">Facebook</a> </blockquote><p><br></p><h3><a href="https://www.vagas.com.br/vagas-de-Vagas-blumenau?ordenar_por=mais_recentes" target="_blank" rel="noopener noreferrer">Vagas</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/78107df6adb2b5952ac69.jpg" alt="Imagem" loading="lazy"></figure><p>O <a href="https://www.vagas.com.br/vagas-de-Vagas-blumenau?ordenar_por=mais_recentes" target="_blank" rel="noopener noreferrer">Vagas</a> não é blumenauense, mas um portal de vagas a nível nacional, portanto mais genérico. Mesmo assim, sempre tem alguma vaga para Blumenau. Tem até seu próprio aplicativo e, no blog, há vários artigos úteis que ajudam bastante na construção de um currículo ou postura em entrevistas.</p><blockquote>É de Blumenau? Não.
Acesse: <a href="https://www.vagas.com.br/vagas-de-Vagas-blumenau?ordenar_por=mais_recentes" target="_blank" rel="noopener noreferrer">Portal de vagas</a></blockquote><p><br></p><h3><a href="https://www.trabalhabrasil.com.br/vagas-empregos-em-blumenau-sc" target="_blank" rel="noopener noreferrer">Trabalha Brasil</a></h3><figure><img src="assets/images/artigos/vagas-blumenau/78e4b1804ce9d50268f77.png" alt="Imagem" loading="lazy"></figure><p><a href="https://www.trabalhabrasil.com.br/vagas-empregos-em-blumenau-sc" target="_blank" rel="noopener noreferrer">Trabalha Brasil</a> também não é especializado em vagas para Blumenau, mas um portal de vagas a nível nacional. Ele também pega vagas que foram criadas em outros portais e não tem nenhum tipo de curadoria sobre as vagas postadas nele. Qualquer um pode criar uma conta na plataforma e divulgar a vaga que bem entender. Por isso é bom prestar atenção porque há vagas enganosas. Tenha sempre muita atenção para não cair em golpes.</p><blockquote>É de Blumenau? Não.
Acesse: <a href="https://www.trabalhabrasil.com.br/vagas-empregos-em-blumenau-sc" target="_blank" rel="noopener noreferrer">Portal de vagas</a></blockquote><p><br></p><h3><a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">Emprega Brasil</a> (Ministério do Trabalho)</h3><figure><img src="assets/images/artigos/vagas-blumenau/e842cd26081dc2fd448bc.png" alt="Imagem" loading="lazy"></figure><p>O <a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">Emprega Brasil</a> é o portal oficial do Ministério do Trabalho do Governo Federal, com vagas para todo o país. Na busca, é possível filtrar por cidade e há muitas vagas para Blumenau em diversas áreas.</p><blockquote>É de Blumenau? Não.
Acesse: <a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">Portal de vagas</a></blockquote><p><br></p><h3><a href="https://www.crescemosjuntos.com.br/#Vagas" target="_blank" rel="noopener noreferrer">Sistema S</a> (FIESC, CIESC, SESI, SENAI, IEL)</h3><figure><img src="assets/images/artigos/vagas-blumenau/76aa178f76e657ca3a6f4.png" alt="Imagem" loading="lazy"></figure><p>Também espalhadas pelo país, as unidades do <a href="https://www.crescemosjuntos.com.br/#Vagas" target="_blank" rel="noopener noreferrer">Sistema S</a> possuem várias vagas para a cidade de Blumenau, sendo elas no Sesi e no Senai. Vale a pena conferir.</p><blockquote>É de Blumenau? Não.
Acesse: <a href="https://www.crescemosjuntos.com.br/#Vagas" target="_blank" rel="noopener noreferrer">Portal de vagas</a></blockquote><p><br></p><h3>Empresas que podem te interessar</h3><p>Além das agências, que facilitam a vida agregando várias oportunidades em um único lugar, você pode entrar em contato diretamente com as empresas que têm seu próprio canal de vagas. </p><p><br></p><p><a href="https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=cecred&tenantdomain=cecred.coop.br#!/vacancies/list?hq=19932CB6AAE647EDB621AD2B576DB697" target="_blank" rel="noopener noreferrer">Ailos</a></p><p><a href="https://altenburgtextilltda.pandape.com.br/" target="_blank" rel="noopener noreferrer">Altenburg</a></p><p><a href="http://www.altona.com.br/web/trabalhe-com-a-altona/vagas" target="_blank" rel="noopener noreferrer">Altona</a></p><p><a href="https://www.arber.com.br/trabalhe_conosco" target="_blank" rel="noopener noreferrer">Arber Parafusos</a></p><p><a href="https://www.bludata.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Bludata</a></p><p><a href="https://www.blukit.com.br/trabalhe" target="_blank" rel="noopener noreferrer">Blukit</a></p><p><a href="http://blutextil.natela.com.br/pt_br/rh.cadastro.php" target="_blank" rel="noopener noreferrer">Blutextil</a></p><p><a href="https://www.bluware.com.br/site2/trabalhe-conosco.php" target="_blank" rel="noopener noreferrer">Bluware Sistemas</a></p><p><a href="https://www.grupoboticario.com.br/vagas/" target="_blank" rel="noopener noreferrer">Boticário</a> </p><p><a href="https://jobs.bunge.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">Bunge</a></p><p><a href="https://www.cicblumenau.com.br/trabalhe-conosco" target="_blank" rel="noopener noreferrer">CIC Blumenau</a></p><p><a href="https://www.cooper.coop.br/contato/trabalhe-com-a-gente" target="_blank" rel="noopener noreferrer">Cooper</a></p><p><a href="https://www.coteminas.com.br/scripts11/cgiip.exe/WService=coteminas/cot/vis/cadcurlog.htm" target="_blank" rel="noopener noreferrer">Coteminas</a></p><p><a href="https://portalrh.cremer.com.br/curriculoweb/conector?ACAO=ANUNCIOS&STATUS=LISTAR&SIS=RS&ORIGEM=AP&PERFILPADRAO=1&IDIOMA=0&PERFILLOGIN=1" target="_blank" rel="noopener noreferrer">Cremer</a></p><p><a href="http://gpssa.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Grupo GPS (e outras empresas)</a></p><p><a href="http://grupohennings.gupy.io/" target="_blank" rel="noopener noreferrer">Grupo Hennings</a> </p><p><a href="https://grupokhronos.enlizt.me/" target="_blank" rel="noopener noreferrer">Grupo Khronos</a></p><p><a href="https://gruposegura.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Grupo Segura</a></p><p><a href="http://hemmer.natela.com.br/" target="_blank" rel="noopener noreferrer">Hemmer</a></p><p><a href="https://hob.med.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Hospital de Olhos de Blumenau</a></p><p><a href="https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=hsc&tenantdomain=hsc.com.br#!/vacancies/list" target="_blank" rel="noopener noreferrer">Hospital Santa Catarina</a></p><p><a href="http://www.santaisabel.com.br/vagas" target="_blank" rel="noopener noreferrer">Hospital Santa Isabel</a></p><p><a href="https://www.ipelpapel.com.br/faca-parte" target="_blank" rel="noopener noreferrer">IPEL - Indaial Papel</a></p><p><a href="https://jobs.kenoby.com/jamef/" target="_blank" rel="noopener noreferrer">Jamef Encomendas Urgentes</a></p><p><a href="https://karsten.gupy.io/" target="_blank" rel="noopener noreferrer">Karsten</a></p><p><a href="https://grupokyly.compleo.com.br/" target="_blank" rel="noopener noreferrer">Kyly</a></p><p><a href="http://lancaster.natela.com.br/pt_br/rh.cadastro.php" target="_blank" rel="noopener noreferrer">Lancaster</a> </p><p><a href="http://www.cristina.com.br/br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Malharia Cristina</a></p><p><a href="https://marisa.gupy.io/" target="_blank" rel="noopener noreferrer">Marisa</a></p><p><a href="http://www.marp.com.br/trabalheConosco.php" target="_blank" rel="noopener noreferrer">MARP Indústria Têxtil</a></p><p><a href="https://pamplonailuminacao.pandape.com.br/" target="_blank" rel="noopener noreferrer">Pamplona Iluminação</a></p><p><a href="https://www.plazahoteis.com.br/pt-br/fale-conosco/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Plaza Hoteis (Blumenau)</a></p><p><a href="https://www.protecbrasil.com/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Protec Brasil</a></p><p><a href="http://www.provolt.com.br/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Provolt Tecnologia Eletrônica</a></p><p><a href="https://sci.com.br/envie-seu-curriculo/?fbclid=PAAabn9PKz4jSdmFIye9dByXbezI3cCugN0ZSWFhVZ336XAbACPnH9njKC0UY" target="_blank" rel="noopener noreferrer">SCI Sistemas Contábeis</a></p><p><a href="https://segalas.com.br/trabalhe.php" target="_blank" rel="noopener noreferrer">Segala's Alimentos</a></p><p><a href="https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=senior&tenantdomain=senior.com.br&fromRecruitment=false#!/vacancies/list" target="_blank" rel="noopener noreferrer">Senior Sistemas</a></p><p><a href="http://www.redetop.com.br/vagas/" target="_blank" rel="noopener noreferrer">Supermercados Rede TOP</a></p><p><a href="http://www.teka.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer">Teka</a></p><p><a href="https://portal.uniasselvi.com.br/institucional/trabalhe-conosco" target="_blank" rel="noopener noreferrer">Uniasselvi</a></p><p><a href="http://weg.net/institutional/BR/pt/career" target="_blank" rel="noopener noreferrer">Weg</a></p><p><a href="https://jobs.quickin.io/wksistemas/jobs" target="_blank" rel="noopener noreferrer">WK Sistemas</a></p><p><br></p><h3>Empresas que recebem currículo por e-mail</h3><p>Altona: <a href="mailto:recrutamento@altona.com.br" target="_blank" rel="noopener noreferrer">recrutamento@altona.com.br</a></p><p>Atacarejo Unibox Dinardelli: <a href="mailto:rhav@dinardelli.com.br" target="_blank" rel="noopener noreferrer">rhav@dinardelli.com.br</a></p><p>Avalon Têxtil: <a href="mailto:rh@avalontextil.com.br" target="_blank" rel="noopener noreferrer">rh@avalontextil.com.br</a></p><p>Blumob: <a href="mailto:rh@blumob.com.br" target="_blank" rel="noopener noreferrer">rh@blumob.com.br</a></p><p>Eurofios: <a href="mailto:selecao@eurofios.com.br" target="_blank" rel="noopener noreferrer">selecao@eurofios.com.br</a></p><p>Haco: <a href="mailto:rubia.cristovao@haco.com.br" target="_blank" rel="noopener noreferrer">rubia.cristovao@haco.com.br</a></p><p>Hidropar dedetização: <a href="mailto:contato@hidropar.com.br" target="_blank" rel="noopener noreferrer">contato@hidropar.com.br</a></p><p>Hospital Santa Isabel: <a href="mailto:recrutamento02@santaisabel.com.br" target="_blank" rel="noopener noreferrer">recrutamento02@santaisabel.com.br</a></p><p>Lupo (Shopping Neumarkt): <a href="mailto:gerente.luponeumarkt@hotmail.com" target="_blank" rel="noopener noreferrer">gerente.luponeumarkt@hotmail.com</a></p><p>Milium: <a href="mailto:recrutamento@milium.com.br" target="_blank" rel="noopener noreferrer">recrutamento@milium.com.br</a></p><p>Orbi Química: <a href="mailto:rh@orbiquimica.com.br" target="_blank" rel="noopener noreferrer">rh@orbiquimica.com.br</a></p><p>Segala's Alimentos: <a href="mailto:rh@segalas.com.br" target="_blank" rel="noopener noreferrer">rh@segalas.com.br</a> e <a href="mailto:marta.maba@segalas.com.br" target="_blank" rel="noopener noreferrer">marta.maba@segalas.com.br</a></p><p>Supermercados RedeTop: <a href="mailto:recrutamento@redetop.com.br" target="_blank" rel="noopener noreferrer">recrutamento@redetop.com.br</a></p><p>Têxtil HJHering: <a href="mailto:rh@hjhering.com.br" target="_blank" rel="noopener noreferrer">rh@hjhering.com.br</a></p><p><br></p><p>═══════════════✎═</p><blockquote>É fortemente recomendável manter um perfil atualizado no <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Se não souber usar e precisa de emprego, é uma boa hora para aprender. Se você conseguir uma degustação gratuita do LinkedIn Premium pode até fazer inúmeros cursos de altíssima qualidade do LinkedIn Learning sem pagar 1 centavo.</blockquote><p><br></p><p>═══════════════✎═</p><blockquote>Se você quer anunciar alguma oportunidade pode enviar diretamente no grupo <a href="https://t.me/vilagermanica" target="_blank" rel="noopener noreferrer">Vila Germânica</a>. Se gostaria de ver seu anúncio aqui ou em uma mensagem fixada então use <a href="https://t.me/vilagermanicabot" target="_blank" rel="noopener noreferrer">@vilagermanicabot</a> ou fale com algum dos administradores. Para informar algum erro ou enviar sugestões e comentários, use <a href="https://t.me/vilagermanicabot" target="_blank" rel="noopener noreferrer">@vilagermanicabot</a>.</blockquote><p><br></p><p>Última atualização: 03/09/2022, às 19h01 GMT-3</p><p><br></p>`
};

class ArticleCarouselManager {
  constructor() {
    this.container = null;
    this.track = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.dotsContainer = null;
    this.currentIndex = 0;

    // Reader Modal Elements
    this.modalEl = null;
    this.modalContainer = null;
    this.modalTitle = null;
    this.modalBadge = null;
    this.modalMeta = null;
    this.modalBody = null;
    this.modalCloseBtn = null;
    this.originCard = null;
    this.triggerElement = null;
    this.isAnimating = false;
    this.activeArticleId = null;
    this.boundTrapFocus = this.trapFocus.bind(this);
  }

  init() {
    this.container = document.getElementById('articles-carousel-container');
    if (!this.container) return;

    this.track = document.getElementById('articles-carousel-track');
    this.prevBtn = document.getElementById('carousel-prev-btn');
    this.nextBtn = document.getElementById('carousel-next-btn');
    this.dotsContainer = document.getElementById('carousel-dots');

    // Reader Modal
    this.modalEl = document.getElementById('article-modal');
    if (this.modalEl) {
      this.modalContainer = this.modalEl.querySelector('.modal-container');
      this.modalTitle = document.getElementById('modal-article-title');
      this.modalBadge = document.getElementById('modal-article-badge');
      this.modalMeta = document.getElementById('modal-article-meta');
      this.modalBody = document.getElementById('modal-article-body');
      this.modalCloseBtn = document.getElementById('modal-article-close-btn');

      if (this.modalCloseBtn) {
        this.modalCloseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          soundEngine.playClick();
          this.closeArticle();
        });
      }

      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl) {
          soundEngine.playClick();
          this.closeArticle();
        }
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modalEl.classList.contains('active')) {
          this.closeArticle();
        }
      });
    }

    this.renderArticles();

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        soundEngine.playClick();
        this.prev();
      });
      this.prevBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        soundEngine.playClick();
        this.next();
      });
      this.nextBtn.addEventListener('mouseenter', () => soundEngine.playHover());
    }

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        soundEngine.playClick();
        this.next();
      } else if (touchEndX - touchStartX > 50) {
        soundEngine.playClick();
        this.prev();
      }
    }, { passive: true });
  }

  localizeArticle(article) {
    const base = `articleContents.${article.id}`;
    return {
      title: i18n.t(`${base}.title`, null, article.title),
      category: i18n.t(`${base}.category`, null, article.category),
      summary: i18n.t(`${base}.summary`, null, article.summary),
      tags: i18n.t(`${base}.tags`, null, article.tags),
      date: i18n.t(`${base}.date`, null, article.date),
      body: i18n.t(`${base}.body`, null, ARTICLE_CONTENTS[article.id]),
    };
  }

  reapply() {
    this.renderArticles();
  }

  refreshOpenArticle() {
    if (this.activeArticleId && this.modalEl && this.modalEl.classList.contains('active')) {
      const article = ARTICLES_DATA.find((a) => a.id === this.activeArticleId);
      if (article) {
        const localized = this.localizeArticle(article);
        if (this.modalTitle) this.modalTitle.textContent = localized.title;
        if (this.modalBadge) this.modalBadge.textContent = localized.category;
        if (this.modalMeta) {
          this.modalMeta.innerHTML = `
            <span>${localized.date}</span>
            <span aria-hidden="true">•</span>
            <span>${article.readTime} ${i18n.t('articles.readTimeSuffix')}</span>
          `;
        }
        if (this.modalBody) {
          this.modalBody.innerHTML = localized.body || `<p>${localized.summary}</p>`;
        }
      }
    }
  }

  renderArticles() {
    if (!this.track) return;

    this.track.innerHTML = ARTICLES_DATA.map((article) => {
      const localized = this.localizeArticle(article);
      const readTimeSuffix = i18n.t('articles.readTimeSuffix');
      return `
      <article class="article-carousel-card shimmer-card" data-article-id="${article.id}">
        <div class="article-card-cover-wrapper">
          <img src="${article.coverImage}" alt="${localized.title}" class="article-card-cover" loading="lazy">
          <span class="article-card-category">${localized.category}</span>
        </div>

        <div class="article-card-content">
          <div class="article-card-meta">
            <span>${localized.date}</span>
            <span>•</span>
            <span>${article.readTime} ${readTimeSuffix}</span>
          </div>

          <h3 class="article-card-title">${localized.title}</h3>
          <p class="article-card-summary">${localized.summary}</p>

          <div class="article-card-tags">
            ${localized.tags.slice(0, 4).map((tag) => `<span class="card-tag">#${tag}</span>`).join('')}
          </div>

          <div class="article-card-actions">
            <button class="btn-card-details" data-action="read-article" data-id="${article.id}">
              <span>${i18n.t('articles.readArticle')}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
    }).join('');

    // Apply tilt and attach read click listener
    const cards = this.track.querySelectorAll('.article-carousel-card');
    cards.forEach(card => {
      applyTiltEffect(card);

      const readBtn = card.querySelector('[data-action="read-article"]');
      if (readBtn) {
        readBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = readBtn.getAttribute('data-id');
          this.openArticle(id, card);
        });
        readBtn.addEventListener('mouseenter', () => soundEngine.playHover());
      }
    });

    this.renderDots();
    this.updateCarousel();
  }

  renderDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = ARTICLES_DATA.map((_, index) => `
      <button class="carousel-dot ${index === this.currentIndex ? 'active' : ''}" data-index="${index}" aria-label="${i18n.t('articles.goToArticle', { n: index + 1 })}"></button>
    `).join('');

    const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        soundEngine.playClick();
        const index = parseInt(dot.getAttribute('data-index'), 10);
        this.goTo(index);
      });
    });
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = ARTICLES_DATA.length - 1;
    }
    this.updateCarousel();
  }

  next() {
    if (this.currentIndex < ARTICLES_DATA.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }

  goTo(index) {
    this.currentIndex = Math.max(0, Math.min(index, ARTICLES_DATA.length - 1));
    this.updateCarousel();
  }

  updateCarousel() {
    if (!this.track) return;
    const offset = this.currentIndex * 100;
    this.track.style.transform = `translateX(-${offset}%)`;

    if (this.dotsContainer) {
      const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === this.currentIndex);
      });
    }
  }

  trapFocus(e) {
    if (e.key !== 'Tab' || !this.modalEl.classList.contains('active')) return;

    const focusableElements = this.modalEl.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  openArticle(id, originCard = null) {
    if (this.isAnimating || !this.modalEl) return;

    const article = ARTICLES_DATA.find(a => a.id === id);
    if (!article) return;

    this.triggerElement = document.activeElement;
    this.originCard = originCard || document.querySelector(`[data-article-id="${id}"]`);

    soundEngine.playClick();
    setTiltEnabled(false);

    this.activeArticleId = id;
    const localized = this.localizeArticle(article);

    if (this.modalTitle) this.modalTitle.textContent = localized.title;
    if (this.modalBadge) this.modalBadge.textContent = localized.category;
    if (this.modalMeta) {
      this.modalMeta.innerHTML = `
        <span>${localized.date}</span>
        <span aria-hidden="true">•</span>
        <span>${article.readTime} ${i18n.t('articles.readTimeSuffix')}</span>
      `;
    }

    if (this.modalBody) {
      this.modalBody.innerHTML = localized.body || `<p>${localized.summary}</p>`;
    }

    this.modalEl.setAttribute('aria-hidden', 'false');
    window.addEventListener('keydown', this.boundTrapFocus);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!this.originCard || prefersReducedMotion) {
      this.modalEl.classList.add('active');
      this.modalEl.style.opacity = '1';
      this.modalContainer.style.transform = 'translate3d(0, 0, 0) scale(1, 1)';
      this.modalContainer.style.borderRadius = 'var(--radius-xl)';
      document.body.style.overflow = 'hidden';
      if (this.modalCloseBtn) this.modalCloseBtn.focus();
      return;
    }

    // FLIP Organic Expand
    this.isAnimating = true;
    const firstRect = this.originCard.getBoundingClientRect();

    this.modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.modalEl.style.transition = 'none';
    this.modalEl.style.opacity = '0';
    this.modalContainer.style.transition = 'none';
    this.modalContainer.style.transform = 'none';

    const lastRect = this.modalContainer.getBoundingClientRect();

    const scaleX = Math.max(firstRect.width / lastRect.width, 0.1);
    const scaleY = Math.max(firstRect.height / lastRect.height, 0.1);
    const deltaX = (firstRect.left + firstRect.width / 2) - (lastRect.left + lastRect.width / 2);
    const deltaY = (firstRect.top + firstRect.height / 2) - (lastRect.top + lastRect.height / 2);

    this.modalContainer.style.transformOrigin = 'center center';
    this.modalContainer.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0) scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)})`;
    this.modalContainer.style.borderRadius = 'var(--radius-lg)';

    if (this.modalBody) {
      this.modalBody.style.opacity = '0';
      this.modalBody.style.transition = 'none';
    }

    this.originCard.style.opacity = '0.2';
    this.originCard.style.transition = 'opacity 0.2s ease';

    // Force browser reflow
    void this.modalContainer.offsetHeight;

    this.modalContainer.style.willChange = 'transform, border-radius';
    requestAnimationFrame(() => {
      this.modalEl.style.transition = 'opacity 0.42s ease';
      this.modalEl.style.opacity = '1';

      this.modalContainer.style.transition = 'transform 0.48s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.48s ease';
      this.modalContainer.style.transform = 'translate3d(0, 0, 0) scale(1, 1)';
      this.modalContainer.style.borderRadius = 'var(--radius-xl)';

      if (this.modalBody) {
        this.modalBody.style.transition = 'opacity 0.3s ease';
        this.modalBody.style.opacity = '1';
      }

      setTimeout(() => {
        // Clear transform to remove GPU raster bitmap texture and restore native vector text crispness
        this.modalContainer.style.transform = '';
        this.modalContainer.style.transition = '';
        this.modalContainer.style.willChange = '';
        this.isAnimating = false;
        if (this.modalCloseBtn) this.modalCloseBtn.focus();
      }, 490);
    });
  }

  closeArticle() {
    if (this.isAnimating || !this.modalEl || !this.modalEl.classList.contains('active')) return;

    window.removeEventListener('keydown', this.boundTrapFocus);
    this.modalEl.setAttribute('aria-hidden', 'true');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!this.originCard || prefersReducedMotion || !document.body.contains(this.originCard)) {
      this.modalEl.classList.remove('active');
      this.modalEl.style.opacity = '';
      this.modalContainer.style.transform = '';
      this.modalContainer.style.willChange = '';
      document.body.style.overflow = '';
      setTiltEnabled(true);
      if (this.triggerElement) this.triggerElement.focus();
      return;
    }

    // FLIP Organic Collapse
    this.isAnimating = true;
    this.modalContainer.style.willChange = 'transform, border-radius';

    const firstRect = this.modalContainer.getBoundingClientRect();
    const targetRect = this.originCard.getBoundingClientRect();

    const scaleX = Math.max(targetRect.width / firstRect.width, 0.1);
    const scaleY = Math.max(targetRect.height / firstRect.height, 0.1);
    const deltaX = (targetRect.left + targetRect.width / 2) - (firstRect.left + firstRect.width / 2);
    const deltaY = (targetRect.top + targetRect.height / 2) - (firstRect.top + firstRect.height / 2);

    // Reveal the origin card underneath as the modal collapses back into it,
    // avoiding the late "pop-in" that broke the motion continuity.
    if (this.originCard) {
      this.originCard.style.opacity = '1';
      this.originCard.style.transition = 'opacity 0.3s ease';
    }

    if (this.modalBody) {
      this.modalBody.style.transition = 'opacity 0.18s ease';
      this.modalBody.style.opacity = '0';
    }

    this.modalEl.style.transition = 'opacity 0.38s cubic-bezier(0.4, 0, 0.2, 1)';
    this.modalEl.style.opacity = '0';

    this.modalContainer.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-radius 0.4s ease';
    this.modalContainer.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0) scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)})`;
    this.modalContainer.style.borderRadius = 'var(--radius-lg)';

    setTimeout(() => {
      this.modalEl.classList.remove('active');
      this.modalEl.style.opacity = '';
      this.modalEl.style.transition = '';

      this.modalContainer.style.transform = '';
      this.modalContainer.style.transition = '';
      this.modalContainer.style.borderRadius = '';
      this.modalContainer.style.willChange = '';

      if (this.modalBody) {
        this.modalBody.style.opacity = '';
        this.modalBody.style.transition = '';
      }

      document.body.style.overflow = '';
      setTiltEnabled(true);
      this.originCard = null;
      this.isAnimating = false;

      if (this.triggerElement) {
        this.triggerElement.focus();
        this.triggerElement = null;
      }
    }, 400);
  }
}

export const articleCarousel = new ArticleCarouselManager();

