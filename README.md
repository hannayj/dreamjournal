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
- tarkasteluoikeuden myöntäminen
- uloskirjautuminen

Järjestelmän toiminnot (tarkastelija)
- palveluun rekisteröityminen
- sisäänkirjautuminen
- tarkasteluoikeuden pyytäminen
- tarkasteltavan henkilön valinta
- tietojen tarkastelu eri aikaväleillä
- uloskirjautuminen


## Käyttöliittymä

Käyttöliittymäkaavio, peruskäyttäjä
![peruskäyttäjä](https://raw.githubusercontent.com/hannayj/sleepdiary/master/images/kayttoliittymakaavio_peruskayttaja.png)

Käyttöliittymäkaavio, tarkastelija
![tarkastelija](https://raw.githubusercontent.com/hannayj/sleepdiary/master/images/kayttoliittymakaavio_tarkastelija.png)

## Tietokanta

> ### KAYTTAJAT
> _Kayttajat-taulu sisältää käyttäjätilit._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Käyttäjän id
> nimi | varchar(50) |  Tilin nimimerkki
> salasana | varchar(50) | Tilin salasana
> kayttajataso | int FK | Viittaus käyttäjätasoon [Kayttajataso](#KAYTTAJATASOT)-taulussa

> ### KAYTTAJATASOT
> _Kayttajatasot-taulu sisältää käyttäjien käyttäjätasot._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Kayttajatason id
> kayttajataso | varchar(10) |  Käyttäjätason arvo: "peruskayttaja" tai "tarkastelija"

> ### LUVAT
> _Luvat-taulu sisältää luvat käyttäjän tietojen takasteluun. Lupa viittaa yhteen käyttäjään ja sillä on yksi tarkastelija._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Tilin id
> kayttaja | int FK | Viittaus käyttäjään [Kayttaja](#KAYTTAJAT)-taulussa, jonka tietoja voidaan tarkastella
> tarkastelija | int FK | Viittaus käyttäjään [Kayttaja](#KAYTTAJAT)-taulussa, jolla on lupa tarkastella tietojanka tietoja tarkastellaan

> ### UNIJAKSOT
> _Unijaksot-taulu sisältää käyttäjien unijaksot. Käyttäjällä voi olla monta unijaksoa ja unijakso kuuluu aina vain yhdelle käyttäjälle._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Unijakson id
> alkuaika | DateTime
> loppuaika | DateTime
> kayttaja | int FK | Viittaus käyttäjään [Kayttaja](#KAYTTAJAT)-taulussa
> unenlaatu | int FK | Viittaus unenlaatuun [Unenlaatu](#UNENLAADUT)-taulussa

> ### UNENLAADUT
> _Unenlaadut-taulu sisältää unijaksojen unenlaadut._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Unenlaadun id
> unenlaatu | varchar(10) | Unenlaadun arvo voi olla 1, 2, 3, 4, tai 5

> ### KOMMENTIT
> _Kommentit-taulu sisältää unijaksoon liittyvät kommentit. Kommentilla on yksi kirjoittaja ja se liittyy yhteen unijaksoon._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Kommentin id
> kommentti | varchar(200)
> aika | DateTime
> kayttaja | int FK | Viittaus käyttäjään [Kayttaja](#KAYTTAJAT)-taulussa
> unijakso | int FK | Viittaus unijaksoon [Unijakso](#UNIJAKSOT)-taulussa

## Tekninen kuvaus, jonka tietoja voidaan tarkastella

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

![logo](https://raw.githubusercontent.com/hannayj/sleepdiary/master/images/logo_dark.png)
