# Unipäiväkirja

Tiimi: Marja, Pekka, Hanna, Santtu

## Johdanto

Projektin tarkoituksena on toteuttaa ja julkaista verkkopohjainen unipäiväkirjasovellus. Käyttäjä on kuka tahansa, joka haluaa seurata ja selvittää omaa unirytmiään ja siihen vaikuttaneita ulkoisia asioita. Käyttäjä syöttää sovellukseen nukahtamis- ja heräämisajat sekä muita mahdollisia huomioita edellisestä unijaksosta. Käyttäjä saa palvelusta tiedon edellisistä uniajoistaan vertailua ja johtopäätöksiä varten. Projektin päättyessä valmiina on visuaalisesti miellyttävä ja teknisesti toimiva sovellusratkaisu.

Palvelutoteutaan Java Springboot kehystä käyttäen ja thymeleaf template engineä hyödyntäen. Tietokantajärejstelmänä toimii MariaDB. Sovelluksesta tehdään responsiivinen eli se toimii luontevasti kaikilla päätelaitteilla.

## Järjestelmän määrittely

Peruskäyttäjä on henkilö, joka palveluun kirjautumalla pystyy lisäämään, muokkaamaan, tarkastelemaan ja poistamaan omia tietojaan.

Tarkastelija on henkilö, joka palveluun kirjautumalla pystyy tarkastelemaan palveluun syötettyjä tietoja haluamansa peruskäyttäjän osalta. Tarkastelija voi olla esimerkiksi lääkäri tai terapiaryhmän vetäjä.

Järjestelmän toiminnot (peruskäyttäjä)
- palveluun rekisteröityminen
- sisäänkirjautuminen
- tietojen syöttäminen: nukahtamisaika, heräämisaika, unenlaadun arviointi, uneen vaikuttaneet ulkopuoliset seikat.
- tietojen tarkastelu eri aikaväleillä
- tietojen muokaaminen
- tietojen poistaminen
- uloskirjautuminen

Järjestelmän toiminnot (tarkastelija)
- palveluun rekisteröityminen
- sisäänkirjautuminen
- tarkasteltavan henkilön valinta
- tietojen tarkastelu eri aikaväleillä
- uloskirjautuminen


## Käyttöliittymä

Käyttöliittymän tärkeimmät (vain ne!) näkymät ja niiden väliset siirtymät esitetään
käyttöliittymäkaaviona.

Jos näkymän tarkoitus ei ole itsestään selvä, se pitää kuvata lyhyesti.

## Tietokanta

Järjestelmään säilöttävä ja siinä käsiteltävät tiedot ja niiden väliset suhteet
kuvataan käsitekaaviolla. Käsitemalliin
sisältyy myös taulujen välisten viiteyhteyksien ja avainten
määritykset. Tietokanta kuvataan käyttäen jotain kuvausmenetelmää, joko
ER-kaaviota ja UML-luokkakaaviota.

Lisäksi kukin järjestelmän tietoelementti ja sen attribuutit kuvataan
tietohakemistossa. Tietohakemisto tarkoittaa yksinkertaisesti vain jokaisen elementin (taulun) ja niiden
attribuuttien (kentät/sarakkeet) listausta ja lyhyttä kuvausta esim. tähän tyyliin:


> ### _Tilit_
> _Tilit-taulu sisältää käyttäjätilit. Käyttäjällä voi olla monta tiliä. Tili kuuluu aina vain yhdelle käyttäjälle._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Tilin id
> nimimerkki | varchar(30) |  Tilin nimimerkki
> avatar | int FK | Tilin avatar, viittaus [avatar](#Avatar)-tauluun
> kayttaja | int FK | Viittaus käyttäjään [käyttäjä](#Kayttaja)-taulussa

## Tekninen kuvaus

Teknisessä kuvauksessa esitetään järjestelmän toteutuksen suunnittelun tekniset
ratkaisut, esim.
-   Missä mikäkin järjestelmän komponentti ajetaan (tietokone, palvelinohjelma)
    ja komponenttien väliset yhteydet (vaikkapa tähän tyyliin:
    https://security.ufl.edu/it-workers/risk-assessment/creating-an-information-systemdata-flow-diagram/)
-   Palvelintoteutuksen yleiskuvaus
-   Keskeisten rajapintojen kuvaukset, esimerkit client-server -rajapinnan käytöstä (sekvenssikaaviot)
-   Toteutuksen yleiset periaatteet, esim. käyttäjän tunnistus, istunnonhallinta.

Tämän lisäksi

-   ohjelmakoodin tulee olla kommentoitua
-   luokkien, metodien ja muuttujien tulee olla kuvaavasti nimettyjä ja noudattaa
    johdonmukaisia nimeämiskäytäntöjä
-   ohjelmiston pitää olla organisoitu komponentteihin niin, että turhalta toistolta
    vältytään

## Testaus

Tässä kohdin selvitetään, miten ohjelmiston oikea toiminta varmistetaan
testaamalla projektin aikana: millaisia testauksia tehdään ja missä vaiheessa.
Testauksen tarkemmat sisällöt ja testisuoritusten tulosten raportit kirjataan
erillisiin dokumentteihin.

Tänne kirjataan myös lopuksi järjestelmän tunnetut ongelmat, joita ei ole korjattu.

## Asennustiedot

Järjestelmän asennus on syytä dokumentoida kahdesta näkökulmasta:

-   järjestelmän kehitysympäristö: miten järjestelmän kehitysympäristön saisi
    rakennettua johonkin toiseen koneeseen

-   järjestelmän asentaminen tuotantoympäristöön: miten järjestelmän saisi
    asennettua johonkin uuteen ympäristöön.

Asennusohjeesta tulisi ainakin käydä ilmi, miten käytettävä tietokanta ja
käyttäjät tulee ohjelmistoa asentaessa määritellä (käytettävä tietokanta,
käyttäjätunnus, salasana, tietokannan luonti yms.).

## Käynnistys- ja käyttöohje

Tyypillisesti tässä riittää kertoa ohjelman käynnistykseen tarvittava URL sekä
mahdolliset kirjautumiseen tarvittavat tunnukset. Jos järjestelmän
käynnistämiseen tai käyttöön liittyy joitain muita toimenpiteitä tai toimintajärjestykseen liittyviä asioita, nekin kerrotaan tässä yhteydessä.

Usko tai älä, tulet tarvitsemaan tätä itsekin, kun tauon jälkeen palaat
järjestelmän pariin !
