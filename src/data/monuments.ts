interface Monument {
    id: string;
    nom: string;
    descripcio: string; // Actualitzar per permetre HTML
    article: string;
    sketchfabId?: string;
    imatge?: string;
    comarca: string;
}

interface ComarcaMonuments {
    [comarca: string]: Monument[];
}

export const monuments: ComarcaMonuments = {
    'alt-emporda': [
        
        
    ],
    'alt-penedes': [

    ],
    'baix-penedes': [
      {
        id: 'ciutadella-iberica-calafell',
        nom: 'Ciutadella Ibèrica de Calafell',
        descripcio: `<p>Endinsa't en el món dels ibers amb aquesta recreació 3D de la Ciutadella Ibèrica de Calafell. Descobreix com era el poblat cossetà entre els segles VI i I aC, amb les seves muralles, habitatges i espais de vida quotidiana. Una reconstrucció fidel que et transporta al passat per entendre com vivia una de les primeres societats organitzades de la costa catalana.</p>`,
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
            <div class="article-galeria-img"><img src="/media/img/monuments/calafell-1.png" alt="Vista general del recinte"></div>
        </div>
        <div class="article-video">
            <h2>Vídeo</h2>
            <div class="video-wrapper">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/gbtR-2CDdms?si=d0LYGDWYOGaKsxpe" title="Vídeo Ciutadella Ibèrica de Calafell" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="article-saber-mes">
            <h2>Per Saber-ne Més</h2>
            <p>
                Si vols aprofundir en la història i les característiques de la Ciutadella Ibèrica de Calafell, aquí tens alguns recursos útils per explorar més informació, articles i materials oficials.
              </p>
              <ul>
                <li><a href="https://patrimoni.gencat.cat/ca/monuments/ciutadella-iberica-de-calafell" target="_blank">Ciutadella Ibèrica – patrimoni.gencat.cat</a></li>
                <li><a href="https://www.calafellhistoric.org" target="_blank">Calafell Històric – Web oficial</a></li>
                <li><a href="https://ca.wikipedia.org/wiki/Ciutadella_ibèrica_de_Calafell" target="_blank">Viquipèdia: Ciutadella Ibèrica de Calafell</a></li>
              </ul>
        </div>
        </article>
        `,
        sketchfabId: '<div class="visor"><iframe class="responsive-iframe" title="Ciutadella Ibèrica de Calafell" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/44ec8a76a1154a17921531569d347dbd/embed"> </iframe></div>',
        imatge: '/media/img/monuments/calafell-1.png',
        comarca: 'baix-penedes'
      }
    ],
    'barcelones': [
        {
            id: 'barcelona-sXVIII',
            nom: 'Barcelona del segle XVIII',
            descripcio: `<p>
  Descobreix com la construcció de la Ciutadella borbònica va transformar radicalment la ciutat de Barcelona després del 1714. Aquesta reconstrucció 3D mostra la ciutat l’any 1728, sota control militar i en plena reconstrucció social i urbana.
</p>
`,
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
                Al llarg del segle XIX, amb l'auge dels moviments liberals i la fi de l'absolutisme, la ciutadella va perdre importància militar. L'any 1869, després de la Revolució Gloriosa i la caiguda d'Isabel II, el general Prim va ordenar la seva demolició com a gest simbòlic de reconciliació amb la ciutat. En el seu lloc, s'hi va projectar un parc públic, que acabaria esdevenint el **Parc de la Ciutadella** que coneixem avui dia.
              </p>
              <p>
                L'actual parc conserva algunes restes de la fortalesa original, com l'antic arsenal, que avui és la seu del Parlament de Catalunya. Aquest fet dóna al lloc un significat històric molt potent: un espai que va ser símbol d'opressió ha estat transformat en centre de representació democràtica i convivència ciutadana.
              </p>
        </div>
        <div class="article-galeria">
            <h2>Galeria</h2>
            <div class="article-galeria-img"><img src="/media/img/monuments/Image1.png" alt="Vista general del recinte"></div>
        </div>
        <div class="article-video">
            <h2>Vídeo</h2>
            <div class="video-wrapper">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/W1m_xQjRo5k?si=jfARe68_-e9l82Rf" title="Vídeo Ciutadella Ibèrica de Calafell" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="article-saber-mes">
            <h2>Per Saber-ne Més</h2>
            <p>
                Per conèixer més a fons la història de la Ciutadella de Barcelona, el seu paper com a instrument de control militar i polític, així com la seva transformació en parc i seu del Parlament, et recomanem els següents recursos.
              </p>
              <ul>
                <li><a href="https://www.barcelona.cat/museuhistoria/ca/la-ciutadella" target="_blank">Museu d'Història de Barcelona - La Ciutadella</a></li>
                <li><a href="https://parlament.cat/web/parlament/edifici" target="_blank">Parlament de Catalunya - L'edifici del Parlament</a></li>
                <li><a href="https://ca.wikipedia.org/wiki/Ciutadella_de_Barcelona" target="_blank">Viquipèdia: Ciutadella de Barcelona</a></li>
                <li><a href="https://ajuntament.barcelona.cat/arxiumunicipal/arxiuhistoric/ca/parc-de-la-ciutadella" target="_blank">Arxiu Històric - Parc de la Ciutadella</a></li>
              </ul>
        </div>
      </article>
                    `,
            sketchfabId: '<div class="visor"><iframe class="responsive-iframe" title="Barcelona XVIII" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/151200d839e146f89d1de8b9176d745e/embed?dnt=1"></iframe></div>',
            imatge: '/media/img/monuments/Image1.png',
            comarca: 'barcelones'
        },
        {
          id: 'ciutadella',
          nom: 'Ciutadella',
          descripcio: `<p>
            Descobreix la Ciutadella, una fortificació militar que va durar més de 100 anys. Aquesta construcció 3D mostra la ciutat
            de Barcelona sota el control militar i la seva importància política.
          </p>
          `,
          article: `<article>
                    
                  </article>
                  `,
                    sketchfabId: '<div class="visor"><iframe class="responsive-iframe" title="Barcelona XVIII" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/151200d839e146f89d1de8b9176d745e/embed?dnt=1"></iframe></div>',
                    imatge: '/media/img/monuments/Image1.png',
                    comarca: 'barcelones'
        },
        


    ],
    'girones': [
        
    ]
};