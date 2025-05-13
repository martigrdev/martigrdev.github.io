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
    'barcelones': [
        {
            id: 'barcelona-sXVIII',
            nom: 'Barcelona del segle XVIII',
            descripcio: `<p>
  Descobreix com la construcció de la Ciutadella borbònica va transformar radicalment la ciutat de Barcelona després del 1714. Aquesta reconstrucció 3D mostra la ciutat l’any 1728, sota control militar i en plena reconstrucció social i urbana.
</p>
`,
            article: `<article>
                      <h2>Barcelona 1728: La ciutat sota l'ombra de la Ciutadella</h2>

                      <p>
                        La Barcelona que reconstruïm en aquesta recreació 3D ens transporta a l'any 1728, en un moment de profunda
                        transformació i sotmetiment per part de la monarquia borbònica. La guerra de Successió Espanyola (1701–1714)
                        va marcar un abans i un després en la història de la ciutat, culminant en la seva caiguda el 1714 després d'un
                        llarg setge. Com a símbol de la nova autoritat borbònica i eina de control militar, l'exèrcit comandat per Felip V
                        va començar immediatament la construcció de la Ciutadella, una imponent fortificació militar dissenyada per
                        dominar Barcelona tant física com simbòlicament.
                      </p>

                      <h2>La Ciutadella: Una ciutat assetjada des de dins</h2>
                      <p>
                        La Ciutadella, acabada l'any 1728, no era només una fortalesa. Era una eina de repressió política i social.
                        La seva construcció va implicar la destrucció d'una bona part del barri de la Ribera, una de les zones més
                        dinàmiques i comercials de la Barcelona d'aquell moment. Milers d’habitants foren expulsats de casa seva
                        sense compensació i molts edificis van ser enderrocats per fer espai a la nova fortalesa.
                      </p>
                      <p>
                        La presència de la Ciutadella recordava diàriament als barcelonins que vivien sota vigilància militar. La seva
                        orientació estratègica, amb els canons apuntant cap a la ciutat i no només cap a possibles enemics exteriors,
                        feia evident que el principal objectiu era mantenir la població sota control.
                      </p>

                      <h2>Transformacions urbanes i socials</h2>
                      <p>
                        La construcció de la Ciutadella va significar un canvi radical en l'estructura urbana de Barcelona. L'espai
                        ocupat per la nova fortalesa trencava la continuïtat de la ciutat i alterava rutes comercials i de comunicació
                        tradicionals. Molts gremis i negocis de la Ribera van patir una davallada dramàtica, mentre que el sentiment
                        d'identitat catalana es veia profundament ferit.
                      </p>
                      <p>
                        A nivell social, es va produir una militarització de la vida quotidiana. La ciutat va haver d’adaptar-se a la
                        presència constant de soldats, controls de moviments, tocs de queda i imposicions de nous impostos per
                        finançar la guarnició. Aquest ambient d’opressió va alimentar un ressentiment latent que es transmetria de
                        generació en generació.
                      </p>

                      <h2>Barcelona en 1728: Una ciutat de contrastos</h2>
                      <p>
                        Tot i l’opressió, la Barcelona de 1728 també va ser una ciutat de resistència cultural. La llengua catalana
                        continuava sent usada àmpliament en l’àmbit privat i religiós, tot i la imposició del castellà en
                        l'administració i l'ensenyament. A més, el comerç i les activitats portuàries, tot i els danys inicials,
                        començaven a recuperar-se tímidament, assenyalant la resiliència d’una societat que es negava a desaparèixer.
                      </p>
                      <p>
                        La reconstrucció 3D d’aquesta Barcelona ens permet entendre visualment la magnitud d’aquestes
                        transformacions. Veure la ciutat amb la imponent Ciutadella ocupant un espai central ajuda a comprendre
                        l’impacte psicològic i material que va suposar per als seus habitants.
                      </p>

                      <h2>Per saber-ne més</h2>
                      <ul>
                        <li>
                          <a href="https://www.barcelona.cat/museuhistoria/ca/patrimonis/els-espais-del-museu/el-born" target="_blank">
                            La ciutat del Born: vida quotidiana i destrucció a la Barcelona del 1700 – MUHBA
                          </a>
                        </li>
                        <li>
                          <em>La Ciutadella de Barcelona (1715–1868): història d'una fortalesa borbònica</em> – Xavier Hernàndez i Francesc Riart
                        </li>
                        <li>
                          <em>Barcelona 1714</em> – Patricia Gabancho
                        </li>
                        <li>
                          <em>Catalunya contra Espanya</em> – Joaquim Albareda
                        </li>
                        <li>
                          <a href="https://www.barcelona.cat/museuhistoria/ca/patrimonis/els-espais-del-museu/el-born" target="_blank">
                            Espai Born CCM – Visita virtual i recursos
                          </a>
                        </li>
                      </ul>
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
                    <h2>La Ciutadella: Una ciutat en guerra</h2>

                    <p>
                      La Ciutadella, una fortificació militar que va durar més de 100 anys, representa una figura central en la
                      història de la ciutat de Barcelona. Aquesta construcció 3D mostra la ciutat de Barcelona sota el control
                      militar i la seva importància política.
                    </p>

                    <h2>La construcció de la Ciutadella</h2>
                    <p>
                      La Ciutadella va ser construïda per la monarquia borbònica en el segle XVIII, un temps quan la ciutat estava  
                      en una fase de transformació social i política. La guerra de Successió Espanyola (1701–1714) va marcar un
                      abans i un després en la història de la ciutat, culminant en la seva caiguda el 1714 després d'un llarg setge.
                    </p>
                    <p>
                      La Ciutadella va ser un símbol de la nova autoritat borbònica i eina de control militar. El comandat per Felip V
                      va començar immediatament la construcció de la Ciutadella, una imponent fortificació militar dissenyada per
                      dominar Barcelona tant física com simbòlicament.
                    </p>

                    <h2>La transformació de la ciutat</h2>
                    <p>
                      La Ciutadella va durar més de 100 anys, representant una transformació significativa en la ciutat de Barcelona.
                      La seva construcció va implicar la destrucció d'una bona part del barri de la Ribera, una de les zones més dinàmiques
                      i comercials de la ciutat. Milers d’habitants foren expulsats de casa seva sense compensació i molts edificis van
                      ser enderrocats per fer espai a la nova fortalesa.
                    </p>
                    <p>
                      La Ciutadella també va representar una transformació social i cultural. La seva construcció va fer que la ciutat
                      assumís un nou sentit de identitat i de pertenència. La ciutat va haver d’adaptar-se a la presència constant de soldats,
                      controls de moviments, tocs de queda i imposicions de nous impostos per finançar la guarnició.
                    </p>

                    <h2>La Ciutadella en el temps</h2>
                    <p>
                      La Ciutadella va durar més de 100 anys, representant una transformació significativa en la ciutat de Barcelona.
                      La seva construcció va implicar la destrucció d'una bona part del barri de la Ribera, una de les zones més dinàmiques i comercials de la ciutat. Milers d’habitants foren expulsats de casa seva sense compensació i molts edificis van
                      ser enderrocats per fer espai a la nova fortalesa.
                    </p>
                    <p>
                      La Ciutadella també va representar una transformació social i cultural. La seva construcció va fer que la ciutat
                      assumís un nou sentit de identitat i de pertenència. La ciutat va haver d’adaptar-se a la presència constant de soldats,
                      controls de moviments, tocs de queda i imposicions de nous impostos per finançar la guarnició.
                    </p>

                    <h2>Per saber-ne més</h2>
                    <ul>
                      <li>
                        <a href="
                        <a href="URL_ADDRESS.barcelona.cat/museuhistoria/ca/patrimonis/els-espais-del-museu/el-born" target="_blank">
                          La ciutat del Born: vida quotidiana i destrucció a la Barcelona del 1700 – MUHBA
                        </a>
                      </li>
                      <li>
                        <em>La Ciutadella de Barcelona (1715–1868): història d'una fortalesa borbònica</em> – Xavier Hernàndez i Francesc Riart
                      </li>
                      <li>
                        <em>Barcelona 1714</em> – Patricia Gabancho
                      </li>
                      <li>
                        <em>Catalunya contra Espanya</em> – Joaquim Albareda
                      </li>
                      <li>
                        <a href="
                        <em>Catalunya contra Espanya</em> – Joaquim Albareda
                      </li>

                        <a href="URL_ADDRESS.barcelona.cat/museuhistoria/ca/patrimonis/els-espais-del-museu/el-born" target="_blank">
                          Espai Born CCM – Visita virtual i recursos
                        </a>
                      </li>
                    </ul>
                  </article>
                  `,
                    sketchfabId: '<div class="visor"><iframe class="responsive-iframe" title="Barcelona XVIII" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/151200d839e146f89d1de8b9176d745e/embed?dnt=1"></iframe></div>',
                    imatge: '/media/img/monuments/Image1.png',
                    comarca: 'barcelones'
        },
        {
          id: '1',
          nom: '1',
          descripcio: 'Monument 1',
          article: 'Monument 1',
          sketchfabId: '1',
          imatge: '1',
          comarca: 'barcelones'
        },
        {
          id: '2',
          nom: '2',
          descripcio: 'Monument 2',
          article: 'Monument 2',
          sketchfabId: '2',
          imatge: '2',
          comarca: 'barcelones'
        },
        {
          id: '3',
          nom: '3',
          descripcio: 'Monument 3',
          article: 'Monument 3',
          sketchfabId: '3',
          imatge: '3',
          comarca: 'barcelones'
        },
        {
          id: '4',
          nom: '4',
          descripcio: 'Monument 4',
          article: 'Monument 4',
          sketchfabId: '4',
          imatge: '4',
          comarca: 'barcelones'
        },


    ],
    'girones': [
        
    ]
};