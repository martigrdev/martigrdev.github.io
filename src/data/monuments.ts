interface Monument {
    id: string;
    nom: string;
    descripcio: string;
    epoca: string;
    article: string;
    sketchfabId?: string;
    imatge?: string;
    comarca: string;
}

interface ComarcaMonuments {
    [comarca: string]: Monument[];
}

/* 

    id: '',
    nom: '',
    descripcio: ``,
    epoca: '',
    article: ``,
    sketchfabId: '',
    imatge: '',
    comarca: ''

    ---------------------------------------------

    article:

    <article class="container-article-monument">
    <div class="article-historia">
        <h2>Història</h2>    
    </div>
    <div class="article-galeria">
        <h2>Galeria</h2>
        <div class="article-galeria-img"><img src="" alt=""></div>
    </div>
    <div class="article-video">
        <h2>Vídeo</h2>
        <div class="video-wrapper">
        </div>
    </div>
    <div class="article-saber-mes">
        <h2>Per Saber-ne Més</h2>
          <p>
          </p>
          <ul>
            <li><a href="" target="_blank"></a></li>
          </ul>
    </div>
    </article>

*/

export const monuments: ComarcaMonuments = {
    'alta-ribagorça': [

    ],
    'alt-camp': [

    ],
    'alt-emporda': [

    ],
    'alt-urgell': [

    ],
    'alt-penedes': [

    ],
    'anoia': [

    ],
    'bages': [
      {
        id: 'forti-maurici',
        nom: 'Fortí de Sant Maurici',
        descripcio: `
                    `,
        epoca: 'Segle XIX',
        article: `<article class="container-article-monument">
                      <div class="article-historia">
                        <h2>Història</h2>
                        <p>
                          El Fortí de Sant Maurici, també conegut com el Castellot del Serrat del Maurici, és una construcció militar del segle XIX situada a Balsareny, al cim del serrat del qual pren el nom. Va ser edificat l'any 1838, en plena Primera Guerra Carlina, per una força de sapadors i una brigada de muls. Malgrat ser considerat un dels millors exemples d'arquitectura militar de l'època, mai no es va arribar a completar del tot.
                        </p>
                        <p>
                          El fortí tenia una planta gairebé quadrada i comptava amb tres torres circulars als vèrtexs, excepte al cantó de llevant. Es va construir amb grans blocs de pedra que en destacaven la solidesa i funció defensiva. Al voltant hi havia un fossat i espitlleres per a la defensa, tot i que actualment es troba en estat ruïnós.
                        </p>
                        <p>
                          Irònicament, tot i que va ser construït per defensar-se dels carlins, durant la primera carlinada va ser ocupat pel Comte d'Espanya, un comandant carlí. Aquest hi va instal·lar artilleria i des d'allà va bombardejar les cases del poble de Balsareny fins que arribaren les tropes liberals, que van posar fi al setge. A finals del segle XIX, el fortí ja es trobava en ruïnes.
                        </p>
                        <p>
                          Juntament amb el fortí de la Torreta, situat sota el castell de Balsareny, formava part d'un sistema de control del camí ral de Berga, una via estratègica molt transitada. Avui dia, tot i el seu estat, continua essent un vestigi significatiu del patrimoni militar català del segle XIX.
                        </p>
                      </div>
                      <div class="article-galeria">
                        <h2>Galeria</h2>
                        <div class="article-galeria-img">
                          <img src="/media/img/monuments/balsareny-img/maurici-1.png" alt="Vista de les ruïnes del Fortí de Sant Maurici, a Balsareny">
                        </div>
                      </div>
                      <div class="article-video">
                        <h2>Vídeo</h2>
                        <div class="video-wrapper">
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/XXX" title="Fortí de Sant Maurici - Balsareny" frameborder="0" allowfullscreen></iframe>
                        </div>
                      </div>
                      <div class="article-saber-mes">
                        <h2>Per Saber-ne Més</h2>
                        <p>
                          Si vols aprofundir en la història del Fortí de Sant Maurici i el seu paper en el context de les guerres carlines, pots consultar:
                        </p>
                        <ul>
                          <li><a href="https://ca.wikipedia.org/wiki/Fort%C3%AD_de_Sant_Maurici" target="_blank">Viquipèdia: Fortí de Sant Maurici</a></li>
                          <li><a href="https://patrimoni.gencat.cat" target="_blank">Patrimoni.gencat.cat</a></li>
                          <li><a href="https://balsareny.cat" target="_blank">Ajuntament de Balsareny</a></li>
                        </ul>
                      </div>
                    </article>`,
        sketchfabId: '<div class="visor"><iframe class="responsive-iframe" title="Fortí de Sant Maurici" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0f491a0aeca048dd944fc3826caa0a9d/embed"> </iframe></div>',
        imatge: '/media/img/monuments/balsareny-img/maurici-1.png',
        comarca: 'bages'
      }
    ],
    'baix-camp': [

    ],
    'baix-ebre': [

    ],
    'baix-emporda': [
      {
        id: 'palamos-xvii',
        nom: 'Ciutadella i Plaça Fortificada de Palamós',
        descripcio: ``,
        epoca: 'Segle XVII',
        article: `<article class="container-article-monument">
                    <div class="article-historia">
                      <h2>Història</h2>
                      <p>
                        A partir del segle XVI, Palamós va esdevenir una plaça forta de gran importància estratègica gràcies a la seva situació costanera i el port. Per protegir-se dels atacs francesos i pirates, es començaren a construir fortificacions, incloent-hi la torre de guaita de Sa Punta entre 1569 i 1594. Aquesta torre formaria part, més endavant, de la ciutadella de Sa Punta.
                      </p>
                      <p>
                        La construcció de la ciutadella començà a la primera meitat del segle XVII i incloïa dins seu el convent dels agustins. Amb un disseny murat en forma d'estrella, pensat per resistir l'artilleria moderna, es va aixecar sobre un promontori que avui ha desaparegut per les obres del port. A finals de segle, la ciutadella acollia una gran guarnició de fins a 3.000 soldats de diversos orígens: castellans, valons, napolitans, alemanys, austríacs i francesos.
                      </p>
                      <p>
                        L'esdeveniment més destacat va ser el setge de 1694, durant la invasió francesa. Les tropes del mariscal Noailles encerclaren Palamós i, després d'una dura resistència, la ciutat va caure el 8 de juny. Els defensors es replegaren a la ciutadella, que fou intensament bombardejada fins a la seva capitulació el 10 de juny. Posteriorment, la vila romangué sota domini francès durant quatre anys.
                      </p>
                      <p>
                        El 1698, després de la pau de Ryswick, les tropes franceses es retiraren però, abans de marxar, destruïren completament les fortificacions per evitar que poguessin ser reutilitzades. La ciutadella, el convent i les defenses militars foren dinamitats i no en restà cap mur dret. Avui, aquest imponent conjunt fortificat ha desaparegut, però el seu record es manté com a testimoni d'un passat militar intens.
                      </p>
                    </div>
                    <div class="article-galeria">
                      <h2>Galeria</h2>
                      <div class="article-galeria-img"><img src="/media/img/monuments/palamos-img/palamos-1.png" alt="Gravat antic de la Ciutadella de Palamós"></div>
                    </div>
                    <div class="article-video">
                      <h2>Vídeo</h2>
                      <div class="video-wrapper">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/XXX" title="Vídeo Ciutadella de Palamós" frameborder="0" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div class="article-saber-mes">
                      <h2>Per Saber-ne Més</h2>
                      <p>
                        Per aprofundir en la història de la Ciutadella de Palamós, el seu paper en les guerres que han assolat Catalunya i la seva desaparició, podeu consultar els següents enllaços.
                      </p>
                      <ul>
                        <li><a href="https://castellsifortificacions.cat/castell/ciutadella-de-palamos-i-fort-de-sant-agusti-o-sa-punta/" target="_blank">Ciutadella de Palamós a Castells i Fortificacions</a></li>
                        <li><a href="https://www.serveiarxiumunicipalpalamos.cat/wordpress/wp-content/uploads/difusio/activitats/ELS%20ESPAIS%20DE%201714_PALAMOS_DEFINITIU_BR.pdf" target="_blank">Espais 1714 a Palamós - Arxiu Municipal de Pallamós</a></li>
                        <li><a href="https://www.enciclopedia.cat/gran-enciclopedia-catalana/palamos-0" target="_blank">Història de Palamós - Enciclopèdia Catalana</a></li>
                      </ul>
                    </div>
                  </article>
                  `,
        sketchfabId: '<div class="visor"><iframe class="responsive-iframe" title="La Ciutadella i Plaça Fortificada de Palamós" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/fb320f6687444b02a27e43d5dbacd538/embed"> </iframe></div>',
        imatge: '/media/img/monuments/palamos-img/palamos-1.png',
        comarca: 'baix-emporda'
      }
    ],
    'baix-llobregat': [

    ],
    'baix-penedes': [
      {
        id: 'ciutadella-iberica-calafell',
        nom: 'Ciutadella Ibèrica de Calafell',
        descripcio: ``,
        epoca: 'Segles V-I AC',
        article: `
        <article>
          <div class="article-historia">
            <h2>Història</h2>
            <p>
                La Ciutadella Ibèrica de Calafell és un dels jaciments arqueològics més destacats de la cultura ibèrica a Catalunya, concretament del poble dels cossetans, que ocupava el litoral central català entre els segles VI i I abans de la nostra era.
              </p>
              <p>
                Situada estratègicament a pocs metres del mar, aquesta ciutadella complia una funció tant defensiva com comercial. Des d'aquest emplaçament, els ibers controlaven les rutes marítimes i terrestres que connectaven el sud de la península amb el nord, establint vincles comercials amb altres pobles mediterranis com els fenicis, els grecs i, més endavant, els romans. S'han trobat evidències d'intercanvis comercials en forma de ceràmiques, àmfores i objectes de metall provinents d'altres cultures.
              </p>
              <p>
                El poblat estava protegit per una potent muralla i un fossat, i al seu interior es distribuïen cases adossades, carrers estrets i espais de treball. Les excavacions han permès conèixer com era l'estructura d'aquests habitatges: cases de planta rectangular, amb un sol espai o dividides en estances, construïdes amb pedra, fusta i tova. A l'interior s'hi han trobat forns, molins de mà, atuells ceràmics i restes d'aliments, cosa que ha permès als arqueòlegs reconstruir els costums quotidians dels seus habitants.
              </p>
              <p>
                El projecte de reconstrucció experimental, pioner a Europa, va començar als anys 1990. Amb criteris arqueològics rigorosos, s'han reconstruït a escala real diversos dels edificis descoberts, utilitzant tècniques i materials originals. Aquest plantejament té un gran valor pedagògic, ja que permet al visitant immersar-se en la vida quotidiana dels ibers com si viatgés en el temps.
              </p>
              <p>
                La ciutadella esdevé així no només un jaciment arqueològic, sinó també un espai viu de divulgació històrica. A més, durant l'any s'hi organitzen tallers, visites guiades, jornades de reconstrucció històrica i activitats per a escoles, fet que la converteix en un referent en arqueologia educativa i experimental.
              </p>
        </div>
        <div class="article-galeria">
            <h2>Galeria</h2>
            <div class="article-galeria-img"><img src="/media/img/monuments/calafell-img/calafell-1.png" alt="Vista general del recinte"></div>
        </div>
        <div class="article-video">
            <h2>Vídeo</h2>
            <div class="video-wrapper">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/XXXX" title="Vídeo Ciutadella Ibèrica de Calafell" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="article-saber-mes">
            <h2>Per Saber-ne Més</h2>
            <p>
                Si vols aprofundir en la història i les característiques de la Ciutadella Ibèrica de Calafell, aquí tens alguns recursos útils per explorar més informació, articles i materials oficials.
              </p>
              <ul>
                <li><a href="https://patrimoni.gencat.cat/ca/monuments/ciutadella-iberica-de-calafell" target="_blank">Ciutadella Ibèrica - patrimoni.gencat.cat</a></li>
                <li><a href="https://www.calafellhistoric.org" target="_blank">Calafell Històric - Web oficial</a></li>
                <li><a href="https://ca.wikipedia.org/wiki/Ciutadella_ibèrica_de_Calafell" target="_blank">Viquipèdia: Ciutadella Ibèrica de Calafell</a></li>
              </ul>
        </div>
        </article>
        `,
        sketchfabId: '<div class="visor"><iframe class="responsive-iframe" title="Ciutadella Ibèrica de Calafell" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/44ec8a76a1154a17921531569d347dbd/embed"> </iframe></div>',
        imatge: '/media/img/monuments/calafell-img/calafell-1.png',
        comarca: 'baix-penedes'
      }
    ],
    'barcelones': [
      {
        id: 'ciutadella-barcelona',
        nom: 'La Ciutadella Borbònica de Barcelona',
        descripcio: ``,
        epoca: 'Segles XVIII-XIX',
        article: `<article class="container-article-monument">
    <div class="article-historia">
        <h2>Història</h2>
        <p>
            La Ciutadella de Barcelona va ser una fortalesa militar construïda per ordre del rei Felip V després de la derrota de la ciutat durant la Guerra de Successió el 1714. La seva construcció, iniciada el 1716, va ser una de les conseqüències més simbòliques i visibles de la Nova Planta, un conjunt de decrets amb què la monarquia borbònica eliminava les institucions catalanes i reforçava el control absolutista sobre el territori.
          </p>
          <p>
            La ciutadella va ser dissenyada com una estructura de control i intimidació sobre la població barcelonina. A diferència d'altres fortificacions que protegien les ciutats dels enemics externs, aquesta servia per controlar els mateixos ciutadans. De fet, per a la seva construcció es van enderrocar més de 1.200 habitatges del barri de la Ribera, desplaçant una part significativa de la població. Aquest desmantellament d'un barri sencer va deixar una empremta social profunda i encara recordada.
          </p>
          <p>
            L'edifici tenia forma d'estrella de cinc puntes, envoltat de fossats, baluards i espais defensius. A dins hi havia casernes, polvorins i espais per allotjar fins a 8.000 soldats. Des del punt de vista militar, la ciutadella representava una de les fortaleses més grans d'Europa del seu temps. Però per als barcelonins, esdevingué sobretot un símbol d'ocupació, repressió i control polític.
          </p>
          <p>
            Al llarg del segle XIX, amb l'auge dels moviments liberals i la fi de l'absolutisme, la ciutadella va perdre importància militar. L'any 1869, després de la Revolució Gloriosa i la caiguda d'Isabel II, el general Prim va ordenar la seva demolició com a gest simbòlic de reconciliació amb la ciutat. En el seu lloc, s'hi va projectar un parc públic, que acabaria esdevenint el Parc de la Ciutadella que coneixem avui dia.
          </p>
          <p>
            L'actual parc conserva algunes restes de la fortalesa original, com l'antic arsenal, que avui és la seu del Parlament de Catalunya. Aquest fet dóna al lloc un significat històric molt potent: un espai que va ser símbol d'opressió ha estat transformat en centre de representació democràtica i convivència ciutadana.
          </p>
    </div>
    <div class="article-galeria">
        <h2>Galeria</h2>
        <div class="article-galeria-img"><img src="/media/img/monuments/barcelona-img/Image1.png" alt="Vista general del recinte"></div>
    </div>
    <div class="article-video">
        <h2>Vídeo</h2>
        <div class="video-wrapper">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/XXXXX" title="Vídeo Ciutadella Borbònica de Barcelona" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
    <div class="article-saber-mes">
        <h2>Per Saber-ne Més</h2>
        <p>
            Per conèixer més a fons la història de la Ciutadella de Barcelona, el seu paper com a instrument de control militar i polític, així com la seva transformació en parc i seu del Parlament, et recomanem els següents recursos.
          </p>
          <ul>
            <li><a href="https://www.memorial1714.cat/la-ciutadella-de-barcelona/" target="_blank">Memorial 1714</a></li>
            <li><a href="https://www.parlament.cat/pcat/parlament/historia-del-palau/" target="_blank">Història del Parlament de Catalunya</a></li>
            <li><a href="https://ca.wikipedia.org/wiki/Ciutadella_de_Barcelona" target="_blank">Viquipèdia: Ciutadella de Barcelona</a></li>
            <li><a href="https://www.barcelona.cat/ca/que-pots-fer-a-bcn/parcs-i-jardins/parc-de-la-ciutadella-92086011921" target="_blank">Parc de la Ciutadella</a></li>
          </ul>
    </div>
    </article>
                `,
        sketchfabId: '<div class="visor"><iframe class="responsive-iframe" title="Barcelona XVIII" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/151200d839e146f89d1de8b9176d745e/embed?dnt=1"></iframe></div>',
        imatge: '/media/img/monuments/barcelona-img/Image1.png',
        comarca: 'barcelones'
    }
    ],
    'bergueda': [

    ],
    'cerdanya': [

    ],
    'conca-barbera': [

    ],
    'garraf': [

    ],
    'garrigues': [

    ],
    'garrotxa': [

    ],
    'girones': [

    ],
    'maresme': [

    ],
    'moianes': [

    ],
    'montsia': [

    ],
    'noguera': [

    ],
    'osona': [

    ],
    'pallars-jussa': [

    ],
    'pallars-sobira': [

    ],
    'pla-estany': [

    ],
    'pla-urgell': [

    ],
    'priorat': [

    ],
    'ribera-ebre': [

    ],
    'ripolles': [

    ],
    'segarra': [

    ],
    'segria': [

    ],
    'selva': [
      {
      id: 'castell-farners',
      nom: 'Castell de Farners',
      descripcio: ``,
      epoca: 'Segle XI',
      article: `<article class="container-article-monument">
                  <div class="article-historia">
                    <h2>Història</h2>
                    <p>
                      Enmig de les Guilleries, sobre un turó estratègic, s'alça el castell de Santa Coloma de Farners, una construcció romànica del segle XI documentada per primer cop l'any 1046, quan el vescomte Ramon Folc I de Cardona jurà fidelitat al comte Ramon Berenguer I. 
                    </p>
                    <p>
                      El castell fou un feu del vescomtat de Cardona, i la seva castlania fou exercida inicialment per la família Farners. Al segle XIII passà als Vilademany, que en mantingueren la possessió tot i les tensions amb la corona. A finals del segle XIII, el rei Pere el Gran reclamava la sobirania del castell, enfrontant-se amb el vescomte de Cardona, fet que derivà en un llarg conflicte jurisdiccional que s'allargà fins al segle XIV.
                    </p>
                    <p>
                      Durant la guerra civil catalana, el 1485, el castell fou ocupat pels remences en la seva revolta contra Joan II. Tot i la Sentència Arbitral de Guadalupe, els pagesos condemnats en tornaren a prendre el control poc després. Més endavant, el castell passà successivament per mans dels Vilademany, dels comtes d'Aranda i del duc d'Híjar. El seu darrer ús militar data del segle XVIII, quan fou ocupat breument per una guarnició borbònica després de la Guerra de Successió.
                    </p>
                    <p>
                      Amb el temps, el castell fou abandonat i quedà en ruïnes fins que, a inicis dels anys 1990, s'hi realitzaren excavacions i tasques de restauració que en permeten avui la visita.
                    </p>
                    <p>
                      El recinte segueix el model dels castells dels segles XI i XII. Té una planta trapezial d'uns 200 m², muralles emmerletades i una torre mestra rodona de 12 metres d'alçada. Aquesta torre, amb porta d'accés a 7 metres del terra, era clau per a la defensa. El conjunt inclou una porta d'entrada protegida per espitlleres i una segona porta que comunica amb el Turó del Vent. 
                    </p>
                    <p>
                      L'accés al castell es fa des de l'ermita de la Mare de Déu de Farners, situada en una esplanada a peu del cim. L'ermita, d'origen medieval, fou reconstruïda al segle XVIII i és el punt de partida d'una ruta fàcil i molt agradable a peu o en bicicleta. Un cop al castell, el visitant pot pujar a la torre, passejar pel pas de ronda i contemplar unes vistes excepcionals de Santa Coloma, la plana de la Selva i les muntanyes de les Guilleries.
                    </p>
                  </div>

                  <div class="article-galeria">
                    <h2>Galeria</h2>
                    <div class="article-galeria-img">
                      <img src="/media/img/monuments/farners-img/Image3.png" alt="Castell de Farners al cim del turó">
                    </div>
                  </div>

                  <div class="article-video">
                    <h2>Vídeo</h2>
                    <div class="video-wrapper">
                      <iframe width="100%" height="315" src="https://www.youtube.com/embed/XXXXXXXXXXX" title="Vídeo Castell de Farners" frameborder="0" allowfullscreen></iframe>
                    </div>
                  </div>

                  <div class="article-saber-mes">
                    <h2>Per Saber-ne Més</h2>
                    <p>
                      Si vols aprofundir en la història del castell de Santa Coloma de Farners i el seu context feudal, aquí tens alguns recursos d'interès.
                    </p>
                    <ul>
                      <li><a href="https://www.enciclopedia.cat/catalunya-romanica/castell-de-farners-santa-coloma-de-farners" target="_blank">Enciclopèdia Catalana - Castell de Farners</a></li>
                      <li><a href="https://www.turismescf.cat/ca/punts-dinteres/l/1048-castell-de-farners.html" target="_blank">Turisme Santa Coloma de Farners</a></li>
                    </ul>
                  </div>
                </article>
                `,
      sketchfabId: '<div class="visor"><iframe class="responsive-iframe" title="Barcelona XVIII" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/fe9f05ab4d904bc3becb03482b4ffd4e/embed"></iframe></div>',
      imatge: '/media/img/monuments/farners-img/Image5.png',
      comarca: 'selva'
              }
    ],
    'solsones': [

    ],
    'tarragones': [

    ],
    'terra-alta': [

    ],
    'urgell': [

    ],
    'aran': [

    ],
    'valles-occidental': [

    ],
    'valles-oriental': [

    ],
    'capcir': [

    ],
    'vallespir': [

    ],
    'rossello': [

    ],
    'conflent': [

    ],
    'cerdanya-nord': [

    ]
};